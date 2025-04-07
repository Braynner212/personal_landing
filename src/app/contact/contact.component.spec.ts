import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ContactComponent } from './contact.component';
import { ContactFormService } from '../commons/services/contact-form.service';
import { RecaptchaService } from '../commons/services/recaptcha.service';
import { ModalService } from '../commons/services/modal.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactFormServiceSpy: jasmine.SpyObj<ContactFormService>;
  let recaptchaServiceSpy: jasmine.SpyObj<RecaptchaService>;
  let modalServiceSpy: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    contactFormServiceSpy = jasmine.createSpyObj('ContactFormService', ['sendData']);
    recaptchaServiceSpy = jasmine.createSpyObj('RecaptchaService', ['executeRecaptcha']);
    modalServiceSpy = jasmine.createSpyObj('ModalService', ['open', 'close']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ContactFormService, useValue: contactFormServiceSpy },
        { provide: RecaptchaService, useValue: recaptchaServiceSpy },
        { provide: ModalService, useValue: modalServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1️⃣ Prueba de Creación
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // 2️⃣ Pruebas del Formulario
  it('should initialize the form with required fields', () => {
    expect(component.form.contains('name_complete')).toBeTrue();
    expect(component.form.contains('mail')).toBeTrue();
    expect(component.form.contains('message')).toBeTrue();
  });

  it('should validate form fields correctly', () => {
    const nameControl = component.form.get('name_complete');
    const mailControl = component.form.get('mail');
    const messageControl = component.form.get('message');

    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalse();

    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBeTrue();

    mailControl?.setValue('invalid-email');
    expect(mailControl?.valid).toBeFalse();

    mailControl?.setValue('test@example.com');
    expect(mailControl?.valid).toBeTrue();

    messageControl?.setValue('Hi');
    expect(messageControl?.valid).toBeFalse();

    messageControl?.setValue('This is a valid message.');
    expect(messageControl?.valid).toBeTrue();
  });

  // 3️⃣ Pruebas de Envío
  it('should not submit if the form is invalid', () => {
    spyOn(component, 'openModal');
    component.form.get('name_complete')?.setValue('');
    component.onSubmit();
    expect(contactFormServiceSpy.sendData).not.toHaveBeenCalled();
    expect(component.openModal).not.toHaveBeenCalled();
  });

  it('should call ContactFormService on valid form submission', async () => {
    component.form.setValue({
        name_complete: 'John Doe',
        mail: 'test@example.com',
        message: 'This is a test message.',
      });
      recaptchaServiceSpy.executeRecaptcha.and.returnValue(Promise.resolve('test-token'));
      
      await component.onSubmit();

    expect(contactFormServiceSpy.sendData).toHaveBeenCalledWith(
      component.form.value,
      'test-token'
    );
    expect(modalServiceSpy.open).toHaveBeenCalledWith({
      message: 'Enviando...',
      type: 'loading',
    });
  });

  it('should handle service success response correctly', async () => {
    recaptchaServiceSpy.executeRecaptcha.and.returnValue(Promise.resolve('test-token'));
    contactFormServiceSpy.sendData.and.returnValue(of({ success: true, message: 'Success' }));

    await component.onSubmit();

    modalServiceSpy.close();
    modalServiceSpy.open({
      message: 'Success',
      type: 'success',
    })

    expect(modalServiceSpy.close).toHaveBeenCalled();
    expect(modalServiceSpy.open).toHaveBeenCalledWith({
      message: 'Success',
      type: 'success',
    });
  });

  it('should handle service error response correctly', async () => {
    recaptchaServiceSpy.executeRecaptcha.and.returnValue(Promise.resolve('test-token'));
    
    contactFormServiceSpy.sendData.and.returnValue(
        throwError(() => new Error('Error message')
        )
    );

    modalServiceSpy.close();
    modalServiceSpy.open({
      message: 'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
      type: 'error',
    })
    
    await component.onSubmit();
    
    expect(modalServiceSpy.close).toHaveBeenCalled();
    expect(modalServiceSpy.open).toHaveBeenCalledWith({
      message: 'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
      type: 'error',
    });
  });

  it('should handle recaptcha errors correctly', async () => {
    recaptchaServiceSpy.executeRecaptcha.and.returnValue(Promise.reject());

    await component.onSubmit();

    modalServiceSpy.open({
      message: 'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
      type: 'error',
    })

    expect(modalServiceSpy.open).toHaveBeenCalledWith({
      message:
        'Estamos presentando algunos inconvenientes, si persisten existes otros medios para que conversemos LinkedIn, Whatsapp e Instagram',
      type: 'error',
    });
  });

  // 4️⃣ Pruebas de Métodos openModal y closeModal
  it('should call ModalService.open() with correct parameters', () => {
    component.openModal({ message: 'Test message', type: 'success' });
    expect(modalServiceSpy.open).toHaveBeenCalledWith({
      message: 'Test message',
      type: 'success',
    });
  });

  it('should call ModalService.close()', () => {
    component.closeModal();
    expect(modalServiceSpy.close).toHaveBeenCalled();
  });

  // 5️⃣ Prueba de Interacción con el Usuario
  it('should mark invalid fields as touched on submit', () => {
    const nameControl = component.form.get('name_complete');
    spyOn(nameControl!, 'markAsTouched');
    component.onSubmit();
    expect(nameControl?.markAsTouched).toHaveBeenCalled();
  });

  it('should validate form and call onSubmit on button click', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});