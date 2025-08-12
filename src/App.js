import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import Products from "./Components/Products";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils - Light Mode"; // can be used in websites like facebook where title show number of messages
      
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textutils - Dark Mode";
      setInterval(() => {
        document.title = "Textutils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
    }
  };

  // const toggleMode= (color)=>{
  //   setMode(color);
  // }
  return (
    // <Router>
    //   <NavBar title="TextUtils" mode={mode} togglemode={togglemode} />
    //   {/* <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
    //   <Alert message={alert} />
    //   <div className="container mt-3">
    //     <Routes>
    //       <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}/>
    //       <Route exact path="/about" element={<About mode={mode} />} />
    //       <Route exact path="/product" element={<Products mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <NavBar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert message={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
    </>

  );
}

export default App;
