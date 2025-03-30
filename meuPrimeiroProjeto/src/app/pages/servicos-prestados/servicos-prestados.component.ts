import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  imports: [CommonModule],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ServicosPrestadosComponent implements OnInit {

  #route = inject(ActivatedRoute)

  public getId = signal<null | string>(null)
  @Input() set id(id: string) {

  }

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id'])
    this.#route.params.subscribe((res) => console.log(res['id']))
  }
}
