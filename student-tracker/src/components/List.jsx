import React from "react";
import * as api from "../utils/api";
class List extends React.Component {
  state = {
    students: [],
    graduated: null,
    // cohort: null,
  };

  fetchStudents = (areGraduates, cohort) => {
    return api
      .getAllStudents(areGraduates, cohort)
      .then((students) => this.setState({ students }));
  };

  handleChange = (changeEvent) => {
    const cohort = Number(changeEvent.target.value);
    this.setState({ cohort: cohort });
    this.fetchStudents(this.state.graduated, this.state.cohort);
  };
  componentDidMount() {
    const areGraduates =
      this.props.graduated === "graduates"
        ? true
        : this.props.graduated === "current"
        ? false
        : null;
    this.fetchStudents(areGraduates, this.state.cohort);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.graduated !== this.props.graduated) {
      const areGraduates =
        this.props.graduated === "graduates"
          ? true
          : this.props.graduated === "current"
          ? false
          : null;
      this.fetchStudents(areGraduates, this.state.cohort);
    }
  }

  render() {
    const students = this.state.students;
    return (
      <div>
        <form>
          <label htmlFor="cohort">Starting Cohort</label>
          <input id="cohort" onChange={this.handleChange} type="number" />
        </form>
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
