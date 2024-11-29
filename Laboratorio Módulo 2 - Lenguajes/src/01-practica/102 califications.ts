console.log("#Califications");

type Students = {
  David: number;
  Maria: number;
  Jose: number;
  Juan: number;
  Blanca: number;
  Carmen: number;
  [key: string]: number;
};

const eso2o: Students = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const getMarks = (obj: Students): Array<Students[keyof Students]> => {
  const listOfMarks: Array<Students[keyof Students]> = [];

  for (const key in obj) {
    const value = obj[key];
    listOfMarks.push(value);
  }

  return listOfMarks;
};

const sumMarks = (marks: Array<Students[keyof Students]>) => {
  return marks.reduce((total, mark) => total + mark, 0);
};

const getAverage = (marks: Students): number => {
  const listOfMarks = getMarks(marks);
  const sum = sumMarks(listOfMarks);
  const numOfMarks = listOfMarks.length;

  const average = sum / numOfMarks;
  return average;
};

const compareAverageAndGetMessage = (average: number): string => {
  if (average === 10) return "Matricula de honor";
  if (average >= 9) return "Sobresaliente";
  if (average >= 7) return "Notable";
  if (average >= 6) return "Bien";
  if (average >= 5) return "Suficiente";
  if (average >= 4) return "Insuficiente";
  return "Muy deficiente";
};

const printAverage = (classResults: Students) => {
  const average = getAverage(classResults);
  const message = compareAverageAndGetMessage(average);
  return `La nota media de la clase recibe una calificación final de ${message}`;
};

console.log(printAverage(eso2o));
