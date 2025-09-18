import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['fundamentais', 'cruciais', 'importantes'];

function GenRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[GenRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Essenciais do React</h1>
      <p>
        Conceitos {description} do React que você vai precisar para quase
        qualquer aplicação que for construir!
      </p>
    </header>
  )
}