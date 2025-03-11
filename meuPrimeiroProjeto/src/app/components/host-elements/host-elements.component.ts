import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document.keypress)': 'updateHostListener($event)',
    '(click)': 'updateClick()'
  }
})
export class HostElementsComponent {
  @HostBinding('attr.class') public class = 'vidaFullStack'

  @HostListener('document:keypress', ['$event'])
  public updateHostListener(event: KeyboardEvent) {
    console.log(event)
  }

  @HostListener('click', ['$event'])
  public updateClick() {
    alert('Gabriel DevFullStack')
  }
}
