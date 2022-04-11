import type { NextPage } from 'next'
import IntroHeader from '../components/IntroHeader'
import SkillsBox from '../components/SkillBox'

const Home: NextPage = () => {
  return (
    <main className='p-5 bg-white-200'>
      <IntroHeader titles={['Fullstack developer', 'Graphic designer', 'Bot developer']}/>
      <SkillsBox/>
    </main>
  )
}

export default Home
