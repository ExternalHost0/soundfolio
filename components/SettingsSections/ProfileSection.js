import React, { useState, useEffect } from 'react'
import { Popover } from '@headlessui/react';
import { HexColorPicker } from "react-colorful";

export default function ProfileSection() {
   const [ colorState1, setColorState1 ] = useState(document.documentElement.style.getPropertyValue('--userProfileColor1'));
   const [ colorState2, setColorState2 ] = useState(document.documentElement.style.getPropertyValue('--userProfileColor2'));
   
   useEffect(() => {
     document.documentElement.style.setProperty('--userProfileColor1', colorState1);
   }, [colorState1])
   useEffect(() => {
     document.documentElement.style.setProperty('--userProfileColor2', colorState2);
   }, [colorState2])

  return (
    <div>
        <div className='grid grid-cols-2 items-center justify-items-center'>
        <span className='text-md text-neutral-400 font-medium'>Main Profile Color</span>
        <Popover className="relative">
            <Popover.Button className='border-2 rounded-xl bg-pfpColor1 border-neutral-100 w-10 h-10'/>
            <Popover.Panel className="absolute z-30">
            <section className='small'>
                <HexColorPicker color={colorState1} onChange={setColorState1} />
            </section>
            </Popover.Panel>
        </Popover>
        </div>
        <div className='grid grid-cols-2 items-center justify-items-center'>
        <span className='text-md text-neutral-400 font-medium'>Accent Profile Color</span>
        <Popover className="relative">
            <Popover.Button className='border-2 rounded-xl bg-pfpColor2 border-neutral-100 w-10 h-10'/>
            <Popover.Panel className="absolute z-30">
            <section className='small'>
                <HexColorPicker color={colorState2} onChange={setColorState2} />
            </section>
            </Popover.Panel>
        </Popover>
        </div>
    </div>
  )
}
