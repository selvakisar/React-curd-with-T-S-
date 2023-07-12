import "./App.css";
import React, { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import StudentList from "./Components/StudentList";
import TeacherList from "./Components/TeacherList";
import { Routes, Route } from "react-router-dom";
import AddStudents from "./Components/AddStudents";
import AddTeachers from "./Components/AddTeachers";
import EditStudent from "./Components/EditStudent";
import EditTeacher from "./Components/EditTeacher";
function App() {
  const teacherData = [
    {
      id: 1,
      name: "mallika",
      sub: "maths",
      email: "mallika@gmail.com",
      phone: 55181585244,
      qualification: "B.Sc",
    },
    {
      id: 2,
      name: "Malar",
      sub: "css",
      email: "malar@gmail.com",
      phone: 8574185296,
      qualification: "B.Sc(IT)",
    },
  ];
  const [data1, setDataa] = useState( teacherData);


  const studentData = [
  {
    id: 1,
    name: "Kishore",
    batch: "b47WD",
    email: "abc@gmail.com",
    phone: 782465244,
    qualification: "B.E",
  },
  {
    id: 2,
    name: "Aditiya",
    batch: "b47WD",
    email: "adc@gmail.com",
    phone: 652664624,
    qualification: "B.Tech",
  },
];

  const [data, setData] = useState(studentData)
 

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/student/add"
          element={<AddStudents studentData={data} setData={setData} />}
        />


        <Route
          path="/edit/:id"
          element={<EditStudent studentData={data} setData={setData} />}
        />

        <Route
          path="/teacher/add"
          element={<AddTeachers teacherData={data1} setData={setDataa} />}
        />
        
        <Route
          path="/edit/teacher/:id"
          element={<EditTeacher teacherData={data1} setData={setDataa} />}
        />
        
        <Route
          path="/student/all"
          element={<StudentList studentData={data} setData={setData} />}
        />

        <Route
          path="/teacher/all"
          element={<TeacherList teacherData={data1} setData={setDataa} />}
        />
      </Routes>
    </div>
  );
}

export default App;

// useState() - day1
// useEffect() -
