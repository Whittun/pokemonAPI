import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  image: string;
}

export class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <li className="cards__item">
        <h2 className="cards__title">{this.props.title}</h2>
        <img
          className="cards__image"
          src={this.props.image}
          alt={this.props.title}
        />
      </li>
    );
  }
}
