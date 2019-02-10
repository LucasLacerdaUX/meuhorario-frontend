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

const generateSmallName = (name) => {
  const toReplace = ['DO', 'DA', 'DE', 'A', 'AO'];

  return name
    .split(' ')
    .filter((elemento) => !toReplace.includes(elemento))
    .map((i) => i.charAt(0))
    .join('');
};

export const reformatData = (sampleData) => {
  const tempState = [];
  sampleData.curriculum.courses.forEach((element) => {
    element.turmas.forEach((turma) => {
      const newElement = {};
      newElement.id = `${element.id}-${turma.turmaid}`;
      newElement.code = element.id;
      newElement.name = element.name;
      newElement.shortName = generateSmallName(element.name);
      newElement.type = element.type;
      newElement.professor = turma.professor;
      newElement.time = turma.horario;
      newElement.classId = turma.turmaid;
      newElement.semester = element.semester;
      newElement.timeslots = toTimeslotArray(turma.horario);
      tempState[newElement.id] = newElement;
    });
  });
  return tempState;
};
