import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

if ("serviceWorker" in navigator) {
    console.log('Exists')
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("C:/Users/henry/Desktop/food-app-django/djsr/frontend/sw.js");
    })
}

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));