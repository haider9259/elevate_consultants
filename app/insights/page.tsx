'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'The Future of Enterprise AI: 5 Key Trends',
      excerpt: 'Explore how AI is reshaping business operations and what enterprises need to prepare for the digital revolution.',
      category: 'Technology',
      date: 'March 15, 2024',
      author: 'Sarah Chen',
      readTime: '8 min read',
      image: 'Technology',
    },
    {
      id: 2,
      title: 'Digital-First Strategy in 2024: Beyond the Buzzword',
      excerpt: 'Learn how to develop a truly digital-first strategy that drives real business outcomes, not just IT initiatives.',
      category: 'Strategy',
      date: 'March 10, 2024',
      author: 'Michael Rodriguez',
      readTime: '6 min read',
      image: 'Strategy',
    },
    {
      id: 3,
      title: 'Building Resilient Organizations in Uncertain Times',
      excerpt: 'Discover the organizational capabilities that enable companies to thrive amid disruption and uncertainty.',
      category: 'Leadership',
      date: 'March 5, 2024',
      author: 'Jennifer Kumar',
      readTime: '7 min read',
      image: 'Leadership',
    },
    {
      id: 4,
      title: 'The Cost of Legacy: When Technical Debt Becomes Business Risk',
      excerpt: 'Understand the real financial impact of technical debt and strategies to modernize your technology stack.',
      category: 'Technology',
      date: 'February 28, 2024',
      author: 'David Thompson',
      readTime: '9 min read',
      image: 'Technology',
    },
    {
      id: 5,
      title: 'Customer-Centric Transformation: A Practical Roadmap',
      excerpt: 'How leading companies are reorganizing around customer needs to drive competitive advantage.',
      category: 'Strategy',
      date: 'February 20, 2024',
      author: 'Sarah Chen',
      readTime: '7 min read',
      image: 'Strategy',
    },
    {
      id: 6,
      title: 'Change Management Excellence: The Human Side of Transformation',
      excerpt: 'Why change management is critical to transformation success and how to execute it effectively.',
      category: 'Leadership',
      date: 'February 12, 2024',
      author: 'Michael Rodriguez',
      readTime: '8 min read',
      image: 'Leadership',
    },
    {
      id: 7,
      title: 'Cloud Migration: Strategy Beyond Infrastructure',
      excerpt: 'Moving to the cloud is more than a technical decision—it&apos;s a strategic business transformation.',
      category: 'Technology',
      date: 'February 5, 2024',
      author: 'Jennifer Kumar',
      readTime: '6 min read',
      image: 'Technology',
    },
    {
      id: 8,
      title: 'Sustainable Growth: Balancing Profitability and Purpose',
      excerpt: 'How companies can achieve financial success while creating positive social and environmental impact.',
      category: 'Strategy',
      date: 'January 28, 2024',
      author: 'David Thompson',
      readTime: '7 min read',
      image: 'Strategy',
    },
    {
      id: 9,
      title: 'Building a High-Performance Culture',
      excerpt: 'The organizational capabilities and leadership behaviors that drive exceptional performance.',
      category: 'Leadership',
      date: 'January 20, 2024',
      author: 'Sarah Chen',
      readTime: '8 min read',
      image: 'Leadership',
    },
  ];

  const categories = ['All', 'Technology', 'Strategy', 'Leadership'];

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Thought Leadership</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Industry trends, strategic perspectives, and practical guidance from our experts
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all group flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="text-accent/30 text-center group-hover:scale-110 transition-transform">
                    <div className="text-4xl font-bold opacity-50">{article.image[0]}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href={`/insights/${article.id}`}>
                      Read Article <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-lg text-muted-foreground">
            Subscribe to our quarterly newsletter for insights and updates on industry trends.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 text-accent-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform?</h2>
          <p className="text-lg opacity-90">
            Let&apos;s discuss how these insights apply to your organization.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-white"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
