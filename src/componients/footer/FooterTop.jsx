import React from 'react'

export const FooterTop = () => {
  return (
      <div className='w-full bg-white py-6' >
          <div className='w-full border-t-[1px] border-b-[1px] py-8'>
              <div className="w-64 mx-auto text-center flex flex-col gap-.5">
                  <p className='text-sm'>
                  Товары подобранные для Вас
                  </p>
                  <button
                      className='w-full bg-yellow-400 rounded-md 
                      py-1 font-semibold cursor-pointer
                      hover:bg-yellow-500
                      active:bg-yellow-700' >Войти</button>
                  <p className='text-xs mt-1' >
                      Первый раз?
                      <span className='text-blue-600 ml-1 cursor-pointer' >
                          Нажать для регитрации
                      </span>
                  </p>
              </div>
          </div>
          
    </div>
  )
}
