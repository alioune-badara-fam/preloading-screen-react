import React from 'react'
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {

    const [count, setCount] = useState(0)


    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Formulaire de contact</h1>
            <div className="card">
                <Link to={'/'}>
                    <button>
                        Accueil
                    </button>
                </Link>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}
