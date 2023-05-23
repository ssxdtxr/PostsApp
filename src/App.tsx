import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {UserPage} from "./pages/UserPage/UserPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="posts/user/:id" element={<UserPage/>}/>
        </Routes>
    );
}

export default App;
