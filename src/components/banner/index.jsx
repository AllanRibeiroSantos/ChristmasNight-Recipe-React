import BotaoLaranja from "../botoes/BotaoLaranja";
import BotaoVerde from "../botoes/BotaoVerde";
import { ContextBannerProvider } from "../commom/context/ContextBanner";
import SocialMedia from "../socialMedia";
import AnuncioPrincipal from "./anuncioPrincipal";
import BannerBackground from "./backgrounds";
import MenuRetratil from "./menuRetratil";
import { BannerWrapper } from "./styles";

export default function Banner() {
  return (
    <ContextBannerProvider >
      <BannerWrapper>
        <SocialMedia />
        <BotaoVerde />
        <BotaoLaranja />
        <MenuRetratil />
        <AnuncioPrincipal />
        <BannerBackground />
      </BannerWrapper>
    </ContextBannerProvider>
  )
}
