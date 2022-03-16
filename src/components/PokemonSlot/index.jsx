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
		if (selectedPokemons.length >= 6) {
			document.querySelector("h3").innerHTML =
				"Você já escolheu 6 pokemons, remova 1 para adicionar outro";
			return;
		}

		setSelectedPokemons((currentList) => [...currentList, id]);
	}

	function removeSelectedPokemon(index) {
		const newSelectedPokemons = [...selectedPokemons];
		newSelectedPokemons.splice(index, 1);
		setSelectedPokemons(newSelectedPokemons);
		document.querySelector("h3").innerHTML = "";
	}

	return (
		<div className="pokemon-container">
			<h2
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Clique aqui para selecionar seus pokemons!
			</h2>
			<h3 className="aviso"></h3>
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
							onClick={() => removeSelectedPokemon(index)}
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
