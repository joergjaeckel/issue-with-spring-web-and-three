import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import { useState } from 'react'
import logo from '../logo.svg'
import {a, useSpring, config} from '@react-spring/web'

const App = () => {
    const [count, setCount] = useState(0)

    const {rotate} = useSpring({
        from: { rotate: 0 },
        to: { rotate: 360 },
        loop: true,
        config: config.molasses,
    })

    return (
        <div className="App">
            <header className="App-header">
                <a.img src={logo} className="" alt="logo" style={{height: '12rem', width: '12rem', rotate}} />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

