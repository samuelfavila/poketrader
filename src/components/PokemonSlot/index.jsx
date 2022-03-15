import React, { useEffect, useState } from "react";
import "./style.css";
import PokemonSelectorModal from "../PokemonSelectorModal";

const PokemonSlot = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="pokemon-container">
			<h2
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Escolher pokemon
			</h2>
			{isOpen && (
				<PokemonSelectorModal setIsOpen={() => setIsOpen(!isOpen)} />
			)}
		</div>
	);
};

export default PokemonSlot;
