/** Una pieza de la colección de cuero. Específica de esta feature (ISP, §6.3-I). */
export interface Piece {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly summary: string;
  readonly description: string;
  readonly details: readonly string[];
}
