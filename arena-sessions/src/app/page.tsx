'use client';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import HomePage from '../pages/page-layout/Home';
import store from '@/store/store';

initializeIcons(); // Initialize Fluent UI Icons. NOTE: Must be done in client component

/**
 * Home entry component // top-level component in stack
 */
const Home: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div style={{ height: '100vh' }}>
        <HomePage />
      </div>
    </Provider>
  );
};

export default Home;
