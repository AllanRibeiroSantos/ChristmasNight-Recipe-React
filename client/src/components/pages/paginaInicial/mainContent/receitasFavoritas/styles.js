import styled from "styled-components";

export const ReceitasFavoritasWrapper = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
  
  .receitas_favoritas__titulo_principal {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 13rem;
    padding-bottom: 8rem;
    text-align: center;
  }

  .receitas_favoritas__titulo_principal h1 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
    width: 40rem;
  }
  
  .receitas_favoritas__titulo_principal--line {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoLaranjaInlined};
    height: 0.5rem;
    margin-top: 2rem;
    width: 5rem;
  }
`;

export const ReceitasFavoritasCardWrapper = styled.div`
  .receitas_favoritas__card-container {
    margin-top: 5rem;
    display: flex;
  }
  
  .receitas_favoritas__card-container--card {
    display: flex;
    flex-direction: column;
    margin: 0 1.2rem;
  }

  .receitas_favoritas__card-container--imagem-container {
    height: 40rem;
    width: 25rem;
    overflow: hidden;
    background-color: black;
  }

  .receitas_favoritas__card-container--imagem {
    height: 40rem;
    width: 25rem;
    scale: 1.2;
  }

  .receitas_favoritas__card-container--imagem:hover {
    transition: 200ms;
    scale: 1.3;
  }

  .receitas_favoritas__card-container--caption_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .card-container--caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 18rem;
    width: 17rem;
  }

  .receitas_favoritas__card-container--caption_container h3 {
    margin-top: 3rem;
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo3};
  }

  .receitas_favoritas__card-container--caption_container p {
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoVerde};
  }
`;