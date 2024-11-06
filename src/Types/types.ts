export interface Resp {
    name: string;
    position: string;
    challenge: string;
    crm: string;
    industry: string;
  }
  
  export interface ContextType {
    responses: Resp;
    setResponses: React.Dispatch<React.SetStateAction<Resp>>;
  }  

  export interface StepButtonOne {
    buttonText: string;
  }
  
  export interface StepButtonTwo {
    buttonText: string;
    buttonLetter: string;
  }