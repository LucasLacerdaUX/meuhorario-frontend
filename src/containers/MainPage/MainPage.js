import React, {Component} from 'react';
import Timetable from '../../components/Timetable';
import Card from '../../components/Card';
import * as styles from './MainPage.module.scss';
import sampleData from './sample.json';

export class MainPage extends Component {
  state = {
    aulas: [],
    inTable: [],
    restrictedItems: [],
    restrictedTimes: [],
  };

  addToTable = (element) => {
    const id = `${element.code}-${element.classId}`;

    let {inTable, restrictedTimes} = this.state;
    const {restrictedItems} = this.state;

    if (restrictedItems.includes(id)) return;

    if (inTable.includes(id)) {
      inTable = inTable.filter((value) => value !== id);
      restrictedTimes = restrictedTimes.filter(
        (restri) => restri.disciplina !== id,
      );
    } else {
      inTable.push(id);
      [...element.timeslots].map((daySlot) => (daySlot.disciplina = id));
      restrictedTimes.push(...element.timeslots);
    }

    this.setState({inTable, restrictedTimes}, () => {
      this.updateRestrictionList(id);
    });
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

  convertToHour(time, hour) {
    const cHour = Number(hour);
    if (time === 'M') {
      return cHour + 6;
    }
    if (time === 'T') {
      return cHour + 13;
    }
    if (time === 'N') {
      return cHour + 18;
    }
    return cHour;
  }

  toTimeslotArray(times) {
    const newObj = [];
    times.split(' ').forEach((time) => {
      const regex = /([1-9]*)+(T|M|N)+([1-9]*)/g;
      const myTime = regex.exec(time);

      const dias = myTime[1].toString();
      const turno = myTime[2];
      const horas = myTime[3].toString();

      [...dias].forEach((element) => {
        newObj.push({
          day: element - 2,
          startingHour: this.convertToHour(turno, horas[0]),
          endingHour: this.convertToHour(turno, horas[horas.length - 1]) + 1,
        });
      });
    });

    return newObj;
  }

  componentDidMount() {
    const tempState = [];
    sampleData.curriculum.courses.forEach((element) => {
      element.turmas.forEach((turma) => {
        const newElement = {};
        newElement.code = element.id;
        newElement.name = element.name;
        newElement.shortName = '...';
        newElement.type = element.type;
        newElement.professor = turma.professor;
        newElement.time = turma.horario;
        newElement.classId = turma.turmaid;
        newElement.semester = element.semester;
        newElement.timeslots = this.toTimeslotArray(turma.horario);
        tempState.push(newElement);
      });
    });
    this.setState({aulas: tempState});
  }

  render() {
    const {aulas, restrictedItems, inTable} = this.state;

    const insideTable = [];
    const cardsToRender = [];
    aulas.forEach((element) => {
      const key = `${element.code}-${element.classId}`;
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
          clickable
        />,
      );
      if (!inTable.includes(`${element.code}-${element.classId}`)) {
        return;
      }
      insideTable.push(element);
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
            aulas={insideTable}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
