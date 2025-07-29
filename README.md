# 🎲 React Dice Game

A fun and interactive dice-rolling game built with **React** and **styled-components**. Players select a number and roll the dice. If the dice matches the selected number, they earn a point. Smooth animations, realistic dice roll sounds, and toast notifications enhance the experience.

## 🎮 How to Play

1. Select a number (1–6).
2. Click on the dice to roll.
3. If your selected number matches the dice face:
   - 🎉 You earn the same point as Dice number!
4. If your selected number doesn't match the dice face:
   - 😣 You lose 2 points.
4=5. Try to beat your high score!

## 🧰 Tech Stack

- **React** – UI library
- **Styled-components** – CSS-in-JS for scoped styles
- **useState** - React state management
## 📁 Project Structure

```
React_DiceGame/
├── public/
│   ├── images/
│   │   ├── dice/
│   │   │   └── dice_1.png ... dice_6.png
│   │   └── dices.png
│   └── sounds/
│       └── dice-roll.mp3
├── src/
│   ├── components/
│   │   ├── RollDice.jsx
│   │   ├── StartGame.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── styles/
├── README.md
└── package.json
```

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/imamulkadir/React_DiceGame.git
cd React_DiceGame
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

## 📌 To-Do / Future Enhancements

- Add persistent scoring using localStorage
- Add multiplayer mode
- Add difficulty levels (timed or limited rolls)
- Add animations for win/loss feedback

## 🙋‍♂️ Author

**Imamul Kadir**  
[GitHub Profile](https://github.com/imamulkadir)  
📧 imamulkadiroyan@gmail.com

## ⭐️ Show Your Support

If you like this project, give it a ⭐️ on GitHub and share it with others!
