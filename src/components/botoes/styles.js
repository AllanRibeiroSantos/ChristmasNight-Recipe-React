import styled from "styled-components";

export const BotaoVerdeWrapper = styled.div`
  .main__banner--buttonVerde {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoVerde};
    border: none;
    border-radius: 0.5rem 0 0 0;
    color: ${({theme}) => theme.fonteTemaClaro.fonteBranca};
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 900;
    min-height: 5.5rem;
    padding: 1.5rem;
  }

  .main__banner--buttonVerde:hover {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoVerdeHover};
  }
`;

export const BotaoVerdeInlinedWrapper = styled.div`
  .botao__verde--inlined {
    box-sizing: border-box;
    border: 1px solid ${({theme}) => theme.botaoTemaClaro.botaoVerdeInlined};
    background-color: rgba(255, 255, 255, 0);
    color: ${({theme}) => theme.botaoTemaClaro.botaoVerdeInlined};
    cursor: pointer;
    padding: 0.5rem 2rem;
    margin-top: 2rem;
  }

  .botao__verde--inlined:hover {
    border: 1px solid ${({theme}) => theme.botaoTemaClaro.botaoVerdeInlined};
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoInlinedHover};
  }
`;

export const BotaoLaranjaWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  .main__banner--buttonLaranja {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoLaranja};
    border: none;
    border-radius: 0 0.5rem 0 0;
    color: ${({theme}) => theme.fonteTemaClaro.fonteBranca};
    cursor: pointer;
    font-size: 1.3rem;
    min-height: 5.5rem;
    min-width: 7rem;
    padding: 1rem;
  }

  .main__banner--buttonLaranja:hover {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoLaranjaHover};
  }
`;

export const BotaoLaranjaInlinedWrapper = styled.div`
  .botao__laranja--inlined {
    box-sizing: border-box;
    border: 2px solid ${({theme}) => theme.botaoTemaClaro.botaoLaranjaInlined};
    background-color: rgba(255, 255, 255, 0);
    color: ${({theme}) => theme.fonteTemaClaro.fonteLaranja};
    cursor: pointer;
    padding: 0.8rem 1.5rem;
    margin-top: 2rem;
  }

  .botao__laranja--inlined:hover {
    border: 2px solid ${({theme}) => theme.botaoTemaClaro.botaoLaranjaInlined};
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoInlinedHover};
  }
`;

export const BotaoVerdeMaisEscuroWrapper = styled.div`
  .banner__buttonBUY {
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeMaisEscuro};
    border: none;
    bottom: -1rem;
    color: white;
    cursor: pointer;
    padding: 1rem;
    position: absolute;
    right: 0;
    width: 8rem;
    z-index: 4;
  }

  .banner__buttonBUY:hover {
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoVerdeMaisEscuroHover};
  }
`;
