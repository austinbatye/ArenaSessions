/**
 * Interface containing data for a match
 */
export interface Match {
  id: string;
  charId: string;
  isWin: boolean;
  arena: string;
  team: string;
  enemy: string;
}
