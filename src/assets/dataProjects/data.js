import GuessColor from '../picture/Guess-Color.png';
import jogoDaVelha from '../picture/Jogo-da-Velha.png';
import CollorPallet from '../picture/CollorPallet.png';
import RickAndMorty from '../picture/Rick-and-Morty.png';
import Todo from '../picture/TodoList.png';
import SeachTrybe from '../picture/SeachGithub.png';

const data = [
  {
    id: 1,
    title: 'Guess Color',
    image: GuessColor,
    technologys: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Naitwa-Alexandre/GuessColor',
    html_url: 'https://guesscolorgameproject.netlify.app/',
    description: 'Challenge and fun Game made by a programmer to programmers, using RGB color concept to train your mind to recognize rgb colors',
    descricao: 'Otimo jogo para treinar a percepcao de rgb color, jogo feito por um programador para outros programadores'
  },
  {
    id: 2,
    title: 'Jogo da velha',
    image: jogoDaVelha,
    technologys: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Naitwa-Alexandre/Jogo-da-velha',
    html_url: 'https://jogo-da-velha-alex.netlify.app/',
    description: 'My version of tic-tac-toe game, using my favorite language vanilla javascript i could developer this app and i loved the result as same as the process',
    descricao: 'Meu primeiro jogo, desenvolvi esta versao do jogo da velha ultilizando meu queridinho vanilla javascript obtive este resultado que adorei muito na epoca e gosto ate hoje'
  },
  {
    id: 3,
    title: 'Rick and Morty Slider',
    image: RickAndMorty,
    technologys: ['React', 'Hooks', 'ES6', 'Javascript', 'Material Ui'],
    github: 'https://github.com/Naitwa-Alexandre?tab=repositories',
    html_url: 'https://cranky-cori-5b5595.netlify.app/',
    description: 'Training slider logic and better understing in API concept and reading documentation.',
    descricao: 'Ultilizando API do rick and morty para treinar este conceito e praticar a resolucao de problemas no desenvolvimento de um slider.'
  },
  {
    id: 4,
    title: 'Color Pallet',
    image: CollorPallet,
    technologys: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Naitwa-Alexandre/Naitwa-Alexandre-Project-Art',
    html_url: 'https://project-board-art.netlify.app/',
    description: 'Nice game developed with Javascript, HTML, CSS. Really important project that trains the hability to manegement events.',
    descricao: 'Projeto desenvolvido ultilizando Javascript, HTML e CSS, necessario para desenvolvimento de eventos.'
  },
  {
    id: 5,
    title: 'Todo List',
    image: Todo,
    technologys: ['Javascript', 'React', 'Redux', 'Material ui', 'Hooks', 'ES6'],
    github: 'https://github.com/Naitwa-Alexandre/Todo-Material-ui',
    html_url: 'https://alexandre-todo.netlify.app/',
    description: 'Awesome results using REACT to build a classic CRUD, TODO LIST is cool to pratice every hability a programmer should have.',
    descricao: 'Otimo app para praticar a stack CRUD com a linguagem REACT, ultilizando as mais avancadas tecnologias para criar uma interface agradavel e funcional.',
  },
  {
    id: 6,
    title: 'Search Trybe',
    image: SeachTrybe,
    technologys: ['Javascript', 'React', 'Redux', 'styled component', 'Hooks', 'ES6'],
    github: 'https://github.com/Naitwa-Alexandre',
    html_url: 'https://alexandretrybesearch.netlify.app/',
    description: 'Nice Challenger to develop a app using github API, we had 2h to developer something as best as we could and this is my result.',
    descricao: 'Desafio da trybe para desenvolver um App de busca na API do Github, foram dadas 2h para desenvolver toda a aplicacao, este foi meu resultado.',
  },
];

export default data;
