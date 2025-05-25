import React from 'react'
import { XCircle } from 'lucide-react'

const HelpSection = ({setShowHelp}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-lg lg:max-w-2xl max-h-[90vh] sm:max-h-[85vh] lg:max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4 sm:mb-5 lg:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900">🎮 How to Play</h2>
              <button
                className="text-xl sm:text-2xl text-gray-600 hover:text-gray-800"
                onClick={() => setShowHelp(false)}
              >
                <XCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">🎯 Objective</h3>
                <p>Be the first player to get 3 of your emojis in a row (horizontally, vertically, or diagonally).</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">🎪 Setup</h3>
                <p>Each player selects an emoji category (Animals, Food, Sports, etc.). During the game, you'll get random emojis from your chosen category.</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">🔄 The Vanishing Rule</h3>
                <p>Each player can only have 3 emojis on the board at once. When you place your 4th emoji, your oldest emoji automatically disappears! You cannot place your 4th emoji where your 1st emoji was.</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">🎮 Gameplay</h3>
                <ul className="list-disc list-inside space-y-1 ml-3 sm:ml-5">
                  <li>Players take turns clicking empty cells</li>
                  <li>You get a random emoji from your category</li>
                  <li>Try to form a line of 3 while blocking your opponent</li>
                  <li>Remember: your oldest emojis will vanish as you play!</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2">🏆 Winning</h3>
                <p>Get 3 of your emojis in a line to win! The game highlights your winning combination and you can play again.</p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-5 lg:mt-6 text-center">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                onClick={() => setShowHelp(false)}
              >
                Got it! 🚀
              </button>
            </div>
          </div>
        </div>
  )
}

export default HelpSection