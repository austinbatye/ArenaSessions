/**
 * Takes a string and formats it so that only the first letter is capitalized.
 * If the string contains any spaces it will capitalize all first letters of new words.
 * @param str string to format
 */
export function capitalizeOnlyFirstLetter(
  str: string | undefined | null
): string {
  if (str == null) {
    return '';
  }

  return str
    .split(' ')
    .map((word) => {
      return `${word?.charAt(0).toUpperCase()}${word
        .slice(1)
        .toLowerCase()}`;
    })
    .join(' ');
}
