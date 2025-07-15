'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleForm = (formData:FormData)=>{
const income = formData.get('income')
const incomeType = +income!;
if (typeof incomeType !== 'number' ) {
  setErrorMessage('Debe ser numero');
  return
}
if (incomeType.toString().length !== 5) {
setErrorMessage('Debe ser de 5 caracteres')
return 
}

console.log('Valor correcto');


router.push(`/dashboard?income=${incomeType}`)

  }
  
  return (
    <>
    <h1>Hola</h1>
    <form action={handleForm}>
    <input type="text" name="income" />
    <input type="submit" value="enviar" />
    </form>
    {errorMessage && (
      <p>Valor no Valido</p>
    )}
    </>
  );
}
