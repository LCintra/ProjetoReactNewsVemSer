import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/logo3.jpg'
import styles from './Header.module.css'
import { useMatch, useResolvedPath } from 'react-router'

function CustomLink({ children, to }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? "gold" : "white" }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <nav className={styles.headerNav}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.leftDiv}>
          <Link to='/'><img src={img}></img></Link>
          <Link to='/'><h1>The New York Times</h1></Link>
        </div>
        <ul>
          
          <li><CustomLink to='/ciencia'>Science</CustomLink></li>
          <li><CustomLink to='/saude'>Health</CustomLink></li>
          <li><CustomLink to='/politica'>Politics</CustomLink></li>
          <li><CustomLink to='/mundo'>World</CustomLink></li>
        </ul>
      </div>
    </nav>
  )
}
