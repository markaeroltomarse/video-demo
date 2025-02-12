import { Video, ViewerData, GeoData } from './types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    views: 150000,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    duration: 345, // 5:45 in seconds
    profit: 2500
  },
  // Add more videos as needed
];

export const viewerData: ViewerData[] = [
  { date: '2023-01', views: 50000 },
  { date: '2023-02', views: 75000 },
  { date: '2023-03', views: 100000 },
  { date: '2023-04', views: 150000 },
];

export const geoData: GeoData[] = [
  { country: 'United States', percentage: 35 },
  { country: 'India', percentage: 25 },
  { country: 'United Kingdom', percentage: 15 },
  { country: 'Germany', percentage: 10 },
  { country: 'Canada', percentage: 8 },
  { country: 'Others', percentage: 7 },
];