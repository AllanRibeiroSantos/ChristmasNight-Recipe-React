import styled from "styled-components";

export const SocialMediaWrapper = styled.div`
  position: absolute;
  top: 17rem;
  left: 3rem;

  .contatos_redes_sociais li {
    font-size: 2rem;
  }

  .contatos_redes_sociais li:not(:first-child) {
    margin-top: 3rem;
  }

  .contatos_redes_sociais li a {
    color: rgb(148, 184, 184);
  }

  .social_github a:hover {
    color: rgb(0, 0, 0, 70%);
  }

  .social_linkedin a:hover {
    color: rgba(10, 102, 194,  70%);
  }

  .social_youtube a:hover {
    color: rgba(255, 0, 0, 70%);
  }
`;

export const SocialMediaFooterWrapper = styled.div`
  margin-top: 1rem;
  
  .contatos_redes_sociais {
    display: flex;
    justify-content: center;
  }
  
  .contatos_redes_sociais a {
    font-size: 2rem;
    color: ${({theme}) => theme.fonteTemaClaro.fonteLaranja};
  }

  .contatos_redes_sociais a:not(:first-child) {
    margin-left: 3rem;
  }

  .social_github:hover {
    color: rgb(0, 0, 0, 70%);
  }

  .social_linkedin:hover {
    color: rgba(10, 102, 194,  70%);
  }

  .social_youtube:hover {
    color: rgba(255, 0, 0, 70%);
  }
`;