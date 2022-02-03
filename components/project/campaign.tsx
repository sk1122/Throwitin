import React, { useState, FC } from 'react'

export default () => {
  const [activitySection, setActivitySection] = useState('paid')

  const toggleActivity = (text: string) => {
    setActivitySection(text)
  }

  return (
    <div className='w-full min-h-screen flex flex-col space-y-5 justify-start items-start'>
      <div className='w-full h-full flex space-x-5 justify-between'>
        <div className='w-2/3 h-full space-y-3'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          </p>
          <div className="w-full h-[20rem] flex justify-center items-center h-full">
            <div className="w-full h-full bg-gray-600 shrink-0"></div>
          </div>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Risus nullam eget felis eget nunc. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet luctus venenatis lectus. Eu facilisis sed odio morbi quis commodo odio. Pharetra sit amet aliquam id diam. Non tellus orci ac auctor augue. Non consectetur a erat nam at lectus urna. Egestas tellus rutrum tellus pellentesque. Nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          </p>
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