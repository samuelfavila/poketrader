import React, { useState } from "react";
import "./style.css";
import PokemonSelectorModal from "../PokemonSelectorModal";
import PokemonCard from "../PokemonCard";

const PokemonSlot = ({ xpTotal, setXpTotal }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPokemons, setSelectedPokemons] = useState([]);
	const [message, setMessage] = useState("");
	const [xpMessage, setXpMessage] = useState(0);
	const [instruction, setInstruction] = useState(
		"Clique aqui para selecionar seus pokemons!"
	);

	// const elemnentSelectedPokemons = document.querySelector('.selected-pokemons');

	function selectPokemon(pokemon) {
		setInstruction("Clique aqui para trocar sua combinação");
		if (selectedPokemons.length >= 6) {
			setMessage(
				"Você já escolheu 6 pokemons! Reitire um para colocar outro."
			);
			return;
		}
		const newMessage = xpTotal + pokemon.base_experience;
		setSelectedPokemons((currentList) => [...currentList, pokemon]);
		setXpTotal(newMessage);
		setXpMessage(newMessage);
	}

	function removeSelectedPokemon(index) {
		const newMessage = xpTotal - selectedPokemons[index].base_experience;
		const newSelectedPokemons = [...selectedPokemons];
		newSelectedPokemons.splice(index, 1);
		setXpTotal(newMessage);
		setXpMessage(newMessage);
		if (newSelectedPokemons.length === 0) {
			setInstruction("Clique aqui para selecionar seus pokemons!");
		}
		setSelectedPokemons(newSelectedPokemons);
		setMessage("");
	}

	return (
		<div className="pokemon-container">
			<h2
				className="instruction"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{instruction}
			</h2>
			<div className="selected-pokemons">
				{selectedPokemons.map(({ id }, index) => {
					// console.log(allPokemons, pokemonId);
					const pokemon = allPokemons[id - 1];
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
			<h3 className="message">{message}</h3>
			<h3 className="total-basexp">{xpMessage}</h3>
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
