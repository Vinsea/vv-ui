export const uuid = () => {
  return Math.random()
    .toString(36)
    .slice(6);
};
