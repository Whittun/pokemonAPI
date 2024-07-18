import { ReactNode } from 'react';

interface PropsType {
  image: string;
  title: string;
}

export const Card = ({ image, title }: PropsType): ReactNode => {
  return (
    <li className="cards__item">
      <h2 className="cards__title">{title}</h2>
      <img className="cards__image" src={image} alt={title} />
    </li>
  );
};
