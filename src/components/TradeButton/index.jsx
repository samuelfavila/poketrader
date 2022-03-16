import React from "react";
import "./style.css";

const TradeButton = ({ onClick }) => {
	return (
		<div>
			<button className="trade-button" onClick={onClick}>
				Simular Troca
			</button>
		</div>
	);
};

export default TradeButton;
