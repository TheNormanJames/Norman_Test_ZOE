'use server';
import { pathsRoutesProject } from '@/utils';
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
  redirect(`${pathsRoutesProject.advisorsPage}?income=${incomeNumber}`);
}

export async function deleteAdvisor(id: number) {
  try {
    const response = await fetch(
      `${pathsRoutesProject.mainRouteAPI}${pathsRoutesProject.advisorAPI}/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Error to Delete Advisor');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
