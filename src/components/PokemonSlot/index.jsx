import React, { useState } from "react";
import "./style.css";
import PokemonSelectorModal from "../PokemonSelectorModal";
import PokemonCard from "../PokemonCard";

const PokemonSlot = () => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPokemons, setSelectedPokemons] = useState([]);
	// const elemnentSelectedPokemons = document.querySelector('.selected-pokemons');

	function selectPokemon(id) {
		setSelectedPokemons((currentList) => [...currentList, id]);
	}

	return (
		<div className="pokemon-container">
			<h2
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Escolher pokemon para troca
			</h2>
			<div className="selected-pokemons">
				{selectedPokemons.map((pokemonId, index) => {
					// console.log(allPokemons, pokemonId);
					const pokemon = allPokemons[pokemonId - 1];
					return (
						<PokemonCard
							key={index}
							id={pokemon.id}
							image={pokemon.sprites.other.dream_world.front_default}
							name={pokemon.name}
							type={pokemon.types[0].type.name}
							baseXp={pokemon.base_experience}
							// 	onClick={removeSelectedPokemon}
						/>
					);
				})}
			</div>
			{isOpen && (
				<PokemonSelectorModal
					setIsOpen={() => setIsOpen(!isOpen)}
					allPokemons={allPokemons}
					setAllPokemons={setAllPokemons}
					selectPokemon={selectPokemon}
				/>
			)}
		</div>
	);
};

export default PokemonSlot;
