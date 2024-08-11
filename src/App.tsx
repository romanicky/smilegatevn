import React, { useState } from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';

const initialCards: CardData[] = [
  // Your initial cards data
];

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [typeFilter, setTypeFilter] = useState<number | null>(null);

  const filteredCards =
    typeFilter !== null
      ? cards.filter((card) => card.type === typeFilter)
      : cards;

  return (
    <div className="App">
      <TopMenu setTypeFilter={setTypeFilter} />
      <PhotoGrid cards={filteredCards} />
    </div>
  );
};

export default App;
