import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  min-height: 100px;

  .services {
    p {
      margin: 0;

      &:hover {
        color: var(--bs-white);
      }
    }
  }

  .social-icon {
    margin: 0 8px;
    transition: transform 250ms;
    display: inline-block;

    &:hover {
      transform: translateY(-2px);
    }

    &__github {
      color: var(--gray-500);
    }

    &__linkedin {
      color: var(--linkedin);
    }

    &__twitter {
      color: var(--twitter);
    }
  }
`
