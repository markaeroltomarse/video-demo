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
  {
    id: '2',
    title: 'Understanding TypeScript Basics',
    views: 120000,
    thumbnail: 'https://images.unsplash.com/photo-1605379399642-870262d3d051',
    duration: 420, // 7:00 in seconds
    profit: 3200
  },
  {
    id: '3',
    title: 'Mastering JavaScript ES6 Features',
    views: 180000,
    thumbnail: 'https://images.unsplash.com/photo-1610116306796-2506c8790f48',
    duration: 510, // 8:30 in seconds
    profit: 4000
  },
  {
    id: '4',
    title: 'Building a Full-Stack App with MERN',
    views: 200000,
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    duration: 960, // 16:00 in seconds
    profit: 6500
  },
  {
    id: '5',
    title: 'Deploying Applications on AWS',
    views: 135000,
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    duration: 720, // 12:00 in seconds
    profit: 5000
  },
  {
    id: '6',
    title: 'Introduction to DevOps Practices',
    views: 155000,
    thumbnail: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
    duration: 600, // 10:00 in seconds
    profit: 4800
  },
  {
    id: '7',
    title: 'Optimizing React Performance',
    views: 110000,
    thumbnail: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    duration: 300, // 5:00 in seconds
    profit: 3100
  },
  {
    id: '8',
    title: 'Understanding Redux for State Management',
    views: 125000,
    thumbnail: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
    duration: 540, // 9:00 in seconds
    profit: 4500
  },
  {
    id: '9',
    title: 'Node.js API Development with Express',
    views: 170000,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    duration: 900, // 15:00 in seconds
    profit: 6000
  },
  {
    id: '10',
    title: 'GraphQL vs REST: Which One to Choose?',
    views: 140000,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    duration: 480, // 8:00 in seconds
    profit: 4200
  }
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