'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    // { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center overflow-hidden relative">
            <Image 
              src="/Logo.png" 
              alt="Logo" 
              width={32} 
              height={32}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg hidden sm:inline">Elevate Consultants</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                "hover:text-accent hover:bg-accent/10",
                "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="hidden sm:inline-flex bg-black text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-muted text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}