import styled from "styled-components";

export const MenuRetratilWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 7rem;
  top: 0;
  z-index: 2; // Normal 2. Usar 4 para testes
  overflow: hidden;
  
  .menuRetratil__lista {
    align-items: center;
    background-color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
    color: ${({theme}) => theme.fonteTemaClaro.fonteTextoFundoVerde};
    display: flex;
    justify-content: space-between;
    height: 5.5rem;
    padding: 0 1rem;
    transform: ${({toggle}) => !toggle ? 'translateX(42rem)' : 'translateX(0)' };
    transition: 500ms;
    width: 40rem; // Antes era 42
  }

  .menuRetratil__lista li {
    padding: 1rem 3rem;
    border-radius: 0.15rem;
  }

  .menuRetratil__lista li:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.botaoTemaClaro.botaoInlinedHover};
  }
`;
