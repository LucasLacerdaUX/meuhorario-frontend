import React, {Component} from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Timetable from '../../components/Timetable';

import {classColors} from '../../utils/constants';
import {reformatData} from '../../utils/temp';

import * as styles from './MainPage.module.scss';
import sampleData from './sample.json';

const classNames = require('classnames');

export class MainPage extends Component {
  state = {
    allCourses: {},
    userCourses: {},
    conflictList: [],
    availableColors: [],
    conflictMap: {},
    timetableConfig: {
      days: 5,
      startingHour: 7,
      endingHour: 23,
    },
    sidebarExpanded: false,
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
          const identifier = `${startsAt + i}-${time.day}`;
          conflictMap[identifier] = conflictMap[identifier] || [];
          conflictMap[identifier].push(course.id);
        }
      });
    });

    return conflictMap;
  };

  addOrRemoveClass = (courseId) => {
    const {userCourses, conflictList} = this.state;
    if (conflictList.includes(courseId)) return;

    let {availableColors} = this.state;
    const newUserCourses = {...userCourses};

    // Deleting from table
    if (courseId in userCourses) {
      if (!availableColors.includes(userCourses[courseId]))
        availableColors.unshift(userCourses[courseId]);

      delete newUserCourses[courseId];
    }

    // Adding to Table
    else {
      availableColors = availableColors.length
        ? availableColors
        : [...classColors];

      newUserCourses[courseId] = availableColors.shift();
    }

    this.setState({userCourses: newUserCourses, availableColors}, () => {
      this.updateConflictList();
    });
  };

  expandSidebarMobile = () => {
    this.setState((prevState) => ({
      sidebarExpanded: !prevState.sidebarExpanded,
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
          const identifier = `${startsAt + i}-${time.day}`;
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
    // This will be removed when the backend is ready
    const tempState = reformatData(sampleData);

    const conflictMap = this.generateConflictTable(tempState);
    this.setState({allCourses: tempState, conflictMap});
  }

  render() {
    const {
      allCourses,
      conflictList,
      timetableConfig,
      userCourses,
      sidebarExpanded,
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
        <Card
          key={course.id}
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
        />,
      );
    });

    const cardsToRender = [];
    semesterCards.forEach((cardList, index) => {
      const key = `semester-${index}`;
      const title = index ? `${index}º PERÍODO` : 'EXTRAS';
      cardsToRender.push(
        <Collapse id={key} key={key} autoOpen title={title}>
          {cardList}
        </Collapse>,
      );
    });

    const sideBarClasses = classNames(
      styles.sideBar,
      sidebarExpanded && styles.show,
    );

    return (
      <div className={styles.MainPage}>
        <div className={sideBarClasses}>
          <div className={styles.buttonDiv}>
            <Button fullWidth onlyText onClick={this.expandSidebarMobile}>
              Expand
            </Button>
          </div>
          {cardsToRender}
        </div>

        <div className={styles.mainTable}>
          <Timetable
            days={timetableConfig.days}
            startingHour={timetableConfig.startingHour}
            endingHour={timetableConfig.endingHour}
            onClick={this.addOrRemoveClass}
            events={timetableContent}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
