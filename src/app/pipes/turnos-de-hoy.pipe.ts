import { Pipe, PipeTransform } from '@angular/core';
import { ListaHabilitadosPipe } from './lista-habilitados.pipe';

@Pipe({
  name: 'turnosDeHoy'
})
export class TurnosDeHoyPipe implements PipeTransform {

  listaDelDia = []

  transform(value: any, ...args: unknown[]): unknown {

    let today = this.getDateNow()

    console.log(value)
    for(let item of value)
    {
      if(item.fecha == today && item.estado == 'aceptado')
      {
        this.listaDelDia.push(item);
      } 
    }

    this.ordenarLista();
console.log(this.listaDelDia)
    return this.listaDelDia;

  }

  getDateNow()
  {
    let fecha = new Date()
    let d :string,m :string,y:string;

    d = fecha.getDate().toString();
    m = (fecha.getMonth()+1).toString();
    y = fecha.getFullYear().toString();


    d = d.length == 1 ? '0'+d : d;
    m = m.length == 1 ? '0'+m : m;

    return `${y}-${m}-${d}`
  }

  ordenarLista()
  {
    this.listaDelDia.sort((a,b) => {
      if(a.horario> b.horario)
        return 1
      else
        return -1;
    })
  }

}
