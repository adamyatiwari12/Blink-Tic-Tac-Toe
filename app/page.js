"use client";
import { useState } from "react";
import Setup from "./components/Setup";
import Cell from "./components/Cell";

export default function Home() {
  const [gameState, setGameState] = useState("setup"); // 'setup', 'playing', 'finished'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [emojiPool1, setEmojiPool1] = useState([]);
  const [emojiPool2, setEmojiPool2] = useState([]);
  const [player1Emojis, setPlayer1Emojis] = useState([]);
  const [player2Emojis, setPlayer2Emojis] = useState([]);
  const [winner, setWinner] = useState(null);

  function getRandomEmoji() {
    const pool = currentPlayer === 1 ? emojiPool1 : emojiPool2;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const handleCellClick = (index) => {
  if (board[index]) return;

  const currentEmojis =
    currentPlayer === 1 ? [...player1Emojis] : [...player2Emojis];

  if (currentEmojis.length === 3) {
    const oldestIndex = currentEmojis[0].index;
    if (index === oldestIndex) return;

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[oldestIndex] = null;
      return newBoard;
    });
    currentEmojis.shift();
  }

  const emoji = getRandomEmoji();
  currentEmojis.push({ index, emoji });

  const newBoard = [...board];
  newBoard[index] = { player: currentPlayer, emoji };
  setBoard(newBoard);

  if (currentPlayer === 1) setPlayer1Emojis(currentEmojis);
  else setPlayer2Emojis(currentEmojis);

  setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
      {gameState === "playing" && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="grid grid-cols-3 gap-2">
            {board.map((cell, idx) => (
              <Cell
                key={idx}
                value={cell}
                onClick={() => handleCellClick(idx)}
              />
            ))}
          </div>
        </div>
      )}
      {gameState === "finished" && (
        <div>
          <h2 className="text-4xl font-bold text-center">
            Player {winner} Wins!
          </h2>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setGameState("setup");
                setBoard(Array(9).fill(null));
                setCurrentPlayer(1);
                setPlayer1Emojis([]);
                setPlayer2Emojis([]);
                setWinner(null);
              }}
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
