'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (215) 555-8762',
      link: 'tel:+12155558762',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contactus@elevateconsultants.com',
      link: 'mailto:contactus@elevateconsultants.com',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'One Liberty Place, 1650 Market Street, Suite 1800, Philadelphia, PA 19103, USA',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Fri, 9am - 6pm EST',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your journey? Let's talk about how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information Section - Centered */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg text-muted-foreground">
              Reach out to us through any of the following channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                  {info.link && info.link !== '#' ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Location Map Section */}
      <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Office Location</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Visit us at our headquarters
          </p>

          <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg aspect-video border border-accent/30 flex items-center justify-center max-w-2xl mx-auto">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-accent/30 mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">One Liberty Place, 1650 Market Street, Suite 1800</p>
              <p className="text-muted-foreground">Philadelphia, PA 19103, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12 border border-accent/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="tel:+12155558762">
                  Call Us Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:contactus@elevateconsultants.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}