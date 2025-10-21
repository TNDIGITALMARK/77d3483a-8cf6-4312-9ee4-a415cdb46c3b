import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-sm font-medium tracking-wide">
                Purrfect Paws
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Discover the world of cats and find your perfect feline companion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-foreground/40 hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/breeds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cat Breeds
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Care Tips
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get cat care tips and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Purrfect Paws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
