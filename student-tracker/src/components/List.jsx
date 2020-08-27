import React from "react";
import * as api from "../utils/api";
class List extends React.Component {
  state = {
    students: [],
    graduated: null,
  };

  componentDidMount() {
    api.getAllStudents().then((students) => this.setState({ students }));
  }
  componentDidUpdate(props) {
    // console.log(props.graduated);
    if (props.graduated === false) {
      this.setState({ graduated: false });
    }
  }
  render() {
    // console.dir(props);
    const students = this.state.students;
    return (
      <div>
        <ul>
          {students.map((student) => {
            return (
              <li key={student._id}>
                <p>Name: {student.name}</p>
                <p>Cohort: {student.startingCohort}</p>
                {!this.graduated && <p>Block: {student.currentBlock}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
