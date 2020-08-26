import React from "react";
import * as api from "../utils/api";
class List extends React.Component {
  state = {
    students: [],
  };
  componentDidMount() {
    api.getAllStudents().then((students) => this.setState({ students }));
  }

  render() {
    const students = this.state.students;
    return (
      <div>
        <ul>
          {students.map((student) => {
            return (
              <li key={student._id}>
                <p>Name: {student.name}</p>
                <p>Cohort: {student.startingCohort}</p>
                <p>Block: {student.currentBlock}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
