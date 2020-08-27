// import React from "react";
// import * as api from "../utils/api";
// class FilterBar extends React.Component {
//   state = {
//     students: [],
//     graduated: this.areGraduates,
//   };
//   areGraduates =
//     this.props.graduated === "graduates"
//       ? true
//       : this.props.graduated === "current"
//       ? false
//       : null;
//   handleChange = (changeEvent) => {
//     const block = changeEvent.target.value;
//     api
//       .getAllStudents(this.areGraduates, block)
//       .then((students) => this.setState({ students }));
//   };
//   render() {
//     return (
//       <div>
//         <form action="">
//           <label htmlFor="cohort">Starting Cohort</label>
//           <input onChange={this.handleChange} type="number" />
//         </form>
//       </div>
//     );
//   }
// }

// export default FilterBar;
