import APIContext from '@/app/providers/api/APIContext';

function useAPI() {
  const contextValue = APIContext.useContext();
  return contextValue;
}

export default useAPI;
