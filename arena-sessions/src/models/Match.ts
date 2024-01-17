/**
 * Interface containing data for a match
 */
export interface Match {
  id: string;
  charId: string;
  isWin: boolean | null;
  arena: string;
  team: string;
  enemy: string;
}
