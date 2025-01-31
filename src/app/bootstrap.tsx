import '@styles/tailwind.config.css';
import '@styles/normalize.config.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Orchestrator } from './orchestrator';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Orchestrator />
  </React.StrictMode>,
);
