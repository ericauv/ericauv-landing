import { createContext } from 'react';

const ListContext = createContext({});
const { Provider, Consumer } = ListContext;
// const ListContext = createContext({
//   activeIndex: null,
//   setActiveIndex: () => {},
//   activeTags: [],
//   setActiveTags: () => {}
// });

export default ListContext;
export { Provider, Consumer };
