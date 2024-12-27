import { useState } from "react";
import Square from "../components/Square";

const Board = () => {
  const [sqaures, setSqaures] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  function reset(){
    setSqaures(Array(9).fill(null))
  }

  function setSquareValue(index) {
    const newData = sqaures.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });

    setSqaures(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  return (
    <div>
      <p>Hey {currentPlayer}, It's your turn</p>

      <div className="grid">
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
      
      <button className="reset" onClick={reset}>RESET</button>
    </div>
  );
};

export default Board;
