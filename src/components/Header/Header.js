import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/logo3.jpg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles.headerNav}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.leftDiv}>
          <Link to='/'><img src={img}></img></Link>
          <Link to='/'><h1>The New York Times</h1></Link>
        </div>
        <ul>
          
          <li><Link to='/ciencia'>Science</Link></li>
          <li><Link to='/saude'>Health</Link></li>
          <li><Link to='/politica'>Politics</Link></li>
          <li><Link to='/mundo'>World</Link></li>
        </ul>
      </div>
    </nav>
  )
}
