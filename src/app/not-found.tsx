import Link from 'next/link';
import React from 'react';

/** Página de erro 404 */
function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <span className="mt-4 text-2xl">Página não encontrada</span>
      <p className="mt-2">Desculpe, a página que você está procurando não existe</p>
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
