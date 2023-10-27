import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Notes from "../components/Notes";
import Login from "../components/Login";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
    </Routes>
}