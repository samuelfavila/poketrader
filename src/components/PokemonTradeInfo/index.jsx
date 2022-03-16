import React from "react";
import "./style.css";

const PokemonTradeInfo = ({ name, baseXp }) => {
	return (
		<div className="pokemon-info">
			<h3>{name}</h3>
			<small>Base XP: {baseXp}</small>
		</div>
	);
};

export default PokemonTradeInfo;
