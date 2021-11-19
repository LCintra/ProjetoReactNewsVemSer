import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Saude(){
  const {setCategory,setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setCategory('health')
    setLoading(true)
    setNewsList([])
  },[])
  return(
    <ListNewsMockup/>
  )
}
