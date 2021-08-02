import Link from 'next/link'

function ThankYou () {
    return <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className="text-6xl font-bold">
          Obrigado!{' '}
        </h1>
        <p className=" text-center m-3 text-2xl">
        Seu cadastro foi realizado com sucesso. {' '}Em breve mandaremos mais informações no seu e-mail.{' '}
        </p>
        <p className="text-center m-3 text-xl">Participe do nosso grupo de WhatsApp e seja {' '}um dos primeiros a saber sobre o lançamento da primeira turma on-line. </p>       
      <Link href="https://chat.whatsapp.com/GTtDgVWMMAt2w5DxRNvd73" >
      <a className=" uppercase rounded m-3 px-24 py-2 bg-blue-600 text-white">
      Quero participar
      </a>
      </Link>      
        </div>
        
  }
  
  export default ThankYou