import React from "react";

function suspensify(promise) {

      return { name: "Fake" };
    };

let pokemon = suspensify(
  fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => 
    res.json()
  )
);

export default function PokemonDetail() {
  return <div>{pokemon.name}</div>;
}
