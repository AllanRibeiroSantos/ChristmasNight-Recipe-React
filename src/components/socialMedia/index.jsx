import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { SocialMediaWrapper } from './styles';

export default function SocialMedia() {
  return (
    <SocialMediaWrapper >
      <ul className="contatos_redes_sociais">
        <li className="social_github">
          <a href='https://github.com/AllanRibeiroSantos'
            alt='Media social Github'>
            <BsGithub />
          </a>
        </li>
        <li className="social_linkedin">
          <a href='https://www.linkedin.com/in/allanribeirosantos/'
            alt='Media social Linkedin'>
            <BsLinkedin />
          </a>
        </li>
        <li className="social_youtube">
          <a href='https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA'
            alt='Media social Youtube'>
            <BsYoutube />
          </a>
        </li>
      </ul>
    </SocialMediaWrapper>
  )
}