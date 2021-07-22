import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin-top: 12rem;
  width: 80%;
  height: 400px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 200px;
  align-items: center;

  h4 {
    text-align: center;
    font-size: 30px;
    margin-left: 20px;
  }
`;

export const Photo = styled.img`
  width: 300px;
  border-radius: 50%;
`;

export const Links = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 50px auto;
  span {
    a {
    font-size: 40px;
    color: black;
      svg:hover {
        color: lightblue
      }
    }
  }
`;

export const LinksSkills = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin: 100px auto;
    a {
    font-size: 50px;
    color: black;
    svg:hover {
        color: lightblue
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  border-top: 2px solid grey;
  margin-top: 2rem;
  div {
    margin-left: 20px;
  }
`;

export const SectionProject = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 4rem;
  font-size: 20px;
  .underline {
    width: 130px;
    height: 10px;
    background-color: lightblue;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 6rem auto;
`;

export const Tech = styled.div`
  width: 100vw;
  margin-top: 4rem;
  text-align: center;
  button {
    width: 5rem;
    font-size: 3rem;
    margin-left: 2rem;
    border: none;
    background: none;
    &:hover {
      color: lightblue;
      cursor: pointer;
    }
  }
`;

export const SectionDetail = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  img {
    width: 400px;
    height: 28rem;
    border: 3px solid lightblue;
  }
`;

export const LinksDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  h1 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  div {
    display: flex;
    width: 30vh;
    justify-content: space-between;
    margin-top: 2rem;
    a {
    width: 5rem;
    font-size: 3rem;
    margin-left: 2rem;
    border: none;
    background: none;
      &:hover {
        color: lightblue;
        cursor: pointer;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 2rem;
    font-weight: bold;
    justify-content: center;
  }
`;