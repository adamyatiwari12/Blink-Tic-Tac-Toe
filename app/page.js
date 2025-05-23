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
  const [player1Emojis, setPlayer1Emojis] = useState(null);
  const [player2Emojis, setPlayer2Emojis] = useState(null);
  const [winner, setWinner] = useState(null);

  function getRandomEmoji() {
    const pool = currentPlayer === 1 ? emojiPool1 : emojiPool2;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const handleCellClick = (index) => {
    if (board[index]) return;

    const currentEmojis =
      currentPlayer === 1 ? [...player1Emojis] : [...player2Emojis];
    const oldestIndex = currentEmojis[0]?.index;
    if (currentEmojis.length === 3 && index === oldestIndex) return;

    if (currentEmojis.length === 3) {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[oldestIndex] = null;
        return newBoard;
      });
      currentEmojis.shift();

      const emoji = getRandomEmoji(selectedCategories[currentPlayer]);
      currentEmojis.push({ index, emoji });

      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[index] = { player: currentPlayer, emoji };
        return newBoard;
      });

      if (currentPlayer === 1) setPlayer1Emojis(currentEmojis);
      else setPlayer2Emojis(currentEmojis);

      checkWinner();
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
        <div>{/* Display winner and reset button */}</div>
      )}
    </div>
  );
}
