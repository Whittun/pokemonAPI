import React, { ReactNode } from 'react';
import { Card } from '../Card/Card';

interface CardsProps {}

export class Cards extends React.Component {
  constructor(props: CardsProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <section className="cards">
        <ul className="cards__list">
          <Card description="test des" title="Title" />
          <Card description="test des" title="Title" />
          <Card description="test des" title="Title" />
        </ul>
      </section>
    );
  }
}
