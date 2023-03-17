import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsFillPersonFill, BsFillGearFill } from 'react-icons/bs'
import { IoColorPalette } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import ProfileSection from './SettingsSections/ProfileSection';
import GeneralSection from './SettingsSections/GeneralSection';
import AppearanceSection from './SettingsSections/AppearanceSection';


export default function ProfileModal({ showProfile, closeModal }) {
  const [section, setSection] = useState(0)


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
            <Dialog.Panel className="w-full max-w-[85rem] h-[45rem] p-[0.1rem] transform overflow-hidden rounded-2xl bg-gradient-to-tr from-neutral-700 via-[#575757_60%] to-[#9a9a9a] text-left align-middle shadow-xl transition-all">
            <div className='bg-neutral-800 rounded-2xl h-full px-6 py-5'>
              <Dialog.Title
                  as="span"
                  className="text-3xl font-medium text-white"
              >
                Settings
              </Dialog.Title>
              <div className='h-[95%]'>
                <div className='h-full grid grid-cols-[max-content] grid-flow-col place-items-start p-2'>
                  <div className='h-full border-r-2 border-neutral-400'>
                    <div className='flex flex-col justify-start h-full w-full mt-8'>
                      <button onClick={() => setSection(0)} className='p-4 flex items-center gap-2 text-left text-lg py-2 text-neutral-300 font-medium hover:brightness-75'>
                        <BsFillGearFill size={22}/>
                        General
                      </button>
                      <hr className='profileModalSplit'/>
                      <button onClick={() => setSection(1)} className='p-4 flex items-center gap-2 text-left text-lg py-2 text-neutral-300 font-medium hover:brightness-75'>
                        <BsFillPersonFill size={25}/>
                        Profile
                      </button>
                      <hr className='profileModalSplit'/>
                      <button onClick={() => setSection(2)} className='p-4 flex items-center gap-2 text-left text-lg py-2 text-neutral-300 font-medium hover:brightness-75'>
                        <IoColorPalette size={25}/>
                        Appearance
                      </button>
                      <hr className='profileModalSplit'/>
                      <button onClick={() => setSection(3)} className='p-4 flex items-center gap-2 text-left text-lg py-2 text-neutral-300 font-medium hover:brightness-75'>
                        <FaLock size={25}/>
                        Security
                      </button>
                      <hr className='profileModalSplit'/>
                    </div>
                  </div>
                  <SectionSwitcher  section={section}/>
                </div>
                {/* <button onClick={closeModal} className='bg-[#162922] border border-[#145f43] text-neutral-300 hover:bg-[#0daf76] hover:shadow-sbutton hover:shadow-[#33b085] px-3 py-2 rounded transition'>Close</button> */}
              </div>
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

export function SectionSwitcher({ section }) {
  if (section === 0) {
    return <GeneralSection/>
  }
  if (section === 1) {
    return <ProfileSection/>
  }
  if (section === 2) {
    return <AppearanceSection/>
  }

}