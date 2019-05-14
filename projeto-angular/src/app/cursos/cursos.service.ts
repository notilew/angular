import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private cursos: string[];

  constructor() {

    this.cursos = [
      'Angular',
      'Java Básico',
      'Java Intermediário',
      'Estrutura de Dados com Java',
      'PhoneGap e Apache Cordova',
      'Fundamentos Ext JS 4'
    ];

  }

  public getCursos() {

    return this.cursos
    
  }
}
