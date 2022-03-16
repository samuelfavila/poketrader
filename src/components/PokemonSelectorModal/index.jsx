import React, { useState, useEffect } from "react";
import "./style.css";
import PokemonCard from "../PokemonCard";

const PokemonSelectorModal = ({
	setIsOpen,
	allPokemons,
	setAllPokemons,
	selectPokemon,
}) => {
	// const [pokemonInput, setPokemonInput] = useState("");
	// pokemonInput = document.querySelector(".pokemon-input");
	const [loadMore, setLoadMore] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
	);

	const getAllPokemons = async () => {
		const res = await fetch(loadMore);
		const data = await res.json();

		setLoadMore(data.next);

		async function createPokemonObject(results) {
			let pokemonList = [];
			for (let pokemon of results) {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				const data = await res.json();
				pokemonList.push(data);
			}
			setAllPokemons((currentList) => [...currentList, ...pokemonList]);
		}
		createPokemonObject(data.results);
	};

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<div className="modal-container">
			<h1>Selecione de 1 a 6 Pokemon</h1>
			<button onClick={setIsOpen}>X</button>
			<div className="wrapper">
				{/* <input
					type="text"
					className="pokemon-input"
					 value={pokemonInput}
					 onChange={(e) => setPokemonInput(e.target.value)}
				/> */}
				<div className="pokemon-list">
					{allPokemons.map((pokemon, index) => (
						<PokemonCard
							key={index}
							id={pokemon.id}
							image={pokemon.sprites.other.dream_world.front_default}
							name={pokemon.name}
							type={pokemon.types[0].type.name}
							baseXp={pokemon.base_experience}
							onClick={() => selectPokemon(pokemon)}
						/>
					))}
				</div>
				<button className="load-more" onClick={() => getAllPokemons()}>
					Ver mais
				</button>
			</div>
		</div>
	);
};

export default PokemonSelectorModal;
