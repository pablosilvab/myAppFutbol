import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  clubes: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getClubes();
  }

  getClubes() {
    this.clubes = [];
    this.rest.getClubes().subscribe((data: {}) => {
      console.log(data);
      this.clubes = data;
    });
  }

  add() {
    this.router.navigate(['/club-add']);
  }

}
