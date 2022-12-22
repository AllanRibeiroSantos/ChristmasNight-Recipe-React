import styled from "styled-components";
import christmasEvent from '../../../assets/img/christmas-event.jpeg'

export const EventosWrapper = styled.div`
  background-image: url(${christmasEvent});
  background-position: 50% 30%;
  display: flex;
  justify-content: center;
  width: 100%;
  
  .eventos__container {
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .eventos__container--text {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40rem;
    width: 50%;
  }

  .eventos__container--text h2 {
    color: ${({theme}) => theme.fonteTemaClaro.fonteBranca};
    font-size: ${({theme}) => theme.fontSizeDesktop.fontSizeTitulo1};
    text-align: center;
    text-shadow: 
    -1px -1px 0px black,
    -1px -1px 0px black,
    -1px 1px 0px black,
    1px 0px 0px black;
  }

  .eventos__container--text p {
    font-size: 1.2rem;
    color: ${({theme}) => theme.fundoTemaClaro.fundoVerdeClaro};
    margin-top: 3rem;
    text-align: center;
    width: 60%;
    text-shadow: 
    -1px -1px 0px black,
    -1px -1px 0px black,
    -1px 1px 0px black,
    1px 0px 10px black;
  }
`;