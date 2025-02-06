import { Users, UserCheck, Play, DollarSign, Music } from "lucide-react";

import { Column } from "../components/recent-streams/Table";

export const cardsData = [
  {
    label: "Total Users",
    icon: Users,
    percentage: 5.25,
    value: "1,234,567",
  },
  {
    label: "Active Users",
    icon: UserCheck,
    percentage: 3.75,
    value: "987,654",
  },
  {
    label: "Total Streams",
    icon: Play,
    percentage: 12.5,
    value: "500M",
  },
  {
    label: "Revenue",
    icon: DollarSign,
    percentage: -2.15,
    value: "$10.5M",
  },
  {
    label: "Top Artist",
    icon: Music,
    percentage: 2.5,
    value: "Taylor Swift",
  },
];

// Charts Data

//Top Songs
export const topSongsData = [
  { song: "Eclipse of Sound", artist: "Luna Wave", streams: 110500 },
  { song: "Midnight Groove", artist: "Echo Pulse", streams: 80000 },
  { song: "Neon Dreams", artist: "Synth Horizon", streams: 98000 },
  { song: "Solar Flare", artist: "Nova Beats", streams: 120000 },
  { song: "Infinite Echoes", artist: "Harmonic Flow", streams: 86000 },
];

//User Growth
export const userGrowthData = [
  { month: "Jan", totalUsers: 2000 },
  { month: "Feb", totalUsers: 11800 },
  { month: "Mar", totalUsers: 12500 },
  { month: "Apr", totalUsers: 3000 },
  { month: "May", totalUsers: 13500 },
  { month: "Jun", totalUsers: 14000 },
  { month: "Jul", totalUsers: 14200 },
  { month: "Aug", totalUsers: 13800 },
  { month: "Sep", totalUsers: 6400 },
  { month: "Oct", totalUsers: 12000 },
  { month: "Nov", totalUsers: 14500 },
  { month: "Dec", totalUsers: 15000 },
];

//Revenue Distribution
export const revenueData = [
  { source: "Subscriptions", revenue: 50000 },
  { source: "Ads", revenue: 30000 },
  { source: "Premium Features", revenue: 15000 },
];

//Recent Streams
export const recentStreamsData = [
  {
    song: "Eclipse of Sound",
    artist: "Luna Wave",
    dateStreamed: "2024-02-01",
    streamCount: 250,
    userId: "USR1021",
  },
  {
    song: "Midnight Groove",
    artist: "Echo Pulse",
    dateStreamed: "2024-02-02",
    streamCount: 180,
    userId: "USR1054",
  },
  {
    song: "Neon Dreams",
    artist: "Synth Horizon",
    dateStreamed: "2024-02-03",
    streamCount: 210,
    userId: "USR1078",
  },
  {
    song: "Solar Flare",
    artist: "Nova Beats",
    dateStreamed: "2024-02-03",
    streamCount: 320,
    userId: "USR1102",
  },
  {
    song: "Infinite Echoes",
    artist: "Harmonic Flow",
    dateStreamed: "2024-02-04",
    streamCount: 190,
    userId: "USR1123",
  },
  {
    song: "Neon Dreams",
    artist: "Synth Horizon",
    dateStreamed: "2024-02-05",
    streamCount: 275,
    userId: "USR1185",
  },
  {
    song: "Eclipse of Sound",
    artist: "Luna Wave",
    dateStreamed: "2024-02-06",
    streamCount: 230,
    userId: "USR1208",
  },
  {
    song: "Midnight Groove",
    artist: "Echo Pulse",
    dateStreamed: "2024-02-07",
    streamCount: 150,
    userId: "USR1229",
  },
  {
    song: "Solar Flare",
    artist: "Nova Beats",
    dateStreamed: "2024-02-08",
    streamCount: 280,
    userId: "USR1250",
  },
  {
    song: "Infinite Echoes",
    artist: "Harmonic Flow",
    dateStreamed: "2024-02-09",
    streamCount: 210,
    userId: "USR1273",
  },
];

export interface Stream {
  song: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

//Columns for Recent Streams
export const recentStreamsColumns: Column<Stream>[] = [
  { key: "song", header: "Song Name" },
  { key: "artist", header: "Artist" },
  { key: "dateStreamed", header: "Date Streamed" },
  { key: "streamCount", header: "Stream Count" },
  { key: "userId", header: "User ID" },
];
