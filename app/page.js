"use client";
import { useState } from "react";
import Setup from "./components/Setup";
import Cell from "./components/Cell";

export default function Home() {
  const [gameState, setGameState] = useState("setup");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [emojiPool1, setEmojiPool1] = useState([]);
  const [emojiPool2, setEmojiPool2] = useState([]);
  const [player1Emojis, setPlayer1Emojis] = useState([]);
  const [player2Emojis, setPlayer2Emojis] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);


  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function getRandomEmoji() {
    const pool = currentPlayer === 1 ? emojiPool1 : emojiPool2;
    return pool[Math.floor(Math.random() * pool.length)];
  }

const handleCellClick = (index) => {
  if (board[index]) return;

  const currentEmojis =
    currentPlayer === 1 ? [...player1Emojis] : [...player2Emojis];

  const newBoard = [...board];


  if (currentEmojis.length === 3) {
    const oldestIndex = currentEmojis[0]?.index;
    if (index === oldestIndex) return;

    newBoard[oldestIndex] = null;
    currentEmojis.shift();
  }

  const emoji = getRandomEmoji();
  currentEmojis.push({ index, emoji });
  newBoard[index] = { player: currentPlayer, emoji };

  setBoard(newBoard);

  if (currentPlayer === 1) {
    setPlayer1Emojis(currentEmojis);
  } else {
    setPlayer2Emojis(currentEmojis);
  }

  const win=checkWinner(newBoard);
  if(win){
    setWinningCells(win)
  }

  setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
};

  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[b] &&
        board[c] &&
        board[a].player === board[b].player &&
        board[a].player === board[c].player
      ) {
        setWinner(board[a].player);
        setGameState("finished");
        return combo;
      }
    }
  };

  return (
    <div>
      <h1 className="text-6xl font-bold text-center ">Blink Tic Tac Toe</h1>
      {gameState === "setup" && (
        <Setup
          setEmojiPool1={setEmojiPool1}
          setEmojiPool2={setEmojiPool2}
          setGameState={setGameState}
        />
      )}
      {gameState === "finished" && (
         <h2 className="text-4xl font-bold text-center">
            Player {winner} Wins!
          </h2>
      )}
      
      {(gameState === "playing" || gameState=="finished") && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-3 gap-2">
            {board.map((cell, idx) => (
              <Cell
                key={idx}
                value={cell}
                color={winningCells.includes(idx) ? "yellow" : "white"}
                onClick={() => handleCellClick(idx)}
              />
            ))}
          </div>
        </div>
      )}
      {gameState === "finished" && (
        <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded text-center"
              onClick={() => {
                setGameState("setup");
                setBoard(Array(9).fill(null));
                setCurrentPlayer(1);
                setPlayer1Emojis([]);
                setPlayer2Emojis([]);
                setEmojiPool1([]);
                setEmojiPool2([]);
                setWinner(null);
                setWinningCells([]);
              }}
            >
              Restart Game
            </button>
        </div>
      )}
    </div>
  );
}
