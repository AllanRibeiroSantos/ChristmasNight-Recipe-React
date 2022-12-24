import styled from "styled-components";

export const ReceitasCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  .receita_card__container {
    margin-bottom: 5rem;
    background-color: white;
    width: 65%;
    height: 22rem;
    display: flex;
    position: relative;
  }

  .receita_card__imagem-container {
    height: 100%;
    width: 30rem;
    background-color: blue;
    position: relative;
    overflow: hidden;
  }

  .receita_card__imagem {
    width: 30rem;
    transform: translateY(-23%);
  }

  .receita_card__imagem--favoritos {
    padding: 1rem;
    position: absolute;
    right: 0;
    font-size: 3rem;
    color: red;
  }

  .receita_card__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 4rem;
  }

  .receita_card__text h2 {
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo3};
  }

  .receita_card__text p {
    width: 30rem;
    margin-top: 2rem;
  }
`;