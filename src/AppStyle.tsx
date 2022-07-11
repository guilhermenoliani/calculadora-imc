import styled from "styled-components";

export const headerContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;

  @media (max-width: 770px) {
    & {
      padding: 0 20px;
    }
  }
`;

export const container = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 770px) {
    & {
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 40px;
    }
`;

export const leftSide = styled.div`
  flex: 1;
  margin-right: 40px;

  h1 {
    margin: 0;
    font-size: 40px;
    color: #3a4b5c;
  }
  p {
    font-size: 16px;
    margin-bottom: 40px;
    color: #6a7d8b;
  }
  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid rgba(150, 163, 171, 0.5);
    padding: 10px 2px;
    margin-bottom: 20px;
    font-size: 14px;
    outline: 0;

    & :focus {
      border-bottom: 2px solid #2dc9d3;
    }
    &:disabled {
      opacity: 0.5;
    }
  }

  button {
    background-color: #227c9d;
    color: #fff;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    padding: 15px 0;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.7;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  @media (max-width: 770px) {
    & {
      margin-right: 0px;
    }
`;

export const rightSide = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;

  .grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;


    @media(max-width: 770px){
      &{
        margin-top:30px;
        margin-left:-40px;
      }
    }
    @media(max-width: 390px ){
      &{
        grid-template-columns: 1fr;
        
      }
    }


  }

  .rightBig {
    display: flex;
    flex: 1;

    .rightArrow {
      position: absolute;
      background-color: #227c9d;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-itens: center;
      cursor: pointer;
      margin-left: -22px;
      margin-top: 160px;
      transition: all ease 0.3s;

      img {
        width: 40px;
      }

      & :hover {
        opacity: 0.7;
      }

      @media (max-width: 770px) {
        & {
          margin-left:0px;
          margin-top:0px;
          border-radius: 10px;
        }

    }
  }
  @media (max-width: 770px) {
    & {
      margin-left: -40px;
      margin-top: 40px;
    }
  }

`;
