const convertToHour = (time, hour) => {
  const cHour = Number(hour);
  if (time === 'M') {
    return cHour + 6;
  }
  if (time === 'T') {
    return cHour + 12;
  }
  if (time === 'N') {
    return cHour + 18;
  }
  return cHour;
};

const toTimeslotArray = (times) => {
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
        startingHour: convertToHour(turno, horas[0]),
        endingHour: convertToHour(turno, horas[horas.length - 1]) + 1,
      });
    });
  });

  return newObj;
};

const parseWorkload = (workload) => {
  const regex = /(\d*)/g;
  const myWorkload = regex.exec(workload);
  return [Number(myWorkload[0]), Number(myWorkload[1])];
};

export const reformatData = (sampleData) => {
  const tempState = [];
  sampleData.curriculum.courses.forEach((element) => {
    element.turmas.forEach((turma) => {
      const newElement = {};
      newElement.id = `${element.id}-${turma.turmaid}`;
      newElement.code = element.id;
      newElement.name = element.name;
      newElement.shortName = '...';
      newElement.type = element.type;
      newElement.professor = turma.professor;
      newElement.time = turma.horario;
      newElement.classId = turma.turmaid;
      newElement.semester = element.semester;
      newElement.timeslots = toTimeslotArray(turma.horario);
      newElement.workload = parseWorkload(element.workload)[0];
      newElement.workloadLab = parseWorkload(element.workload)[1];
      tempState[newElement.id] = newElement;
    });
  });
  return tempState;
};
