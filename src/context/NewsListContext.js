import React, { createContext, useState } from 'react'

const NewsListContext = createContext()

function NewsListProvider({children}) {
  const [newsList,setNewsList] = useState([])
  const [loading,setLoading] = useState(true)
  const [clickedInformation,setClickedInformation] = useState({})
  return (
    <NewsListContext.Provider value={{newsList,setNewsList,loading,setLoading,clickedInformation,setClickedInformation}}>
      {children}
    </NewsListContext.Provider>
  )
}

export {NewsListContext,NewsListProvider}