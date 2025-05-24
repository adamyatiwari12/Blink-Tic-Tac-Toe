import React from "react";

const Setup = (props) => {
  const EMOJI_CATEGORIES = {
    animals:["🐶", "🐱", "🐵", "🐰", "🦊", "🐻"],
    food:["🍕", "🍟", "🍔", "🍩", "🌮", "🍎"],
    sports:["⚽", "🏀", "🏈", "🎾", "🏐", "🏓"],
    nature:["🌸", "🌺", "🌻", "🌷", "🌹", "🌼"],
    space: ["🌟", "⭐", "🌙", "☀️", "🪐", "🚀"],
  };

    const handleCategoryChange1 = (category) => {   
        props.setEmojiPool1(EMOJI_CATEGORIES[category]);
    }

    const handleCategoryChange2 = (category) => {   
        props.setEmojiPool2(EMOJI_CATEGORIES[category]);
    }

  return (
  <div>
    <h1 className="text-3xl font-bold text-center mb-4">Setup</h1>
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label className="block text-lg mb-2">Player 1:</label>
        <select className="border rounded p-2" onChange={(e)=>handleCategoryChange1(e.target.value)}>
          {Object.keys(EMOJI_CATEGORIES).map((category) => (
            <option key={category} value={category} >
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2">Player 2:</label>
        <select className="border rounded p-2" onChange={(e)=>handleCategoryChange2(e.target.value)}>
          {Object.keys(EMOJI_CATEGORIES).map((category) => (
            <option key={category} value={category} >
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=> props.setGameState('playing')}>Start Game</button>
    </div>
  </div>);
};

export default Setup;
