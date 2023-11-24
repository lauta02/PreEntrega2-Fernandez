import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import './index.css';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);