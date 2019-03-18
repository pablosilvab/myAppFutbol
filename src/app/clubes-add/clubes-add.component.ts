import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clubes-add',
  templateUrl: './clubes-add.component.html',
  styleUrls: ['./clubes-add.component.css']
})
export class ClubesAddComponent implements OnInit {

  @Input() club = {
    nombre: '',
    ciudad: ''
  };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addClub() {
    this.rest.addClub(this.club).subscribe((result) => {
      this.router.navigate(['/clubes']);
    }, (err) => {
      console.log(err);
    });
  }

}
