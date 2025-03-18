import React from 'react'

interface ListItemProps {
    icon: string;
    title: string;
    value: string;
}

export default function ListItem( { icon, title, value }: ListItemProps ) {
  return (
    <li className='flex items-center space-x-4 p-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors'>
        <div className='flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white text-lg'>
            {icon}
        </div>
        <div className='flex flex-col'>
            <span className='font-bold text-sm text-gray-200'>{title}</span>
            <span className='text-gray-400 text-xs'>{value || "N/A"}</span>
        </div>
    </li>
  )
}
