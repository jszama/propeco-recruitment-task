import React from 'react'
import DataHeader from './DataHeader'
import ListItem from './ListItem';
import { DataContainerProps, DataItem } from '../../../types';

export default function DataContainer({ title, data }: DataContainerProps) {
  return (
    <div className='flex flex-col gap-2'>
        <DataHeader title={title} />
        <section className='flex flex-col gap-4 p-2 h-auto rounded-lg'>
            {data.map((item: DataItem, index) => (
                <ListItem 
                    key={index} 
                    icon={item.icon} 
                    title={item.title} 
                    value={item.value ? item.value.toString() : 'N/A'} 
                />
            ))}
        </section>
    </div>
  )
}
