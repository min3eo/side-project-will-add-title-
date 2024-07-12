import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <p className={className}>
        일정, <br />
        슥슥
      </p>
    </Link>
  );
}
