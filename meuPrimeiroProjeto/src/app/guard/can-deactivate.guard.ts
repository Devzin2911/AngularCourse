import { CanDeactivateFn } from '@angular/router';
import ServicosPrestadosComponent from 'app/pages/servicos-prestados/servicos-prestados.component';

export const canDeactivateGuard: CanDeactivateFn<ServicosPrestadosComponent> = (
  component, 
  currentRoute,
  currentState,
  nextState) =>
{
  console.log(component, currentRoute, currentState, nextState);

  console.log(component.getId())
  

  return true;
};
