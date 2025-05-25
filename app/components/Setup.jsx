import React from "react";

const Setup = (props) => {
  const EMOJI_CATEGORIES = {
  Animals: [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🦁",
    "🐷", "🐸", "🐔", "🐧", "🦉", "🦅", "🦆", "🐢", "🐍", "🦎",
    "🦖", "🦕", "🦇", "🐙", "🐬", "🐳", "🐋", "🦈", "🐠", "🐡"
  ],
  Food: [
    "🍕", "🍔", "🍟", "🌮", "🥪", "🍗", "🍩", "🍉", "🍇", "🍓",
    "🍎", "🍌", "🍍", "🥑", "🥝", "🍒", "🍊", "🍋", "🍅", "🥥",
    "🍞", "🥖", "🧀", "🥚", "🥓", "🥗", "🍰", "🧁", "🍫", "🍿"
  ],
  Sports: [
    "⚽", "🏀", "🏈", "🎾", "🏐", "🏓", "🥊", "🏸", "🥋", "🥌",
    "🏒", "🚴", "🏂", "🤽", "⛷️", "🏇", "⛹️", "🤾", "🧗", "🏊",
    "🚣", "🧘", "🏋️", "🤼", "🛹", "🛷", "🪂", "🏌️", "🎿", "🤸"
  ],
  Nature: [
    "🌸", "🌺", "🌻", "🌷", "🌹", "🌼", "🍀", "🍁", "🌿", "🌴",
    "🌵", "🌲", "🌳", "🍄", "🌱", "🪴", "🌾", "🌼", "🪻", "🍂",
    "🌍", "🌎", "🌏", "🪨", "🌋", "🪵", "🌊", "🪺", "🪹", "🌌"
  ],
Space: [
    "🌟", "⭐", "🌙", "☀️", "🌞", "🌛", "🪐", "🚀", "🛸", "🛰️",
    "🌍", "🌌", "🔭", "🌠", "🌚", "🌒", "🌓", "🌔", "🌕", "🌖",
    "🌗", "🌘", "🌑", "🪞", "🛕", "🛰", "☄️", "🌬️", "🌎", "🌏"
  ],
  Faces: [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "😊", "😍", "😘",
    "🤩", "🥳", "😎", "😭", "😢", "😡", "😠", "🤯", "😳", "😇",
    "🙃", "😜", "😋", "😐", "😶", "😴", "🤤", "🥴", "🥺", "🤓"
  ],
  Weather: [
    "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️",
    "🌪️", "🌈", "💨", "☔", "🌫️", "🌬️", "🌀", "🔥", "🌦️", "🌡️",
    "🌤", "🌞", "🌩", "⛈", "🌧", "❄", "⛅️", "💧", "🌊", "🌁"
  ],
  Travel: [
    "🚗", "🚕", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚂", "✈️", "🚁",
    "🛳️", "🚤", "🛥️", "⛴️", "🗽", "🏖️", "🏜️", "🏕️", "⛺", "🌁",
    "🚦", "🛣️", "🗻", "🗼", "🛫", "🛬", "🚇", "🚉", "🚊", "🚢"
  ],
  Music: [
    "🎵", "🎶", "🎤", "🎧", "🎼", "🎹", "🥁", "🎸", "🪕", "🎷",
    "🎺", "📻", "🎙️", "🪘", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🎚️","🎛️", "🪇",
    "🪈", "🎟️", "📀", "💿", "📼", "🎬", "🎮", "🎭", "🎨", "🎻"
  ],
  Technology: [
    "💻", "🖥️", "📱", "⌨️", "🖱️", "🔋", "🔌", "🤖", "📡", "🛰️",
    "🧬", "🕹️", "🖨️", "🔧", "💾", "💿", "📀", "🧠", "🧰", "🔍",
    "🪛", "🪜", "📷", "📸", "📹", "🎥", "🎞️", "📞", "📟", "📺"
  ],
  Flags: [
    "🇺🇸", "🇬🇧", "🇮🇳", "🇯🇵", "🇫🇷", "🇧🇷", "🇨🇦", "🇩🇪", "🇮🇹", "🇷🇺",
    "🇲🇽", "🇸🇬", "🇰🇷", "🇦🇺", "🇨🇳", "🇿🇦", "🇸🇦", "🇳🇿", "🇳🇱", "🇸🇪",
    "🇳🇴", "🇪🇸", "🇦🇷", "🇧🇪", "🇨🇭", "🇮🇱", "🇹🇷", "🇺🇦", "🇵🇹", "🇵🇰"
  ]
  };

  return (
    <div className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 min-h-screen p-4 sm:p-8 lg:p-16">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-md lg:max-w-lg mx-auto shadow-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-purple-800">🎮 Game Setup 🎮</h1>
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="w-full">
            <label className="block text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-indigo-700">🎯 Player 1:</label>
            <select 
              className="text-black w-full border-3 border-purple-300 rounded-xl p-2 sm:p-3 text-base sm:text-lg bg-white focus:border-purple-500" 
              onChange={(e)=>props.setEmojiPool1(EMOJI_CATEGORIES[e.target.value])}
            >
              <option>✨ Select Emoji Category ✨</option>
              {Object.keys(EMOJI_CATEGORIES).map((category) => (
                <option key={category} value={category}>
                  {category}
              </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label className="block text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-indigo-700">🎯 Player 2:</label>
            <select 
              className="text-black w-full border-3 border-purple-300 rounded-xl p-2 sm:p-3 text-base sm:text-lg bg-gradient-to-r bg-white focus:border-purple-500" 
              onChange={(e)=>props.setEmojiPool2(EMOJI_CATEGORIES[e.target.value])}
            >
              <option>✨ Select Emoji Category ✨</option>
              {Object.keys(EMOJI_CATEGORIES).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button 
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg duration-200 hover:scale-105 mt-4 sm:mt-6" 
            onClick={()=> {
              if (!props.emojiPool1?.length || !props.emojiPool2?.length) {
                alert("Please select emoji categories for both players!");
                return;
              }
              if (props.emojiPool1[0] === props.emojiPool2[0]) {
                alert("Both players cannot have the same emoji category!");
                return;
              }
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