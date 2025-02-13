import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/HeaderComponent.js';
import Navbar from './components/NavbarComponent.js';
import Banner from './components/BannerComponent.js';
import Footer from './components/FooterComponent.js';

function MyComponents(){
    return(<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}
createRoot(document.getElementById('root')).render(<MyComponents/>);