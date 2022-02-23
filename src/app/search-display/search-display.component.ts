import { Component, OnInit, Input } from '@angular/core';
import { Itvsearch } from '../itvsearch';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css'],
})
export class SearchDisplayComponent implements OnInit {
  
  current: Itvsearch
  constructor(private tvMazeService: TvmazeService) {
    this.current = {
      show: { },
      showName: '',
      showStatus: '',
      showGenres: [],
      showSummary: '',
      showSchedule: [],
      scheduleTime: '',
      scheduleDays: [],
      showNetwork: '' 
    }
  }

  ngOnInit(): void {
    this.tvMazeService.getShowInfo('house') //dummy input
    .subscribe(data => this.current = data)
  }

  
}
