import React from "react";

const Setup = (props) => {
  const EMOJI_CATEGORIES = {
  animals: [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🦁",
    "🐷", "🐸", "🐔", "🐧", "🦉", "🦅", "🦆", "🐢", "🐍", "🦎",
    "🦖", "🦕", "🦇", "🐙", "🐬", "🐳", "🐋", "🦈", "🐠", "🐡"
  ],
  food: [
    "🍕", "🍔", "🍟", "🌮", "🥪", "🍗", "🍩", "🍉", "🍇", "🍓",
    "🍎", "🍌", "🍍", "🥑", "🥝", "🍒", "🍊", "🍋", "🍅", "🥥",
    "🍞", "🥖", "🧀", "🥚", "🥓", "🥗", "🍰", "🧁", "🍫", "🍿"
  ],
  sports: [
    "⚽", "🏀", "🏈", "🎾", "🏐", "🏓", "🥊", "🏸", "🥋", "🥌",
    "🏒", "🚴", "🏂", "🤽", "⛷️", "🏇", "⛹️", "🤾", "🧗", "🏊",
    "🚣", "🧘", "🏋️", "🤼", "🛹", "🛷", "🪂", "🏌️", "🎿", "🤸"
  ],
  nature: [
    "🌸", "🌺", "🌻", "🌷", "🌹", "🌼", "🍀", "🍁", "🌿", "🌴",
    "🌵", "🌲", "🌳", "🍄", "🌱", "🪴", "🌾", "🌼", "🪻", "🍂",
    "🌍", "🌎", "🌏", "🪨", "🌋", "🪵", "🌊", "🪺", "🪹", "🌌"
  ],
  space: [
    "🌟", "⭐", "🌙", "☀️", "🌞", "🌛", "🪐", "🚀", "🛸", "🛰️",
    "🌍", "🌌", "🔭", "🌠", "🌚", "🌒", "🌓", "🌔", "🌕", "🌖",
    "🌗", "🌘", "🌑", "🪞", "🛕", "🛰", "☄️", "🌬️", "🌎", "🌏"
  ],
  faces: [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "😊", "😍", "😘",
    "🤩", "🥳", "😎", "😭", "😢", "😡", "😠", "🤯", "😳", "😇",
    "🙃", "😜", "😋", "😐", "😶", "😴", "🤤", "🥴", "🥺", "🤓"
  ],
  weather: [
    "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️",
    "🌪️", "🌈", "💨", "☔", "🌫️", "🌬️", "🌀", "🔥", "🌦️", "🌡️",
    "🌤", "🌞", "🌩", "⛈", "🌧", "❄", "⛅️", "💧", "🌊", "🌁"
  ],
  travel: [
    "🚗", "🚕", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚂", "✈️", "🚁",
    "🛳️", "🚤", "🛥️", "⛴️", "🗽", "🏖️", "🏜️", "🏕️", "⛺", "🌁",
    "🚦", "🛣️", "🗻", "🗼", "🛫", "🛬", "🚇", "🚉", "🚊", "🚢"
  ],
  music: [
    "🎵", "🎶", "🎤", "🎧", "🎼", "🎹", "🥁", "🎸", "🪕", "🎷",
    "🎺", "📻", "🎙️", "🪘", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🎚️", "🎛️", "🪇",
    "🪈", "🎟️", "📀", "💿", "📼", "🎬", "🎮", "🎭", "🎨", "🎻"
  ],
  technology: [
    "💻", "🖥️", "📱", "⌨️", "🖱️", "🔋", "🔌", "🤖", "📡", "🛰️",
    "🧬", "🕹️", "🖨️", "🔧", "💾", "💿", "📀", "🧠", "🧰", "🔍",
    "🪛", "🪜", "📷", "📸", "📹", "🎥", "🎞️", "📞", "📟", "📺"
  ],
  flags: [
    "🇺🇸", "🇬🇧", "🇮🇳", "🇯🇵", "🇫🇷", "🇧🇷", "🇨🇦", "🇩🇪", "🇮🇹", "🇷🇺",
    "🇲🇽", "🇸🇬", "🇰🇷", "🇦🇺", "🇨🇳", "🇿🇦", "🇸🇦", "🇳🇿", "🇳🇱", "🇸🇪",
    "🇳🇴", "🇪🇸", "🇦🇷", "🇧🇪", "🇨🇭", "🇮🇱", "🇹🇷", "🇺🇦", "🇵🇹", "🇵🇰"
  ]
};


   const handleCategoryChange1 = (category) => {   
    props.setEmojiPool1(EMOJI_CATEGORIES[category]);
  }

  const handleCategoryChange2 = (category) => {   
    props.setEmojiPool2(EMOJI_CATEGORIES[category]);
  }

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 min-h-screen p-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">🎮 Game Setup 🎮</h1>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full">
            <label className="block text-xl font-semibold mb-3 text-indigo-700">🎯 Player 1:</label>
            <select 
              className="text-black w-full border-3 border-purple-300 rounded-xl p-3 text-lg bg-gradient-to-r from-purple-50 to-pink-50 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all" 
              onChange={(e)=>handleCategoryChange1(e.target.value)}
            >
              <option>✨ Select Emoji Category ✨</option>
              {Object.keys(EMOJI_CATEGORIES).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label className="block text-xl font-semibold mb-3 text-indigo-700">🎯 Player 2:</label>
            <select 
              className="text-black w-full border-3 border-purple-300 rounded-xl p-3 text-lg bg-gradient-to-r from-purple-50 to-pink-50 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all" 
              onChange={(e)=>handleCategoryChange2(e.target.value)}
            >
              <option>✨ Select Emoji Category ✨</option>
              {Object.keys(EMOJI_CATEGORIES).map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button 
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 mt-6" 
            onClick={()=> {
              props.setGameState('playing')
              const audio = new Audio('/sounds/gameStart.mp3');
              audio.play();
            }}
          >
            🚀 Start Game! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
export default Setup;