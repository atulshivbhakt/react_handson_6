import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Navigationbar/Home";
import Student from "../Navigationbar/Student";
import Contact from "../Navigationbar/Contact";
import Navbar from "../Navigationbar/Navbar.js";
import Store from "../Store/Store";
import EditStudent from "../EditStudent/EditStudent";
import AddStudent from "../Addstudent/Addstudent";

const Routing = () => {
  const [data, setData] = useState([
    { name: "Shyam", age: 22, batch: "January", course: "BCA" },
    { name: "Rahul", age: 22, batch: "February", course: "Diploma" },
    { name: "Atul", age: 22, batch: "March", course: "B.TECH" },
    { name: "Shubham", age: 22, batch: "April", course: "B.SC" },
    { name: "Vivek", age: 22, batch: "May", course: "B.COM" }
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Store.Provider value={{ value: data, setfunction: setData }}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/student"} element={<Student />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={'/editStudent/:id'} element={<EditStudent />} />
            <Route path={'/addStudent'} element={<AddStudent />} />
          </Routes>
        </Store.Provider>
      </BrowserRouter>
    </>
  );
};

export default Routing;