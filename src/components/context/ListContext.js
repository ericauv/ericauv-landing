import { createContext } from 'react';

const ListContext = createContext({});
const { Provider, Consumer } = ListContext;

export default ListContext;
export { Provider, Consumer };
