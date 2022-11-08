import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  min-height: 680px;
  padding: 24px 16px;

  p {
    margin: 0;
  }

  .card {
    min-height: 400px;

    &:hover {
      transform: translateY(-2px);
      background-color: #F0F8FF;
    }
  }

  .card-img, .card-img-top, .card-img-bottom {
    width: auto;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px 40px;
  }
`
