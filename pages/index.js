import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Progressive Fit Ball App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Progressive{' '}
          <a className="text-blue-600">
          {' '}Fit Ball!
          </a>
        </h1>
        <p className="mt-3 text-2xl">
        Cadastre-se para participar do nosso primeiro evento on-line e gratuito.
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
      
      <div>
        {/* <label for="fullname" >
         <p className="text-2xl pb-2">Digite seu nome </p> 
        </label> */}
        <div>
          <input  className="mt-4 rounded pl-2 p-4 px-36 py-2 border-2" type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
        </div>
      </div>
      <div className="pb-4">
        {/* <label  for="email">
         <p className="text-2xl ">Digite seu email*</p> 
        </label> */}
        <div>
          <input className="rounded pl-2 p-4 py-2  my-2 px-36  border-2" type="text" id="email" name="email" placeholder="Digite seu email" required/>
        </div>
      </div>
      <div >
        <button className=" uppercase rounded py-2 px-24 bg-blue-600 hover:bg-blue-400  text-white"  id="_form_1_submit"  type="submit" >
          Quero participar
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
