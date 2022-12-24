import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  
  .body__container {
    border-radius: 1rem;
    width: 100%;
    min-height: 100vh;
  }
`;

export const ReceitasWrapper = styled.div`
  .receitas__container {
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
  }

  .receitas {
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
    display: flex;
    flex-direction: column;
    width: 95%;
  }
  
  .receitas__titulo {
    text-align: center;
    margin-bottom: 5rem;
  }
  
  .receitas__titulo h1 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  .receitas__titulo p {
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoVerde};
  }
`;