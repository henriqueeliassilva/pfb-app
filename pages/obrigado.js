import Link from 'next/link'

function ThankYou () {
    return <div className="m-3 flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className="text-6xl font-bold">
          Obrigado!{' '}
        </h1>
        <p className=" text-center m-3 text-2xl">
        Seu cadastro foi realizado com sucesso. {' '}Em breve mandaremos mais informações no seu e-mail.{' '}
        </p>
        <p className="text-center m-3 text-xl">Participe do nosso grupo de WhatsApp e seja {' '}um dos primeiros a saber sobre o lançamento da primeira turma on-line. </p>       
      <Link href="https://chat.whatsapp.com/GTtDgVWMMAt2w5DxRNvd73" >
      <a className=" uppercase rounded  px-11 py-2 bg-blue-600 text-white">
      Quero Entrar
      </a>
      </Link>      
        </div>
        
  }
  
  export default ThankYou