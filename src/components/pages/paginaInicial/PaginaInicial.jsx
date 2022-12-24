import { MainWrapper } from "../../../styles";
import Banner from "./banner";
import MainContent from "./mainContent";

export default function PaginaInicial() {
  return (
    <MainWrapper >
      <div className="body__container">
        <Banner />
        <MainContent />
      </div>
    </MainWrapper >
  )
}
