import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Mundo() {
  const {setCategory,setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setCategory('world')
    setNewsList([])
    setLoading(true)
  },[])
  return(
    <ListNewsMockup/>
  )
}
