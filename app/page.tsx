import Link from 'next/link';
import { ArrowRight, TrendingUp, Code, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Consulting',
      description: 'Drive growth with data-driven strategies tailored to your business objectives.',
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions.',
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Optimize processes and maximize efficiency across your organization.',
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Ensure smooth transitions and build teams ready for the future.',
    },
  ];

  const caseStudies = [
    {
      title: 'Financial Services Transformation',
      subtitle: 'Enterprise banking client',
      description: 'Led comprehensive digital overhaul resulting in 40% cost reduction and enhanced customer experience.',
      metrics: ['40% Cost Reduction', '2M+ Customers', '18 months'],
    },
    {
      title: 'Retail Expansion Strategy',
      subtitle: 'Global retailer',
      description: 'Developed and executed multi-market expansion plan with 25% revenue growth.',
      metrics: ['25% Revenue Growth', '15 Markets', '24 months'],
    },
    {
      title: 'Healthcare Operations',
      subtitle: 'Hospital network',
      description: 'Streamlined operations and implemented new systems serving 50,000+ daily patients.',
      metrics: ['50K+ Patients', '35% Efficiency', '12 months'],
    },
  ];

  const insights = [
    {
      title: 'The Future of Enterprise AI',
      date: 'March 2024',
      category: 'Technology',
    },
    {
      title: 'Digital-First Strategy in 2024',
      date: 'February 2024',
      category: 'Strategy',
    },
    {
      title: 'Building Resilient Organizations',
      date: 'January 2024',
      category: 'Leadership',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

     {/* Hero Section with Background Image */}
      <section className="relative flex-1 pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/home.png')" }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
              Welcome to Elevate Consultants
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance text-white whitespace-nowrap">
              Time for your Business to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Elevate</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Collaborate with our experts to achieve sustainable growth, operational efficiency, and innovative solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
                asChild
              >
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Comprehensive solutions designed to solve your toughest business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-primary-foreground/5 border border-primary-foreground/20 rounded-lg p-6 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <Icon className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="opacity-80 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven success across industries and markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-accent font-semibold mb-2">{study.subtitle}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{study.description}</p>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Counselling & Visa Services Section */}
<section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent mb-4">
        Your Future Starts Here
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Student Counselling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Visa Services</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Expert guidance for your international education journey. From university selection to visa approval, we're with you every step.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Service 1 - Counselling */}
      <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all group">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
          <Users className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-3">Expert Counselling</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Personalized guidance for university selection, course planning, and career pathways tailored to your goals.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> 500+ Universities partnered
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> Scholarship assistance
          </li>
        </ul>
      </div>

      {/* Service 2 - Visa Assistance */}
      <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all group">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
          <Zap className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-3">Visa Assistance</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          End-to-end visa application support including document preparation, interview coaching, and application tracking.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> 95% visa success rate
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> Fast-track processing
          </li>
        </ul>
      </div>

      {/* Service 3 - Post Landing Support */}
      <div className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all group">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
          <TrendingUp className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-3">Post-Landing Support</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Accommodation assistance, part-time job guidance, and ongoing support after you reach your destination.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> Airport pickup
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-3 h-3 text-accent" /> Bank account setup
          </li>
        </ul>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
        <Link href="/contact">
          Book Free Consultation <ArrowRight className="ml-2" size={16} />
        </Link>
      </Button>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 text-accent-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform?</h2>
          <p className="text-lg opacity-90">
            Schedule a consultation with our experts to discuss your unique challenges and opportunities.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-white"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}