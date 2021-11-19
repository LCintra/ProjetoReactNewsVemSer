import React from 'react'
import News from '../News/News'
import styles from './ListNewsMockup.module.css'
import {useState, useEffect, useContext} from "react"
import { apiKey, axiosPath } from '../../api'
import { NewsListContext } from '../../context/NewsListContext'
import imageDefault from '../../images/news-default.jpeg'
import loadingImg from '../../images/loading.gif'

export default function ListNewsMockup({type}) {
  const {newsList,setNewsList,loading,setLoading} = useContext(NewsListContext)
  useEffect(()=>{
    (async ()=>{
      const {data} = await axiosPath.get(`/${type}.json?api-key=${apiKey}`)
      setLoading(false)
      setNewsList(data.results)
    })()
  },[])
  return (
    <main className={styles.mainBody}>
      <div className="container">
        <h2>{type}</h2>
        {loading ? <img className={styles.loadingImg} src={loadingImg}/> : null}
        <ul>
          {newsList.map((news,index)=>{
                return news.section == 'admin' ? null : <News key={index} title={news.title} author={news.byline} description={news.abstract} imageUrl={news.multimedia ? news.multimedia[0].url : imageDefault} />
              })}
        </ul>
      </div>
    </main>
  )
}
