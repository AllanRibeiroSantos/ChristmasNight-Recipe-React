import styled from "styled-components";
import brownie_image from '../../assets/img/cherry-brownie.png';

export const MelhoresReceitasWrapper = styled.div`
  .main_content__melhores_receitas {
    /* display: flex;
    align-items: center; */
    position: relative;
    height: 37rem;
  }
  
  .melhores_receitas__image {
    background-image: url(${brownie_image});
    background-position: 0% 35%;
    border-radius: 0.5rem 0 0 0;
    height: 35rem;
    position: absolute;
    bottom: -5rem;
    justify-self: end;
    width: 45rem;
  }
  
  .melhores_receitas__image--text {
    position: absolute;
    right: 15rem;
    bottom: -1.5rem;
    margin-left: 5rem;
    width: 40rem;
  }

  .melhores_receitas__image--text h1 {
    color: ${({ theme }) => theme.fonteTemaClaro.titulo};
    font-size: ${({ theme }) => theme.fontSizeDesktop.fontSizeTitulo2};
  }

  .melhores_receitas__image--text p {
    color: ${({ theme }) => theme.fonteTemaClaro.fonteTextoFundoBranco};
    margin-top: 3rem;
    width: 80%;
  }
`;