import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-t',
  templateUrl: './create-t.component.html',
  styleUrls: ['./create-t.component.scss']
})
export class CreateTComponent {
  @Input() XD:boolean=true;


}
