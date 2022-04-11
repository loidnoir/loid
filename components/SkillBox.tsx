import { FC } from "react"

const SkillsBox: FC = () => {
  const skills = {
    name: ['JavaScript', 'TypeScript', 'Java'],
    description: ['Messy language', 'Have a rude brother', 'Big decimal']
  }

  const text = "text-4xl font-bold font-inter rounded text-white-500 bg-gray-500 border-gray-500 p-1 uppercase"

  return(
    <div className='flex items-center flex-col gap-5 lg:flex-row lg:justify-center lg:gap-20'>
      <div>
        <h1 className={text}>JavaScript</h1>
        <p>Messy language</p>
      </div>
      <div>
        <h1 className={text}>TypeScript</h1>
        <p>Have a rude brother</p>
      </div>
      <div>
        <h1 className={text}>Java</h1>
        <p>Big decimal</p>
      </div>
    </div>
  )
}

export default SkillsBox