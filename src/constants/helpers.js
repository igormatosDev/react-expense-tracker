export const getRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}


export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const timeout = (delay) => {
  return new Promise( res => setTimeout(res, delay) );
}