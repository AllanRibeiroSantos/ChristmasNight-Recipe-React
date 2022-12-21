import { BrowserRouter as Router } from 'react-router-dom'
import Banner from "./components/banner";
import MainContent from './components/mainContent';
import { MainWrapper } from "./styles";

export default function App() {
  return (
    <Router >
      <MainWrapper>
        <div className="body__container">
          <Banner />
          <MainContent />
          <footer></footer>
        </div>
      </MainWrapper>
    </Router >
  )
}
