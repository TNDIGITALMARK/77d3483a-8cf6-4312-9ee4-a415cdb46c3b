import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Purrfect Paws
              </span>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover the world of cats and find your perfect feline companion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:opacity-70 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/breeds" className="text-sm hover:opacity-70 transition-opacity">
                  Cat Breeds
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm hover:opacity-70 transition-opacity">
                  Care Tips
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm hover:opacity-70 transition-opacity">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:opacity-70 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Newsletter
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to get cat care tips and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p>© {currentYear} Purrfect Paws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
