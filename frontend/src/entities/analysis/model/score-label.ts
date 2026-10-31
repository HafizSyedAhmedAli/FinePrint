export type ScoreLabel = 'Low risk' | 'Medium risk' | 'High risk';

export function getScoreLabel(score: number): ScoreLabel {
  if (!Number.isInteger(score) || score < 1 || score > 10) {
    throw new RangeError('Score must be an integer from 1 to 10');
  }
  if (score <= 3) return 'Low risk';
  if (score <= 6) return 'Medium risk';
  return 'High risk';
}
