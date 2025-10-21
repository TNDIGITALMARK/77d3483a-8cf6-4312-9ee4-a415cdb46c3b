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
        <section className="bg-secondary py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                <span>Complete Care Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Cat Care Hub
              </h1>
              <p className="text-lg text-secondary-foreground/90">
                Everything you need to know to keep your feline friend happy and healthy
              </p>
            </div>
          </div>
        </section>

        {/* Care Guides Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Essential Care Guides
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive tips for every aspect of cat care
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {careGuides.map((guide) => {
                const isExpanded = expandedId === guide.id;
                return (
                  <div
                    key={guide.id}
                    className="bg-card rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpand(guide.id)}
                      className="w-full p-6 text-left hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                          {guide.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {guide.category}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            {guide.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{guide.description}</p>
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0 animate-in slide-in-from-top-2 duration-200">
                        <ul className="space-y-3 ml-16">
                          {guide.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Monthly Health Checklist
                </h2>
                <p className="text-lg text-muted-foreground">
                  Check these signs of good health regularly
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {healthChecklistItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl"
                    >
                      <div className="text-accent">{item.icon}</div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-center">
                    <strong>Note:</strong> If you notice any changes in these areas, consult your veterinarian promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Care Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Seasonal Care Tips
              </h2>
              <p className="text-lg text-muted-foreground">
                Adjust your care routine throughout the year
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalCare.map((season, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4 text-center">{season.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                    {season.season}
                  </h3>
                  <ul className="space-y-2">
                    {season.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Need More Help?
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                Join our community to connect with other cat owners and get expert advice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                  Join Community
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all">
                  Contact Expert
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
