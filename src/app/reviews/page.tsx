"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Twitter, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ReviewsPage() {
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
            { name: "Courses", id: "/courses" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="IT not EAT"
          button={{
            text: "Enroll Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Student Success Stories"
          description="Hear from our graduates who transformed their careers"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarah_codes",
              testimonial: "IT not EAT completely changed my career trajectory. The hands-on projects and expert mentoring helped me land my dream job as a full-stack developer.",
              imageSrc: "https://pixabay.com/get/g21abb68c55348f9768ec22a0424c95cb6e9bb56ae72664db5e9d7f80ccb2f79162215cb5a505fb821f304a3abe8f14679c13a5ac3713801afe04f3506ef3d879_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "John Martinez",
              handle: "@john_dev",
              testimonial: "The cybersecurity program was incredibly comprehensive. Within 6 months of graduation, I was working at a Fortune 500 company with a 70% salary increase.",
              imageSrc: "https://pixabay.com/get/g230f62ae3c04f218fe24f5a5feba675adb874741529957c93a91ac76c52ddf3199d9bd1a61acb1a4693167ce13df5c2394e0c381ebe375bc345ba6ccd0a35aa6_1280.png",
              imageAlt: "John Martinez"
            },
            {
              id: "3",
              name: "Maria Santos",
              handle: "@maria_data",
              testimonial: "The data science course exceeded my expectations. The instructors were patient, knowledgeable, and always available to help. Now I'm a senior data analyst!",
              imageSrc: "https://pixabay.com/get/g13df59e8fe8f1eed359c04efa9006f8f82c851950ecbc09e5274b729bdb883fd14f9494e83c105525346bee18e3ed78142c4335c778233e9be8ca699468353e5_1280.jpg",
              imageAlt: "Maria Santos"
            },
            {
              id: "4",
              name: "Alex Thompson",
              handle: "@alex_mobile",
              testimonial: "From zero coding knowledge to published mobile apps - IT not EAT made it possible. The career support team helped me negotiate my first tech job offer.",
              imageSrc: "https://pixabay.com/get/gb7d3ccda05d400407e9d72d915fb537bc39a93ec238f8a2bfa663c275a8c76f7b466e5491296c27bd499b158ff67f16b4925ef751e464aee489df78cb686f0b1_1280.png",
              imageAlt: "Alex Thompson"
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