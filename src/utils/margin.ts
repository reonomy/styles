export type MarginArray = [number, number, number, number];

// Always returns a full margin array with 4 values
// Auto-fills if you give it less (e.g. [1,2] -> [1,2,1,2]
export function getMarginArray(value: number | number[]): MarginArray {
  const values = Array.isArray(value) ? value : [value];
  const [top, right, bottom] = values;

  switch (values.length) {
    case 1:
      return [top, top, top, top];
    case 2:
      return [top, right, top, right];
    case 3:
      return [top, right, bottom, right];
    default:
      return values.slice(0, 4) as MarginArray;
  }
}
