import Header from "./Header.jsx";
import Home from "./Home.jsx";
import DetailsCharacter from "./DetailsCharacter.jsx";
import "../styles/App.scss";
import getDataApi from "../services/api.js";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import localStorage from "../services/localStorage.js"

function App() {
  const [hogwartsData, setHogwartsData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  
  useEffect(() => {
    getDataApi().then((apiResult) => {
      setHogwartsData(apiResult);
    });
  },[])

  const handleName = (value) => {
    setNameFilter(value);
  };

  const handleHouse = (value) => {
    setHouseFilter(value);
  };

  const filteredNames = hogwartsData
    .filter((character) => {
      if (character.name.toLowerCase().includes(nameFilter.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .filter((character) => {
      if (houseFilter === "Gryffindor") {
        return character.house === "Gryffindor";
      } else if (houseFilter === "Hufflepuff") {
        return character.house === "Hufflepuff";
      } else if (houseFilter === "Slytherin") {
        return character.house === "Slytherin";
      } else if (houseFilter === "Ravenclaw") {
        return character.house === "Ravenclaw";
      } else {
        return true;
      }
    });
  if (filteredNames.length === 0) {
    filteredNames.push({
      name: "There is no such character, try again!",
      image: `https://media.tenor.com/YLmdxWUI9uAAAAAM/ron-weasley-crying.gif`,
    });
  }

  useEffect(() => {
  localStorage.set('byName',nameFilter);
  localStorage.set('byHouse',houseFilter);
  }, [nameFilter, houseFilter]);

  const  handleRestart =()=> {
  if (localStorage.get("byName") || localStorage.get("byHouse")) {
    localStorage.remove("byName");
    localStorage.remove("byHouse");
    setNameFilter("");
    setHouseFilter("Gryffindor");
  }
  };


  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              nameFilter={nameFilter}
              handleName={handleName}
              filteredNames={filteredNames}
              handleHouse={handleHouse}
              houseFilter={houseFilter}
              handleRestart={ handleRestart}
            />
          }
        />
        <Route
          path="/details/:charId"
          element={<DetailsCharacter filteredNames={filteredNames} />}
        />
      </Routes>
    </div>
  );
}

export default App;
