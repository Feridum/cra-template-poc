import React from 'react'
import './Welcome.css'

export const Welcome: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/screens/Welcome.tsx</code> and save to
                    reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Welcome
