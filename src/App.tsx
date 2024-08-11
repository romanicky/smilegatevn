import React, { useState } from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import { CardData } from './components/Card/Card';
import initialCards from './mock-data/cards.json'

const App: React.FC = () => {
  const [cards] = useState<CardData[]>(initialCards);
  const [typeFilter, setTypeFilter] = useState<number | null>(null);

  const filteredCards =
    typeFilter !== null
      ? cards.filter((card) => card.type === typeFilter)
      : cards;

  return (
    <div className="App">
      <TopMenu setTypeFilter={setTypeFilter} activeType={typeFilter} />
      <PhotoGrid cards={filteredCards} />
    </div>
  );
};

export default App;
