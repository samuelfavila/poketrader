import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import PokemonSlot from "../../components/PokemonSlot";
import TradeButton from "../../components/TradeButton";

const Home = () => {
	const [xpFirstCombination, setXpFirstCombination] = useState(0);
	const [xpSecondCombination, setXpSecondCombination] = useState(0);
	const [resultMessage, setResultMessage] = useState("");

	const simulateTrade = () => {
		const subtractFirstFromSecond = xpSecondCombination - xpFirstCombination;
		const subtractSecondFromFirst = xpFirstCombination - xpSecondCombination;

		if (xpSecondCombination === 0 || xpFirstCombination === 0) {
			setResultMessage("Troca inválida! Selecione os pokemons.");
			return;
		}

		if (
			(subtractFirstFromSecond < 50 && subtractFirstFromSecond >= 0) ||
			(subtractSecondFromFirst < 50 && subtractSecondFromFirst >= 0)
		) {
			setResultMessage("Troca justa!");
		} else {
			setResultMessage("Troca injusta!");
		}
	};

	return (
		<div className="app-container">
			<Header />
			<div className="box">
				<PokemonSlot
					xpTotal={xpFirstCombination}
					setXpTotal={setXpFirstCombination}
				/>
				<PokemonSlot
					xpTotal={xpSecondCombination}
					setXpTotal={setXpSecondCombination}
				/>
			</div>
			<div className="wrapper">
				<p className="result-message">{resultMessage}</p>
				<TradeButton onClick={simulateTrade} />
			</div>
		</div>
	);
};

export default Home;
