'use client';
import { useState, useActionState } from 'react';
import Image from 'next/image';
import Form from 'next/form';
import getPropertyData from './assets/getPropertyData';
import Button from '../Button';

interface PropertyDataFormProps {
  onSubmit: (propertyData: any) => void;
}

export default function PropertyDataForm({ onSubmit }: PropertyDataFormProps) {
  const handleSubmit = async (prevState: any, formData: FormData) => {
    try {
      const data = await getPropertyData(prevState, formData);
      onSubmit(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "Property not found");
      } else {
        setError("Unexpected error occurred");
      }
    }
  };

  const [state, action, pending] = useActionState(handleSubmit, null);
  const [error, setError] = useState("");

  return (
    <Form
      action={action}
      className="flex flex-col justify-between p-2 items-start w-128 h-48 relative"
    >
      <span className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Property Data</h2>
        <label htmlFor="uprn" className="text-sm text-gray-400">UPRN</label>
        <input
          type="text"
          name="uprn"
          id="uprn"
          placeholder="Enter UPRN"
          required
          className="bg-[#3e3e3e] w-64 px-2 py-1 rounded-sm"
        />
        {pending && 
          <p className="text-xs text-gray-400 animate-pulse">Fetching data...</p>
        }
        {error && !pending && 
          <p className="text-xs text-red-500">{error}</p>
        }
      </span>
      <Button
        type="submit"
        text="Get Property Data"
        onClick={() => {}}
      />
      <h3 className="flex flex-row gap-1 items-end bottom-0 right-0 absolute">
        Powered by <a href='https://www.propeco.io/'><Image width={96} height={0} src="/logo.png" alt="Logo" /></a>
      </h3>
    </Form>
  );
}
