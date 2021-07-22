import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 12rem;
  border-bottom: 2px solid grey;
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  button {
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
   }
  }

  .lighter {
    font-size: 40px;
  }
  .language {
    font-size: 30px;
    width: 300px;
  }
`;

export const Card = styled.article`
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  box-shadow:  0 5px 15px 3px lightblue;
  padding: 2rem 4rem;
  img {
    width: 330px;
    height: 250px;
    border: 3px solid lightblue;
  }
  h3 {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  .habilities {
    display: flex;
    flex-wrap: wrap;
    width: 450px;
    height: 2rem;
    span {
      font-weight: bold;
    }
  }
  .details {
    a {
      font-weight: bold;
    }
  }
  a {
    margin-top: 5rem;
  }
`;