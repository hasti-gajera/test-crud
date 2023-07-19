import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-templat-driven-form',
  templateUrl: './templat-driven-form.component.html',
  styleUrls: ['./templat-driven-form.component.css']
})
export class TemplatDrivenFormComponent {
   constructor(private route:ActivatedRoute){}
   
}
