import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  min-height: 580px;

  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    cursor: pointer;

    &__icon {
      color: white;
    }

    &:hover {
      background-color: #0088ff;
    }
  }
`
