import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { TiDelete } from 'react-icons/ti'
import { BsPlusCircleFill } from 'react-icons/bs'

// TOTALLY IN PROGRESS AND LIKELY TO NOT BE ADDED AT ALL
export default function HobbySelectorComponent() {
    const [ hobbies, setHobbies ] = useState('')
    const [ filter, setFilter ] = useState('');
    const [ isAdding, setIsAdding ] = useState(false)
    const [ choosenHobbies, setChoosenHobbies ] = useState([])

    useEffect(() => {
        fetchHobbies()
    }, [])


    async function fetchHobbies() {
        await fetch('http://localhost:3000/hobbies.txt')
          .then(res => res.text())
          .then(text => {
            setHobbies(text.split(/\r?\n/))
        });
      }

    const addHobby = function(e) {
        setChoosenHobbies([...choosenHobbies, e.currentTarget.textContent])
    }
    // remove is bugged, sometimes the hobby disappears as expected
    // othertimes it stays undefined and can not be removed
    function removeHobby(e) {
        setChoosenHobbies(choosenHobbies.filter((i) => i !== e))
    }

    return (
    <div className='w-full'>
        <span className='text-neutral-400 font-medium'>Hobbies</span>
        <div className={`flex ${isAdding ? 'flex-col' : 'flex-row'}`}>
            <div className='w-fit'>
                { isAdding ? (
                <>
                <div className='rounded inline-flex items-center h-6 bg-neutral-700'>
                    <input id="filter" name="filter" type="text" autoFocus className='rounded-sm w-32 bg-neutral-300 focus:outline-transparent focus:outline-none' value={filter} onChange={event => setFilter(event.target.value)}/>
                    <TiDelete onClick={() => setIsAdding(false)} size={25} className='text-neutral-400 cursor-pointer'/>
                </div>
                <ul className='pt-2'>
                    {hobbies.filter(f => f.includes(filter) || filter === '').slice(0, 10).map(f =>
                        <button className='bg-neutral-400 m-[0.1rem] rounded-full font-medium w-fit px-2 hover:bg-neutral-300 transition-colors' key={f} onClick={addHobby}>#{f}</button>
                    )}
                </ul>
                </>
                ) : (
                <TiDelete size={30} onClick={() => setIsAdding(true)} className= 'rotate-45 text-neutral-500 hover:text-neutral-600'/>
                )}
            </div>
            <div className='flex items-center'>
                {choosenHobbies.map((el, i) => {
                return(
                <div key={i}className='w-fit h-fit pl-2 rounded-full flex justify-center items-center whitespace-nowrap bg-neutral-500'>
                    <p className='text-sm font-semibold mr-1'>{el}</p>
                    <TiDelete size={25} data-el={el} className='hover:fill-red-900 transition-colors cursor-pointer' onClick={(e) => removeHobby(e.target.dataset.el)}/>
                </div>
                )
                })}
            </div>
        </div>
    </div>
  )
}
