export const getRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}
