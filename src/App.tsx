import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from "./pages/HomePage/HomePage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {UserPage} from "./pages/UserPage/UserPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="posts/:id" element={<UserPage/>}/>
            </Routes>
        </>
    );
}

export default App;
