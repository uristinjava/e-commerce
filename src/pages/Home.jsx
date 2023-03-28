import React from 'react'
import {Banner} from '../componients/home/Banner'
import {Products} from '../componients/home/Products'

 export const Home = () => {
  return (
    <div>
        <Banner />
      <div className="w-full -mt14 xl:-mt-36 py-10">
        <Products />
      </div>
    </div>
  )
}




