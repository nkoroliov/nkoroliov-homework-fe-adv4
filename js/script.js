let students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
let themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
let marks = [4, 5, 5, 3, 4, 5];

const girl = students.filter((el) => el.slice(-1) == "а");
const boy = students.filter((el) => el.slice(-1) !== "а");

// 1

const divideIntoPairs = (students) => {
    const pairs = [];
    
    for (let i = 0; i < boy.length; i++) {
        pairs.push([boy[i], girl[i]]);
    }
    return pairs;
}
const arrayPairs = divideIntoPairs(students);

console.log(arrayPairs);

// 2

const giveThemesToPairs = (pairs, themes) => {

  const pairsWithThemes = [];

  for (let i = 0; i < pairs.length; i++) {
    let stringPairs = pairs[i].join(" та ");
    pairsWithThemes.push([stringPairs, themes[i]]);
  }
  return pairsWithThemes;
}

const arrayPairsWithThemes = giveThemesToPairs(arrayPairs, themes);

console.log(arrayPairsWithThemes);

// 3

const giveStudentAMark = (students, marks) => {
  let studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks = [...studentsMarks, [students[i], + marks[i]]];
  }
  return studentsMarks;
};
const studentsMarks = giveStudentAMark(students, marks);

console.log(studentsMarks);

// 4

const givetMarksForPairs = (arrayPairsWithThemes) => {
  const randomMarksForPairs = [];

  for (let i = 0; i < arrayPairsWithThemes.length; i++) {
    randomMarksForPairs[i] = [...arrayPairsWithThemes[i], Math.floor(Math.random() * 5 + 1)];
  }
  return randomMarksForPairs;
}

let arrayGroupMark = givetMarksForPairs(arrayPairsWithThemes);
console.log(arrayGroupMark);


                     
                       
                        
           
                