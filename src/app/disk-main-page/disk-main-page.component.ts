import { Component, Input, OnInit } from '@angular/core';
import { DiskService } from '../disk.service';

interface DiskLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-disk-main-page',
  templateUrl: './disk-main-page.component.html',
  styleUrls: ['./disk-main-page.component.css'],
})
export class DiskMainPageComponent implements OnInit {
  linkDisks: DiskLink[] = [];
  isLoading = true;

  constructor(private diskService: DiskService) {}

  private async foo(searchValue?: string) {
    this.isLoading = true;
    const disks = await this.diskService.getDisks(searchValue);
    this.linkDisks = disks.map((disk) => {
      return {
        text: disk.title,
        url: `/disk/${disk.id}`,
      };
    });
    this.isLoading = false;
  }

  async ngOnInit(): Promise<void> {
    await this.foo();
  }

  async onSearchChanged(newValue: string) {
    this.foo(newValue);
  }
}
