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
 * Spec urls
 */
export const specIcons: Map<string, string> = new Map<string, string>(
  [
    // Death Knight
    [
      'Blood',
      'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg',
    ],
    [
      'FrostDeathKnight',
      'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_frostpresence.jpg',
    ],
    [
      'Unholy',
      'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_unholypresence.jpg',
    ],

    // Demon Hunter
    [
      'Havoc',
      'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg',
    ],
    [
      'Vengeance',
      'https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg',
    ],

    // Druid
    [
      'Balance',
      'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
    ],
    [
      'Feral',
      'https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg',
    ],
    [
      'Guardian',
      'https://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg',
    ],
    [
      'RestorationDruid',
      'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg',
    ],

    // Evoker
    [
      'Devastation',
      'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker.jpg',
    ],
    [
      'Preservation',
      'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_preservation.jpg',
    ],
    [
      'Augmentation',
      'https://wow.zamimg.com/images/wow/icons/large/classicon_evoker_augmentation.jpg',
    ],

    // Hunter
    [
      'Beast Mastery',
      'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg',
    ],
    [
      'Marksmanship',
      'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg',
    ],
    [
      'Survival',
      'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg',
    ],

    // Mage
    [
      'Arcane',
      'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg',
    ],
    [
      'Fire',
      'https://wow.zamimg.com/images/wow/icons/large/spell_fire_flamebolt.jpg',
    ],
    [
      'FrostMage',
      'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
    ],

    // Monk
    [
      'Brewmaster',
      'https://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg',
    ],
    [
      'Mistweaver',
      'https://wow.zamimg.com/images/wow/icons/large/spell_monk_mistweaver_spec.jpg',
    ],
    [
      'Windwalker',
      'https://wow.zamimg.com/images/wow/icons/large/spell_monk_windwalker_spec.jpg',
    ],

    // Paladin
    [
      'HolyPaladin',
      'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg',
    ],
    [
      'ProtectionPaladin',
      'https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldofthetemplar.jpg',
    ],
    [
      'Retribution',
      'https://wow.zamimg.com/images/wow/icons/large/paladin_retribution.jpg',
    ],

    // Priest
    [
      'Discipline',
      'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
    ],
    [
      'HolyPriest',
      'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg',
    ],
    [
      'Shadow',
      'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
    ],

    // Rogue
    [
      'Assassination',
      'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_deadlybrew.jpg',
    ],
    [
      'Outlaw',
      'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_waylay.jpg',
    ],
    [
      'Subtlety',
      'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
    ],

    // Shaman
    [
      'Elemental',
      'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
    ],
    [
      'Enhancement',
      'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_improvedstormstrike.jpg',
    ],
    [
      'RestorationShaman',
      'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingwavegreater.jpg',
    ],

    // Warlock
    [
      'Affliction',
      'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
    ],
    [
      'Demonology',
      'https://wow.zamimg.com/images/wow/icons/large/ability_warlock_impoweredimp.jpg',
    ],
    [
      'Destruction',
      'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg',
    ],

    // Warrior
    [
      'Arms',
      'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
    ],
    [
      'Fury',
      'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg',
    ],
    [
      'ProtectionWarrior',
      'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg',
    ],
  ]
);

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
