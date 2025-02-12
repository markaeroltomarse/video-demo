export interface Video {
  id: string;
  title: string;
  views: number;
  thumbnail: string;
  duration: number;
  profit: number;
}

export interface ViewerData {
  date: string;
  views: number;
}

export interface GeoData {
  country: string;
  percentage: number;
}