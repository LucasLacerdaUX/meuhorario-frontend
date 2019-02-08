import React, {Component} from 'react';
import Timetable from '../../components/Timetable';
import Card from '../../components/Card';
import {classColors} from '../../utils/constants';
import {reformatData} from '../../utils/temp';
import * as styles from './MainPage.module.scss';
import sampleData from './sample.json';

export class MainPage extends Component {
  state = {
    aulas: [],
    inTable: [],
    restrictedItems: [],
    restrictedTimes: [],
    inTableColors: [],
    availableColors: [],
  };

  addToTable = (element) => {
    const id = `${element.code}-${element.classId}`;

    const {inTableColors} = this.state;
    let {inTable, availableColors, restrictedTimes} = this.state;
    const {restrictedItems} = this.state;

    if (restrictedItems.includes(id)) return;

    if (inTable.includes(id)) {
      const index = inTable.indexOf(id);

      if (availableColors.indexOf(inTableColors[index]) === -1)
        availableColors.unshift(inTableColors[index]);

      inTableColors.splice(index, 1);
      inTable = inTable.filter((value) => value !== id);

      restrictedTimes = restrictedTimes.filter(
        (restri) => restri.disciplina !== id,
      );
    } else {
      if (availableColors.length === 0) {
        availableColors = [...classColors];
      }
      inTable.push(id);
      inTableColors.push(availableColors.shift());
      [...element.timeslots].map((daySlot) => (daySlot.disciplina = id));
      restrictedTimes.push(...element.timeslots);
    }

    this.setState(
      {inTable, inTableColors, availableColors, restrictedTimes},
      () => {
        this.updateRestrictionList(id);
      },
    );
  };

  updateRestrictionList(notThis) {
    const {restrictedTimes, inTable, aulas} = this.state;

    const newRestrictedItems = [];

    aulas.forEach((element) => {
      const id = `${element.code}-${element.classId}`;
      if (id === notThis) return;
      if (inTable.includes(id)) return;

      restrictedTimes.forEach((res) => {
        if (
          element.timeslots.some((time) => {
            return (
              time.day === res.day &&
              Math.max(time.startingHour, res.startingHour) -
                Math.min(time.endingHour - 1, res.endingHour - 1) <=
                0
            );
          })
        ) {
          newRestrictedItems.push(id);
        }
      });
    });

    this.setState({restrictedItems: newRestrictedItems});
  }

  componentDidMount() {
    const tempState = reformatData(sampleData);
    this.setState({aulas: tempState});
  }

  render() {
    const {aulas, restrictedItems, inTable, inTableColors} = this.state;

    const insideTable = [];
    const cardsToRender = [];

    aulas.forEach((element) => {
      const key = `${element.code}-${element.classId}`;

      if (inTable.includes(key)) {
        insideTable.push(element);
        element.color = inTableColors[inTable.indexOf(key)];
      } else {
        element.color = 'red';
      }

      cardsToRender.push(
        <Card
          key={key}
          id={key}
          badge={element.time}
          cardSubtitle={element.professor}
          complementaryInfo={element.type}
          cardTitle={element.name}
          onCardClick={this.addToTable}
          pressed={inTable.includes(key)}
          clickPayload={element}
          disabled={restrictedItems.includes(key) && !inTable.includes(key)}
          color={element.color}
          clickable
        />,
      );
    });

    return (
      <div className={styles.MainPage}>
        <div className={styles.sideBar}>{cardsToRender}</div>

        <div className={styles.mainTable}>
          <Timetable
            days={6}
            startingHour={7}
            endingHour={23}
            onClick={this.addToTable}
            events={insideTable}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
