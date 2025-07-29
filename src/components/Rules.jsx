import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game?</h2>
      <p className="text">
        The objective of the game is to predict the outcome of a dice roll. If
        you guess the correct number, you earn points; if not, you lose 2
        points. Good luck!
      </p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  background-color: #fbf1f1;
  border-radius: 10px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
