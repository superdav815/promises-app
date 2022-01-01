import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Scripture, scriptures } from '../promises-page/promises-page.component';

@Component({
  selector: 'app-selected-promises',
  templateUrl: './selected-promises.component.html',
  styleUrls: ['./selected-promises.component.scss']
})
export class SelectedPromisesComponent implements OnInit {
  promises = scriptures;
  ids: number[] = [];
  selected: Scripture[] = [];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['ids']) {
        let t: string[] = params['ids'].split(',') || [];
        this.ids = t.filter(n => !isNaN(+n)).map(m => Number(m));
        this.selected = this.promises.filter(p => this.ids.includes(p.id));
      }
    });
  }
}
