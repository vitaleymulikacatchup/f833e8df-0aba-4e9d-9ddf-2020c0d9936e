"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Twitter, Linkedin, Instagram, GraduationCap, Code, Users, Briefcase, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
            { name: "Courses", id: "/courses" },
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

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose IT not EAT"
          description="We're more than just an IT school - we're your gateway to a thriving tech career. Our comprehensive programs combine theoretical knowledge with hands-on experience."
          tag="About Us"
          tagIcon={GraduationCap}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Industry-Relevant Curriculum",
              description: "Learn the latest technologies and frameworks used by top companies worldwide",
              icon: Code
            },
            {
              title: "Expert Instructors",
              description: "Learn from seasoned professionals with years of real-world experience",
              icon: Users
            },
            {
              title: "Career Support",
              description: "Get comprehensive job placement assistance and career guidance",
              icon: Briefcase
            },
            {
              title: "Flexible Learning",
              description: "Choose from full-time, part-time, and online learning options",
              icon: Clock
            }
          ]}
          imageSrc="https://pixabay.com/get/g68d81b71e159f7246e34b42afcb2d500ccd4463da5c16814e25ef59d07a3f053beb55efa41939d6a716b5f32d3c8527f697f622ea630629588927a322d161c8b_1280.jpg"
          imageAlt="Students learning programming"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with real-world experience"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Chen",
              role: "Full Stack Development Lead",
              imageSrc: "https://pixabay.com/get/g8a59fd830040d8e6b54960808aa330634a5c496364b3ff07a33bad55e4469511a6e2c7153f34cc9610786501982a07246217724cb55fcd92c7387111c7f21d51_1280.jpg",
              imageAlt: "Dr. Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Data Science Expert",
              imageSrc: "https://pixabay.com/get/gde47cb0144407c01b05605133ca7712261cd19eb576acf6726ce31d6a4c1126a9eb0a2e7eae2c1e4e1f7c0eb01b0a654614d95f2fb5235912a70e600f95025bf_1280.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",
              name: "Jennifer Kim",
              role: "Cybersecurity Specialist",
              imageSrc: "https://pixabay.com/get/g7045f5eb6b14debf30f7548e6eec9d09826990770fe835a0f795791dbcffc497e2ab17492f9584e04958ce1384ae02817f37ce965f4d30e3bfc380ef15781cbb_1280.jpg",
              imageAlt: "Jennifer Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our programs"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What prerequisites do I need to enroll?",
              content: "No prior coding experience required! Our courses are designed for beginners. You just need a computer with internet access and the motivation to learn."
            },
            {
              id: "2",
              title: "How long are the programs?",
              content: "Program lengths vary: Full-time bootcamps are 12-16 weeks, part-time programs are 6-9 months, and online courses are self-paced with 12-month access."
            },
            {
              id: "3",
              title: "Do you provide job placement assistance?",
              content: "Yes! We offer comprehensive career support including resume building, interview preparation, portfolio development, and direct connections with hiring partners."
            },
            {
              id: "4",
              title: "Are there financing options available?",
              content: "We offer multiple payment options including installment plans, income share agreements, and partnerships with financing companies to make education affordable."
            },
            {
              id: "5",
              title: "What kind of certificate do I receive?",
              content: "Upon completion, you'll receive an industry-recognized certificate and access to our alumni network. Many programs also prepare you for professional certifications."
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