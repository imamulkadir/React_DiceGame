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
  const [currentDice, setCurrentDice] = useState("1");
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number first!");
      return;
    }

    const randomNumber = generateRandomDice(1, 7);
    setCurrentDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice("1");
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
      <RollDice currentDice={currentDice} rollDice={rollDice} />
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
