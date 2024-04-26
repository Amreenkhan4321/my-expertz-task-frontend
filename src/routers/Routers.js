import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EmpLogin from "../component/auth/EmpLogin";
import EmployeeRegister from "../component/auth/EmlpoyeeRegister";
import StudentList from "../component/pages/students/StudentList";
import StudentAdd from "../component/pages/students/StudentAdd";
import Navbar from "../component/dashboardlayout/Navbar";
import InterviewList from "../component/pages/interviews/InterviewList";
import InterviewAdd from "../component/pages/interviews/InterviewAdd";
import AllocateStudent from "../component/pages/interviews/AllocateStudent ";
import ResultStatus from "../component/pages/results/ResultStatus";


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpLogin />} />
        <Route path="/register" element={<EmployeeRegister />} />
       <Route path="/dashboard" element={<Navbar />} >
       <Route path="studentlist" element={<StudentList />} />
        <Route path="student/add" element={<StudentAdd/>} />
        <Route path="interview/list" element={<InterviewList/>} />
        <Route path="interview/add" element={<InterviewAdd/>} />
        <Route path="allocate/:id" element={<AllocateStudent/>} />
        <Route path="resultstatus/:id" element={<ResultStatus/>} />
       </Route>
              
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
