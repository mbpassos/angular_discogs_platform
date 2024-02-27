import { Component, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DiskService } from '../disk.service';
import { Disk } from '../types';

@Component({
  selector: 'app-disk-more-info',
  templateUrl: './disk-more-info.component.html',
  styleUrls: ['./disk-more-info.component.css'],
})

export class DiskMoreInfoComponent implements OnInit {
  idOutput?: string;
  artist: string[];
  tracks: string[];
  title: string;
  year: number;
  genres: string[];
  img: string[];
  video;
  @Output() urlVideo: string;
  isLoading = true;

  private activeDisk?: Disk;

  constructor(
    private injectVar: ActivatedRoute,
    private injectDiskService: DiskService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.injectVar.paramMap.subscribe(async (paraMap) => {
      const id = paraMap.get('diskId');
      if (id === null) {
        return;
      }
      this.isLoading = true;
      this.activeDisk = await this.injectDiskService.getDiskById(id);
      this.isLoading = false;
      this.artist = this.activeDisk.artist;
      this.tracks = this.activeDisk.songlist;
      this.title = this.activeDisk.title;
      this.year = this.activeDisk.year;
      this.genres = this.activeDisk.genres;
      this.img = this.activeDisk.img;
      //this.video = this.activeDisk.video[0];
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.activeDisk.video[0]
      );
    });
  }
}
