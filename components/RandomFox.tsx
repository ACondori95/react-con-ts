import {JSX} from "react";

// generate a random number between 1 and 123
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <img width={320} height='auto' src={image} alt='' className='rounded' />
  );
};
