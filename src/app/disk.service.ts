import { Injectable } from '@angular/core';
import type { Disk } from './types';
import type { DiskMain } from './types';

interface APIDisk {
  id: number;
  title: string;
  resource_url: string;
  artists: APIArtist[];
  genres: string[];
  images: APIImage[];
  tracklist: APITrack[];
  year: number;
  videos: APIVideo[];
}

interface APIDiskMain {
  id: number;
  title: string;
  artist: string;
}

interface APIVideo {
  uri: string;
}

interface APITrack {
  position: string;
  title: string;
  duration: string;
}

interface APIImage {
  resource_url: string;
}

interface APIArtist {
  name: string;
}

interface APIResponse {
  releases: APIDiskMain[];
}

@Injectable({
  providedIn: 'root',
})
export class DiskService {
  cachedDisks?: DiskMain[];
  cachedDiskMap: Map<string, Disk> = new Map();

  constructor() {}
  private adaptDisk(apiDisk: APIDisk): Disk {
    return {
      id: apiDisk.id,
      title: apiDisk.title,
      songlist: apiDisk.tracklist.map(
        (track) => `${track.position} - ${track.title} - ${track.duration}`
      ),
      artist: apiDisk.artists.map((artist) => artist.name),
      year: apiDisk.year,
      genres: apiDisk.genres,
      img: apiDisk.images.map((image) => image.resource_url),
      video: apiDisk.videos.map((video) => video.uri),
    };
  }

  private adaptDiskList(apiList: APIDiskMain): DiskMain {
    return {
      id: apiList.id,
      title: apiList.title,
      artist: apiList.artist,
    };
  }

  async getDisks(searchValue?: string): Promise<DiskMain[]> {
    const url = `https://disks-project.herokuapp.com/disks${
      searchValue ? `?artist=${searchValue}` : ''
    }`;
    const disksRequest = await fetch(url);
    const apiDisksList = (await disksRequest.json()) as APIResponse;
    const disks = apiDisksList.releases.map((apiDiskList) =>
      this.adaptDiskList(apiDiskList)
    );
    this.cachedDisks = disks;
    return disks;
  }

  async getDiskById(id: string): Promise<Disk> {
    if (this.cachedDiskMap.has(id)) {
      return this.cachedDiskMap.get(id);
    }

    const diskRequest = await fetch(
      `https://disks-project.herokuapp.com/disk/${id}`
    );
    const apiDisk = (await diskRequest.json()) as APIDisk;
    const disk = this.adaptDisk(apiDisk);
    this.cachedDiskMap.set(id, disk);

    return disk;
  }
}
