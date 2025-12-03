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

export interface DraftApiResponse<T = Record<string, any>> {
  clientName: string;
  draftId: string;
  formData: T; 
  lastStep: number;
  completed: boolean;
  success: boolean;
  updatedAt: string;
}

export interface BrandingFormData {
  additionalInfo?: {
    comments?: string;
  };
  competition?: {
    competitors?: {
      analisis?: string;
      nombre?: string;
    }[];
    diferenciador?: string;
  };
  context?: {
    origenMarca?: string;
    problemaResolver?: string;
  };
  digitalStrategy?: {
    facebook?: string;
    instagram?: string;
    otra?: string;
    paginaWeb?: string;
    tiktok?: string;
  };
  formats?: {
    firmaCorreo?: boolean;
    historiasRedes?: boolean;
    hojaMembretada?: boolean;
    iconografia?: boolean;
    logotipo?: boolean;
    manualMarca?: boolean;
    patterns?: boolean;
    portadaRedes?: boolean;
    postRedes?: boolean;
    tarjetaPresentacion?: boolean;
    // [key: string]: boolean | undefined; // Índice por si agregan más formatos
  };
  logoFormat?: {
    tipo?: string;
  };
  personality?: {
    palabrasClave?: string;
    sliderExclusivo?: number;
    sliderFormal?: number;
    sliderTecnico?: number;
    valores?: string[];
  };
  public?: {
    edad?: string;
    estiloVida?: string;
    genero?: string;
    problemasNecesidades?: string;
    ubicacion?: string;
  };
  references?: {
    files?: {
      description?: string;
      fileUrl?: string;
    }[];
  };
  tone?: {
    frasesEjemplo?: string;
    palabrasClave?: string;
  };
  valueProposition?: {
    beneficioPrincipal?: string;
    unica?: string;
  };
  visualStyle?: {
    selectedStyles?: string[];
  };
  // Índice de firma para permitir propiedades futuras inesperadas sin romper el código
  // [key: string]: any; 
}