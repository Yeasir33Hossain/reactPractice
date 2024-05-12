// components/MainContent.js
import React from 'react';
import JsonDataPage from './JsonDataPage';
import Board from './TicTacToe';
function MainContent() {
  return (
    <main>
      <h2>Main Content</h2>
      <p>Welcome to the dashboard!</p>
      <Board/>
      <JsonDataPage />
    </main>
  );
}

export default MainContent;
