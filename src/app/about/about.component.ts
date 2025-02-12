import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  // Make Angular know that this component depends on the LeaderService
  constructor(private leaderService: LeaderService,
    @Inject('BASEURL') private BASEURL) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.errMess = <any>errmess);
  }
}
