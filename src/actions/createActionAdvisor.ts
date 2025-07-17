'use server';

import { pathsRoutesProject } from '@/utils';
import { revalidatePath } from 'next/cache';

export async function createActionAdvisor(formData: FormData) {
  try {
    const avatarValue = formData.get('avatar');
    let avatarUrl: string;

    if (avatarValue instanceof File && !avatarValue.size > 0) {
      avatarUrl = '/IconHome.svg';
    } else {
      avatarUrl =
        typeof avatarValue === 'string' && avatarValue.length > 0
          ? avatarValue
          : '/IconHome.svg';
    }

    const advisorData = {
      id: crypto.randomUUID(),
      avatar: avatarUrl,
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      idNumber: formData.get('idNumber'),
      income: Number(formData.get('income')),
      education: formData.get('education'),
      title: formData.get('title'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      yearsOfExperience: formData.get('yearsOfExperience'),
    };

    console.log(advisorData);
    fetch(
      `${pathsRoutesProject.mainRouteAPI}${pathsRoutesProject.advisorAPI}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(advisorData),
      }
    );
    revalidatePath(
      `${pathsRoutesProject.mainRoutePage}${pathsRoutesProject.advisorsPage}`
    );
  } catch (error) {
    console.error('Error updating advisor:', error);
    throw error;
  }
}
