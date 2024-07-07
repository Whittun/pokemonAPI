import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
}

export class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <li className="cards__item">
        <h2 className="cards__title">{this.props.title}</h2>
        <p className="cards__text">{this.props.description}</p>
      </li>
    );
  }
}
