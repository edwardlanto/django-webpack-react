import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

if ("serviceWorker" in navigator) {
    console.log('Exists')
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js");
    })
}else{
    console.log('doesnt exist')
}

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));