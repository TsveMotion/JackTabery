import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      color: '#ffffff',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: '900',
        color: '#e63946',
        margin: '0 0 0.5rem 0',
        lineHeight: 1,
      }}>404</h1>

      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        margin: '0 0 1rem 0',
        color: '#ffffff',
      }}>Website Not Available</h2>

      <p style={{
        fontSize: '1.1rem',
        color: '#888888',
        maxWidth: '400px',
        lineHeight: 1.6,
      }}>
        This website is currently unavailable. Please check back later.
      </p>
    </div>
  );
};

export default App;
