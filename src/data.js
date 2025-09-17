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