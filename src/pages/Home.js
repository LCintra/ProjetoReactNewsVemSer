import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext,useEffect } from 'react'

export default function Home() {
  const {setCategory,setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setCategory('home')
    setNewsList([])
    setLoading(true)
  },[])
  return(
    <ListNewsMockup/>
  )
}
