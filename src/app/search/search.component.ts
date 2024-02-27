import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import type { DiskMain } from '../types';
import type { Disk } from '../types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface APIDiskMain {
  id: number;
  title: string;
  artist: string;
}

interface APIResponse {
  releases: APIDiskMain[];
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  userInputArr: string[];
  userInput: string;
  cachedDisks?: DiskMain[];
  cachedDiskMap: Map<string, Disk> = new Map();
  @Output() searchArtist = new EventEmitter<string>();
  faSearch = faSearch;

  onSubmit(f: NgForm) {
    this.userInputArr = Object.values(f.value);
    this.userInput = this.userInputArr.toString().toLowerCase();
    this.searchArtist.emit(this.userInput);
  }

  constructor() {}

  ngOnInit(): void {}
}
