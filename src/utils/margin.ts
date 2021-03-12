export type MarginArray = [number, number, number, number];

// Always returns a full margin array with 4 values
// Auto-fills if you give it less (e.g. [1,2] -> [1,2,1,2]
export function getMarginArray(value: number | number[]): MarginArray {
  const values = Array.isArray(value) ? value : [value];

  switch (values.length) {
    case 1:
      return [values[0], values[0], values[0], values[0]];
    case 2:
      return [values[0], values[1], values[0], values[1]];
    case 3:
      return [values[0], values[1], values[2], values[1]];
    default:
      return values.slice(0, 4) as MarginArray;
  }
}
