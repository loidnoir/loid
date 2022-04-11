import { FC, useEffect, useState } from 'react'

interface IntroHeaderList {
  titles: string[]
}

const IntroHeader: FC<IntroHeaderList> = ({ titles }) =>{
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState(titles[count])
  const [length, setLength] = useState(titles.length - 1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == length) setCount(0)
      else setCount(count + 1)

      setTitle(titles[count])
    }, 1800)

    return () => clearInterval(interval)
  })

  return(
    <div className='grid text-center content-center h-[25rem]'>
      <h1 className='font-black font-inter text-primary text-7xl md:text-8xl xl:text-9xl uppercase'>
        {title}
      </h1>
    </div>
  )
}

export default IntroHeader