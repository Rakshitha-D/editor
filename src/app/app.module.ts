import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { QuestionsetEditorLibraryModule, EditorCursor } from 'questionset-editor-library';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EditorCursorImplementationService } from './editor-cursor-implementation.service';

@NgModule({
  imports: [
    BrowserModule,
    QuestionsetEditorLibraryModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {})
  ],
  providers: [
    { provide: EditorCursor, useExisting: EditorCursorImplementationService }
  ]
})
export class AppModule { }
