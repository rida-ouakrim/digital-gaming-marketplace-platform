import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Elite Rank Account - Level 500',
    type: 'Account',
    price: 149.99,
    rating: 4.9,
    reviews: 128,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-tier account with exclusive skins from seasons 1-5. Ready for competitive play with high MMR.',
    features: ['All Champions Unlocked', 'Rare Skins Included', 'Email Change Available'],
    instantDelivery: true
  },
  {
    id: '2',
    title: '50,000 Gold Currency Pack',
    type: 'Currency',
    price: 49.99,
    rating: 4.8,
    reviews: 856,
    image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Instant delivery of 50,000 gold coins. Use it to buy skins, mounts, or upgrade your gear immediately.',
    features: ['Safe Transfer', 'No Ban Risk', 'Bonus 5% Gold'],
    instantDelivery: true
  },
  {
    id: '3',
    title: 'Mythic Sword "Void Ender"',
    type: 'Item',
    price: 299.00,
    rating: 5.0,
    reviews: 42,
    image: 'https://images.pexels.com/photos/3370704/pexels-photo-3370704.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'One of the rarest items in the game. The Void Ender grants +50% damage against shadow creatures.',
    features: ['Legendary Rarity', 'Tradable', 'Visual Effects'],
    instantDelivery: false
  },
  {
    id: '4',
    title: 'Power Leveling 1-60',
    type: 'Service',
    price: 89.99,
    rating: 4.7,
    reviews: 315,
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional boosters will play on your account to reach level 60 in record time. VPN protection included.',
    features: ['Hand Leveling', 'VPN Protection', 'Stream Available'],
    instantDelivery: false
  },
  {
    id: '5',
    title: 'Starter Pack Bundle',
    type: 'Item',
    price: 19.99,
    rating: 4.5,
    reviews: 1205,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect for new players. Includes basic gear, 1000 gold, and a 7-day XP boost.',
    features: ['Great Value', 'Instant Activation', 'Beginner Friendly'],
    instantDelivery: true
  },
  {
    id: '6',
    title: 'Diamond Rank Boost',
    type: 'Service',
    price: 120.00,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.pexels.com/photos/7862659/pexels-photo-7862659.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Get to Diamond rank before the season ends. Played by top 500 players.',
    features: ['Duo Queue Option', 'Specific Agents', 'Chat Offline'],
    instantDelivery: false
  }
];
