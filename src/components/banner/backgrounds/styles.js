import styled from "styled-components";
import ilustracao from '../../../assets/img/christmas-cookies.png'
import fundoTematico from '../../../assets/img/christmastree.png'

export const BannerBackgroundWrapper = styled.div`
  .banner__fundoTematico {
    background-image: url(${fundoTematico});
    background-position: 40%; // Move a imagem horizontalmente
    background-size: cover;
    border-radius: 0 0.5rem 0 0;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 49rem;
    z-index: 1;
  }

  .banner__imagemIlustrativa {
    background-image: url(${ilustracao});
    background-position: center;
    background-size: cover;
    height: 650px;
    position: absolute;
    top: 9rem;
    right: 25%;
    width: 500px;
    z-index: 2;
  }

  .banner__fundoTexto2 {
    position: absolute;
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeEscuro};
    width: 35rem;
    height: 225px;
    bottom: -1rem;
    right: 0;
    z-index: 3;
    padding: 3rem;
    box-sizing: border-box;
  }
  
  .banner__fundoTexto2--text {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .banner__fundoTexto2--text h1 {
    font-size: 2rem;
    margin: 0.8rem 0 1.5rem 0;
  }
`;