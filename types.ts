
export type TabType = 'feed' | 'messages' | 'music' | 'videos' | 'market' | 'groups' | 'vaibepay' | 'profile' | 'admin' | 'settings' | 'jobs' | 'studios' | 'owner_panel';

export interface Post {
  id: string;
  user: string;
  avatar: string;
  content: string;
  media?: string;
  mediaType?: 'file' | 'link';
  type: 'image' | 'video' | 'text' | 'audio';
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  location?: string;
  verified?: boolean;
}

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  followers: number;
  following: number;
  verified: boolean;
  stars: number;
  vaibeCoins: number;
  kwanzaBalance: number;
  level: number;
  points: number;
  totalSpent?: number;
}

export interface FeatureFlags {
  feed: boolean;
  messages: boolean;
  music: boolean;
  videos: boolean;
  market: boolean;
  groups: boolean;
  vaibepay: boolean;
  studios: boolean;
  jobs: boolean;
}
