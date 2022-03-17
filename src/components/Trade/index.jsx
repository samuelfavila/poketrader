import React, { useEffect } from "react";
import "./style.css";
import TradeButton from "../TradeButton";
import TradeHistory from "../TradeHistory";

const Trade = ({ onClick, historyData, setHistoryData }) => {
	useEffect(() => {
		setHistoryData(JSON.parse(localStorage.getItem("historyItem")));
	}, []);

	return (
		<>
			<div className="button-wrapper">
				<TradeButton onClick={onClick} />
			</div>
			<h2 className="history-title">Histórico de trocas</h2>
			<div className="trade">
				{historyData
					? historyData.map((item, index) => (
							<div
								key={index}
								className={
									item.result.includes("injusta")
										? "invalid-trade-container"
										: "history-container"
								}
							>
								<h2>{item.result}</h2>
								<TradeHistory historyData={item} />
							</div>
					  ))
					: "Você ainda não fez nenhuma troca"}
			</div>
		</>
	);
};

export default Trade;
