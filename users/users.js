const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

const subjectsString = Object.keys(subjects).join(", ");
console.log(subjectsString);

const totalPeople = Object.values(subjects).reduce((acc, item) => {
  return acc + item.students + item.teachers;
}, 0);
console.log(totalPeople);

const totalStudents = Object.values(subjects).reduce(
  (sum, item) => sum + item.students,
  0,
);
const averageStudents = totalStudents / Object.keys(subjects).length;
console.log(averageStudents);

const subjectsArray = Object.entries(subjects).map(([name, data]) => {
  return {
    name: name,
    students: data.students,
    teachers: data.teachers,
  };
});

console.log(subjectsArray);

const sortedByTeachers = [...subjectsArray].sort(
  (a, b) => b.teachers - a.teachers,
);

console.log(sortedByTeachers);
