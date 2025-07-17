'use client';

import { useRouter } from 'next/navigation';

export default function SubmitButton({
  action,
  children,
}: {
  action: (formData: FormData) => Promise<any>;
  children: string;
}) {
  const router = useRouter();

  const onClick = async () => {
    setTimeout(() => {
      router.back();
    }, 1000);
  };

  return (
    <button type="submit" formAction={action} onClick={onClick} className="btn">
      {children}
    </button>
  );
}
