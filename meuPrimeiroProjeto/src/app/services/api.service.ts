import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';


interface ITask {
  id: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Novo
  public name = signal('Gabriel Rocha')
  
  //Antigo
  public name$ = new BehaviorSubject('Gabriel Rocha $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

// Usando Setters
  #setListTask = signal<ITask[] | null>(null);
  get getListTask() {
    return this.#setListTask.asReadonly();
  }

  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    )
  }

  


 // Usando Getters and Setters
  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }

  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError() {
    return this.#setTaskCreateError.asReadonly();
  }
  
  #setTaskUpdateError = signal<ITask | null>(null);
  get getTaskUpdateError() {
    return this.#setTaskUpdateError.asReadonly();
  }

  #setTaskDeleteError = signal<ITask | null>(null);
  get getTaskDeleteError() {
    return this.#setTaskDeleteError.asReadonly();
  }
// Usando Getters and Setters  

  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskId.set(null)
    this.#setTaskIdError.set(null);

    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
  }


  // Todos os componentes do CRUD - CREATE, READ, UPDATE e DELETE
  // Esse foi o CREATE

  public httpTaskCreate$(title: string): Observable<ITask> {
    this.#setTaskCreateError.set(null)
    return this.#http
      .post<ITask>(this.#url(), { title })
      .pipe(shareReplay(),
        catchError((error: HttpErrorResponse) => {
          this.#setTaskCreateError.set(error.error.message)
          return throwError(() => error)
        })
      
    );
  }

  //Agora teremos o UPDATE
  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    this.#setTaskUpdateError.set(null)
    return this.#http
      .patch<ITask>(`${this.#url()}/${id}`, { title })
      .pipe(shareReplay(),
        catchError((error: HttpErrorResponse) => {
          this.#setTaskUpdateError.set(error.error.message)
          return throwError(() => error)
       })
    );
  }

  // Agora teremos o DELETE
  public httpTaskDelete$(title: string): Observable<ITask> {
    this.#setTaskDeleteError.set(null)
    return this.#http
      .post<ITask>(this.#url(), { title })
      .pipe(shareReplay(),
      catchError((error: HttpErrorResponse) => {
          this.#setTaskDeleteError.set(error.error.message)
          return throwError(() => error)
       }));
  }
}
