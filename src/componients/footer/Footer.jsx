import React from 'react'
import { FooterBottom } from './FooterBottom'
import { FooterMiddle } from './FooterMiddle'
import { FooterTop } from './FooterTop'

export const Footer = () => {
  return (
      <div className='font-titleFont' >
          <FooterTop />
          <FooterMiddle />
          <FooterBottom/>
    </div>
  )
}
