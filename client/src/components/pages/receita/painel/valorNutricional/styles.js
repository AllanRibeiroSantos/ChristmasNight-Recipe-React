import styled from "styled-components";

export const ValorNutricionalWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;

  .painel__ingredientes--valor-nutricional {
    width: 4.7rem;
    height: 5.5rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .painel__ingredientes--valor-nutricional:not(:first-child) {
    margin-left: 1rem;
  }

  .risco {
    width: 2rem;
    height: 2px;
    background-color: black;
  }
`;