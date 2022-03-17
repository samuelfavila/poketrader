import React from "react";
import PokemonTradeInfo from "../PokemonTradeInfo";

const TradeHistory = ({ historyData }) => {
	return (
		<>
			<div className="combination-wrapper">
				{historyData.tradedPokemonsFirstCombination.map(
					({ name, base_experience }, index) => {
						return (
							<PokemonTradeInfo
								key={index}
								name={name}
								baseXp={base_experience}
							/>
						);
					}
				)}
			</div>
			<p className="separation-line">-----X-----</p>
			<div className="combination-wrapper">
				{historyData.tradedPokemonsSecondCombination.map(
					({ name, base_experience }, index) => {
						return (
							<PokemonTradeInfo
								key={index}
								name={name}
								baseXp={base_experience}
							/>
						);
					}
				)}
			</div>
		</>
	);
};

export default TradeHistory;
