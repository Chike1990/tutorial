// Create an application such that you are able to change the color of your background. 
// These colors should be different colors 
// The initial color of the application should be white

// Psuedocode
// import the necessary dependencies
// define a functional component called ChangeColorApp
// Create a state variable called bGColor to store the background. It should be initialized to white ("#ffffff")
// Define a funtion changeColor to change the color to a random color
// Render a UI component 
// Export the compnent as a default

import React, {useState} from "react";
import "./changecolor.css";

const ChangeColorApp = () =>{
    const [bGColor, setBGColor] = useState("#ffffff")

    const changeColor = () =>{
        const randomColor = `#${Math.floor(Math.random()*1677215).toString()}`
        setBGColor(randomColor)
    }

    return (
        <div className="color-change-container" style={{background: bGColor}}>
            <h1 >Color Change App</h1>
            <button className="change-color-button" onClick={changeColor}>change color</button>
        </div>
    )
}
export default ChangeColorApp;