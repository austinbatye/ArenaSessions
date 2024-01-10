/**
 * Returns the hex color for the specified class
 * @param cls the class to look up
 */
export function getClassColor(
  cls: string | undefined | null
): string {
  if (cls == null) {
    return '';
  }
  switch (cls?.toLowerCase()) {
    case 'death knight':
      return '#C41F3B';
    case 'demon hunter':
      return '#A330C9';
    case 'druid':
      return '#FF7D0A';
    case 'evoker':
      return '#33937F';
    case 'hunter':
      return '#ABD473';
    case 'mage':
      return '#69CCF0';
    case 'monk':
      return '#00FF96';
    case 'paladin':
      return '#F58CBA';
    case 'priest':
      return '#FFFFFF';
    case 'rogue':
      return '#FFF569';
    case 'shaman':
      return '#0070DE';
    case 'warlock':
      return '#9482C9';
    case 'warrior':
      return '#C79C6E';
    default: {
      return '';
    }
  }
}
