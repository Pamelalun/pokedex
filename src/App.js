import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";

function App () {
  return (
    <div>
      <Logo AppName = "Pamela" Trainee = "CYF"/>
      <BestPokemon/>
      <CaughtPokemon/>
    </div>
  );
}

function BestPokemon () {
  let abilities = [ "Anticipation", "Adaptability", "Run-Away"];
  return <div>
    <p>My favorite Pokemon is Squirtle</p>
    <ul>{abilities.map( (list) =><li>{list}</li>)}
    </ul>
  </div>;
}

function CaughtPokemon () {
  let date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>;

}

ReactDOM.render(<App />, document.querySelector("#root"));
export default App;
