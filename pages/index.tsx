import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import SkillsBox from '../components/SkillBox'

const Home: NextPage = () => {
  const titles = ['Fullstack developer', 'Graphic designer', 'Bot developer']
  const colors = ['text-[#7fe02b]', 'text-[#2b8ce0]', 'text-[#822be0]']
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState(titles[count])
  const [color, setColor] = useState(colors[count])

  useEffect(() => {
    const interval = setInterval(() => {
      let current = count

      if (current == titles.length - 1) setCount(0)
      else setCount(count + 1)

      setTitle(titles[count])
      setColor(colors[count])
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <main className='p-5'>
      <div className='h-[30rem] text-center grid content-center font-black xl:text-8xl md:text-7xl sm:text-6xl text-5xl transition uppercase font-inter text-gray-500'>
        <h1>
          {title.split(' ')[0]} <span className={`${color}`}>{title.split(' ')[1]}</span>
        </h1>
      </div>
      <SkillsBox/>
    </main>
  )
}

export default Home
