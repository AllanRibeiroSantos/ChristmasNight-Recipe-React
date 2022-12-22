import { BrowserRouter as Router } from 'react-router-dom'
import Banner from "./components/banner";
import Footer from './components/footer';
import MainContent from './components/mainContent';
import { MainWrapper } from "./styles";

export default function App() {
  return (
    <Router >
      <MainWrapper>
        <div className="body__container">
          <Banner />
          <MainContent />
          {/* Não estou conseguindo colocar o footer por aqui */}
          {/* <Footer /> */}
        </div>
      </MainWrapper>
    </Router >
  )
}
