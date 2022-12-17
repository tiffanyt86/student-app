import React from "react";
import "./StudentList.css";
import Student from "./Student";
import PropTypes from "prop-types";

const StudentList = (props) => {
  const headingClass = "student-list__heading";
  const listClass = "student-list";

  // the index parameter is only being used so that we don't get a warning in our console "each child in a list should have a unique "key" prop".  not necessary
  const studentComponents = props.students.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
        />
      </li>
    );
  });

  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
};

export default StudentList;
