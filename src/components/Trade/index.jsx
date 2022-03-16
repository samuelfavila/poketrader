import React, { useState } from "react";
import "./style.css";
import PokemonTradeInfo from "../PokemonTradeInfo";
import TradeButton from "../TradeButton";

const Trade = ({
	onClick,
	selectedPokemonsFirstCombination,
	selectedPokemonsSecondCombination,
	allPokemons,
	tradeValue,
}) => {
	const style = tradeValue + " trade";

	return (
		<>
			<TradeButton onClick={onClick} />
			<div className="trade-container">
				<div className={style}>
					<div className="combination-wrapper">
						{selectedPokemonsFirstCombination.map(({ id }, index) => {
							const pokemon = allPokemons[id - 1];
							return (
								<PokemonTradeInfo
									key={index}
									name={pokemon.name}
									baseXp={pokemon.base_experience}
								/>
							);
						})}
					</div>
					<p className="separation-line">-----X-----</p>
					<div className="combination-wrapper">
						{selectedPokemonsSecondCombination.map(({ id }, index) => {
							const pokemon = allPokemons[id - 1];
							return (
								<PokemonTradeInfo
									key={index}
									name={pokemon.name}
									baseXp={pokemon.base_experience}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Trade;
