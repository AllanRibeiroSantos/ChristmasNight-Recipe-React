import styled from "styled-components";

export const ReceitaWrapper = styled.div`
  .receita_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    margin: 0 2rem;
    margin-bottom: 5rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
  }

  .receita_container__titulo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .receita_container__titulo h1 {
    margin-bottom: 1rem;
    width: 50rem;
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
  }

  .receita_container__titulo p {
    width: 50rem;
    margin: 1rem 0;
    font-size: 1.1rem;
  }

  .traco {
    width: 15rem;
    height: 3px;
    background-color: rgb(204, 163, 0);
  }
`;

export const PainelWrapper = styled.div`
  width: 80%;

  .receita__painel {
    display: flex;
    margin-top: 3rem;
    height: 50rem;
    background-color: white;
  }

  .painel__imagem--container {
    height: 50rem;
    overflow: hidden;
    width: 40rem;
    position: relative;
  }
  
  .painel__imagem--container img {
    height: 50rem;
  }
  
  .painel__imagem--favoritos {
    color: red;
    font-size: 3rem;
    padding: 1rem;
    position: absolute;
    right: 0;
  }

  .painel__ingredientes--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5rem 4rem;
  }

  .painel__ingredientes--text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .painel__ingredientes--text h1 {
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
  }

  .painel__ingredientes--text ol li {
    font-size: 1.2rem;
    list-style-type: decimal;
  }

  .ingredientes-e-info {
    display: flex;
    justify-content: space-between;
  }

  .info p {
    margin-top: 1rem;
  }

  .de-sua-nota {
    display: flex;
    align-items: center;
  }

  .de-sua-nota__cupcake {
    margin-left: 1rem;
  }

  .de-sua-nota__cupcake span {
    font-size: 2rem;
    margin-right: 0.5rem;
    color: rgb(230, 115, 0);
  }

  .de-sua-nota__cupcake span:hover {
    color: red;
  }
`;