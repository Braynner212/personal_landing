import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../commons/services/file-upload.service';
import { 
  ReactiveFormsModule, 
  FormGroup, 
  FormArray, 
} from '@angular/forms';
import { FormStateService } from 'src/app/commons/services/form-state.service';

@Component({
  selector: 'app-step-references',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-references.component.html',
  styleUrl: './step-references.component.scss'
})
export class StepReferencesComponent {
  
  // Recibimos el FormGroup 'references'
  @Input() referencesForm!: FormGroup;

  // Estado para la UI de drag & drop
  public isDraggingOver: boolean[] = [false, false];
  public currentDraftId: string | null = null;


  constructor( private fileUploadServ: FileUploadService,
    private formStateServ: FormStateService,

   ) {
    this.formStateServ.currentDraftId$.subscribe(draftId => {
      this.currentDraftId = draftId;
    });
   }

  // --- Getters para el Template ---

  get filesArray(): FormArray {
    return this.referencesForm.get('files') as FormArray;
  }

  getReferenceGroup(index: number): FormGroup {
    return this.filesArray.at(index) as FormGroup;
  }

  // --- Lógica de Drag & Drop ---

  onDragOver(event: DragEvent, index: number): void {
    event.preventDefault(); // Previene que el navegador abra el archivo
    event.stopPropagation();
    this.isDraggingOver[index] = true;
  }

  onDragLeave(event: DragEvent, index: number): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver[index] = false;
  }

  onDrop(event: DragEvent, index: number): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver[index] = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      // Solo procesamos el primer archivo
      this.handleFile(files[0], index);
    }
  }

  // --- Lógica de Input Fallback ---

  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0], index);
    }
  }

  // --- Manejo del Archivo ---

  private handleFile(file: File, index: number): void {
    // 1. Validar tipo de archivo (solo imágenes)
    if (!file.type.startsWith('image/')) {
      console.error('Archivo no es una imagen:', file.type);
      // Aquí podrías mostrar un error al usuario
      return;
    }

    // 2. Mostrar vista previa local
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const previewUrl = e.target?.result as string;
      // Parcheamos el 'fileUrl' temporalmente con la data URL para la vista previa
      // En un caso real, aquí llamarías a uploadFile()
    this.uploadFile(file, index);
      this.getReferenceGroup(index).patchValue({
        fileUrl: previewUrl 
      });
    };
    reader.readAsDataURL(file);
  }

  /**
   * (Simulación/Placeholder)
   * En una app real, este método llamaría a un servicio de subida.
   * Al completarse, parchearía el 'fileUrl' con la URL del backend.
   */
  private uploadFile(file: File, index: number): void {
    console.log('Subiendo archivo:', file.name, ', de Index: ', index);
    // 1. Crear FormData
    const formData = new FormData();
    formData.append('file', file);
    formData.append('draft_id', this.currentDraftId!.toString());
    formData.append('index', index.toString());
    
    // 2. Llamar al servicio de subida
    this.fileUploadServ.upload(formData).subscribe({
      next: (response) => {
        // 3. Parchear el form group con la URL final del backend
        this.getReferenceGroup(index).patchValue({
          fileUrl: response.secure_url 
        });
      },
      error: (err) => console.error('Error subiendo archivo:', err)
    });
  }

  removeFile(index: number): void {
    // Resetea el grupo, no lo elimina
    this.getReferenceGroup(index).reset({
      fileUrl: '',
      description: ''
    });
  }
}