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

        <form method="POST" action="https://pfb.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate>
    <input type="hidden" name="u" value="1" />
    <input type="hidden" name="f" value="1" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div >
      
      <div className="p-5">
        <label for="fullname" >
          Digite seu nome 
        </label>
        <div>
          <input  className="pl-2 pb-2 px-15 py-2 border-2" type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
        </div>
      </div>
      <div  >
        <label for="email" class="_form-label">
          Digite seu email*
        </label>
        <div className="pb-4" >
          <input className="pl-2 pb-2 px-15 py-2 border-2" type="text" id="email" name="email" placeholder="Digite seu email" required/>
        </div>
      </div>
      <div >
        <button className="pb-2 px-10 py-2 bg-green-600 text-white"  id="_form_1_submit"  type="submit" >
          Submit
        </button>
      </div>
      <div >
      </div>
    </div>
    
   
  </form>

        </main>
    </div>
  )
}
