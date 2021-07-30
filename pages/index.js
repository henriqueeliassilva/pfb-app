import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Progressive Fit Ball App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          Progressive{' '}
          <a className="text-blue-600" href="#">
          {' '}FitBall!
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Let's Get started.{' '}
        </p>
        </main>
    </div>
  )
}
