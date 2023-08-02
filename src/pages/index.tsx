import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starcoin - Home</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='text-7xl text-white'>Welcome to Starcoin!</h1>
      </main>
    </>
  );
}
