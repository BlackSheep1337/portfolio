import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? 'white' : 'black')};
    color: ${props => (props.darkMode ? 'black' : 'white')}
  }
  button {
    color: ${props => (props.darkMode ? 'black' : 'white')}
  }
  span {
    a {
      svg {
        color: ${props => (props.darkMode ? 'black' : 'white')}
      }
    }
  }
  .habilities {
    span {
      color: ${props => (props.darkMode ? 'black' : 'white')}
    }
  }
  .details {
    a:hover {
      color: ${props => (props.darkMode ? 'black' : 'white') }
    }
  }
  .links-hability {
    li {
      background-color: red;
    }
  }
`

// ${props => (props.darkMode ? 'black' : 'white')}