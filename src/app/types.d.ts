interface Disk {
  id: number;
  title: string;
  artist: string[];
  year: number;
  genres: string[];
  songlist: string[];
  img: string[];
  video: string[];
}

interface DiskMain {
  id: number;
  title: string;
  artist: string;
}

export type { Disk, DiskMain };
