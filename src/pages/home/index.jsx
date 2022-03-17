import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import PokemonSlot from "../../components/PokemonSlot";
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
	const [historyData, setHistoryData] = useState([]);

	const simulateTrade = async () => {
		const subtractFirstFromSecond = xpSecondCombination - xpFirstCombination;
		const subtractSecondFromFirst = xpFirstCombination - xpSecondCombination;
		let result = "";
		if (xpSecondCombination === 0 || xpFirstCombination === 0) {
			setResultMessage("Troca inválida! Selecione os pokemons.");
			return;
		}

		if (
			(subtractFirstFromSecond < 50 && subtractFirstFromSecond >= 0) ||
			(subtractSecondFromFirst < 50 && subtractSecondFromFirst >= 0)
		) {
			result = "Troca justa :)";
			setResultMessage(result);
		} else {
			result = "Troca injusta :(";
			setResultMessage(result);
		}

		const tradedPokemonsFirstCombination =
			selectedPokemonsFirstCombination.map(({ name, base_experience }) => ({
				name,
				base_experience,
			}));
		const tradedPokemonsSecondCombination =
			selectedPokemonsSecondCombination.map(({ name, base_experience }) => ({
				name,
				base_experience,
			}));

		const loadHistory = JSON.parse(localStorage.getItem("historyItem"));
		if (loadHistory) {
			const history = {
				tradedPokemonsFirstCombination,
				tradedPokemonsSecondCombination,
				result: result,
			};
			loadHistory.push(history);
			await localStorage.setItem("historyItem", JSON.stringify(loadHistory));
			setHistoryData(JSON.parse(localStorage.getItem("historyItem")));
		} else {
			const newLocalStorage = [
				{
					tradedPokemonsFirstCombination,
					tradedPokemonsSecondCombination,
					result: result,
				},
			];
			await localStorage.setItem(
				"historyItem",
				JSON.stringify(newLocalStorage)
			);
			setHistoryData(JSON.parse(localStorage.getItem("historyItem")));
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

			<Trade
				onClick={simulateTrade}
				selectedPokemonsFirstCombination={selectedPokemonsFirstCombination}
				selectedPokemonsSecondCombination={
					selectedPokemonsSecondCombination
				}
				allPokemons={allPokemons}
				historyData={historyData}
				setHistoryData={setHistoryData}
			/>
		</div>
	);
};

export default Home;
