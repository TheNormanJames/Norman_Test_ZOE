'use server';
import { redirect } from 'next/navigation';

export async function getFormDataHome(formData: FormData) {
  const income = formData.get('income') as string;

  const incomeNumber = Number(income);
  // todo: Mirar para agregar un regex

  // Es un número?
  if (isNaN(incomeNumber)) {
    throw new Error('Debe ser un número válido');
  }

  // Es un número de 5 Dígitos??
  if (income.length !== 5) {
    throw new Error('El número debe tener exactamente 5 dígitos');
  }

  // Redirigir con el parámetro
  redirect(`/dashboard?income=${incomeNumber}`);
}
