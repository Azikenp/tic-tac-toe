import { useState } from "react";
import Square from "../components/Square";

const Board = () => {
  const [sqaures, setSqaures] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "0"
  );
  const [winner, setWinner] = useState(null);

  function setSquareValue(index) {
    const newData = sqaures.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });

    setSqaures(newData);
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  }

  return (
    <div>
      <p>Hey {currentPlayer}, It's your turn</p>
      {Array(9)
        .fill(null)
        .map((_, i) => {
          return (
            <Square
              winner={winner}
              key={i}
              onClick={() => setSquareValue(i)}
              value={sqaures[i]}
            />
          );
        })}
    </div>
  );
};

export default Board;
