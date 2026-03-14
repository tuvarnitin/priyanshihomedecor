import React from 'react'

const Title = ({text1,text2}) => {
  return (
      <div className='flex gap-2 items-center justify-center'>
          <div className='flex gap-1 items-baseline'>
              <h4 className='text-[max(14px,1.5vw)] leading-[max(14px,1.5vw)]'>{text1}</h4>
              <h1 className='text-[max(21px,2.6vw)] leading-[max(21px,2.6vw)]'>{text2}</h1>
          </div>
          <div className='w-10 border-t-2 bg-black'></div>
      </div>
  )
}

export default Title