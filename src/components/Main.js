import React from "react";

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">TP REACT JS</h1>
            <ul className="main--facts">
                <li>Le composant pour le bouton est la NavBar, elle comprend un titre avec un bouton et ses animations css</li>
                <li>Switcher entre le mode light/dark</li>
                <li>Harfouche Juba</li>
            </ul>
        </main>
    )
}