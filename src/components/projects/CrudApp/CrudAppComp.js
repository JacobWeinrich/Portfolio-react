import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import "../../../css/CrudAppProject.css";
import { nanoid } from "nanoid";
function CrudAppComp() {
  const [students, updateStudents] = useState([
    {
      firstName: "Jacob",
      lastName: "Weinrich",
      gradYear: "3022",
      id: nanoid(),
    },
    {
      firstName: "Tom",
      lastName: "Weinrich",
      gradYear: "3022",
      id: nanoid(),
    },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [searchBar, updateSearchBar] = useState("SearchOff");
  const [searchBarInput, updatedSearchBarInput] = useState("");
  const [SearchArray, updateSearchArray] = useState(null);
  const [editMode, setEditMode] = useState({ editMode: false, index: null });
  const [editBTN, setEditBTN] = useState(
    <i className="fa-solid fa-user-plus"></i>
  );

  function saveToLocal(student2) {
    if (localStorage) {
      localStorage.setItem("students", JSON.stringify(student2));
    }
  }

  useEffect(() => {
    const studentsLS = JSON.parse(localStorage.getItem("students"));
    if (studentsLS) {
      updateStudents(studentsLS);
      updateSearchArray(studentsLS);
    }
  }, []);

  useReducer(() => {
    updateSearchArray(students);
    search();
  });

  function addStudent() {
    if (editMode.editMode) {
      let editedStudent = students;
      editedStudent[editMode.index].firstName = firstName;
      editedStudent[editMode.index].lastName = lastName;
      editedStudent[editMode.index].gradYear = gradYear;
      updateStudents(editedStudent);
      updateSearchArray(editedStudent);
      setEditMode({ editMode: false, index: null });
      setEditBTN(<i className="fa-solid fa-user-plus"></i>);
      saveToLocal(editedStudent);
    } else {
      console.log("Student Added");
      const newStudent = {
        firstName: firstName,
        lastName: lastName,
        gradYear: gradYear,
        id: nanoid(),
      };
      const updatedStudents = [...students, newStudent];
      updateStudents(updatedStudents);
      updateSearchArray(updatedStudents);
      // search();
      saveToLocal(updatedStudents);
    }
  }

  function search() {
    if (searchBarInput.length === 0) {
      updateSearchArray(students);
    }
    if (searchBar === "FirstName" && searchBarInput.length !== 0) {
      updateSearchArray(
        students.filter((item) =>
          item.firstName
            .toLocaleLowerCase()
            .includes(searchBarInput.toLocaleLowerCase())
        )
      );
    } else if (searchBar === "LastName" && searchBarInput.length !== 0) {
      updateSearchArray(
        students.filter((item) =>
          item.lastName
            .toLocaleLowerCase()
            .includes(searchBarInput.toLocaleLowerCase())
        )
      );
      console.log(SearchArray);
    } else if (searchBar === "GradYear" && searchBarInput.length !== 0) {
      updateSearchArray(
        students.filter((item) =>
          item.gradYear
            .toLocaleLowerCase()
            .includes(searchBarInput.toLocaleLowerCase())
        )
      );
      console.log(SearchArray);
    } else if (searchBarInput.length === 0 || searchBar === "SearchOff") {
      console.log(students);
      updateSearchArray(students);
      console.log(SearchArray);
      console.log("hi");
      // document.querySelector("#searchBarInput")
    }
  }

  return (
    <div className="section-t2 min-vh-100 text-white text-shadow-1 p-5">
      {/* <h1>{searchBar} Test</h1> */}
      <div className="container">
        <div className="row justify-content-center text-center">
          <h2>Crud App</h2>
          {/* First Name Input */}
          <div className="col-2">
            <label className="form-label" htmlFor="firstNameInput">
              First Name
            </label>
            <input
              className="form-control"
              id="firstNameInput"
              type="text"
              value={firstName}
              onChange={(evt) => {
                setFirstName(evt.currentTarget.value);
              }}
              placeholder="First Name Input"
            />
          </div>
          {/* Last Name Input */}
          <div className="col-2">
            <label className="form-label" htmlFor="lastNameInput">
              Last Name
            </label>
            <input
              className="form-control"
              id="lastNameInput"
              type="text"
              value={lastName}
              onChange={(evt) => {
                setLastName(evt.currentTarget.value);
              }}
              placeholder="Last Name Input"
            />
          </div>
          {/* Grad Year Input */}
          <div className="col-2">
            <label className="form-label" htmlFor="GradYearInput">
              Grad Year
            </label>
            <input
              className="form-control"
              id="GradYearInput"
              type="text"
              value={gradYear}
              onChange={(evt) => {
                setGradYear(evt.currentTarget.value);
              }}
              placeholder="Grad Year Input"
            />
          </div>
          <div className="col-2 align-self-start">
            <button className="btn btn-lg btn-primary" onClick={addStudent}>
              {editBTN}
            </button>
          </div>
          <div className="col-2 align-self-start">
            <input
              type="text"
              id="searchBarInput"
              value={searchBarInput}
              placeholder="Search Bar"
              disabled
              onChange={(evt) => {
                if (evt.currentTarget.value === "") {
                  console.log("empty");
                  updateSearchArray(students)
                } else {

                }
                updatedSearchBarInput(evt.currentTarget.value);
                search()
              }}
            />
          </div>
          <div className="col-2">
            <div className="m-3">
              <label className="m-1 form-check-label" htmlFor="FirstNameSearch">
                First Name
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="searchType"
                id="FirstNameSearch"
                value="FirstName"
                onClick={(evt) => {
                  document.getElementById("searchBarInput").disabled = false;
                  updateSearchBar(evt.currentTarget.value);
                  search();
                }}
              />
            </div>
            <div className="m-3">
              {" "}
              <label className="m-1 form-check-label" htmlFor="LastNameSearch">
                Last Name
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="searchType"
                id="LastNameSearch"
                value="LastName"
                onClick={(evt) => {
                  document.getElementById("searchBarInput").disabled = false;
                  updateSearchBar(evt.currentTarget.value);
                  search();
                }}
              />
            </div>
            <div className="m-3">
              <label className="m-1 form-check-label" htmlFor="GradYearSearch">
                Grad Year
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="searchType"
                id="GradYearSearch"
                value="GradYear"
                onClick={(evt) => {
                  document.getElementById("searchBarInput").disabled = false;
                  updateSearchBar(evt.currentTarget.value);
                  search();
                }}
              />
            </div>
            <div className="m-3">
              <label className="m-1 form-check-label" htmlFor="SearchOff">
                No Search
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="searchType"
                id="SearchOff"
                value="SearchOff"
                defaultChecked
                onClick={(evt) => {
                  document.getElementById("searchBarInput").disabled = true;
                  updateSearchBar(evt.currentTarget.value);
                  updateSearchArray(students);
                  // search();
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center text-center">
          {SearchArray &&
            SearchArray.map((student) => (
              <div
                key={student.id}
                className="col-3 bg-dark border border-secondary p-2"
              >
                <h3>
                  {student.firstName} {student.lastName}
                </h3>
                <h3>Grad Year: {student.gradYear}</h3>
                <button
                  className="btn btn-primary"
                  onClick={(evt) => {
                    console.log(students.indexOf(student));
                    setFirstName(students[students.indexOf(student)].firstName);
                    setGradYear(students[students.indexOf(student)].gradYear);
                    setLastName(students[students.indexOf(student)].lastName);
                    setEditMode({
                      editMode: true,
                      index: students.indexOf(student),
                    });
                    setEditBTN(<i className="fa-solid fa-user-pen"></i>);
                  }}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(evt) => {
                    const filtered = students.filter(
                      (student2) => student2.id !== student.id
                    );
                    updateStudents(filtered);
                    // search();
                    updateSearchArray(filtered);
                    console.log(students);
                    saveToLocal(filtered);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CrudAppComp;
