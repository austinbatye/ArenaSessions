/**
 * Map of each class and the specs it holds
 */
export const classSpecs: Map<string, string[]> = new Map<
  string,
  string[]
>([
  ['Death Knight', ['Blood', 'FrostDeathKnight', 'Unholy']],
  ['Demon Hunter', ['Havoc', 'Vengeance']],
  ['Druid', ['Balance', 'Feral', 'Guardian', 'RestorationDruid']],
  ['Evoker', ['Augmentation', 'Devastation', 'Preservation']],
  ['Hunter', ['Beast Mastery', 'Marksmanship', 'Survival']],
  ['Mage', ['Arcane', 'Fire', 'FrostMage']],
  ['Monk', ['Brewmaster', 'Mistweaver', 'Windwalker']],
  ['Paladin', ['HolyPaladin', 'ProtectionPaladin', 'Retribution']],
  ['Priest', ['Discipline', 'HolyPriest', 'Shadow']],
  ['Rogue', ['Assassination', 'Outlaw', 'Subtlety']],
  ['Shaman', ['Elemental', 'Enhancement', 'RestorationShaman']],
  ['Warlock', ['Affliction', 'Demonology', 'Destruction']],
  ['Warrior', ['Arms', 'Fury', 'ProtectionWarrior']],
]);

/**
 * Character classes
 */
export enum AllClasses {
  DeathKnight = 'Death Knight',
  DemonHunter = 'Demon Hunter',
  Druid = 'Druid',
  Evoker = 'Evoker',
  Hunter = 'Hunter',
  Mage = 'Mage',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Priest = 'Priest',
  Rogue = 'Rogue',
  Shaman = 'Shaman',
  Warlock = 'Warlock',
  Warrior = 'Warrior',
}

/**
 * Map of specs that are duplicated across multiple classes
 */
export const DuplicateSpecStrings: Map<string, string> = new Map<
  string,
  string
>([
  ['FrostDeathKnight', 'Frost'],
  ['FrostMage', 'Frost'],
  ['HolyPaladin', 'Holy'],
  ['HolyPriest', 'Holy'],
  ['ProtectionPaladin', 'Protection'],
  ['ProtectionWarrior', 'Protection'],
  ['RestorationDruid', 'Restoration'],
  ['RestorationShaman', 'Restoration'],
]);

/**
 * Returns the deDuped spec string
 * If spec supplied is not part of the deDuped list, will return as is
 */
export function getDeDupedSpec(
  spec: string | null | undefined
): string {
  if (!spec) {
    return '';
  }

  return DuplicateSpecStrings.get(spec) ?? spec;
}

/**
 * gets the hex color of the value supplied
 * @param value the class or spec being looked up
 */
export function getColor(value: string): string {
  if (classSpecs.get(value) != null) {
    return getClassColor(value);
  }

  return getClassColor(getClassFromSpec(value));
}

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

/**
 * Returns the class from the supplied spec
 * @param spec the spec pertaining to the class being looked up
 */
export function getClassFromSpec(spec: string): string {
  for (const [cls, specs] of Array.from(classSpecs)) {
    if (specs.includes(spec)) {
      return cls;
    }
  }

  return '';
}
