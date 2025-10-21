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
        <section className="relative bg-secondary overflow-hidden">
          <div className="container py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Find Your
                  <br />
                  Feline Friend
                </h1>
                <p className="text-lg md:text-xl text-secondary-foreground/90">
                  Discover the World of Cats
                </p>
                <div className="pt-4">
                  <Link
                    href="/breeds"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                  >
                    Explore Breeds
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/generated/hero-cat.jpg"
                  alt="Beautiful orange tabby cat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cat Breeds Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Cat Breeds
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our most popular feline companions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBreeds.map((breed) => (
                <Link
                  key={breed.name}
                  href="/breeds"
                  className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 bg-muted">
                    <Image
                      src={breed.image}
                      alt={breed.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {breed.name}
                    </h3>
                    <p className="text-muted-foreground">{breed.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cat Care Tips Section */}
        <section className="section bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Cat Care Tips
              </h2>
              <p className="text-lg text-muted-foreground">
                Essential guidance for happy, healthy cats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/care"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                View All Care Tips
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="section" id="gallery">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Photo Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Beautiful moments with our feline friends
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Cat photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Expert Advice
                  </h3>
                  <p className="text-secondary-foreground/90">
                    Learn from certified cat care experts
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🐱</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Community & Support
                  </h3>
                  <p className="text-secondary-foreground/90">
                    Connect with fellow cat lovers
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/breeds"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Join Our Community
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