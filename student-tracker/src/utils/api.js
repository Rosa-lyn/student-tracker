import axios from "axios";

export const getAllStudents = (graduated, cohort) => {
  console.log(graduated, "---", cohort);
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students", {
      params: { graduated, cohort },
    })
    .then((res) => {
      return res.data.students;
    });
};
