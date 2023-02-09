import React from "react";
import { BrowserRouter as Router,Routes,Route,useParams } from "react-router-dom";
import { Main,Planets,Pers,Loader } from "./components"


function App() {

  const url = "https://swapi.dev/api/films/?format=json"
  const urlPl = "https://swapi.dev/api/planets/?format=json"
  const urlPe = "https://swapi.dev/api/people/?format=json"

  const [ data, setData ] = React.useState([])
  const [ planets, setPlanets ] = React.useState([])
  const [ pers, setPers] = React.useState([])
  const [ loading, setLoading ] = React.useState(false)

  React.useEffect(() => {
    setLoading(true);
    fetch(url).then(response => response.json()).then((data) => {
      setData(data)
    });
    setLoading(false);
  }, []);

  React.useEffect(() => {
    fetch(urlPl).then(response => response.json()).then((planets) => {
      setPlanets(planets)
    });

  }, []);
  React.useEffect(() => {
    fetch(urlPe).then(response => response.json()).then((pers) => {
      setPers(pers)
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Main loading = {loading} data = { data }/> }></Route>
        <Route exact path="/pers" element={ <Pers data = { pers }/> }></Route>
        <Route exact path="/planets" element={ <Planets data = { planets }/> }></Route>
      </Routes>
    </Router>
  )
}

export default App;