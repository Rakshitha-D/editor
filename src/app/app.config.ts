import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EditorCursor, QuestionsetEditorLibraryModule } from 'questionset-editor-library';
import { EditorCursorImplementationService } from './editor-cursor-implementation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([]),
    provideAnimations(),
    importProvidersFrom(QuestionsetEditorLibraryModule),
    { provide: EditorCursor, useClass: EditorCursorImplementationService }
  ]
};
