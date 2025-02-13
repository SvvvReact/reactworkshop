import React from 'react';
import { createRoot } from 'react-dom/client';

function Header(){
    return(<div>
        <h1>Header Component</h1>
    </div>);
}
function Navbar(){
    return(<div>
        <h1>Navbar Component</h1>
    </div>);
}
function Banner(){
    return(<div>
        <h1>Banner Component</h1>
    </div>);
}
function Footer(){
    return(<div>
        <h1>Footer Component</h1>
    </div>);
}

function MyComponents(){
    return(<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}
createRoot(document.getElementById('root')).render(<MyComponents/>);