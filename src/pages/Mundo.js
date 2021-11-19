import ListNewsMockup from '../components/ListNewsMockup/ListNewsMockup'
import { NewsListContext } from '../context/NewsListContext'
import { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Mundo() {
  const {setLoading,setNewsList} = useContext(NewsListContext)
  useEffect(()=>{
    setNewsList([])
    setLoading(true)
  },[])
  return(
    <ListNewsMockup type={'world'}/>
  )
}
