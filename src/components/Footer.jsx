import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

function Footer() {
  return (
    <footer className='container mx-auto my-10 flex flex-col md:flex-row gap-10 justify-evenly items-center select-none'>
        <div>
            <h4 className='text-xl capitalize mb-4'>resources</h4>
         <ul className='space-y-3 ml-2 text-neutral-300 transition-all '>
            {
                resourcesLinks.map(item => (
                    <li key={item.text} className='text-sm cursor-pointer hover:translate-x-2 duration-300' >
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))
            }
        </ul>
        </div>
        <div>
            <h4 className='text-xl capitalize mb-4'>platform</h4>
         <ul className='space-y-3 ml-2 text-neutral-300 transition-all '>
            {
                platformLinks.map(item => (
                    <li key={item.text} className='text-sm cursor-pointer hover:translate-x-2 duration-300'>
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))
            }
        </ul>
        </div>
        <div>
            <h4 className='text-xl capitalize mb-4'>community</h4>
         <ul className='space-y-3 ml-2 text-neutral-300 transition-all '>
            {
                communityLinks.map(item => (
                    <li key={item.text} className='text-sm cursor-pointer hover:translate-x-2 duration-300' >
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))
            }
        </ul>
        </div>
    </footer>
  )
}

export default Footer