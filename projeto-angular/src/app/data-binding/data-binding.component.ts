import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  private url: string;
  private urlImagem: string;

  private curtirCurso: boolean;

  private varCopiaFrase: string;
  private varSalvaFrase: string;

  private mouse: boolean;

  private nome: string;  
  private pessoa: any;

  private nomeDoCurso: string;
  private nomeDoProfessor: string;
  private data: string;

  constructor() {

    this.url = 'https://loiane.com';
    this.urlImagem = 'http://lorempixel.com/400/200/';

    this.curtirCurso = true;
    this.mouse = true;

    this.nome = 'two-way data binding';
    this.pessoa = {
      nome: 'Wellington Felix',
      idade: 29,
      cpf: '09126126655',
      endereco: {
        cep: '30692-080',
        logradouro: 'Avenida Ibirapuera',
        numero: 480,
        bairro: 'Itaipú',
        cidade: 'Belo Horizonte',
        estado: 'Minas Gerais'
      }
    }

    this.nomeDoCurso = 'JavaScript';
    this.nomeDoProfessor = 'Loianne';
    this.data = '05/05/2019';

  }

  private getValor() {

    return 1;

  }

  private getCurtirCurso() {

    return true;

  }

  private exibirAlerta() {
    
    alert('Botão Clicado!');

  }

  private copiaFrase(evento: KeyboardEvent) {

    this.varCopiaFrase = (<HTMLInputElement>evento.target).value;

  }

  private salvaFrase(frase: string) {

    this.varSalvaFrase = frase;

  }

  private escutaMouse() {

    this.mouse = !this.mouse;

  }

  ngOnInit() {
  }

}
