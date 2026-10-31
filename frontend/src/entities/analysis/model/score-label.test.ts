import { describe, expect, it } from 'vitest';
import { getScoreLabel } from './score-label';

describe('getScoreLabel', () => {
  it.each([
    [1, 'Low risk'],
    [3, 'Low risk'],
    [4, 'Medium risk'],
    [6, 'Medium risk'],
    [7, 'High risk'],
    [10, 'High risk'],
  ])('maps score %i to "%s"', (score, label) => {
    expect(getScoreLabel(score)).toBe(label);
  });

  it.each([0, 11, 5.5, Number.NaN])('rejects invalid score %s', (score) => {
    expect(() => getScoreLabel(score)).toThrow(RangeError);
  });
});
