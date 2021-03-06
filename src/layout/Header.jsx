import React from 'react'
import './Header.css'

export default function Header() {
    return (
  <nav>
    <div className="nav-wrapper blue lighten-2 sticky">
      <a href="/" className="brand-logo">Movie<i className="fal fa-tape"></i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Join</li>
      </ul>
    </div>
  </nav>
    )
}
