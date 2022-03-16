import React from "react";
import "./style.css";

const TradeButton = ({ onClick }) => {
	return (
		<button className="trade-button" onClick={onClick}>
			Simular Troca
		</button>
	);
};

export default TradeButton;
