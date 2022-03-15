import React, { useState, useEffect } from "react";
import "./style.css";
import PokemonCard from "../PokemonCard";

const PokemonSelectorModal = ({ setIsOpen }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadMore, setLoadMore] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
	);

	const getAllPokemons = async () => {
		const res = await fetch(loadMore);
		const data = await res.json();

		setLoadMore(data.next);

		function createPokemonObject(results) {
			results.forEach(async (pokemon) => {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				const data = await res.json();
				setAllPokemons((currentList) => [...currentList, data]);
			});
		}
		createPokemonObject(data.results);
	};

	// const [selectedPokemon, setSelectedPokemon] = useState(
	// 	`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
	// );

	// const getOnePokemon = async () => {
	// 	const res = await fetch(selectedPokemon);
	// 	const data = await res.json();
	// };

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<div className="modal-container">
			<h1>Selecione um Pokemon</h1>
			<button onClick={setIsOpen}>X</button>
			<div className="wrapper">
				<input type="text" />
				<div className="pokemon-list">
					{allPokemons.map((pokemon, index) => (
						<PokemonCard
							key={index}
							id={pokemon.id}
							image={pokemon.sprites.other.dream_world.front_default}
							name={pokemon.name}
							type={pokemon.types[0].type.name}
							baseXp={pokemon.base_experience}
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
