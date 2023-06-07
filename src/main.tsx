import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          body: {
            ...theme.fn.fontStyles(),
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
            lineHeight: theme.lineHeight,
          },
          '#root': {
            margin: '0 auto',
            width: '1200px',
            padding: '0 1rem',
            height: '100vh',
          },
          '.your-class': {
            backgroundColor: 'red',
          },

          '#your-id > [data-active]': {
            backgroundColor: 'pink',
          },
        }),
        fontSizes: {
          xs: '12',
          sm: '14',
          md: '16',
          lg: '18',
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
