'use client';
import { useState } from 'react'
import PropertyDataForm from './assets/__components/PropertyDataForm';
import PropertyData from './assets/__components/PropertyData';
import { RawData } from '@/app/lib/types';

export default function PropertyContainer() {
    const [rawPropertyData, setRawPropertyData] = useState<RawData>();
    const [isVisible, setIsVisible] = useState(true);

    function handleSubmit(propertyData: RawData | null) {
        if (!propertyData) {
            setRawPropertyData(undefined);
            setIsVisible(true);
            return;
        }
        setIsVisible(false);
        setTimeout(() => {
            setRawPropertyData(propertyData);
            setIsVisible(true);
        }, 350);
    }
    
    return (
        <section className='bg-[#32363a] p-4 rounded-lg drop-shadow-[0_0_4px_rgba(128,128,128,0.4)]'>
            <div
                className={`transition-all duration-300 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                {rawPropertyData ? (
                <PropertyData rawData={rawPropertyData} onSubmit={handleSubmit} />
                ) : (
                <PropertyDataForm onSubmit={handleSubmit} />
                )}
            </div>
        </section>
    )
}
