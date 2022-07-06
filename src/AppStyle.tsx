import styled from "styled-components";

export const headerContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
`;

export const container = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
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

    &:focus {
      border-bottom: 2px solid #2dc9d3;
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
  }
`;
