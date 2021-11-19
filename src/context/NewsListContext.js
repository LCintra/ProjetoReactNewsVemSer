import React, { createContext, useState } from 'react'

const NewsListContext = createContext()

function NewsListProvider({children}) {
  const [newsList,setNewsList] = useState([])
  const [category,setCategory] = useState('home')
  const [loading,setLoading] = useState(true)
  return (
    <NewsListContext.Provider value={{newsList,setNewsList,category,setCategory,loading,setLoading}}>
      {children}
    </NewsListContext.Provider>
  )
}

export {NewsListContext,NewsListProvider}