import React, { useState, useEffect } from "react";
import "./style.css";
import PokemonCard from "../PokemonCard";

const PokemonSelectorModal = ({
	setIsOpen,
	allPokemons,
	setAllPokemons,
	selectPokemon,
	loadMore,
	setLoadMore,
}) => {
	// const [pokemonInput, setPokemonInput] = useState("");
	// pokemonInput = document.querySelector(".pokemon-input");

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
		if (allPokemons.length === 0) {
			getAllPokemons();
		}
	}, []);

	return (
		<div className="modal-container">
			<h2 className="modal-title" onClick={setIsOpen}>
				Selecione de 1 a 6 Pokemon
			</h2>
			<button onClick={setIsOpen} className="close-modal-button">
				X
			</button>
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
					<button className="load-more" onClick={() => getAllPokemons()}>
						Ver mais
					</button>
				</div>
			</div>
		</div>
	);
};

export default PokemonSelectorModal;
