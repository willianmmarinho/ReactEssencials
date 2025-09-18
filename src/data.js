import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Componentes',
    description:
      'O principal bloco de construção da interface — componha a interface do usuário combinando vários componentes.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Retorna código HTML (potencialmente dinâmico) para definir a marcação real que será renderizada.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Torne os componentes configuráveis (e, portanto, reutilizáveis) passando dados de entrada para eles.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'Dados gerenciados pelo React que, quando alterados, fazem o componente ser renderizado novamente e a interface do usuário ser atualizada.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Componentes',
    description:
      'Componentes são os blocos de construção das aplicações React. Um componente é um módulo independente (HTML + CSS opcional + JS) que renderiza uma saída.',
    code: `
    function Welcome() {
      return <h1>Hello, World!</h1>;
    }`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX é uma extensão de sintaxe do JavaScript. É semelhante a uma linguagem de template, mas possui todo o poder do JavaScript (por exemplo, pode gerar conteúdo dinâmico).',
    code: `
    <div>
      <h1>Welcome {userName}</h1>
      <p>Time to learn React!</p>
    </div>`,
  },
  props: {
    title: 'Props',
    description:
      'Os componentes aceitam entradas arbitrárias chamadas props. Elas são como os argumentos de uma função.',
    code: `
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  state: {
    title: 'State',
    description:
      'O state permite que os componentes do React mudem sua saída ao longo do tempo em resposta a ações do usuário, respostas da rede e qualquer outro evento.',
    code: `
    function Counter() {
      const [isVisible, setIsVisible] = useState(false);

      function handleClick() {
        setIsVisible(true);
      }

      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,
  },
};