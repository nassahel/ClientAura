import { createContext, useState, ReactNode, useContext } from 'react';
import { Resp, ContextType } from '../Types/types';

const ResponsesContext = createContext<ContextType | undefined>(undefined);

export const ResponsesProvider = ({ children }: { children: ReactNode }) => {
  const [responses, setResponses] = useState<Resp>({
    name: '',
    position: '',
    challenge: '',
    crm: '',
    industry: '',
  });

  return (
    <ResponsesContext.Provider value={{ responses, setResponses }}>
      {children}
    </ResponsesContext.Provider>
  );
};

export const useResponses = () => {
  const context = useContext(ResponsesContext);
  if (!context) {
    throw new Error('useResponses debe ser usado dentro de un ResponsesProvider');
  }
  return context;
};
