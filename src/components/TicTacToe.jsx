import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");

  const checkWinner = () => {
    if (data[0] !== "" && data[0] === data[1] && data[1] === data[2]) {
      setWin(data[0]);
    } else if (data[3] !== "" && data[3] === data[4] && data[4] === data[5]) {
      setWin(data[3]);
    } else if (data[6] !== "" && data[6] === data[7] && data[7] === data[8]) {
      setWin(data[6]);
    } else if (data[0] !== "" && data[0] === data[3] && data[3] === data[6]) {
      setWin(data[0]);
    } else if (data[1] !== "" && data[1] === data[4] && data[4] === data[7]) {
      setWin(data[1]);
    } else if (data[2] !== "" && data[2] === data[5] && data[5] === data[8]) {
      setWin(data[2]);
    } else if (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) {
      setWin(data[0]);
    } else if (data[2] !== "" && data[2] === data[4] && data[4] === data[6]) {
      setWin(data[2]);
    } else if (!data.includes("")) {
      setWinner("It's a draw!");
      setLock(true);
    }
  };

  const setWin = (player) => {
    setLock(true);
    if (player === "x") {
      setWinner("Player 1 (❌) wins!");
    } else {
      setWinner("Player 2 (⭕) wins!");
    }
  };

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' />`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' />`;
      data[num] = "o";
    }

    setCount(count + 1);
    setTimeout(checkWinner, 100); // Give time to render image
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    setWinner("");

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
      box.innerHTML = "";
    });
  };

 return (
  <div className='container'>
    <h1 className="title">Tic Tac Toe</h1>
    <div className="board">
      <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
      <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
    </div>
    {winner && <h2 className="winner">{winner}</h2>}
    <button className="reset" onClick={resetGame}>Reset</button>
  </div>
);

};

export default TicTacToe;
