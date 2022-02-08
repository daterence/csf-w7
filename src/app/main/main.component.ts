import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  numArr: number[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    for (let i = 0; i < 30; i++){
      this.numArr.push(i);
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      startFrom: this.fb.control('0')
    })
  }

  go(){
    const startFrom = this.form.value.startFrom;
    console.log(startFrom);
    this.router.navigate(['/number', startFrom]);
  }

}
