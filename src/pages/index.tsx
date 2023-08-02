import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Starcoin - Home</title>
      </Head>
      <main className='flex h-screen flex-col items-center justify-center'>
        <h1 className='text-3xl lg:text-7xl text-white text-center'>
          Welcome to Starcoin!
        </h1>
      </main>
    </>
  );
}
