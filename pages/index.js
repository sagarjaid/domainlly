import React from 'react';

const index = () => {
  return (
    <div className='m-auto min-h-screen flex flex-col  gap-10 justify-center items-center bg-black text-white'>
      <div className='flex flex-col items-center text-center gap-2.5'>
        <span className='text-2xl font-extrabold sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl'>
          The New and Simple way
        </span>
        <span className='text-2xl font-extrabold sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl'>
          to Search a Domain
        </span>
        <span className='text-xl mt-6'>
          Instantly search all available domain names, domain extensions, and
          domains for sale.
        </span>
      </div>
      <div className='flex w-full items-center justify-center '>
        <input
          type='text'
          placeholder='example.com'
          className='bg-black border placeholder:text-neutral-700 text-3xl h-16 px-10 pb-1 w-[60%] rounded-full active:border-yellow hover:border-yellow-50 outline-white'
        />
        <svg
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          className='relative right-14 h-10 w-10 cursor-pointer rounded-full p-2'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
      <div className='flex text-[12px] justify-center flex-wrap gap-4 w-[55%]'>
        <span className='border border-gray-500 bg-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Domain extensions
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Domain Suggestions
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Domain translator
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          SEO Domain
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          AI Powered Domain
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Prepend Domain
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Postpend Domain
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Drop a letter Domains
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Replace Domains
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Merge Domain
        </span>
        <span className='border border-gray-500 px-2.5 py-1 rounded-full cursor-pointer'>
          Social Media Username
        </span>
      </div>
    </div>
  );
};

export default index;
