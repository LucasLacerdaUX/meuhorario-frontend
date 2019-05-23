import React, {Component} from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Timetable from '../../components/Timetable';
import TopBar from '../../components/TopBar';
import SidePanel from '../../components/SidePanel';
import CreditCounter from '../../components/CreditCounter';
import {reformatData} from '../../utils/temp';
import {classColors} from '../../utils/constants';

import './MainPage.scss';
import sampleData from './_sample.json';

const classNames = require('classnames');

export class MainPage extends Component {
  state = {
    allCourses: {},
    userCourses: {},
    conflictList: [],
    availableColors: [],
    conflictMap: {},
    currentProgram: {
      id: '1626865',
      name: 'ENGENHARIA DE COMPUTAÇÃO/CI - João Pessoa',
      faculty: 'CENTRO DE INFORMÁTICA (CI) (11.00.64)',
      minch: 240,
      maxch: 480,
      semesters: 10,
    },
    timetableConfig: {
      days: 5,
      startingHour: 7,
      endingHour: 23,
    },
    sidebarExpanded: false,
    sidepanelOpen: false,
    totalWorkload: 0,
  };

  generateConflictTable = (courseList) => {
    const {timetableConfig} = this.state;
    const conflictMap = {};

    Object.keys(courseList).forEach((courseId) => {
      const course = courseList[courseId];
      course.timeslots.forEach((time) => {
        const duration = time.endingHour - time.startingHour;
        const startsAt = time.startingHour - timetableConfig.startingHour;

        for (let i = 0; i < duration; i++) {
          const identifier = `${time.day}-${startsAt + i}`;
          conflictMap[identifier] = conflictMap[identifier] || [];
          conflictMap[identifier].push(course.id);
        }
      });
    });

    return conflictMap;
  };

  addOrRemoveClass = (courseId) => {
    const {allCourses, userCourses, conflictList, currentProgram} = this.state;

    if (conflictList.includes(courseId)) return;

    let {availableColors, totalWorkload} = this.state;

    const newUserCourses = {...userCourses};

    // Deleting from table
    if (courseId in userCourses) {
      if (!availableColors.includes(userCourses[courseId]))
        availableColors.unshift(userCourses[courseId]);

      delete newUserCourses[courseId];
      totalWorkload -= allCourses[courseId].workload;
    }

    // Adding to Table
    else {
      // TODO: ALERT THAT MAX CH HAS BEEN REACHED
      if (allCourses[courseId].workload + totalWorkload > currentProgram.maxch)
        return;
      availableColors = availableColors.length
        ? availableColors
        : [...classColors];

      newUserCourses[courseId] = availableColors.shift();
      totalWorkload += allCourses[courseId].workload;
    }

    this.setState(
      {userCourses: newUserCourses, availableColors, totalWorkload},
      () => {
        this.updateConflictList();
      },
    );
  };

  expandSidebarMobile = () => {
    this.setState((prevState) => ({
      sidebarExpanded: !prevState.sidebarExpanded,
    }));
  };

  toggleSidePanel = () => {
    this.setState((prevState) => ({
      sidepanelOpen: !prevState.sidepanelOpen,
    }));
  };

  updateConflictList() {
    const {allCourses, userCourses, conflictMap, timetableConfig} = this.state;

    let newConflictList = [];

    Object.keys(userCourses).forEach((courseId) => {
      const courseInTable = allCourses[courseId];
      courseInTable.timeslots.forEach((time) => {
        const duration = time.endingHour - time.startingHour;
        const startsAt = time.startingHour - timetableConfig.startingHour;

        for (let i = 0; i < duration; i++) {
          const identifier = `${time.day}-${startsAt + i}`;
          newConflictList = [
            ...new Set([...newConflictList, ...conflictMap[identifier]]),
          ];
        }
      });
    });

    newConflictList = newConflictList.filter(
      (value) => !(value in userCourses),
    );

    this.setState({conflictList: newConflictList});
  }

  componentDidMount() {
    const courseData = reformatData(sampleData);
    const conflictMap = this.generateConflictTable(courseData);
    this.setState({allCourses: courseData, conflictMap});
  }

  render() {
    const {
      allCourses,
      conflictList,
      timetableConfig,
      userCourses,
      sidebarExpanded,
      sidepanelOpen,
      totalWorkload,
      currentProgram,
    } = this.state;

    const timetableContent = [];
    const semesterCards = [[]];

    Object.keys(allCourses).forEach((courseId) => {
      const course = allCourses[courseId];
      if (course.id in userCourses) {
        timetableContent.push(course);
      }

      course.color = course.id in userCourses ? userCourses[course.id] : 'red';
      semesterCards[course.semester] = semesterCards[course.semester] || [];
      semesterCards[course.semester].push(
        <li key={course.id}>
          <Card
            id={course.id}
            badge={course.time}
            cardTitle={course.name}
            cardSubtitle={course.professor}
            complementaryInfo={course.type}
            pressed={course.id in userCourses}
            onClick={this.addOrRemoveClass}
            clickPayload={course.id}
            color={course.color}
            disabled={conflictList.includes(course.id)}
            clickable
          />
        </li>,
      );
    });

    const cardsToRender = [];
    semesterCards.forEach((cardList, index) => {
      const key = `semester-${index}`;
      const title = index ? `${index}º PERÍODO` : 'EXTRAS';
      cardsToRender.push(
        <Collapse id={key} key={key} title={title}>
          <ul>{cardList}</ul>
        </Collapse>,
      );
    });

    const sideBarClasses = classNames('SideBar', sidebarExpanded && 'show');

    return (
      <>
        <TopBar onProgramClick={this.toggleSidePanel} />
        <div className="MainPage">
          <h1 className="visually-hidden">Meu Horario</h1>
          <aside className={sideBarClasses}>
            <div className="SideBarButton">
              <Button fullWidth onlyText onClick={this.expandSidebarMobile}>
                Expand
              </Button>
            </div>
            {cardsToRender}
          </aside>
          <SidePanel
            icon="text"
            title="Alterar Curso"
            accessibilityLabel="Escolha um curso da lista."
            isOpen={sidepanelOpen}
            close={this.toggleSidePanel}
          >
            {cardsToRender}
          </SidePanel>
          <main className="MainTable">
            <CreditCounter
              currentHours={totalWorkload}
              minHours={currentProgram.minch}
              maxHours={currentProgram.maxch}
            />
            <Timetable
              days={timetableConfig.days}
              startingHour={timetableConfig.startingHour}
              endingHour={timetableConfig.endingHour}
              onClick={this.addOrRemoveClass}
              events={timetableContent}
            />
          </main>
        </div>
      </>
    );
  }
}

export default MainPage;
