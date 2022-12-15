import styled from "styled-components";

export const AnuncioPrincipalWrapper = styled.div`
  position: absolute;
  top: 13rem;
  left: 15rem;
  width: 40rem; 
  z-index: 3;
  
  & h1 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: 5rem;
  }

  & p {
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoVerde};
    margin-top: 2rem;
    width: 30rem;
  }
`;