import React from "react";
import "./style.css";
import Header from "../../components/Header";
import PokemonSlot from "../../components/PokemonSlot";
import TradeButton from "../../components/TradeButton";

const Home = () => {
	return (
		<div className="app-container">
			<Header />
			<div className="box">
				<PokemonSlot />
				<PokemonSlot />
			</div>
			<TradeButton />
		</div>
	);
};

export default Home;
