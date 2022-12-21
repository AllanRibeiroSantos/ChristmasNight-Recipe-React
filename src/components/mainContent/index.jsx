import MelhoresReceitas from "../melhoresReceitas";
import ReceitasFavoritas from "../receitasFavoritas";
import { MainContentWrapper } from "./styles";

export default function MainContent() {
  return (
    <MainContentWrapper>
      <main className='main_content'>
        <MelhoresReceitas />
        <ReceitasFavoritas />
      </main>
    </MainContentWrapper>
  )
}
