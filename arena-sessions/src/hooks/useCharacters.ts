import { Character } from '@/models';
import { useEffect, useState } from 'react';

export interface useCharactersResult {
  isLoading: boolean;
  characters: Character[];
}

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      const getCharacters = async () => {
        try {
          const response = await fetch('/api/characters/all', {
            method: 'GET',
          });

          const characters: Character[] = await response.json();
          setCharacters(characters);
        } catch (err) {
          console.error(err);
        }
      };

      getCharacters();
    } catch (err) {
      console.error(err);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, characters };
}
