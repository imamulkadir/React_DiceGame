// RollDice.jsx
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice, isRolling }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>{isRolling ? "Rolling..." : "Click on Dice to roll"}</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .dice:active {
    transform: scale(0.95);
  }

  p {
    font-size: 24px;
    margin-top: 12px;
  }
`;
