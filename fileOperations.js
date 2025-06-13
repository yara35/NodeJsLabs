const fs = require('fs');

const studentData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    course: "Computer Science",
    grades: {
      math: 90,
      programming: 95,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    course: "Data Science",
    grades: {
      statistics: 88,
      machine_learning: 92,
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    age: 21,
    course: "Web Development",
    grades: {
      html: 95,
      javascript: 89,
    },
  },
];
//Write
fs.writeFileSync("students.json", JSON.stringify(studentData, null, 2))

fs.writeFile("students.json", JSON.stringify(studentData), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully");
  }
});

//Read

fs.readFile("students.json", "utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
        
    }
});

const data = fs.readFileSync("students.json", "utf-8");
const stuDataArr = JSON.parse(data)
console.log(stuDataArr);

//Add a new student
const newStu = {
    "id": 4,
    "name": "Alice Johnson",
    "age": 25,
    "course": "Computer Science",
    "grades": {
      "math": 90,
      "programming": 95
    }
  }
stuDataArr.push(newStu)
fs.writeFile("students.json", JSON.stringify(stuDataArr,null,2), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written successfully");
  }
});

//(bonus) Update a student's course
function UpdateStdCourseSync(id, newCourse) {
  const data = fs.readFileSync("students.json", "utf-8");
  const stuDataArr = JSON.parse(data);

  const student = stuDataArr.find(stu => stu.id === id);

  if (student) {
    student.course = newCourse;
    fs.writeFileSync("students.json", JSON.stringify(stuDataArr, null, 2));
    console.log(`Course updated for student ${id}`);
  } else {
    console.log("Student not found");
  }
}

console.log(UpdateStdCourseSync(4,"math"));

//(bonus) Delete a student
function DeleteStdSync(id) {
  const data = fs.readFileSync("students.json", "utf-8");
  const stuDataArr = JSON.parse(data);

  const students = stuDataArr.filter(stu => stu.id !== id);
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
  console.log(`student ${id} deleted`);
  
};
DeleteStdSync(3);



