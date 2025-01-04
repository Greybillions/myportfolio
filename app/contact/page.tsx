'use client';

import React, { useState } from 'react';
import BackButton from '@/components/BackNav';
import { contactTitle } from '@/data';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import CopyEmailButton from '@/components/CopyEmailBtn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send data to the third-party API (e.g., Getform)
    fetch('https://getform.io/f/bqoolmrb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div className='w-full h-full bg-gray-700 text-white'>
      <Nav />
      <div className='p-6 max-w-2xl mx-auto h-screen bg-gray-700'>
        <div className='mb-6'>
          <BackButton />
        </div>
        <h1 className='text-3xl font-bold mb-2 caprasimo-regular md:mb-6'>
          Contact Me
        </h1>
        <p className='text-gray-300 text-lg mb-2'>
          {contactTitle}{' '}
          <span>
            <CopyEmailButton
              email='grahamboyle22@gmail.com'
              className='hover:bg-gray-200 inline-flex text-sm px-2 py-0.5'
            />{' '}
          </span>
        </p>
        <form className='space-y-4 mt-4' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block caprasimo-regular text-lg font-medium'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 p-2 text-black block focus:outline-none w-full border-gray-300 rounded-md shadow-sm focus:ring-2'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block caprasimo-regular text-lg font-medium'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block p-2 text-black w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2'
              required
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block caprasimo-regular text-lg font-medium'
            >
              Details about service required
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className='mt-1 p-2 text-black block w-full border-gray-300 rounded-md shadow-sm focus:outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='inline-flex items-center gap-2 text-[#c6ff00] bg-gray-900 px-4 py-1 rounded-lg relative font-semibold hover:bg-gray-800 hover:text-[#c6ff00] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 focus:ring-2'
          >
            Send
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
