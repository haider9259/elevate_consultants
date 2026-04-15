import Link from 'next/link';
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, delivering exceptional results for our clients.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as true partners, combining our expertise with your insights to drive meaningful change.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating lasting, measurable impact that transforms organizations and industries.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new ideas and approaches, staying ahead of industry trends and disruptions.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '200+', label: 'Enterprise Clients' },
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Industry Experts' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Former McKinsey principal with 20 years of consulting experience across Fortune 500 companies.',
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Led digital transformations at multiple tech companies, specializing in cloud and AI integration.',
    },
    {
      name: 'Jennifer Kumar',
      title: 'Chief Operating Officer',
      bio: 'Expert in operational excellence with a track record of driving 30%+ efficiency improvements.',
    },
    {
      name: 'David Thompson',
      title: 'Chief Strategy Officer',
      bio: 'Strategic advisor to global companies, focused on market expansion and business model innovation.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Pure</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming organizations through strategic insights, operational excellence, and digital innovation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1999, Pure Consulting was established with a simple mission: to help organizations thrive in an ever-changing business landscape. What started as a small boutique practice has grown into a leading global consulting firm trusted by hundreds of enterprise clients.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the past 25 years, we&apos;ve witnessed transformations across industries—from traditional manufacturing to cutting-edge technology companies. We&apos;ve learned that successful transformation isn&apos;t just about implementing the latest tools or methodologies. It&apos;s about understanding the unique context, culture, and challenges of each organization.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, our team of 50+ industry experts is committed to delivering outcomes that matter, driving real change that impacts both our clients and the broader business community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-8">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders driving our vision and strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 mb-4"></div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-4">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  At Pure, we believe that great work comes from great people. We foster a collaborative environment where diverse perspectives are valued and innovation is encouraged.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our commitment to excellence extends beyond client work to how we develop our people, support our communities, and operate sustainably.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/contact">Join Our Team <ArrowRight className="ml-2" size={16} /></Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg aspect-square border border-accent/30"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 text-accent-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Partner With Us</h2>
          <p className="text-lg opacity-90">
            Let&apos;s work together to transform your organization and unlock new possibilities.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-white"
            asChild
          >
            <Link href="/contact">Start the Conversation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
