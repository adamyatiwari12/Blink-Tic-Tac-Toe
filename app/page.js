"use client";
import { useState } from "react";
import Setup from "./components/Setup";
import Cell from "./components/Cell";
import HelpSection from "./components/HelpSection";
import { HelpCircle } from "lucide-react";

export default function BlinkTicTacToe() {

  const [gameState, setGameState] = useState("setup");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [emojiPool1, setEmojiPool1] = useState([]);
  const [emojiPool2, setEmojiPool2] = useState([]);
  const [player1Emojis, setPlayer1Emojis] = useState([]);
  const [player2Emojis, setPlayer2Emojis] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showHelp, setShowHelp] = useState(false);
  
  const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
  
  function getRandomEmoji() {
    const pool = currentPlayer === 1 ? emojiPool1 : emojiPool2;
    const curr= currentPlayer === 1 ? player1Emojis : player2Emojis;
    const used = curr.map(e => e.emoji);
  const available = pool.filter(elem => !used.includes(elem));
  return available[Math.floor(Math.random() * available.length)];
  };
  
  const playSound = (filename) => {
  const audio = new Audio(`/sounds/${filename}`);
  audio.play();
};

  const handleCellClick = (index) => {
    if (board[index]){
      playSound("error.mp3");
      return;
    }
    playSound("pop.mp3");
    
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

    const win = checkWinner(newBoard);
    if (win) {
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
        playSound("gameWin.mp3");
        setGameState("finished");
        return combo;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="p-4 sm:p-6 lg:p-7 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse px-2">
          ✨ Blink Tic Tac Toe ✨
        </h1>
        <button
          className="absolute top-4 right-4 max-sm:right-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-2 px-3 sm:px-4 rounded-full transition-all duration-200 hover:scale-105 text-sm sm:text-base"
          onClick={() => {
            playSound("help.mp3");
            setShowHelp(true)}}
        >
          <HelpCircle className="inline w-3 h-3 sm:w-5 sm:h-5"/> <span className="hidden sm:inline">Help</span>
        </button>
      </div>

      {showHelp && <HelpSection setShowHelp={setShowHelp} />}

      {gameState === "setup" && (
        <Setup
          emojiPool1={emojiPool1}
          emojiPool2={emojiPool2}
          setEmojiPool1={setEmojiPool1}
          setEmojiPool2={setEmojiPool2}
          setGameState={setGameState}
        />
      )}
      
      {gameState === "finished" && (
        <div className="text-center pt-4 sm:pt-6 lg:pt-8 mb-4 sm:mb-6 lg:mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-bounce">
            🎉 Player {winner} Wins! 🎉
          </h2>
        </div>
      )}
      
      {(gameState === "playing" || gameState === "finished") && (
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8 px-4">
          {gameState === "playing" && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Current Player: <span className={currentPlayer === 1 ? "text-cyan-400" : "text-pink-400"}>Player {currentPlayer}</span>
              </h3>
            </div>
          )}
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {board.map((cell, idx) => (
                <Cell
                  key={idx}
                  value={cell}
                  color={winningCells.includes(idx) ? "yellow" : "white"}
                  disabled={gameState==="finished"}
                  onClick={() => handleCellClick(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {gameState === "finished" && (
        <div className="flex justify-center pb-4 sm:pb-6 lg:pb-8 mt-4 px-4">
          <button
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg duration-200 hover:scale-105"
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
              playSound("playAgain.mp3");
            }}
          >
            🔄 Play Again! 🔄
          </button>
        </div>
      )}
    </div>
  );
}