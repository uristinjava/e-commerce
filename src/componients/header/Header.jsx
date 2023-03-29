import React, { useState } from 'react';

import { logo } from '../../assets/index';

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { allItems } from '../../constants';
import { HeaderBottom } from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const [showAll, setShowAll] = useState(false);
    const products = useSelector((state) => state.e_commerce.products);
    
      
    return (
      <div
          className='w-full sticky top-0 z-50'
      >
          <div className='w-full text-white bg-color_blue py-3 px-4 mx-auto flex items-center gap-4'>
            {/*=============Image Start hear================ */}
                <Link to='/' >
                    <div className='headerHover'>
                        <img className='w-24 mt-2' src={logo} alt="LOGO" />
                    </div>
                </Link>
            {/*=============Image End hear================== */}
            {/*=============Delever Start hear============== */}
              <div className='headerHover hidden lgl:inline-flex'>
                  <ModeOfTravelIcon />
              <p className='text-sm text-lightText font-light flex flex-col' >Ваш город <span className='text-sm font-semibold -mt-1 text-whiteText' >Краснодар</span> </p>
              </div> 
            {/*=============Delever End hear================ */}
            {/*=============Search Start hear=============== */}
              <div className='h-10 rounded-md hidden mdl:flex flex-grow relative ' >
                  <span
                      onClick={()=>setShowAll(!showAll)}
                      className='w-14 h-full bg-gray-200
                      hover:bg-gray-300 border-2 cursor-pointer duration-300
                      text-sm text-color_blue font-titleFont flex items-center rounded-tl-md rounded-bl-md' 
                  >
                      ALL
                      <span>
                          <ArrowDropDownIcon />
                      </span>
                  </span>
                  {
                      showAll && (
                          <div>
                              <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white 
                              border-[1px] bprder-color_blue text-black p-2 flex-col gap-1 z-50'>
                                  
                                  {
                                      allItems.map((item) => (
                                          <li key={item._id}
                                          className='text-sm tracking-wide font-titleFont border-b-[1px]
                                  border-b-transparent hover:border-b-color_blue cursor-pointer duration-200 '
                                          >
                                              {item.title}
                                          </li>
                                      ))
                                  }
                              </ul>
                          </div>
                      )
                  }
                  <input
                      className='h-full text-base text-color_blue 
                      flex-grow outline-none border-none px-2'
                      type="text" 
                  />
                  <span
                      className='w-12 h-full flex items-center justify-center bg-color_yellow
                      hover:bg-[#f3a847] duration-300 text-color_blue cursor-pointer
                      rounded-tr-md rounded-br-md'
                  > <SearchIcon /> </span>
              </div>
            {/*=============Search End hear================= */}
            {/*=============Singin Start hear=============== */}
              <Link to='/signin' >
               <div className='flex flex-col items-start justify-center headerHover' >
                  <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light' >Зарегистрироваться</p>
                  <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex' >
                      Войти в аккаунт {" "}
                      <span>
                          <ArrowDropDownIcon />
                      </span>
                  </p>
            </div>
              </Link>
            {/*=============Singin End hear================= */}
            {/*=============Orders Start hear=============== */}
              <div className=" hidden lgl:flex flex-col items-start justify-center headerHover">
                  <p className='text-xs text-lightText font-light' >Купить</p>
                  <p className='text-sm font-semibold -mt-1' >Сейчас</p>
                  </div>
            {/*=============Orders End hear================= */}
            {/*=============Carts Start hear================ */}
                <Link to='/cart'>
                    <div className="flex items-start justify-center headerHover relative">
                        <ShoppingCartIcon />
                        <p className='text-xs font-semibold mt-3 text-whiteText' >
                            Корзина {' '}
                            <span
                                className='absolute text-xs -top-1 left-6 font-semibold 
                                p-1 h-4 bg-[#f3a847] text-color_blue rounded-full
                                flex justify-center items-center ' 
                            >
                                {products.length > 0 ? products.length : 0}
                            </span>
                        </p>
                    </div>
                </Link>
            {/*=============Carts End hear================== */}
          </div>

          <HeaderBottom/>

    </div>
  )
}
