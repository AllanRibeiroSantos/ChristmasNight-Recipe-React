import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header {
    align-items: center;
    border-top: 0.5rem solid ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
    /* border-bottom: 0.5rem solid ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro}; */
    display: flex;
    justify-content: space-between;
    height: 5rem;
    padding: 0 3rem;
  }

  .header h3 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo3};
  }

  .header--lista {
    box-sizing: border-box;
    display: flex;
  }

  .header--lista a {
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoBranco};
    padding: 1rem 2rem;
  }

  .header--lista a:hover {
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
  }
  
  .header--lista a:not(:first-child) {
    margin-left: 1rem;
  }
`;