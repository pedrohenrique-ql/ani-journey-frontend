import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <span className="mt-4 text-2xl">Page Not Found</span>
      <p className="mt-2">Sorry, the page you are looking for does not exist</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition duration-300 hover:bg-blue-700"
      >
        Voltar para o início
      </Link>
    </div>
  );
}

export default NotFoundPage;
