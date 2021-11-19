import React from 'react'
import styles from './News.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { NewsListContext } from '../../context/NewsListContext'

export default function News({title,author,description,imageUrl}) {
  const {setClickedInformation} = useContext(NewsListContext)
  return (
    <Link onClick={()=>{
      setClickedInformation({title:title,author:author,description:description,imageUrl:imageUrl})
    }} to='/noticia'>
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
    </Link>
  )
}
