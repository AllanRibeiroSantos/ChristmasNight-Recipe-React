import SocialMediaFooter from "../socialMediaFooter";
import { FooterWrapper } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper >
      <footer className="footer__container">
        <div className="footer__container--logo">
          <h3>Christmas Night Recipes</h3>
          <p>O Natal é uma época festiva em que a família se reúne para celebrar. Pensando nisso, montamos uma lista repleta de receitas deliciosas para a sua Noite de Natal.</p>
          <ul className="footer__container--menu">
            <li>Receitas</li>
            <li>Contato</li>
            <li>Sobre</li>
          </ul>
          <p>Redes sociais</p>
          <SocialMediaFooter />
        </div>
      </footer>
    </FooterWrapper>
  )
}