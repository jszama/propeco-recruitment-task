import React from 'react';
import PropertyContainer from './components/PropertyContainer';

export default function Home() {
  return (
    <main className='flex flex-col bg-[#272b2e] text-white p-4 min-h-screen w-full justify-center items-center '>
      <PropertyContainer />
    </main>
  );
}
