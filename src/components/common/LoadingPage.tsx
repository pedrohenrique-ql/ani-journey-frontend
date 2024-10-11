import LoadingIcon from '../icons/LoadingIcon';

function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingIcon role="img" alt="Carregando..." className="h-12 w-12" />
    </div>
  );
}

export default LoadingPage;
