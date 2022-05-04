import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import Footer from './components/Footer/Footer';
import './styles/App.scss';


function App({ }) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <AppRoutes />
                <Footer />
            </div>
        </BrowserRouter>
    )
};
export default App;