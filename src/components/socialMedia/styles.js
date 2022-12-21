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