import React from 'react'
import ErrorVector from './ErrorVector.json'
import Lottie from 'lottie-react'


export default function Error(props) {
  return (
    <div className='text-center position-absolute top-50 start-50 translate-middle'>
      <Lottie animationData={ErrorVector} style={{width:"60"}}/>
      <h1>{props.status}</h1>
      <p>{props.errorMsg}</p>
    </div>
  )
}
