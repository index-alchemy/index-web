import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    {
      symbol: '📚',
      style: {
        '--color-bg': '#F9F9FB',
        '--color-bg-button': '#A8D9D0',
        '--color-bg-header': '#fff',
        '--color-bg-input': '#fff',
        '--color-bg-select': '#0001',
        '--color-border': '#ababab',
        '--color-fg': '#fff1',
        '--color-hr': '#e5e5e5',
        '--color-shadow': '#0003',
        '--color-text': '#696969',
        '--color-text-input': '#40454f',
        '--color-text-button': 'var(--color-text-input)',
        '--color-text-title': '#1f1f1fe4',
        '--color-text-title-item': 'var(--color-text-title)',
        '--color-text-secondary': '#3c69e7',

        '--border': '0.6px solid var(--color-border)',
        '--break': '2px solid var(--color-hr)',
        '--radius-big': '0.5rem',
        '--radius': '0.25rem',
        '--radius-small': '0.15rem',
        '--box-shadow': '0 0 2px 0 var(--color-shadow)',
        '--box-shadow-big': '0 0 0.25rem 0 var(--color-shadow)',
        '--box-shadow-hover': '0 1px 10px 0 var(--color-shadow)',
        '--font': '"Inter", Helvetica, sans-serif',

        '--easter-egg': 'none',
        '--not-easter': 'flex'
      }
    },
    {
      symbol: '💡',
      style: {
        '--color-bg': '#1f1f1f',
        '--color-bg-button': '#CC9F9F',
        '--color-bg-header': 'var(--color-bg)',
        '--color-bg-input': '#ababab',
        '--color-bg-select': 'var(--color-bg-input)',
        '--color-border': 'var(--color-bg-input)',
        '--color-fg': 'var(--color-bg-header)',
        '--color-hr': '#e5e5e5',
        '--color-shadow': '#0003',
        '--color-text': '#ABABAB',
        '--color-text-input': '#F9F9FB',
        '--color-text-button': 'var(--color-text-input)',
        '--color-text-title': '#F9F9FB',
        '--color-text-title-item': 'var(--color-text)',
        '--color-text-secondary': 'var(--color-bg-button)',

        '--border': '0.6px solid var(--color-border)',
        '--break': '2px solid var(--color-hr)',
        '--radius-big': '0.5rem',
        '--radius': '0.25rem',
        '--radius-small': '0.15rem',
        '--box-shadow': '0 0 2px 0 var(--color-shadow)',
        '--box-shadow-big': '0 0 0.25rem 0 var(--color-shadow)',
        '--box-shadow-hover': '0 1px 10px 0 var(--color-shadow)',
        '--font': '"Inter", Helvetica, sans-serif',

        '--easter-egg': 'none',
        '--not-easter': 'flex'
      }
    },
    {
      symbol: '🌈',
      style: {
        '--color-bg': '#f3f3f3',
        '--color-bg-button': '#f13c20',
        '--color-bg-header': '#fff6',
        '--color-bg-input': '#fff6',
        '--color-bg-select': '#0000',
        '--color-border': '#ababab',
        '--color-fg': 'var(--color-bg-header)',
        '--color-hr': '#e5e5e5',
        '--color-shadow': '#0003',
        '--color-text': '#e32',
        '--color-text-input': '#403535dd',
        '--color-text-button': '#fff',
        '--color-text-title': '#424242',
        '--color-text-title-item': 'var(--color-text-title)',
        '--color-text-secondary': '#e32',

        '--border': '0.6px solid var(--color-border)',
        '--break': '2px solid var(--color-hr)',
        '--radius-big': '0.5rem',
        '--radius': '0.25rem',
        '--radius-small': '0.15rem',
        '--box-shadow': '0 0 0.25rem 0 var(--color-shadow)',
        '--box-shadow-big': '0 0 0.25rem 0 var(--color-shadow)',
        '--box-shadow-hover': '0 1px 10px 0 var(--color-shadow)',
        '--font': '"Inter", Helvetica, sans-serif',

        '--easter-egg': 'none',
        '--not-easter': 'flex'
      }
    },
    {
      symbol: '🎨',
      style: {
        '--color-bg': '#8B8B8B',
        '--color-bg-button': 'transparent',
        '--color-bg-header': '#8B8B8B',
        '--color-bg-input': '#fff6',
        '--color-bg-select': '#0000',
        '--color-border': '#B1D384',
        '--color-fg': 'var(--color-bg-header)',
        '--color-hr': '#e5e5e5',
        '--color-shadow': '#0003',
        '--color-text': '#FEFEFE',
        '--color-text-input': '#FEFEFE',
        '--color-text-button': '#B1D384',
        '--color-text-title': '#424242',
        '--color-text-title-item': 'var(--color-text-title)',
        '--color-text-secondary': '#e32',

        '--border': '0.6px solid var(--color-border)',
        '--break': '2px solid var(--color-hr)',
        '--radius-big': '0',
        '--radius': '0',
        '--radius-small': '0.',
        '--box-shadow': '0 0 2px 0 var(--color-shadow)',
        '--box-shadow-big': '0 0 0.25rem 0 var(--color-shadow)',
        '--box-shadow-hover': '0 1px 10px 0 var(--color-shadow)',
        '--font': '"Times New Roman", Times, serif',

        '--easter-egg': 'flex',
        '--not-easter': 'none'
      }
    },
  ];

  const handleThemeSwitch = e => {
    setThemeIndex((themeIndex + 1) % themes.length);
    const theme = themes[(themeIndex + 1) % themes.length];

    console.log(themeIndex, themes, theme);

    const html = document.querySelector('html');
    for (let prop of Object.entries(theme.style)) {
      html.style.setProperty(...prop);
    }
  };

  return <>
    <button
      className="ThemeSwitcher"
      onClick={handleThemeSwitch}
    >
      {themes[themeIndex % themes.length].symbol}
    </button>
  </>;
};

export default ThemeSwitcher;
