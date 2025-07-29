// GamePlay.jsx
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number first!");
      return;
    }

    if (isRolling) return;

    setIsRolling(true);
    setError("");

    const rollInterval = setInterval(() => {
      const tempRoll = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(tempRoll);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalRoll = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(finalRoll);
      setIsRolling(false);

      // scoring logic after animation completes
      if (finalRoll === selectedNumber) {
        setScore((prev) => prev + finalRoll);
      } else {
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(undefined);
    }, 1000);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
        isRolling={isRolling}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 1180px;
    margin: 0 auto;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
  }
`;
