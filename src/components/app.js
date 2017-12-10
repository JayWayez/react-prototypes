import React from "react";
import Sgt_table from "./table";

const students = [
  {
    student: "Clark Griswold",
    course: "Christmas Decoration",
    grade: 10
  },
  {
    student: "Regina George",
    course: "Queen Bee",
    grade: 92
  },
  {
    student: "Beatrix Kiddo",
    course: "Revenge",
    grade: 100
  }
];

const App = () => {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Sgt_table data={students} />
    </div>
  );
};

export default App;
