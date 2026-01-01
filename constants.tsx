
import React from 'react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Globe, 
  Server, 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  Instagram,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { Skill, Project, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React & Next.js', percentage: 95, icon: 'Layout' },
  { name: 'TypeScript', percentage: 90, icon: 'Code2' },
  { name: 'Tailwind CSS', percentage: 98, icon: 'Layers' },
  { name: 'Node.js & Express', percentage: 85, icon: 'Server' },
  { name: 'PostgreSQL & MongoDB', percentage: 82, icon: 'Database' },
  { name: 'System Architecture', percentage: 80, icon: 'Cpu' },
  { name: 'Mobile First Design', percentage: 95, icon: 'Smartphone' },
  { name: 'Git & CI/CD', percentage: 88, icon: 'Github' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nova SaaS Dashboard',
    description: 'A high-performance analytics platform for subscription-based businesses, featuring real-time data visualization and multi-tenant architecture.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Chart.js', 'Prisma'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Zenith Crypto Wallet',
    description: 'A secure, non-custodial Web3 wallet interface with multi-chain support, real-time price tracking, and biometric authentication simulation.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tags: ['TypeScript', 'Ethers.js', 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Quantum Ecommerce',
    description: 'Next-gen shopping experience with AI-powered recommendations, lightning-fast search, and seamless Stripe integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Redux', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Focus Productivity Tool',
    description: 'A specialized workflow management system for remote teams, integrating Kanban boards with built-in video conferencing.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Socket.io', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'CTO at CloudScale',
    content: 'Ihtesham is a rare talent who understands both the technical architecture and the user experience. He built our MVP in record time.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: 'Jessica Thorne',
    role: 'Lead Designer',
    content: 'The precision in his frontend implementation is incredible. Every pixel was exactly where it needed to be. A true professional.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 3,
    name: 'David Okafor',
    role: 'Founder of Nexus AI',
    content: 'Ihtesham\'s ability to solve complex problems with simple, elegant code saved our team weeks of development time.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const SOCIALS = [
  { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://twitter.com' },
  { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com' },
];
