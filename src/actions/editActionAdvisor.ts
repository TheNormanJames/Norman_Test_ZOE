'use server';

import { pathsRoutesProject } from '@/utils';

export async function editActionAdvisor(id: number, formData: FormData) {
  try {
    const advisorData = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      idNumber: formData.get('idNumber'),
      income: Number(formData.get('income')),
      education: formData.get('education'),
      title: formData.get('title'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      yearsOfExperience: formData.get('yearsOfExperience'),
    };

    const response = await fetch(
      `${pathsRoutesProject.mainRouteAPI}${pathsRoutesProject.advisorAPI}/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advisorData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to update advisor');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating advisor:', error);
    throw error;
  }
}
