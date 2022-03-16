import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import PokemonSlot from "../../components/PokemonSlot";
import TradeButton from "../../components/TradeButton";
import Trade from "../../components/Trade";

const Home = () => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadMore, setLoadMore] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
	);
	const [
		selectedPokemonsFirstCombination,
		setSelectedPokemonsFirstCombination,
	] = useState([]);
	const [
		selectedPokemonsSecondCombination,
		setSelectedPokemonsSecondCombination,
	] = useState([]);
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
					allPokemons={allPokemons}
					setAllPokemons={setAllPokemons}
					loadMore={loadMore}
					setLoadMore={setLoadMore}
					selectedPokemons={selectedPokemonsFirstCombination}
					setSelectedPokemons={setSelectedPokemonsFirstCombination}
				/>
				<PokemonSlot
					xpTotal={xpSecondCombination}
					setXpTotal={setXpSecondCombination}
					allPokemons={allPokemons}
					setAllPokemons={setAllPokemons}
					loadMore={loadMore}
					setLoadMore={setLoadMore}
					selectedPokemons={selectedPokemonsSecondCombination}
					setSelectedPokemons={setSelectedPokemonsSecondCombination}
				/>
			</div>

			<p className="result-message">{resultMessage}</p>

			<div className="history-container">
				<Trade
					onClick={simulateTrade}
					selectedPokemonsFirstCombination={
						selectedPokemonsFirstCombination
					}
					selectedPokemonsSecondCombination={
						selectedPokemonsSecondCombination
					}
					allPokemons={allPokemons}
				/>
			</div>
		</div>
	);
};

export default Home;
