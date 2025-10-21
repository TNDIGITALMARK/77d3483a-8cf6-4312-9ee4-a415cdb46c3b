'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Sparkles, Activity, Heart } from 'lucide-react';

interface Breed {
  id: string;
  name: string;
  image: string;
  description: string;
  size: 'small' | 'medium' | 'large';
  energy: 'low' | 'medium' | 'high' | 'very-high';
  grooming: 'low' | 'medium' | 'high' | 'very-high';
  family: boolean;
  temperament: string[];
}

export default function BreedsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [energyFilter, setEnergyFilter] = useState<string>('all');

  const breeds: Breed[] = [
    {
      id: 'maine-coon',
      name: 'Maine Coon',
      image: '/generated/maine-coon.jpg',
      description: 'Gentle giant with luxurious coat',
      size: 'large',
      energy: 'medium',
      grooming: 'high',
      family: true,
      temperament: ['Friendly', 'Gentle', 'Playful'],
    },
    {
      id: 'persian',
      name: 'Persian',
      image: '/generated/persian.jpg',
      description: 'Calm companion with distinctive features',
      size: 'medium',
      energy: 'low',
      grooming: 'very-high',
      family: true,
      temperament: ['Calm', 'Affectionate', 'Quiet'],
    },
    {
      id: 'bengal',
      name: 'Bengal',
      image: '/generated/bengal.jpg',
      description: 'Active beauty with wild patterns',
      size: 'medium',
      energy: 'very-high',
      grooming: 'low',
      family: true,
      temperament: ['Active', 'Intelligent', 'Curious'],
    },
    {
      id: 'siamese',
      name: 'Siamese',
      image: '/generated/siamese.jpg',
      description: 'Elegant and vocal companion',
      size: 'medium',
      energy: 'high',
      grooming: 'low',
      family: true,
      temperament: ['Vocal', 'Social', 'Intelligent'],
    },
    {
      id: 'british-shorthair',
      name: 'British Shorthair',
      image: '/generated/british-shorthair.jpg',
      description: 'Easygoing with plush coat',
      size: 'medium',
      energy: 'low',
      grooming: 'medium',
      family: true,
      temperament: ['Calm', 'Independent', 'Loyal'],
    },
    {
      id: 'ragdoll',
      name: 'Ragdoll',
      image: '/generated/ragdoll.jpg',
      description: 'Docile and affectionate',
      size: 'large',
      energy: 'low',
      grooming: 'high',
      family: true,
      temperament: ['Gentle', 'Docile', 'Affectionate'],
    },
  ];

  const filteredBreeds = breeds.filter((breed) => {
    const matchesSearch = breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      breed.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = sizeFilter === 'all' || breed.size === sizeFilter;
    const matchesEnergy = energyFilter === 'all' || breed.energy === energyFilter;
    return matchesSearch && matchesSize && matchesEnergy;
  });

  const getEnergyIcon = (energy: string) => {
    const level = energy === 'low' ? 1 : energy === 'medium' ? 2 : energy === 'high' ? 3 : 4;
    return (
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  const getGroomingIcon = (grooming: string) => {
    const level = grooming === 'low' ? 1 : grooming === 'medium' ? 2 : grooming === 'high' ? 3 : 4;
    return (
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <Sparkles
            key={i}
            className={`w-4 h-4 ${
              i < level ? 'text-primary fill-primary' : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Discover Cat Breeds
              </h1>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                Explore our comprehensive guide to find your perfect feline companion
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search breeds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-border focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Breeds Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 shadow-md sticky top-24">
                  <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    Filters
                  </h3>

                  {/* Size Filter */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Size</label>
                    <select
                      value={sizeFilter}
                      onChange={(e) => setSizeFilter(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:outline-none bg-white"
                    >
                      <option value="all">All Sizes</option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  {/* Energy Filter */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Energy Level</label>
                    <select
                      value={energyFilter}
                      onChange={(e) => setEnergyFilter(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:outline-none bg-white"
                    >
                      <option value="all">All Levels</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="very-high">Very High</option>
                    </select>
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setSizeFilter('all');
                      setEnergyFilter('all');
                      setSearchTerm('');
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>

              {/* Breeds Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredBreeds.length} of {breeds.length} breeds
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredBreeds.map((breed) => (
                    <div
                      key={breed.id}
                      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                    >
                      <div className="relative h-56 bg-muted">
                        <Image
                          src={breed.image}
                          alt={breed.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          {breed.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{breed.description}</p>

                        {/* Temperament Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {breed.temperament.map((trait) => (
                            <span
                              key={trait}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>

                        {/* Characteristics */}
                        <div className="space-y-3 pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Activity className="w-4 h-4" />
                              <span>Energy</span>
                            </div>
                            {getEnergyIcon(breed.energy)}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Sparkles className="w-4 h-4" />
                              <span>Grooming</span>
                            </div>
                            {getGroomingIcon(breed.grooming)}
                          </div>
                          {breed.family && (
                            <div className="flex items-center gap-2 text-sm text-accent">
                              <Heart className="w-4 h-4 fill-accent" />
                              <span>Family Friendly</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredBreeds.length === 0 && (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🐱</div>
                    <h3 className="text-xl font-semibold mb-2">No breeds found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search term
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
