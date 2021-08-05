import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Progressive Fit Ball App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      <div className="bg-gray-400 min-h-screen flex ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="text-4xl font-bold">
          Progressive{' '}
          <a className="text-blue-600">
          {' '}FitBall
          </a>
        </h1>
        <p className="mt-3 mb-3 text-lg">
        Cadastre-se para participar do nosso primeiro evento on-line e gratuito.
        </p>
        <form method="POST" action="https://pfb.activehosted.com/proc.php" id="_form_1_" noValidate>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <div >
      
      
       
          <input className=" border  border-gray-200 w-full p-3 rounded mb-4" type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
        </div>
      <div>
        <div>
          <input className=" border  border-gray-200 w-full p-3 rounded mb-4"  type="text" id="email" name="email" placeholder="Digite seu email" required/>
        </div>
      </div>
      <div >
        <button className="w-full text-center py-3 rounded  bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"  id="_form_1_submit"  type="submit" >
          Quero participar
        </button>
      </div>
      <div >
      </div>
    
  </form>
</div>
</div>
</div>

        </main>
    </>
  )
}
