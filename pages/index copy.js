import Typewriter from 'typewriter-effect';
import { domainUrl } from '@/components/domainUrl';
// import HelloBar from '@/components/HelloBar';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const [hashtag, setHashtag] = useState('');

  const handleValue = (e) => {
    e.preventDefault();
    let tag = e.target.value;
    setHashtag(tag);
    console.log(tag);
    console.log(tag?.length);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      let tag = e.target.value;
      console.log(tag);
      const href = `/hashtag/${tag}`;
      router.push(href);
    }
  };

  const handleClick = (tag) => {
    console.log(tag);
    console.log(tag?.length);
    if (tag.length > 2) {
      const href = `/hashtag/${tag}`;
      router.push(href);
    }
  };

  return (
    <>
      <Head>
        <title>
          Hashtaglly - Hashtag Generator [100% FREE - No Login required]
        </title>
        <meta
          name='title'
          content='Hashtaglly - Hashtag Generator [100% FREE - No Login required]'
        />
        <meta
          name='description'
          content='Hashtags for Instagram, Tiktok, Twitter, & more. Best Hashtag Generator in 2023'
        />
        <link
          rel='canonical'
          href='https://Hashtaglly.com/'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://Hashtaglly.com/'
        />
        <meta
          property='og:title'
          content='Hashtaglly - Hashtag Generator [100% FREE - No Login required]'
        />
        <meta
          property='og:description'
          content='Hashtags for Instagram, Tiktok, Twitter, & more. Best Hashtag Generator in 2023'
        />
        <meta
          property='og:image'
          content='https://Hashtaglly.com/cover.png'
        />

        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://Hashtaglly.com/'
        />
        <meta
          property='twitter:title'
          content='Hashtaglly - Hashtag Generator [100% FREE - No Login required]'
        />
        <meta
          property='twitter:description'
          content='Hashtags for Instagram, Tiktok, Twitter, & more. Best Hashtag Generator in 2023'
        />
        <meta
          property='twitter:image'
          content='https://Hashtaglly.com/cover.png'
        />
        <link
          rel='icon'
          href='https://Hashtaglly.com/favicon.png'
        />
      </Head>
      <div className='m-auto h-screen bg-black text-white'>
        <main className='m-auto flex h-screen max-w-7xl flex-col'>
          <div className='flex h-full flex-col items-center justify-between gap-6 p-4 pt-24'>
            <div className='flex w-full flex-col items-center gap-10'>
              <div className='line flex flex-col items-center text-center '>
                <span className='text-2xl font-extrabold sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl'>
                  The New and Simple wasy
                </span>
                <span className='text-2xl font-extrabold sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl'>
                  to Domain search
                </span>
                <span className='text-xl'>
                  Instantly search all available domain names, domain
                  extensions, and domains for sale.
                </span>
                {/* <span className='text-blue-600'>
                  <Typewriter
                    options={{
                      strings: ['Youtube', 'TikTok', 'Instagram', 'Facebook'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span> */}
              </div>

              <div className='flex w-full items-center justify-center '>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='relative left-9 h-4 w-4 '>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5'
                  />
                </svg>
                <input
                  type='text'
                  placeholder='Search a hashtag here...'
                  className='h-12 w-full rounded-full border-2  border-gray-600 p-3 px-10  shadow-sm placeholder:text-center placeholder:text-xs placeholder:text-gray-600 sdm:max-w-lg'
                  value={hashtag}
                  onChange={handleValue}
                  onKeyPress={handleSearch}
                />
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  className='relative right-10 h-8 w-8 cursor-pointer rounded-full border p-2'
                  onClick={() => handleClick(hashtag)}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </div>

              <div className='flex flex-col items-center gap-1 text-center text-xs text-gray-600 '>
                <span>✓ No credit card required</span>
                <span>✓ No login is required</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
