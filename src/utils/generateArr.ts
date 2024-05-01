export const arr = new Array(30_000_00).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 29_999_99,
  };
});
