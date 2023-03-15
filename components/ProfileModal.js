import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HexColorPicker } from "react-colorful";
import ProfileComponent from './ProfileComponent';
import useClickOutside from '@/hooks/useClickOutside';

export default function ProfileModal({ showProfile, closeModal }) {
  const [ color, setColor ] = useState("#aabbcc");
  const [ showColorPicker, setShowColorPicker ] = useState(false)
  const popoverRef = useRef();

  useClickOutside(popoverRef, () => toggleColorPicker());

  useEffect(() => {
    document.documentElement.style.setProperty('--userProfileColor1', color);
  }, [color])

  function toggleColorPicker() {
    setShowColorPicker(!showColorPicker)
  }

  return (
    <>
    <Transition appear show={showProfile} onClose={closeModal} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
      <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto modal">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full max-w-[85rem] h-[45rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
                as="span"
                className="text-2xl font-medium text-gray-900"
            >
              Profile
            </Dialog.Title>
            <div className="p-2">
              <div className='grid grid-cols-3'>
                <div>
                  <span>Profile Color 1</span>
                  <button onClick={toggleColorPicker} className='border-2 border-neutral-500 w-10 h-10 bg-pfpColor1'/>
                  {showColorPicker &&
                    <section className='small' ref={popoverRef}>
                      <HexColorPicker color={color} onChange={setColor} />
                    </section>          
                  }
                </div>
                <div>
                  
                </div>
                <div className='p-5'>
                  <ProfileComponent/>
                </div>
              </div>
              <button onClick={closeModal} className="w-20 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Close
              </button>
            </div>
            </Dialog.Panel>
          </Transition.Child>
          </div>
        </div>
        </Dialog>
    </Transition>
    </>
  )
}
