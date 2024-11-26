'use client'
import { useSelector } from 'react-redux'
import { RootState } from './type';

function SelectedPlace({full =true}:{full?:Boolean}) {
    const {place} =useSelector((state:RootState)=>state.placeName)
    const province = place?.split(',')[0];
 
  return (
    <span>{full ? place:province}</span>
  )
}

export default SelectedPlace