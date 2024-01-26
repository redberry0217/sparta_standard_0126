import React from "react";

function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const filteredStudents = students.filter((students) => students.age >= 18);

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((students, idx) => {
          return (
            <li
              key={idx}
              onClick={() =>
                alert(`나이: ${students.age}, 점수: ${students.grade}`)
              }
            >
              {students.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
