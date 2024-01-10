'use client';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import HomePage from '../pages/page-layout/Home';

initializeIcons(); // Initialize Fluent UI Icons. NOTE: Must be done in client component

/**
 * Home entry component // top-level component in stack
 */
export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <HomePage />
    </div>
  );
}
