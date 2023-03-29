import React from 'react'
import { logo } from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Signin = () => {
  return (
    <div className='w-full' >
      <div className="w-full bg-gray-700 pb-10">
        <form className='w-[350px] mx-auto flex flex-col items-center' >
          <img className='w-32' src={logo} alt="LOGO" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className='text-white font-titleFont text-3xl font-medium mb-4' >
              Войти
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p className='text-white text-sm font-mediu' >
                  Email или номер телефона
                </p>
                <input
                  className='w-full lowercase py-1 border
                  border-zinc-400 px-2 text-base rounded-sm outline-none
                  focus-within:border-[#e77600] focus-within:inputShadow duration-100 '
                  type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <p className='text-white text-sm font-mediu' >
                  Пароль
                </p>
                <input
                  className='w-full lowercase py-1 border
                  border-zinc-400 px-2 text-base rounded-sm outline-none
                  focus-within:border-[#e77600] focus-within:inputShadow duration-100 '
                  type="password" />
              </div>
              <button onClick={(e)=>e.preventDefault()} className='w-full py-1.5 text-sm  font-normal rounded-sm bg-yellow-400  
                cursor-pointer
              bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] 
              hover:bg-gradient-to-b border border-zinc-400 
              active:border-yellow-800 active:shadow-inputShadow'
              >
                ВОЙТИ
              </button>
            </div>
            <p className='text-white text-xs leading-4 mt-4' >Нажимая кнопку войти вы соглашаетесь 
              <span className='text-blue-400' > с правилами {' '} </span> и <span className='text-blue-400' >политикой конфиндециальности</span> </p>
            <p className='text-xs text-gray-100 mt-4 cursor-pointer group' > <ArrowRightIcon/> <span className='text-blue-400 group-hover:text-orange-700 group-hover:underline underline-offset-1' >Нужна помощь?</span> </p>
          </div>
          <p className=" w-full text-xs text-yellow-400 mt-4 flex items-center">
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex ' ></span>
            <span className='w-1/3 text-center' >Первый раз на сайте?</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex ' ></span>
          </p>

          <button onClick={(e)=>e.preventDefault()} className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:inputShadow'>Зарегистрироваться на сайте</button>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6 justify-center">
          <p 
          className='text-xs text-blue-400 hover:text-orange-400 
          hover:underline underline-offset-1 
          cursor-pointer duration-100'
          >
            Правила пользования
          </p>
          <p 
          className='text-xs text-blue-400 hover:text-orange-400 
          hover:underline underline-offset-1 
          cursor-pointer duration-100'
          >
            Политика конфиндециальности
          </p>
          <p 
          className='text-xs text-blue-400 hover:text-orange-400 
          hover:underline underline-offset-1 
          cursor-pointer duration-100'
          >
            Политика конфиндециальности
          </p>
        </div>
        <p className='text-xs text-gray-600' > &copy;, React Klykoff Inc </p>
      </div>
    </div>
  )
}
