'use client';
import { useState } from 'react'
import PropertyDataForm from './assets/__components/PropertyDataForm';
import PropertyData from './assets/__components/PropertyData';

export default function PropertyContainer() {
    const [rawPropertyData, setRawPropertyData] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    function handleSubmit(propertyData: any) {
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
