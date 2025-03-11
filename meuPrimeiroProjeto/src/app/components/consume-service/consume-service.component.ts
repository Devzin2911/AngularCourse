import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public getTask = signal<null | Array<{
    id: string,
    title: string
  }>>(null);

  //public getTask$ = this.#apiService.httpListTask$();
  public getListTask = this.#apiService.getListTask;
  
  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    // this.getTask$.subscribe({
    //   next: (next) => {
    //     console.log(next)
    //     this.getTask.set(next)
    //   },
    //   error: (error) => console.log(error),
    //   complete: () => console.log("Complete!")
   // });
  }
}
