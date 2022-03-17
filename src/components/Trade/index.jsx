import React from "react";
import "./style.css";
import TradeButton from "../TradeButton";
import TradeHistory from "../TradeHistory";

const Trade = ({ onClick }) => {
	const historyData = JSON.parse(localStorage.getItem("historyItem"));
	return (
		<>
			<div className="button-wrapper">
				<TradeButton onClick={onClick} />
			</div>
			<div className="trade">
				{historyData
					? historyData.map((item, index) => (
							<div className="history-container">
								<h2>{item.result}</h2>
								<TradeHistory key={index} historyData={item} />
							</div>
					  ))
					: "Você ainda não fez nenhuma troca"}
			</div>
		</>
	);
};

export default Trade;
