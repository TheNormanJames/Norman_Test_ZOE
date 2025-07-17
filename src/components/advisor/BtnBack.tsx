'use client';
import { useRouter } from 'next/navigation';

export default function BtnBack() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <button type="button" className="btn--ghost" onClick={handleClose}>
      Go Back
    </button>
  );
}
