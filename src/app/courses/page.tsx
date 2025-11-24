"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Twitter, Linkedin, Instagram, Star, DollarSign, Users, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="IT not EAT"
          button={{
            text: "Enroll Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Courses"
          description="Start your tech journey with our most popular programs"
          tag="Popular"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Full Stack Web Development Bootcamp",
              price: "$2,999",
              imageSrc: "https://pixabay.com/get/g7479277c370f52dac46d53bd3dfee21883f32f889f190601a64d7e1402331f5760e152d719e76d31064d9c29e8225ecdbd6f4d89f082ad3f793ed163867ffce9_1280.jpg",
              imageAlt: "Full stack development course"
            },
            {
              id: "2",
              name: "Data Science & Machine Learning",
              price: "$3,499",
              imageSrc: "https://pixabay.com/get/g46342cb7c2047814c0639a98d9c0c3c1d6f247307b2294016a9c3ab74be2a4223d1956fabb2951e4d8276b0c916f7b1bbddc3fec77aa968e51767e4f34871fdc_1280.jpg",
              imageAlt: "Data science course"
            },
            {
              id: "3",
              name: "Cybersecurity Specialist Program",
              price: "$2,799",
              imageSrc: "https://pixabay.com/get/g1865c173a129da9f0b8c373ad24ba811223c5d8ebc99b3d66c418bdda6dd0fd3076ad191f4705437ef6d32155459fdb7fd3e6d2357b2166d4629de038ac794c9_1280.jpg",
              imageAlt: "Cybersecurity course"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Learning Path"
          description="Flexible payment options to fit your budget and schedule"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              price: "$199/month",
              name: "Basic Plan",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Learn More", href: "/about" }
              ],
              features: [
                "Access to 3 courses",
                "Basic career support",
                "Community access",
                "Email support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$299/month",
              name: "Professional Plan",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Learn More", href: "/about" }
              ],
              features: [
                "Access to all courses",
                "1-on-1 mentoring",
                "Job placement assistance",
                "Priority support",
                "Industry certifications"
              ]
            },
            {
              id: "premium",
              price: "$399/month",
              name: "Premium Plan",
              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Learn More", href: "/about" }
              ],
              features: [
                "Everything in Professional",
                "Personal career coach",
                "Portfolio development",
                "Interview preparation",
                "Lifetime access"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Success Stories"
          description="Numbers that showcase our commitment to student success"
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Graduates",
              value: "2,500+"
            },
            {
              id: "2",
              icon: Briefcase,
              title: "Job Placement Rate",
              value: "94%"
            },
            {
              id: "3",
              icon: DollarSign,
              title: "Average Salary Increase",
              value: "85%"
            },
            {
              id: "4",
              icon: Star,
              title: "Student Satisfaction",
              value: "4.9/5"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="IT not EAT"
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Full Stack Development", href: "/courses" },
                { label: "Data Science", href: "/courses" },
                { label: "Cybersecurity", href: "/courses" },
                { label: "Mobile Development", href: "/courses" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "About Us", href: "/about" },
                { label: "FAQs", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Career Services", href: "/about" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Student Portal", href: "https://portal.itnoteat.com" },
                { label: "Blog", href: "https://blog.itnoteat.com" },
                { label: "Community", href: "https://community.itnoteat.com" },
                { label: "Alumni Network", href: "https://alumni.itnoteat.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/itnoteat", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com/itnoteat", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/itnoteat", ariaLabel: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/itnoteat", ariaLabel: "Instagram" }
          ]}
          copyrightText="© 2025 IT not EAT. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}