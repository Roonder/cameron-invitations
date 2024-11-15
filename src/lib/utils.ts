// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

const random = (min: number, max: number) => (
    Math.floor(Math.random() * (max - min)) + min
);

export const range = (start: number, end: number, step = 1) => {
    const output: number[] = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
};

export const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      // Bright yellow color:
      color,
      size: random(10, 20),
      style: {
        // Pick a random spot in the available space
        top: random(0, 100) + '%',
        left: random(0, 100) + '%',
        // Float sparkles above sibling content
        zIndex: 2,
      },
    }
}