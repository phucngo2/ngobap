import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "pages/Home";
import Admin from "pages/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
