import Head from 'next/head';
import Items from '../components/Items';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className='mx-auto text-center my-16 px-4 max-w-[1750px]'>
        <h1 className='text-4xl lg:text-5xl text-100 text-center'>
          {' '}
          Emmanuel&apos;s Appliances
        </h1>
        <p className='text-paragraph font-medium text-xl max-w-2xl lg:max-w-4xl mt-4 mb-8 mx-auto'>
          Every item you see here are for sale at a very affordable price. If
          you are interested in any of the iteams below, kindly hit me up on{' '}
          <a
            href='https://wa.link/4cev0b'
            target='_blank'
            rel='noopener noreferrer'
            className='text-300 italic'>
            Whatapp
          </a>
          .{' '}
        </p>

        <Items />
        <p className='text-red-500 font-medium text-xl max-w-2xl lg:max-w-4xl my-8 mx-auto italic'>
          Do you have something to advertise in this format? Reach out on WhatsApp{' '}
          <a
            href='https://wa.link/xd69z3'
            target='_blank'
            rel='noopener noreferrer'
            className='text-100'>
            here
          </a>
        </p>
      </main>
    </>
  );
}
