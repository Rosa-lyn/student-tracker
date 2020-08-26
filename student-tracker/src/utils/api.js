import axios from "axios";

export const getAllStudents = (graduated) => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students", {
      params: { graduated },
    })
    .then((res) => {
      return res.data.students;
    });
};
