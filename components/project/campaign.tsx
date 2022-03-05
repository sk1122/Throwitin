import React, { useState, FC } from 'react'

interface Props {
  desc: string
}

export default (props: Props) => {
  const [activitySection, setActivitySection] = useState('paid')

  const toggleActivity = (text: string) => {
    setActivitySection(text)
  }

  return (
    <div className='w-full min-h-screen flex flex-col space-y-5 justify-start items-start'>
      <div className='w-full h-full flex space-x-5 justify-between'>
        <div className='w-2/3 h-full space-y-3'>
          {props.desc}
        </div>
        <div className='w-1/3 h-full space-y-5'>
          <div className="w-full flex justify-between items-center">
            <h3 className='text-brand-lightpurple text-lg font-bold'>Activity</h3>
            <div className='flex justify-center space-x-3'>
              <h3 onClick={() => toggleActivity('paid')} className={activitySection === 'paid' ? 'border-b-2 cursor-pointer' : 'cursor-pointer'}>Paid</h3>
              <h3 onClick={() => toggleActivity('withdrawals')} className={activitySection === 'withdrawals' ? 'border-b-2 cursor-pointer' : 'cursor-pointer'}>Withdrawals</h3>
            </div>
          </div>
          {[{paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x00000000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}, {paid: 500, when: '7 Days', wallet: '0x0000000'}].map((v: any) => (
            <div className='w-full flex justify-between items-center border-b-2'>
              <div className='space-y-3'>
                <p className='text-sm font-light text-gray-100'>Paid</p>
                <h3 className='text-lg font-bold'>{v.paid} USDC</h3>
              </div>
              <div className='space-y-3'>
                <p className='text-sm font-light text-gray-100'>{v.when} ago</p>
                <h3 className="truncate w-28 text-lg font-normal">{v.wallet}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}