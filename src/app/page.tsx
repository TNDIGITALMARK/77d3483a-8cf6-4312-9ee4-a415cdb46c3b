import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Activity, BookOpen, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function Home() {
  const featuredBreeds = [
    {
      name: 'Siamese',
      image: '/generated/siamese.jpg',
      description: 'Elegant & Vocal',
    },
    {
      name: 'Persian',
      image: '/generated/persian.jpg',
      description: 'Calm Companion',
    },
    {
      name: 'Bengal',
      image: '/generated/bengal.jpg',
      description: 'Active Beauty',
    },
  ];

  const careTips = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare',
      description: 'Regular vet visits and vaccinations for a healthy cat',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Essentials',
      description: 'Proper nutrition, water, and litter box maintenance',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Techniques',
      description: 'Training tips, grooming, and playtime activities',
    },
  ];

  const galleryImages = [
    '/generated/gallery-1.jpg',
    '/generated/gallery-2.jpg',
    '/generated/gallery-3.jpg',
    '/generated/maine-coon.jpg',
    '/generated/british-shorthair.jpg',
    '/generated/ragdoll.jpg',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="container py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
                Discover the World of Cats
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore cat breeds, care tips, and connect with a community of feline enthusiasts
              </p>
              <div className="pt-4">
                <Link
                  href="/breeds"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Explore Breeds
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cat Breeds Section */}
        <section className="section border-b border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-3">
                Popular Breeds
              </h2>
              <p className="text-base text-muted-foreground">
                Explore our most popular feline companions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {featuredBreeds.map((breed) => (
                <Link
                  key={breed.name}
                  href="/breeds"
                  className="group bg-background p-8 hover:bg-muted transition-colors"
                >
                  <div className="relative h-48 bg-muted mb-6 overflow-hidden">
                    <Image
                      src={breed.image}
                      alt={breed.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">
                      {breed.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{breed.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cat Care Tips Section */}
        <section className="section border-b border-border">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-3">
                Care Essentials
              </h2>
              <p className="text-base text-muted-foreground">
                Essential guidance for happy, healthy cats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {careTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-background p-12 hover:bg-muted transition-colors"
                >
                  <div className="mb-6 text-foreground/40">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/care"
                className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
              >
                View All Care Tips
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="section border-b border-border" id="gallery">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl mb-3">
                Gallery
              </h2>
              <p className="text-base text-muted-foreground">
                Beautiful moments with our feline friends
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 overflow-hidden group cursor-pointer bg-muted"
                >
                  <Image
                    src={image}
                    alt={`Cat photo ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl mb-16">
                Join Our Community
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-lg mb-2">
                    Expert Advice
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from certified cat care experts
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2">
                    Community Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow cat lovers
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <Link
                  href="/breeds"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}