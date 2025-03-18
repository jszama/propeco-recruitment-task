import React from 'react'
import PropertyDataList from './assets/PropertyDataList'
import Button from '../Button';
import { PropertyDataProps } from '../../types';


export default function PropertyData({ rawData, onSubmit }: PropertyDataProps) {
  return (
    <article className='flex flex-col gap-4 justify-between p-2 items-start w-auto h-auto relative'>
      <h2 className='text-3xl font-semibold'>Property Data</h2>
      <PropertyDataList rawData={rawData} />
      <Button
        type="button"
        text="Back to Search"
        onClick={() => {onSubmit(null)}}
      />
    </article>
  );
}
