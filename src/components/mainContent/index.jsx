import { MainContentWrapper } from "./styles";
import Chamado from './chamado'
import ReceitasFavoritas from './receitasFavoritas'
import Eventos from "./eventos";
import MapaEvento from "./googlemaps";
import Footer from "../footer";

export default function MainContent() {
  return (
    <MainContentWrapper>
      <main className='main_content'>
        <Chamado />
        <ReceitasFavoritas />
        <Eventos />
        <MapaEvento />
        <Footer />
      </main>
    </MainContentWrapper>
  )
}
