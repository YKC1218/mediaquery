import { useState } from "react";
import Login from "./Components/pages/Login";
import Aboutus from "./Components/pages/Aboutus";
import Main from "./Components/pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  var Jimmy = "jimnmy";
  const [name, setName] = useState("");
  const [listOfJimmy, setListOfJimmy] = useState([]);

  return (
    <>
      <Router>
        <Route path="/:name" exact render={() => <Main />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/aboutus" render={() => <Aboutus />} />
      </Router>

      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setListOfJimmy([...listOfJimmy, name]);
          setName("");
          console.log(listOfJimmy);
        }}
      >
        Add name
      </button>
    </>
  );
}

export default App;
