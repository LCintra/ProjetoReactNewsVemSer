import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext,useEffect } from 'react'

export default function Home() {
  const {setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setNewsList([])
    setLoading(true)
  },[])
  return(
    <ListNewsMockup type={'home'}/>
  )
}
