import React, {Component} from 'react';
import Timetable from '../../components/Timetable';
import Card from '../../components/Card';
import {classColors} from '../../utils/constants';
import {reformatData, hasTimeConflict} from '../../utils/temp';
import * as styles from './MainPage.module.scss';
import sampleData from './sample.json';

export class MainPage extends Component {
  state = {
    allCourses: {},
    userCourses: {},
    restrictedItems: [],
    restrictedTimes: [],
    availableColors: [],
    conflictMap: [],
    timetableConfig: {
      days: 6,
      startingHour: 7,
      endingHour: 23,
    },
  };

  generateConflictTable = (courseList) => {
    const {timetableConfig} = this.state;
    const conflictMap = Array.from(
      Array(timetableConfig.endingHour - timetableConfig.startingHour + 1),
      () => Array.from(Array(timetableConfig.days), () => []),
    );

    Object.keys(courseList).forEach((courseId) => {
      const course = courseList[courseId];
      course.timeslots.forEach((time) => {
        const duration = time.endingHour - time.startingHour;
        const startsAt = time.startingHour - timetableConfig.startingHour;

        for (let i = 0; i < duration; i++) {
          conflictMap[startsAt + i][time.day].push(course.id);
        }
      });
    });
    console.log('conflict', conflictMap);
    return conflictMap;
  };

  addToTable = (courseClass) => {
    const {userCourses, restrictedItems} = this.state;
    const newUserCourses = {...userCourses};

    let {availableColors, restrictedTimes} = this.state;
    if (restrictedItems.includes(courseClass.id)) return;

    // Deleting from table
    if (courseClass.id in userCourses) {
      if (!availableColors.includes(userCourses[courseClass.id].color))
        availableColors.unshift(userCourses[courseClass.id].color);

      delete newUserCourses[courseClass.id];

      restrictedTimes = restrictedTimes.filter(
        (restri) => restri.restrictedBy !== courseClass.id,
      );
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
      restrictedTimes.push(...courseClass.timeslots);
    }

    this.setState(
      {userCourses: newUserCourses, availableColors, restrictedTimes},
      () => {
        this.updateRestrictionList(courseClass.id);
      },
    );
  };

  updateRestrictionList(requester) {
    const {
      allCourses,
      restrictedItems,
      userCourses,
      conflictMap,
      timetableConfig,
    } = this.state;

    // Todo: change it to object
    let newRestrictionList = [...restrictedItems];

    //console.log(conflictMap);
    Object.keys(userCourses).forEach((courseId) => {
      const request = allCourses[courseId];
      request.timeslots.forEach((time) => {
        const duration = time.endingHour - time.startingHour;
        const startsAt = time.startingHour - timetableConfig.startingHour;

        for (let i = 0; i < duration; i++) {
          newRestrictionList = [
            ...new Set([
              ...newRestrictionList,
              ...conflictMap[startsAt + i][time.day],
            ]),
          ];
        }
      });
    });

    newRestrictionList = newRestrictionList.filter(
      (value) => !(value in userCourses),
    );
    //console.log(requester, newRestrictionList);

    this.setState({restrictedItems: newRestrictionList});
    /* 
    const {restrictedTimes, userCourses, allCourses} = this.state;

    const newRestrictedItems = [];

    allCourses.forEach((courseClass) => {
      if (courseClass.id === requester) return;
      if (courseClass.id in userCourses) return;

      restrictedTimes.forEach((restrictedTime) => {
        if (
          courseClass.timeslots.some((time) => {
            return hasTimeConflict(
              time.startingHour,
              restrictedTime.startingHour,
              time.endingHour,
              restrictedTime.endingHour,
              time.day,
              restrictedTime.day,
            );
          })
        ) {
          newRestrictedItems.push(courseClass.id);
        }
      });
    });*/

    //this.setState({restrictedItems: newRestrictedItems});
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
