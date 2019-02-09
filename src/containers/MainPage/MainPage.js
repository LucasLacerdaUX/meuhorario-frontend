import React, {Component} from 'react';
import Timetable from '../../components/Timetable';
import Card from '../../components/Card';
import {classColors} from '../../utils/constants';
import {reformatData} from '../../utils/temp';
import * as styles from './MainPage.module.scss';
import sampleData from './sample.json';

export class MainPage extends Component {
  state = {
    allCourses: {},
    userCourses: {},
    restrictedItems: [],
    availableColors: [],
    conflictMap: {},
    timetableConfig: {
      days: 6,
      startingHour: 7,
      endingHour: 23,
    },
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
          conflictMap[`${startsAt + i}-${time.day}`].push(course.id);
        }
      });
    });

    return conflictMap;
  };

  addToTable = (courseClass) => {
    const {userCourses, restrictedItems} = this.state;
    const newUserCourses = {...userCourses};

    let {availableColors} = this.state;
    if (restrictedItems.includes(courseClass.id)) return;

    // Deleting from table
    if (courseClass.id in userCourses) {
      if (!availableColors.includes(userCourses[courseClass.id].color))
        availableColors.unshift(userCourses[courseClass.id].color);

      delete newUserCourses[courseClass.id];
    }

    // Adding to Table
    else {
      if (availableColors.length === 0) {
        availableColors = [...classColors];
      }
      newUserCourses[courseClass.id] = {
        color: availableColors.shift(),
      };
      [...courseClass.timeslots].map(
        (daySlot) => (daySlot.restrictedBy = courseClass.id),
      );
    }

    this.setState({userCourses: newUserCourses, availableColors}, () => {
      this.updateRestrictionList(courseClass.id);
    });
  };

  updateRestrictionList() {
    const {allCourses, userCourses, conflictMap, timetableConfig} = this.state;

    let newRestrictionList = [];

    Object.keys(userCourses).forEach((courseId) => {
      const request = allCourses[courseId];
      request.timeslots.forEach((time) => {
        const duration = time.endingHour - time.startingHour;
        const startsAt = time.startingHour - timetableConfig.startingHour;

        for (let i = 0; i < duration; i++) {
          const identifier = `${startsAt + i}-${time.day}`;
          newRestrictionList = [
            ...new Set([...newRestrictionList, ...conflictMap[identifier]]),
          ];
        }
      });
    });

    newRestrictionList = newRestrictionList.filter(
      (value) => !(value in userCourses),
    );

    this.setState({restrictedItems: newRestrictionList});
  }

  componentDidMount() {
    const tempState = reformatData(sampleData);
    const conflictMap = this.generateConflictTable(tempState);
    this.setState({allCourses: tempState, conflictMap});
  }

  render() {
    const {
      allCourses,
      restrictedItems,
      userCourses,
      timetableConfig,
    } = this.state;

    const insideTable = [];
    const cardsToRender = [];

    Object.keys(allCourses).forEach((courseId) => {
      const courseClass = allCourses[courseId];
      if (courseClass.id in userCourses) {
        insideTable.push(courseClass);
        courseClass.color = userCourses[courseClass.id].color;
      } else {
        courseClass.color = 'red';
      }

      cardsToRender.push(
        <Card
          key={courseClass.id}
          id={courseClass.id}
          badge={courseClass.time}
          cardSubtitle={courseClass.professor}
          complementaryInfo={courseClass.type}
          cardTitle={courseClass.name}
          onCardClick={this.addToTable}
          pressed={courseClass.id in userCourses}
          clickPayload={courseClass}
          disabled={
            restrictedItems.includes(courseClass.id) &&
            !(courseClass.id in userCourses)
          }
          color={courseClass.color}
          clickable
        />,
      );
    });

    return (
      <div className={styles.MainPage}>
        <div className={styles.sideBar}>{cardsToRender}</div>

        <div className={styles.mainTable}>
          <Timetable
            days={timetableConfig.days}
            startingHour={timetableConfig.startingHour}
            endingHour={timetableConfig.endingHour}
            onClick={this.addToTable}
            events={insideTable}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
