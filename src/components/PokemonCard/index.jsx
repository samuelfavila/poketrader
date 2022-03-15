import React from "react";
import "./style.css";

const PokemonCard = ({ id, image, name, type, baseXp }) => {
	const style = type + " card-container";
	return (
		<div className={style}>
			<div className="id">
				<small>#0{id}</small>
			</div>
			<img src={image} alt={name} />
			<div className="detail-wrapper">
				<h3>{name}</h3>
				<small>Type: {type}</small>
				<br />
				<small>Base XP: {baseXp}</small>
			</div>
		</div>
	);
};

export default PokemonCard;
