import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome-curso') private nomeDoCurso: string;
  @Input('nome-professor') private nomeDoProfessor: string;
  @Input() private data: string;

  constructor() { }

  ngOnInit() {
  }

}
