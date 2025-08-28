import WelcomeMessage from './components/WelcomeMessage';
import Header from '.components/Header';
import MainContent from './MainContent';
import Footer from './Footer';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
        <div>
            <WelcomeMessage />
        </div>
    );
}

function Header() {
    return 
        <h1>Header </h1>;
}
function MainContent() {
    return <p>MainContent </p>;
}
  
function Footer() {
    return <p>Footer </p>;
}


export default App;