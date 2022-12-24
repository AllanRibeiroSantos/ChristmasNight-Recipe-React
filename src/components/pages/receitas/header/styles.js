import styled from "styled-components";

export const ReceitasHeaderWrapper = styled.div`
  .receitas__header {
    align-items: center;
    border-top: 0.5rem solid ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
    /* border-bottom: 0.5rem solid ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro}; */
    display: flex;
    justify-content: space-between;
    height: 5rem;
    padding: 0 3rem;
  }

  .receitas__header h3 {
    color: ${({theme}) => theme.fonteTemaClaro.titulo};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo3};
  }

  .receitas__header--lista {
    box-sizing: border-box;
    display: flex;
  }

  .receitas__header--lista a {
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoBranco};
    padding: 1rem 2rem;
  }

  .receitas__header--lista a:hover {
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
  }
  
  .receitas__header--lista a:not(:first-child) {
    margin-left: 1rem;
  }
`;