"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Twitter, Linkedin, Instagram, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
            { name: "Reviews", id: "/reviews" }
          ]}
          brandName="IT not EAT"
          button={{
            text: "Enroll Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Career?"
          description="Join thousands of successful graduates who started their tech journey with us. Get information about enrollment, scholarships, and upcoming cohorts."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email"
          buttonText="Get Info"
          termsText="By signing up, you agree to receive updates about our programs and career opportunities."
          imageSrc="https://pixabay.com/get/gcb503ffc5ba8640213357b58c36ed9c016016b393b37f5e560a45b8463a38ad442745f39f1a8358a02459e58037f9a4a0ee74960d43dd8bb77299c048d62f04d_1280.jpg"
          imageAlt="Students collaborating on coding projects"
          mediaPosition="right"
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