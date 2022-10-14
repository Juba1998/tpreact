import './App.css';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';
import Example3 from './components/examples/Example3';
import Example4 from './components/examples/Example4';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Todo from './components/TodoList/Todo';
import NavbarButton from "./components/NavbarButton";
import Main from "./components/Main";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className="App">
      
      {/* <Header/> */}
      <NavbarButton 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
      
        <Todo darkMode={darkMode} />
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
