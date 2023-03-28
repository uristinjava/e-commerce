import React from 'react';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const SideNavContent = ({ title, one, two, three}) => {
  return (
<div className='py-3 border-b-[1px] border-b-gray-300' >
  <h3 className='text-lg font-titleFont font-semibold mb-1 px-6' >
        { title}
  </h3>
  <ul className='text-sm' >
    <li
    className='flex items-center justify-between hover:bg-zinc-200 px-6'
      >{one}  <span> <KeyboardArrowRightIcon /> </span>
      </li>
      <li
      className='flex items-center justify-between hover:bg-zinc-200 px-6'
      >{two} <span> <KeyboardArrowRightIcon /> </span>
      </li>
      <li
      className='flex items-center justify-between hover:bg-zinc-200 px-6'
      >{three}  <span> <KeyboardArrowRightIcon /> </span>
    </li>
                          
  </ul>
</div>
  )
}
