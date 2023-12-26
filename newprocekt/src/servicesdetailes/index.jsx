import React from 'react'
import { useParams } from "react-router-dom";
const ServicesDetails  = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>index</div>
  )
}

export default ServicesDetails 