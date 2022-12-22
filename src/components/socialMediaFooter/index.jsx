import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { SocialMediaFooterWrapper } from '../socialMedia/styles';

export default function SocialMediaFooter() {
  return (
    <SocialMediaFooterWrapper >
      <div className="contatos_redes_sociais">
        <a className='social_github'
          href='https://github.com/AllanRibeiroSantos'
          alt='Media social Github'>
          <BsGithub />
        </a>
        <a className='social_linkedin'
          href='https://www.linkedin.com/in/allanribeirosantos/'
          alt='Media social Linkedin'>
          <BsLinkedin />
        </a>
        <a className='social_youtube'
          href='https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA'
          alt='Media social Youtube'>
          <BsYoutube />
        </a>
      </div>
    </SocialMediaFooterWrapper>
  )
}
