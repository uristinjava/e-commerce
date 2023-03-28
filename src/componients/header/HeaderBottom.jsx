import React, { useState, useRef, useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SideNavContent } from './SideNavContent';
import { motion } from 'framer-motion';


export const HeaderBottom = () => {

    const [sideBar, setSideBar] = useState(false);
    
    // хук useRef и useEffect используется для закрытия сайд-бара по щелчку вне поля, нужно подумать как сделать на useState

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (e.target.contains(ref.current)) {
                setSideBar(false)
            }
        })
    },[ref, sideBar])

    


  return (
      <div className='w-full px-4 h-[36px] bg-color_light text-white flex items-center' >
          {/* ===========ListItems Start==============  */}
          <ul className='flex items-center gap-2 text-sm tracking-wide' >
              <li
                  onClick={()=>setSideBar(true)}
                  className='headerHover flex items-center gap-1' >
                <MenuIcon/>  Меню
              </li>
              <li className='headerHover' >
                  Предложение дня
              </li>
              <li className='headerHover' >
                  Обслуживание Покупателя
              </li>
              <li className='headerHover' >
                  Скидочная Программа
              </li>
              <li className='headerHover' >
                  Регистрация
              </li>
              <li className='headerHover' >
                  Распродажа
              </li>
            </ul>

          {/* ===========ListItems END==============  */}
          {/* ===========SideNav Start==============  */}
          {
              sideBar && (
                  <div className='w-full h-screen text-black fixed top-0 left-0 bg-color_blue bg-opacity-50 z-10' >
                      <div className='w-full h-full relative' >
                          <motion.div
                              ref={ref}
                              initial={{ x: -500, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{duration:.5}}
                              className='w-[350px] h-full bg-white border border-black' >
                              <div className='w-full bg-color_light text-white py-2 px-6 flex item-center gap-4'>
                                  <AccountCircleIcon />
                                  <h3 className='font-titleFont font-bold text-lg tracking-wide' >
                                      Войти, Зарегистрироваться
                                  </h3>
                              </div>
                              <SideNavContent
                                  title='Digital Content и Девайсы'
                                  one='Музыка'
                                  two='Электронные книги'
                                  three='Магазин Приложений'
                              />
                              <SideNavContent
                                  title='Магазин Электронники'
                                  one='Мобильные устройства'
                                  two='Компьютеры'
                                  three='Умный Дом'
                              />
                              <SideNavContent
                                  title='Программы'
                                  one='Подарочные Карты'
                                  two='Пункты выдачи'
                                  three='Международная Доставка'
                              />
                              <SideNavContent
                                  title='Помощь и Настройки'
                                  one='Ваш Аккаунт'
                                  two='Служба Поддержки'
                                  three='Контакты'
                              />
                              <span onClick={() => setSideBar(false)}
                              className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black
                          flex items-center justify-center border bg-gray-200 hover:bg-red-500
                          hover:text-white duration-300' >
                              <CloseIcon />
                          </span>
                          </motion.div>
                         
                      </div>
                  </div>
              )
            }
          {/* ===========SideNav END==============  */}
      </div>
  )
}
