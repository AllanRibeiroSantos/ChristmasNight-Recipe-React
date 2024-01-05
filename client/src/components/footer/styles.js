import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 25rem;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};

  .footer__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .footer__container--logo {
    text-align: center;
    width: 30rem;
  }

  .footer__container--logo h3 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo2};
  }

  .footer__container--logo p {
    margin-top: 2rem;
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoVerde};
  }

  .footer__container--menu {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }

  .footer__container--menu li {
    padding: 1rem 3rem;
    border-radius: 0.15rem;
    color: ${({theme}) => theme.fonteTemaClaro.fonteLaranja};
  }

  .footer__container--menu li:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoInlinedHover};
  }
`;