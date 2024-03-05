import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useSession } from 'next-auth/react';
import { extractColors } from 'extract-colors';
import { BsFillGearFill } from 'react-icons/bs';
import { IoAlertCircle, IoHelpCircle } from 'react-icons/io5';
import SettingsModal from './SettingsModal';

export default AccComponent;

function AccComponent() {
  const { data: session } = useSession()
  const [ userProfileColors, setUserProfileColors ] = useState('blue')
  const [ showProfileModal, setShowProfileModal ] = useState(false)
  
  const options = {
    crossOrigin: 'Anonymous',
  }

  function generateColor() {
    extractColors(session?.user.image, options)
      .then(res => {
        document.documentElement.style.setProperty('--userProfileColor1', res[0].hex);
        document.documentElement.style.setProperty('--userProfileColor2', res[1].hex);
        return 
      })
      .catch(console.error)
  }
  
  function closeModal() {
    setShowProfileModal(false);
  }
  
  return (
    <>
      <SettingsModal showProfile={showProfileModal} closeModal={closeModal}/>
      <Menu as="div" className="relative inline-block text-left z-30">
        <div>
          <Menu.Button className='flex items-center justify-center bg-neutral-700 hover:bg-[#363636] rounded-2xl py-2 px-3 gap-3 shadow-smd transition-all'>
            <div className='w-9 h-9 relative'>
              <Image alt='Profile Picture' fill quality='20' className='rounded-full' src={session?.user.image} onLoad={generateColor}/>
            </div>
            <p className='font-medium text-white'>{session?.user.name}</p>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-forest-400 text-[var(--unactiveMenuTextColor)] hover:text-[var(--activeMenuTextColor)]'}
                  >
                    <BsFillGearFill
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-forest-400 text-[var(--unactiveMenuTextColor)] hover:text-[var(--activeMenuTextColor)]'}
                  >
                    <IoAlertCircle
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Give Feedback
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-forest-400 text-[var(--unactiveMenuTextColor)] hover:text-[var(--activeMenuTextColor)]'}
                  >
                    <IoHelpCircle
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Help
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                  <button
                    onClick={() => signOut()}
                    className={'group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-forest-400 text-[var(--unactiveMenuTextColor)] hover:text-[var(--activeMenuTextColor)]'}
                  >
                    Log Out
                  </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
