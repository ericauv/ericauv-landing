import './global.css';
import React from 'react';
import { ThemeContextProvider } from './src/components/context/ThemeContext';
export const wrapPageElement = ({ element, props }) => (
  <ThemeContextProvider props>{element}</ThemeContextProvider>
);
