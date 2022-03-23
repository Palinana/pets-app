import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Index from './components/index';
import Navbar from './components/navigation/Navbar';
import AboutUs from './components/company/AboutUs';

function App() {
    return (
        <div className="App">
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>   
        </div>
    );
}

export default App;
