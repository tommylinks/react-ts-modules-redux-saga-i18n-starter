import {FC} from 'react';

import CounterPage from './pages/Counter';
import CounterSagaPage from './pages/CounterSaga';
import reducers from './reducers'
import sagas from './sagas'

interface Page {
  path: string
  icon: string
  order: number
  color: string,
  title: string,
  visible: boolean,
  component: FC
}

// pages:
export const pages: Page[] = [
  {
    path: '/counter-redux',
    icon: 'counter',
    order: 1,
    color: '#dc6be5',
    title: 'STAKE_TITLE',
    visible: true,
    component: CounterPage
  },
  {
    path: '/counter-db',
    icon: 'counterSaga',
    order: 2,
    color: '#dc6be5',
    title: 'STAKE_TITLE',
    visible: true,
    component: CounterSagaPage
  }
];

const Counter = {
  pages: pages,
  reducers: { counter: reducers },
  sagas: sagas,
}

export default Counter;