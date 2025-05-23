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
