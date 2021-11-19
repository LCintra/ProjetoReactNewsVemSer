import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Politica() {
  const {setCategory,setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setCategory('politics')
    setLoading(true)
    setNewsList([])
  },[])
  return(
    <ListNewsMockup/>
  )
}
