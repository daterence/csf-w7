import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  num: number = 1;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num = parseInt(this.route.snapshot.params['num']);
  }

  onBack() {
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
