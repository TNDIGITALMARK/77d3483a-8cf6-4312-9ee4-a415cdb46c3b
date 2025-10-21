'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import {
  Heart,
  Activity,
  BookOpen,
  Utensils,
  Stethoscope,
  Sparkles,
  Home,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CareGuide {
  id: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tips: string[];
  expanded?: boolean;
}

export default function CarePage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const careGuides: CareGuide[] = [
    {
      id: 'feeding',
      category: 'Nutrition',
      icon: <Utensils className="w-6 h-6" />,
      title: 'Feeding Guide',
      description: 'Proper nutrition is essential for your cat\'s health and longevity',
      tips: [
        'Feed kittens 4 meals daily until 6 months old',
        'Adult cats need 2 meals per day at consistent times',
        'Measure portions based on weight and activity level',
        'Always provide fresh, clean water',
        'Choose high-quality cat food appropriate for age',
        'Avoid feeding human food, especially toxic items like chocolate, onions, and grapes',
      ],
    },
    {
      id: 'health',
      category: 'Healthcare',
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Regular veterinary care keeps your cat healthy and happy',
      tips: [
        'Schedule annual vet checkups for adult cats',
        'Keep vaccinations up to date',
        'Check eyes, ears, and teeth regularly',
        'Monitor weight and body condition',
        'Watch for changes in behavior or appetite',
        'Keep flea and tick prevention current',
      ],
    },
    {
      id: 'grooming',
      category: 'Grooming',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Grooming & Hygiene',
      description: 'Regular grooming keeps your cat comfortable and reduces shedding',
      tips: [
        'Brush short-haired cats weekly, long-haired cats daily',
        'Trim nails every 2-3 weeks',
        'Clean ears gently with vet-approved solution',
        'Brush teeth regularly with cat toothpaste',
        'Bathe only when necessary, cats groom themselves',
        'Check for mats and tangles in long fur',
      ],
    },
    {
      id: 'environment',
      category: 'Home Setup',
      icon: <Home className="w-6 h-6" />,
      title: 'Creating a Safe Home',
      description: 'A cat-friendly environment promotes physical and mental health',
      tips: [
        'Provide multiple litter boxes (one per cat plus one extra)',
        'Keep litter boxes clean, scoop daily',
        'Offer scratching posts and pads',
        'Create vertical spaces with cat trees',
        'Ensure windows are secure with screens',
        'Remove toxic plants and secure harmful substances',
      ],
    },
    {
      id: 'activity',
      category: 'Exercise',
      icon: <Activity className="w-6 h-6" />,
      title: 'Exercise & Play',
      description: 'Regular play keeps cats physically fit and mentally stimulated',
      tips: [
        'Play with your cat for 15-30 minutes daily',
        'Rotate toys to maintain interest',
        'Use interactive toys like feather wands',
        'Provide puzzle feeders for mental stimulation',
        'Create hunting opportunities with treat games',
        'Consider a companion cat for social play',
      ],
    },
    {
      id: 'behavior',
      category: 'Training',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Behavior & Training',
      description: 'Understanding cat behavior helps build a strong bond',
      tips: [
        'Use positive reinforcement, never punishment',
        'Redirect unwanted behavior to appropriate outlets',
        'Understand body language and vocalizations',
        'Respect your cat\'s need for alone time',
        'Introduce changes gradually to reduce stress',
        'Provide enrichment to prevent boredom',
      ],
    },
  ];

  const healthChecklistItems = [
    { label: 'Clear, bright eyes', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Clean ears with no odor', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Healthy coat and skin', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Good appetite', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Normal litter box habits', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'Playful and alert', icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const seasonalCare = [
    {
      season: 'Winter',
      icon: '❄️',
      tips: [
        'Monitor indoor humidity levels',
        'Provide warm bedding and cozy spots',
        'Check paws for ice and salt irritation',
        'Keep away from heating sources',
      ],
    },
    {
      season: 'Spring',
      icon: '🌸',
      tips: [
        'Increase grooming during shedding season',
        'Check for fleas and ticks more frequently',
        'Be aware of seasonal allergies',
        'Ensure screens are secure as windows open',
      ],
    },
    {
      season: 'Summer',
      icon: '☀️',
      tips: [
        'Provide plenty of fresh water',
        'Create cool spots away from direct sun',
        'Never leave cat in a parked car',
        'Watch for signs of overheating',
      ],
    },
    {
      season: 'Fall',
      icon: '🍂',
      tips: [
        'Prepare indoor environment for more time inside',
        'Stock up on supplies before winter',
        'Schedule annual vet checkup',
        'Update ID tags and microchip info',
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl mb-4">
                Cat Care
              </h1>
              <p className="text-base text-muted-foreground">
                Everything you need to know to keep your feline friend happy and healthy
              </p>
            </div>
          </div>
        </section>

        {/* Care Guides Section */}
        <section className="section border-b border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-3">
                Essential Guides
              </h2>
              <p className="text-base text-muted-foreground">
                Comprehensive tips for every aspect of cat care
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
              {careGuides.map((guide) => {
                const isExpanded = expandedId === guide.id;
                return (
                  <div
                    key={guide.id}
                    className="bg-background overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpand(guide.id)}
                      className="w-full p-8 text-left hover:bg-muted transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-foreground/40">
                          {guide.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                              {guide.category}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                          <h3 className="text-lg mb-2">
                            {guide.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{guide.description}</p>
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-8 pb-8 pt-0">
                        <ul className="space-y-2 ml-10">
                          {guide.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-foreground">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Health Checklist Section */}
        <section className="section border-b border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl mb-3">
                  Health Checklist
                </h2>
                <p className="text-base text-muted-foreground">
                  Check these signs of good health regularly
                </p>
              </div>

              <div className="border border-border p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {healthChecklistItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 border border-border"
                    >
                      <div className="text-foreground/40">{item.icon}</div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 border border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    If you notice any changes in these areas, consult your veterinarian promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Care Section */}
        <section className="section">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-3">
                Seasonal Care
              </h2>
              <p className="text-base text-muted-foreground">
                Adjust your care routine throughout the year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {seasonalCare.map((season, index) => (
                <div
                  key={index}
                  className="bg-background p-8 hover:bg-muted transition-colors"
                >
                  <div className="text-3xl mb-4 opacity-40">{season.icon}</div>
                  <h3 className="text-lg mb-4">
                    {season.season}
                  </h3>
                  <ul className="space-y-2">
                    {season.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-foreground">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
