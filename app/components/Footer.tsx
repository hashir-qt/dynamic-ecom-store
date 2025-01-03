"use client";
import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 justify-center md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/best-sellers" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link href="/sale" className="hover:text-primary transition-colors">Sale</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get Our latest products and  delivered straight to your Home.</p>
            <Link href="/newsletter">
              <Button className="w-full mt-5">
                Subscribe to Our Newsletter
              </Button>
            </Link>
          </div>
        </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UrbanStich. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

