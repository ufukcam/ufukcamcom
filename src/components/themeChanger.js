import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
          <a target="_blank" href="https://twitter.com/ufukcam"><i className="gg-link"></i></a>

        </div>
      </label>
    )}
  </ThemeToggler>
)
