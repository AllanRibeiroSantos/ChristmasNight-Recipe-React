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

  .social_github a {
    color: #000;
  }

  .social_linkedin a {
    color: #0A66C2;
  }

  .social_youtube a {
    color: #FF0000;
  }
`;