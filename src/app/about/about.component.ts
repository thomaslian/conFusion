import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  // Make Angular know that this component depends on the LeaderService
  constructor(private leaderService: LeaderService,
    @Inject('BASEURL') private BASEURL) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders)
      ;
  }

}
