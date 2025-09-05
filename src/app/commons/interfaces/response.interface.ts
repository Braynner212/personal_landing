export interface ContactFormResponse {
    success: boolean;
    message: string;
  }

export interface DataSendSubmit {
  name_complete: string; 
  mail: string; 
  message: string, 
  privacy_policy_acceptance: boolean, 
  privacy_policy_acceptance_timestamp: string, 
  recaptcha: string 
}