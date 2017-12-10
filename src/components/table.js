import React from "react";

const Sgt_table = props => {
  console.log(props.data);
  const table_rows = props.data.map((item, index) => {
    console.log(item, index);
    return (
      <tr key={index}>
        <td>{item.student}</td>
        <td>{item.course}</td>
        <td>{item.grade}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>

      <tbody>{table_rows}</tbody>
    </table>
  );
};

export default Sgt_table;
