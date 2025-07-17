'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function AddAdvisorButton({
  className,
}: {
  className?: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    // console.log(current);
    // console.log(
    //   Array.from(searchParams.entries()),
    //   'Array.from(searchParams.entries())'
    // );

    current.set('new_advisor', 'true');
    const query = current.toString();
    // console.log(query);

    router.push(`${window.location.pathname}?${query}`);
  };

  return (
    <button onClick={handleClick} className={className}>
      + Add New Advisor
    </button>
  );
}
