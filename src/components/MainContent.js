// components/MainContent.js
import React from 'react';
import JsonDataPage from './JsonDataPage';
function MainContent() {
  return (
    <main>
      <h2>Main Content</h2>
      <p>Welcome to the dashboard!</p>
      <JsonDataPage />
    </main>
  );
}

export default MainContent;
