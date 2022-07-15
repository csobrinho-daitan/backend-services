
export const hello = (): string => {
  const w: string = world();
  const result: string = `Hello ${w}`;
  return result;
};

export const world = (): string => {
  return 'World';
};