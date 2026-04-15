import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/Logo.png" 
                  alt="Elevate Consultants" 
                  width={32} 
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg">Elevate Consultants</span>
            </div>
            <p className="text-sm opacity-80">
              Transforming businesses through strategic consulting and digital innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="opacity-80 hover:opacity-100 transition-opacity">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Digital
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
         {/* Contact */}
          <div>
  <h4 className="font-semibold mb-4">Contact</h4>
  <div className="space-y-3 text-sm">
    <div className="flex items-start space-x-2">
      <MapPin size={16} className="mt-1 flex-shrink-0" />
      <span className="opacity-80">One Liberty Place, 1650 Market Street, Suite 1800, Philadelphia, PA 19103, USA</span>
    </div>
    <div className="flex items-center space-x-2">
      <Phone size={16} />
      <a href="tel:+1215558762" className="opacity-80 hover:opacity-100 transition-opacity">
        +1 (215) 555-8762
      </a>
    </div>
    <div className="flex items-center space-x-2">
      <Mail size={16} />
      <a href="mailto:contactus@elevateconsultants.com" className="opacity-80 hover:opacity-100 transition-opacity">
        contactus@elevateconsultants.com
      </a>
    </div>
  </div>
</div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              &copy; 2024 Elevate Consultants Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}