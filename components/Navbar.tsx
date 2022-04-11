import Link from 'next/link'
import { FunctionComponent } from 'react'

const Navbar: FunctionComponent = () => {
  return(
    <nav className='bg-primary text-base font-semibold w-full'>
      <ul className='list-none flex justify-center lg:inline-flex gap-5 p-5'>
        {['Home', 'About', 'Projects'].map(item => {
          return (
            <li key={item} className='text-white-200'>
              <Link href={item.toLowerCase() == 'home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar