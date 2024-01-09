import { Character } from '@/models';
import { useEffect, useState } from 'react';

/** Object result of the useCharacters react hook */
export interface useCharactersResult {
  // flag showing when character data is loading
  isLoading: boolean;

  // list of characters retrieved from fetch-all query
  characters: Character[];
}

/**
 * React hook to fetch characters from the SQL db.
 *
 * example:
 *      const { isLoading, characters } = useCharacters();
 */
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
