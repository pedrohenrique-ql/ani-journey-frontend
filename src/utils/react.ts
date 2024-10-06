import {
  createContext as createReactContext,
  Context as ReactContext,
  Provider as ReactProvider,
  useContext as useReactContext,
} from 'react';

interface Context<ContextValue> {
  Context: ReactContext<ContextValue | undefined>;
  Provider: ReactProvider<ContextValue | undefined>;
  useContext: () => ContextValue;
}

export function createContext<ContextValue>(
  contextName: string,
  initialValue: ContextValue | undefined = undefined,
): Context<ContextValue> {
  const Context = createReactContext(initialValue);

  function useContext() {
    const contextValue = useReactContext(Context);

    if (contextValue === undefined) {
      throw new Error(`Cannot use 'use${contextName}' outside of a '${contextName}Provider'.`);
    }

    return contextValue;
  }

  return {
    Context,
    Provider: Context.Provider,
    useContext,
  };
}
