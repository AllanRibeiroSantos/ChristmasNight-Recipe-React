import { BrowserRouter as Router } from 'react-router-dom'
import Banner from "./components/banner";
import { MainWrapper } from "./styles";

export default function App() {
  return (
    <Router >
      <MainWrapper>
        <div className="main__container">
          <Banner />
        </div>
      </MainWrapper>
    </Router >
  )
}
