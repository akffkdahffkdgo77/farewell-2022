export const isF = (index: number, i: number) => (index === 1 && i > 0 && i < 6) || ([2, 3].includes(index) && (i === 1 || i === 3));
export const isA = (index: number, i: number) => ((index === 5 || index === 7) && i > 0 && i < 6) || ([6].includes(index) && (i === 1 || i === 3));
export const isR = (index: number, i: number) =>
    (index === 9 && i > 0 && i < 6) || ([10, 11, 12].includes(index) && (i === 1 || i === 3)) || (index === 12 && (i === 2 || i === 5)) || (index === 11 && i === 4);
export const isE = (index: number, i: number) => (index === 14 && i > 0 && i < 6) || ([15, 16].includes(index) && (i === 1 || i === 3 || i === 5));
export const isW = (index: number, i: number) => ((index === 18 || index === 22) && i > 0 && i < 6) || ((index === 19 || index === 21) && i === 4) || (index === 20 && i === 3);
export const isE2 = (index: number, i: number) => (index === 24 && i > 0 && i < 6) || ([25, 26].includes(index) && (i === 1 || i === 3 || i === 5));
export const isL = (index: number, i: number) => (index === 28 && i > 0 && i < 6) || ([29, 30].includes(index) && i === 5);
export const isL2 = (index: number, i: number) => (index === 32 && i > 0 && i < 6) || ([33, 34].includes(index) && i === 5);

export const is2 = (index: number, i: number) => (index === 38 && i > 0 && i < 4) || ([36, 37, 38].includes(index) && (i === 1 || i === 3 || i === 5)) || (index === 36 && i === 4);
export const is0 = (index: number, i: number) => ((index === 40 || index === 42) && i > 0 && i < 6) || ([41, 42].includes(index) && (i === 1 || i === 5));
export const is22 = (index: number, i: number) => (index === 46 && i > 0 && i < 4) || ([44, 45, 46].includes(index) && (i === 1 || i === 3 || i === 5)) || (index === 44 && i === 4);
export const is23 = (index: number, i: number) => (index === 50 && i > 0 && i < 4) || ([48, 49, 50].includes(index) && (i === 1 || i === 3 || i === 5)) || (index === 48 && i === 4);
