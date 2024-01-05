import styled from "styled-components";

export const ModoDePreparoWrapper = styled.div`
  display: flex;
  justify-content: center;

  .modo-de-preparo__container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .modo-de-preparo__container h1 {
    text-align: center;
    margin-top: 5rem;
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
  }
  
  .linha {
    margin: 2rem 0;
    width: 20rem;
    height: 3px;
    background-color: rgb(204, 163, 0);
  }

  .modo-de-preparo__lista {
    text-align: justify;
    font-size: 1.2rem;
  }
  
  .modo-de-preparo__lista li {
    list-style-type: decimal;
  }

  .modo-de-preparo__lista li:not(:first-child) {
    margin-top: 2rem;
  }
`;