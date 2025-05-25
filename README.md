✨ Blink Tic Tac Toe ✨

A fun twist on the classic Tic Tac Toe, where emojis vanish and strategy shifts constantly! Built using React with a vibrant UI and interactive gameplay.

Tech Stack: 

HTML

React (with useState for state management)

Tailwind CSS (for styling and responsiveness)

Lucide React (for icons)

JavaScript (for logic and audio)

Emoji Categories: Animals, Food, Sports, Nature, Space, Faces, Weather, Travel, Music, Technology, Flags

Vanishing Feature:

Each player is allowed only 3 active emojis on the board at a time. Here's how it works:
When a player places a 4th emoji, their oldest emoji vanishes.

if (currentEmojis.length === 3) {
  const oldestIndex = currentEmojis[0]?.index;
  newBoard[oldestIndex] = null;
  currentEmojis.shift();
}

Explanation: The currentEmojis array stores the emojis placed by the current player during the game. When the length of this array reaches 3, it means the player already has three emojis on the board. At this point, if the player tries to place a fourth emoji, the oldest one — which is always at index 0 — is removed. This is done by setting that index on the board to null (newBoard[oldestIndex] = null) and removing it from the player's emoji history using currentEmojis.shift(). This creates a vanishing effect.

Improvements With More Time:

1.Score tracker for multiple rounds.

2.Track game history or scores.

3.Add player name input and emoji previews before game start.

4.Introduce AI opponents with easy/medium/hard modes.

5.Increased board sizes(4x4 or 5x5) grids for more complex gameplay.
