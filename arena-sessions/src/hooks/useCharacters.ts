import { Character } from '@/models';
import { useCallback, useEffect, useState } from 'react';

const getAllRoute = '/api/characters/all';
const createRoute = '/api/characters/create';
const deleteRoute = '/api/characters/delete/';

/** Object result of the useCharacters react hook */
export interface useCharactersResult {
  // flag showing when character data is loading
  isLoading: boolean;

  // list of characters retrieved from fetch-all query
  characters: Character[];

  // callback function to create a new character in the list
  createCharacter: (character: Character) => void;

  // callback function to delete a character from the list
  deleteCharacter: () => void;
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
      getCharacters();
    } catch (err) {
      console.error(err);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createCharacter = useCallback(
    async (character: Character) => {
      setIsLoading(true);
      try {
        await fetch(createRoute, {
          method: 'POST',
          headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(character),
        });

        await getCharacters();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const deleteCharacter = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      await fetch(`${deleteRoute}${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
      });

      await getCharacters();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, characters, createCharacter, deleteCharacter };

  async function getCharacters() {
    try {
      const response = await fetch(getAllRoute, {
        method: 'GET',
      });

      const characters: Character[] = await response.json();
      setCharacters(characters);
    } catch (err) {
      console.error(err);
    }
  }
}
