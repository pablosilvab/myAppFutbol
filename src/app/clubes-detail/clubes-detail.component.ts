import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clubes-detail',
  templateUrl: './clubes-detail.component.html',
  styleUrls: ['./clubes-detail.component.css']
})
export class ClubesDetailComponent implements OnInit {

  club: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getClub(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.club = data;
    });
  }

}
