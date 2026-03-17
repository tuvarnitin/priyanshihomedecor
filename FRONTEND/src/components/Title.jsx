import React from 'react'

const Title = ({text1,text2}) => {
  return (
      <div className='flex gap-2 items-center justify-center'>
          <div className='flex gap-1 items-baseline'>
              <h1 className='text-responsive-small leading-responsive-small'>{text1}</h1>
              <h1 className='text-responsive-xlarge leading-responsive-large'>{text2}</h1>
          </div>
          <div className='w-10 border-t-2 bg-black'></div>
      </div>
  )
}

export default Title