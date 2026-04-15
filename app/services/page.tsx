import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Code, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Services() {
  const serviceDetails = [
    {
      icon: TrendingUp,
      title: 'Strategic Consulting',
      description: 'Shape your future with proven strategies',
      features: [
        'Market analysis and competitive positioning',
        'Business model optimization',
        'Growth roadmap development',
        'Stakeholder alignment and engagement',
      ],
      color: 'accent',
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Modernize with cutting-edge technology',
      features: [
        'Technology stack evaluation',
        'Cloud migration and optimization',
        'Application modernization',
        'API and integration architecture',
      ],
      color: 'accent',
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Maximize efficiency and profitability',
      features: [
        'Process optimization and automation',
        'Supply chain enhancement',
        'Cost reduction initiatives',
        'Performance management systems',
      ],
      color: 'accent',
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Lead successful organizational transformation',
      features: [
        'Change strategy and planning',
        'Stakeholder communication programs',
        'Training and capability building',
        'Change impact assessment',
      ],
      color: 'accent',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'In-depth analysis of your current state, challenges, and opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Co-create tailored solutions aligned with your business objectives.',
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'Develop detailed roadmaps with clear milestones and KPIs.',
    },
    {
      step: '04',
      title: 'Execution & Support',
      description: 'Manage execution with dedicated teams and ongoing governance.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive consulting solutions tailored to your unique business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Learn More <ArrowRight className="ml-2" size={16} /></Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg aspect-square border border-accent/30 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-accent/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              A proven methodology backed by years of industry experience and successful transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodology.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block relative mt-12 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"></div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Deep domain knowledge across sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Finance', 'Healthcare', 'Retail', 'Technology', 'Manufacturing', 'Energy'].map((industry, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg text-center hover:border-accent hover:bg-accent/5 transition-all"
              >
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 text-accent-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg opacity-90">
            Connect with our team to discuss how we can help transform your business.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-white"
            asChild
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
