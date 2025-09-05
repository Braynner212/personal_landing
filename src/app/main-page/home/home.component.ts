import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from 'src/app/commons/directives/animate-on-scroll.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, AnimateOnScrollDirective],
})
export class HomeComponent {
  constructor(
    private http: HttpClient,
  ) {}

  downloadCurriculum() {
    const url = 'assets/files/Braynner Polo Curriculum vitae - English.pdf'; // reemplaza con la ruta del archivo que deseas descargar
    this.http.get(url, { responseType: 'blob' }).subscribe((response: Blob) => {
      const urlObject = URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = urlObject;
      a.download = 'Braynner Polo Curriculum vitae.pdf'; // reemplaza con el nombre que deseas dar al archivo descargado
      a.click();
      URL.revokeObjectURL(urlObject);
    });
  }
}
