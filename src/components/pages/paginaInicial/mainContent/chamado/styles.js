import styled from "styled-components";
import brownie_image from '../../../../../assets/img/cherry-brownie.png';

export const ChamadoReceitasWrapper = styled.div`
  .main_content__chamado {
    position: relative;
    height: 40rem;
  }
  
  .chamado__image {
    background-image: url(${brownie_image});
    background-position: 0% 35%;
    border-radius: 0.5rem 0 0 0;
    height: 35rem;
    position: absolute;
    bottom: -5rem;
    justify-self: end;
    width: 45rem;
  }
  
  .chamado__image--text {
    position: absolute;
    right: 15rem;
    bottom: -1.5rem;
    margin-left: 5rem;
    width: 40rem;
  }

  .chamado__image--text h1 {
    color: ${({ theme }) => theme.fonteTemaClaro.titulo};
    font-size: ${({ theme }) => theme.fontSizeDesktop.fontSizeTitulo2};
  }

  .chamado__image--text p {
    color: ${({ theme }) => theme.fonteTemaClaro.fonteTextoFundoBranco};
    margin-top: 3rem;
    width: 80%;
  }
`;