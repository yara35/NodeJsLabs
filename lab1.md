### Part 2: File Operations

Create a file named `fileOperations.js`. Use this starter data for your students.json file:

```javascript
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
```

1. Create a JSON file named 'students.json' with the sample student data above from the code
2. Implement both synchronous and asynchronous file operations
3. Create functions to:
   - Write the studentData to students.json
   - Read from students.json
   - Add a new student
   - (bonus) Update a student's course
   - (bonus) Delete a student
4. Compare the behavior of sync vs async operations
