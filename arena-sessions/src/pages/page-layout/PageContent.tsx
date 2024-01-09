'use client';
import { FunctionComponent } from 'react';

import { useCharacters } from '@/hooks/useCharacters';

const PageContent: FunctionComponent = () => {
  const { isLoading, characters } = useCharacters();

  return <div>Page Content</div>;
};

export default PageContent;
