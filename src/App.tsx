import React from "react";
import areyawinning from "./are ya winnin son.jpg";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={areyawinning} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Donovan Messer , Vincent Ains, Lawrence Huffman
                </p>
            </header>
        </div>
    );
}

export default App;
