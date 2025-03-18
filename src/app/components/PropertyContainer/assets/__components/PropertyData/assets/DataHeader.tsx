import React from 'react'

interface DataHeaderProps {
  title: string;
}

export default function DataHeader({ title }: DataHeaderProps) {
  return (
      <header className='text-2xl font-semibold'>{title}</header>
  )
}
