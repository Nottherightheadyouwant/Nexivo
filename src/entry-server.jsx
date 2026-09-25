import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import AppContent from './AppContent.jsx';

export function render(url) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppContent />
    </MemoryRouter>
  );
  return { html };
}
