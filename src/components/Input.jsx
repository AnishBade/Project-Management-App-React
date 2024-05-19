import React from 'react'

export default function Input({label,textArea, ...props}) {
    const classes  = 'w-full p-1 border-b-2 rounde-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'


    return (
    <p className='flex flex-col gap-1 my-4'>
        <label htmlFor="" className='text-sm font-bold uppercase text-stone-500'>{label}</label>
        {textArea ? <textarea className={classes} {...props} /> : <input className={classes} type="text" />}
    </p>
  )
}
