import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  wip?: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nawkoo Kuhtoo';

  private emailJsConfig = {
    serviceId: 'service_6n6m3id',
    templateId: 'template_rb52oh5',
    publicKey: '2hsLwaSRxUk-9g9Kh'
  };

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  profile = {
    name: 'Naw Hkoo Ku Htoo',
    role: 'Frontend Developer & UI/UX Designer',
    location: 'Chiang Rai, Thailand',
    address: '232, Moo1, Thasut, Mueang, Chiang Rai, Thailand, 57100',
    bio: 'Frontend-focused developer with real-world experience building web applications, IoT systems, and network infrastructure — all in live production environments.',
    profileImage: 'profile.jpg',
    resumeUrl: 'resume.pdf',
    email: 'noellehtoo@gmail.com',
    phone: '+66618842063',
    whatsapp: '+66618842063',
    lineId: 'noele2',
    github: 'https://github.com/nooele2',
    linkedin: 'https://www.linkedin.com/in/noele2/',
    twitter: '',
    website: 'https://nawkookukhtoo.vercel.app'
  };

  // Skills updated to match resume — React/Next.js added, backend expanded
  skills: Skill[] = [
    // Frontend
    { name: 'JavaScript / TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML / CSS / Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Angular', level: 80, category: 'Frontend' },
    { name: 'React & Next.js', level: 65, category: 'Frontend' },
    // Backend & Data
    { name: 'Python', level: 75, category: 'Backend & Data' },
    { name: 'Node.js / NestJS', level: 55, category: 'Backend & Data' },
    { name: 'REST API Integration', level: 80, category: 'Backend & Data' },
    { name: 'Firebase', level: 75, category: 'Backend & Data' },
    { name: 'PostgreSQL', level: 45, category: 'Backend & Data' },
    // Mobile
    { name: 'Flutter', level: 85, category: 'Mobile' },
    { name: 'Dart', level: 82, category: 'Mobile' },
    // Networking & Systems
    { name: 'Switch & Wi-Fi Config', level: 70, category: 'Networking & Systems' },
    { name: 'LAN / Server Admin', level: 68, category: 'Networking & Systems' },
    { name: 'Raspberry Pi / IoT', level: 72, category: 'Networking & Systems' },
    // Design & Tools
    { name: 'Figma', level: 88, category: 'Design & Tools' },
    { name: 'Git & GitHub', level: 85, category: 'Design & Tools' },
    { name: 'UI/UX Design', level: 88, category: 'Design & Tools' },
    { name: 'Adobe Photoshop', level: 80, category: 'Design & Tools' },
  ];

  projects: Project[] = [
    {
      title: 'School Bell System',
      description: 'IoT-powered smart bell web app built with React & Python, integrated with Raspberry Pi hardware. Deployed in a live school environment — features programmable schedule management via a browser UI with full CRUD and REST API communication.',
      technologies: ['React', 'Python', 'Raspberry Pi', 'REST API'],
      image: '3.png',
      github: 'https://github.com/nooele2/bell-webapp',
      wip: true
    },
    {
      title: 'Qulture Dashboard',
      description: 'Comprehensive admin dashboard design for the Qulture platform, featuring data visualizations, analytics panels, and a clean layout system built for clarity and efficient workflow.',
      technologies: ['Figma', 'UI/UX Design', 'Dashboard Design'],
      image: '4.png',
      demo: 'https://www.figma.com/design/1RfjfjEQaPJrdHzIfbdWbZ/Qulture-Dashboard?node-id=0-1&t=KNvF4EWPRTSs79B1-1'
    },
    {
      title: 'Qulture PWA',
      description: 'A Progressive Web App designed for the Qulture platform, delivering a seamless cross-device experience with mobile-first UI, intuitive navigation, and polished interaction patterns.',
      technologies: ['Figma', 'UI/UX Design', 'PWA Design'],
      image: '1.png',
      demo: 'https://www.figma.com/design/N0KjAy7IYkcSSlGo51gtbv/Qulture-PWA?node-id=0-1&t=1UUo7iPzqvFO7Rib-1'
    },
    {
      title: 'Athena Code Documentation Web',
      description: 'Full-stack web app for automated code documentation generation. Angular frontend consuming a Python backend API — demonstrates end-to-end TypeScript development and REST API integration.',
      technologies: ['Angular', 'TypeScript', 'Python', 'REST API'],
      image: '5.png',
      github: 'https://github.com/nooele2/code-doc-web',
      demo: 'https://athena-web-delta.vercel.app'
    },
    {
      title: 'Athena VS Code Extension',
      description: 'VS Code extension published on the Marketplace that automates code documentation generation. Built with Python and Svelte, making it easier for developers to maintain high-quality docs.',
      technologies: ['Python', 'Svelte', 'VS Code API', 'Render'],
      image: '6.png',
      github: 'https://github.com/ChannMyae-Zaw/Code-Documetation-VS-Code-Plug-in',
      demo: 'https://marketplace.visualstudio.com/items?itemName=FoodokuAthena.code-documentation'
    },
    {
      title: 'BudgetBear',
      description: 'Personal finance management mobile app built with Flutter. Tracks expenses, manages budgets, and helps users achieve financial goals — features Firebase real-time sync and async data handling.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Render'],
      image: '7.png',
      github: 'https://github.com/nooele2/BudgetBear',
      demo: 'https://nooele2.github.io/BudgetBear/'
    },
    {
      title: 'Matcha Notes',
      description: 'Beautiful note-taking mobile app built with Flutter and Firebase. Features real-time cloud sync, clean minimalist UI, and smooth UX — demonstrates NoSQL integration and polished mobile design.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: '8.png',
      github: 'https://github.com/nooele2/matcha_notes',
      demo: 'https://nooele2.github.io/matcha_notes/'
    },
    {
      title: 'NexStay Hotel Booking',
      description: 'Modern hotel booking mobile app design featuring seamless reservation flow, property browsing, and user-friendly booking management. Development-ready Figma prototype.',
      technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
      image: '2.png',
      demo: 'https://www.figma.com/proto/5YqoV0dtqujyCR6gJHbmHd/NexStay?page-id=0%3A1&node-id=1598-387&p=f&viewport=17080%2C-6787%2C0.28&t=Gq9X187jl4sM3gmF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1598%3A387'
    }
  ];

  // Work Experience — updated with accurate resume data
  workExperience: Experience[] = [
    {
      company: 'Chiang Rai International Christian School',
      role: 'Web Developer & IT Support Intern',
      period: 'January 2026 – April 2026',
      description: 'Internship in a live production environment covering full-stack web development, website redesign, network administration, and day-to-day IT support across the school campus.',
      achievements: [
        'Built a React & Python web application replacing Google Sheets for bell schedule management, integrated with the existing Raspberry Pi backend via REST API',
        'Designed and implemented the full browser-based UI for CRUD schedule operations',
        'Redesigned and enhanced the school\'s Wix website — improved layout, structure, and UX for students, parents, and staff',
        'Supported maintenance of campus network infrastructure including switches, Wi-Fi access points, and LAN',
        'Assisted in server management, user account administration, and connectivity troubleshooting',
        'Provided daily IT support for Chromebook issues, printing, and library management system transition'
      ]
    },
    {
      company: 'Vetraeus',
      role: 'UI/UX Designer — Contract',
      period: 'February 2026 – March 2026',
      description: 'Project-based remote contract delivering UI/UX design work, bridging design and frontend implementation in a fast-paced, deadline-driven environment.',
      achievements: [
        'Delivered Figma wireframes, mockups, and interactive prototypes aligned with product requirements',
        'Collaborated async with the engineering team to ensure design-to-development handoff clarity',
        'Contributed design solutions within tight deadlines in a fully remote setup'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Customer Service',
      period: 'April 2023 – July 2023',
      description: 'Managed customer inquiries and assisted with the enrollment process for prospective students and parents.',
      achievements: [
        'Managed incoming calls, emails, and inquiries promptly and professionally',
        'Provided accurate information on courses, programs, and available services',
        'Assisted prospective students and parents through the full enrollment process',
        'Coordinated placement tests and assessments for incoming students'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Assistant Teacher',
      period: 'December 2020 – March 2023',
      description: 'Supported classroom instruction and maintained student records while fostering collaborative learning environments.',
      achievements: [
        'Graded assignments and tests, computed and recorded student results',
        'Split learners into groups for activities and encouraged teamwork and collaboration',
        'Kept records of student attendance, progress, and activities to assess mastery',
        'Recognized positive student behavior using an established rewards system'
      ]
    }
  ];

  volunteerExperience: Experience[] = [
    {
      company: 'MFU Myanmar Christian Community (MFU MCC)',
      role: 'Social Media Manager',
      period: 'September 2025 – Present',
      description: 'Volunteer social media manager for a student-led Christian community at Mae Fah Luang University, focused on faith, fellowship, and support among Myanmar students.',
      achievements: [
        'Manage and create content for the official Facebook page of the community',
        'Plan and publish posts covering faith, fellowship, events, and community updates',
        'Grew online presence and engagement among Myanmar students at the university'
      ]
    },
    {
      company: 'Newlife Church Chiang Rai',
      role: 'Production Team Member',
      period: 'August 2024 – Present',
      description: 'Volunteer media production team member responsible for live streaming and camera operation, ensuring high-quality broadcast for the online congregation.',
      achievements: [
        'Operate professional cameras during weekly church services',
        'Manage live streaming and broadcasting to online platforms',
        'Coordinate with production team for seamless service delivery',
        'Setup and maintain audio-visual equipment for services and events'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Science & Technology Club Moderator',
      period: 'March 2021 – July 2021',
      description: 'Facilitated the Science and Technology Club, helping students understand scientific concepts through hands-on activities and demonstrations.',
      achievements: [
        'Led weekly Science and Technology Club sessions for students',
        'Developed engaging activities to explain complex scientific concepts',
        'Mentored students through science projects and experiments',
        'Fostered curiosity and critical thinking in STEM subjects'
      ]
    },
    {
      company: 'ELP Saturday Conversation Club',
      role: 'English Club Moderator',
      period: 'June 2020 – December 2021',
      description: 'Volunteered as an English conversation club moderator, developing club programs to improve participants\' communication skills.',
      achievements: [
        'Developed and implemented engaging club curriculum',
        'Facilitated, reviewed, and guided discussions and debates',
        'Created a welcoming environment for consistent language practice',
        'Managed interactions and encouraged active participation from all members'
      ]
    }
  ];

  activeSection = 'home';

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  get skillCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  downloadResume() {
    window.open(this.profile.resumeUrl, '_blank');
  }

  async sendEmail() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }

    this.isSubmitting = true;

    try {
      const templateParams = {
        name: this.contactForm.name,
        email: this.contactForm.email,
        message: this.contactForm.message,
        title: this.contactForm.name
      };

      const response = await emailjs.send(
        this.emailJsConfig.serviceId,
        this.emailJsConfig.templateId,
        templateParams,
        this.emailJsConfig.publicKey
      );

      if (response.status === 200) {
        alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        this.contactForm = { name: '', email: '', message: '' };
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      alert('Oops! Something went wrong. Please try again or contact me directly at ' + this.profile.email);
    } finally {
      this.isSubmitting = false;
    }
  }
}
