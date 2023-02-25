import React from 'react';

function Logo(props) {
    console.log(props)
    return <header>
    <h1>Welcome to the {props.AppName}'s Pokedex {props.Trainee}</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon bird"></img>
    </header>;
  }
  export default Logo;