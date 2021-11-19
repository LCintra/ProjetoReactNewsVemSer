import React from 'react'
import styles from './News.module.css'

export default function News({title,author,description,imageUrl}) {
  return (
    <li className={styles.listItem}>
      <div>
        <img src={imageUrl}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h4><span>{author}</span></h4>
        <p>{description}</p>
      </div>
    </li>
  )
}
