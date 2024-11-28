console.log("#Califications");

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const getMarks = (obj) => {
  const listOfMarks = [];

  for (const key in obj) {
    const value = obj[key];
    listOfMarks.push(value);
  }

  return listOfMarks;
};

const sumMarks = (marks) => {
  return marks.reduce((total, mark) => total + mark, 0);
};

const getAverage = (marks) => {
  const listOfMarks = getMarks(marks);
  const sum = sumMarks(listOfMarks);
  const numOfMarks = listOfMarks.length;

  const average = sum / numOfMarks;
  return average;
};

const compareAverageAndGetMessage = (average) => {
  if (average === 10) return "Matricula de honor";
  if (average >= 9) return "Sobresaliente";
  if (average >= 7) return "Notable";
  if (average >= 6) return "Bien";
  if (average >= 5) return "Suficiente";
  if (average >= 4) return "Insuficiente";
  return "Muy deficiente";
};

const printAverage = (classResults) => {
  const average = getAverage(classResults);
  const message = compareAverageAndGetMessage(average);
  return `La nota media de la clase recibe una calificación final de ${message}`;
};

console.log(printAverage(eso2o));
