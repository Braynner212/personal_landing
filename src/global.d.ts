export {};

declare global {
  interface Grecaptcha {
    ready(callback: () => void): void;
    execute(siteKey: string, options: { action: string }): Promise<string>;
  }

  interface Window {
    grecaptcha?: Grecaptcha;
  }

  type GtagEventParams = Record<string, string | number | boolean | undefined | null>;
  
  type GtagConfigParams = Record<string, any>; 
  
  function gtag(
    command: 'event', 
    eventName: string, 
    eventParams?: GtagEventParams
  ): void;
  
  function gtag(
    command: 'config', 
    targetId: string, 
    configParams?: GtagConfigParams
  ): void;
  
  function gtag(command: 'js', date: Date): void;
  
  function gtag(command: 'set', params: GtagConfigParams): void;
  
}
