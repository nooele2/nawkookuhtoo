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

  // EmailJS Configuration
  private emailJsConfig = {
    serviceId: 'service_6n6m3id',
    templateId: 'template_rb52oh5',
    publicKey: '2hsLwaSRxUk-9g9Kh'
  };

  // Contact form data
  contactForm: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  profile = {
    name: 'Naw Hkoo Ku Htoo',
    role: 'Digital Product Designer & Frontend Developer',
    location: 'Chiang Rai, Thailand',
    address: '232, Moo1, Thasut, Mueang, Chiang Rai, Thailand, 57100',
    bio: 'Passionate developer specializing in Flutter mobile development and UI/UX design. I create beautiful, intuitive user experiences that solve real-world problems.',
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

  skills: Skill[] = [
    { name: 'Flutter', level: 90, category: 'Mobile' },
    { name: 'Dart', level: 85, category: 'Mobile' },
    { name: 'UI/UX Design', level: 88, category: 'Mobile' },
    { name: 'Angular', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'Figma', level: 85, category: 'Tools' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Firebase', level: 75, category: 'Tools' },
    { name: 'Adobe Photoshop', level: 80, category: 'Content Creation' },
    { name: 'Adobe Premiere Pro', level: 78, category: 'Content Creation' },
    { name: 'Canva', level: 90, category: 'Content Creation' },
    { name: 'CapCut', level: 85, category: 'Content Creation' }
  ];

  projects: Project[] = [
    {
      title: 'Qulture PWA',
      description: 'A Progressive Web App designed for the Qulture platform, delivering a seamless cross-device experience with mobile-first UI, intuitive navigation, and polished interaction patterns.',
      technologies: ['Figma', 'UI/UX Design', 'PWA Design'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      demo: 'https://www.figma.com/design/N0KjAy7IYkcSSlGo51gtbv/Qulture-PWA?node-id=0-1&t=1UUo7iPzqvFO7Rib-1'
    },
    {
      title: 'Qulture Dashboard',
      description: 'A comprehensive admin dashboard design for the Qulture platform, featuring data visualization, analytics panels, and clean layout systems built for clarity and efficient workflow.',
      technologies: ['Figma', 'UI/UX Design', 'Dashboard Design'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      demo: 'https://www.figma.com/design/1RfjfjEQaPJrdHzIfbdWbZ/Qulture-Dashboard?node-id=0-1&t=KNvF4EWPRTSs79B1-1'
    },
    {
      title: 'School Bell System',
      description: 'An IoT-powered smart school bell web app integrated with Raspberry Pi. The web interface allows scheduling and managing automated bell rings, replacing manual bell systems with a programmable, remotely controllable solution. (Work in Progress)',
      technologies: ['Python', 'JavaScript', 'Raspberry Pi', 'CSS'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      github: 'https://github.com/nooele2/bell-webapp',
      wip: true
    },
    {
      title: 'NexStay Hotel Booking',
      description: 'A modern hotel booking mobile application with an intuitive interface, featuring seamless reservation flow, property browsing, and user-friendly booking management.',
      technologies: ['Figma', 'UI/UX Design', 'Mobile Design'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      demo: 'https://www.figma.com/proto/5YqoV0dtqujyCR6gJHbmHd/NexStay?page-id=0%3A1&node-id=1598-387&p=f&viewport=17080%2C-6787%2C0.28&t=Gq9X187jl4sM3gmF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1598%3A387'
    },
    {
      title: 'Athena Code Documentation Web',
      description: 'A comprehensive web application for automated code documentation, helping developers maintain better code quality and documentation standards.',
      technologies: ['Angular', 'TypeScript', 'Render'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      github: 'https://github.com/nooele2/code-doc-web',
      demo: 'https://athena-web-delta.vercel.app'
    },
    {
      title: 'Athena VS Code Extension',
      description: 'Powerful VS Code extension that automates code documentation generation, making it easier for developers to maintain high-quality documentation.',
      technologies: ['Python', 'Svelte', 'Render', 'VS Code API'],
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop',
      github: 'https://github.com/ChannMyae-Zaw/Code-Documetation-VS-Code-Plug-in',
      demo: 'https://marketplace.visualstudio.com/items?itemName=FoodokuAthena.code-documentation'
    },
    {
      title: 'Matcha Notes',
      description: 'A beautiful and intuitive note-taking mobile application built with Flutter, featuring real-time sync and cloud storage through Firebase.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      github: 'https://github.com/nooele2/matcha_notes',
      demo: 'https://nooele2.github.io/matcha_notes/'
    },
    {
      title: 'BudgetBear',
      description: 'Personal finance management mobile app that helps users track expenses, manage budgets, and achieve financial goals with an intuitive interface.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Render'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      github: 'https://github.com/nooele2/BudgetBear',
      demo: 'https://nooele2.github.io/BudgetBear/'
    }
  ];

  // Work Experience (Paid positions)
  workExperience: Experience[] = [
    {
      company: 'Chiang Rai Christian International School',
      role: 'IT Support & Web Developer Intern',
      period: '2025 - Present',
      description: 'Internship focused on IT support and developing a smart school bell web application integrated with Raspberry Pi to automate and manage the school bell schedule.',
      achievements: [
        'Providing technical IT support to staff and students across the school',
        'Developing and maintaining a Raspberry Pi-powered school bell web application',
        'Designing and building the web interface for remote bell schedule management',
        'Troubleshooting hardware and software issues to ensure smooth daily operations'
      ]
    },
    {
      company: 'Vetraeus',
      role: 'UI/UX Designer (Independent Contract)',
      period: '2024 · 2 months',
      description: 'Project-based independent contract delivering UI/UX design work for Vetraeus, contributing to product design and user experience improvements.',
      achievements: [
        'Designed user interfaces as part of a short-term project-based contract',
        'Collaborated remotely to deliver polished UI/UX design assets',
        'Produced wireframes, mockups, and prototypes aligned with product goals',
        'Contributed design solutions within a fast-paced, deadline-driven environment'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Customer Service',
      period: 'April 2023 - July 2023',
      description: 'Managed customer inquiries and assisted with the enrollment process for prospective students and parents.',
      achievements: [
        'Managed incoming calls, emails, and inquiries promptly and courteously',
        'Provided accurate information of courses, programs, and services',
        'Assisted prospective students and parents with the enrollment process',
        'Coordinated placement tests and assessments for new students'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Assistant Teacher',
      period: 'December 2020 - March 2023',
      description: 'Supported classroom instruction and maintained student records while fostering collaborative learning environments.',
      achievements: [
        'Graded homework and tests, and computed and recorded results',
        'Split learners into groups for activities and encouraged collaboration to nurture teamwork',
        'Kept records of student attendance, progress, and activities to assess individual mastery',
        'Recognized students\' positive behavior using an established rewards system'
      ]
    }
  ];

  // Volunteer Experience
  volunteerExperience: Experience[] = [
    {
      company: 'MFU Myanmar Christian Community (MFU MCC)',
      role: 'Social Media Manager',
      period: 'September 2025 - Present',
      description: 'Volunteer social media manager for a student-led Christian community at Mae Fah Luang University, focused on faith, fellowship, and support among Myanmar students.',
      achievements: [
        'Manage and create content for the official Facebook page of the community',
        'Plan and publish posts covering faith, fellowship, events, and community updates',
        'Grew online presence and engagement among Myanmar students and the wider university community'
      ]
    },
    {
      company: 'Newlife Church Chiang Rai',
      role: 'Production Team Member',
      period: 'August 2024 - Present',
      description: 'Volunteer media production team member responsible for live streaming services and camera operation, ensuring high-quality broadcast for online congregation.',
      achievements: [
        'Operate professional cameras during weekly church services',
        'Manage live streaming and broadcasting to online platforms',
        'Coordinate with production team for seamless service delivery',
        'Setup and maintain audio-visual equipment for events',
        'Contribute to creating engaging visual content for the community'
      ]
    },
    {
      company: 'Teacher Su International School',
      role: 'Science and Technology Club Moderator',
      period: 'March 2021 - July 2021',
      description: 'Facilitated the Science and Technology Club, helping students understand scientific concepts through hands-on activities and demonstrations.',
      achievements: [
        'Led weekly Science and Technology Club sessions',
        'Developed engaging activities to explain complex scientific concepts',
        'Mentored students in science projects and experiments',
        'Fostered curiosity and critical thinking in STEM subjects'
      ]
    },
    {
      company: 'ELP Saturday Conversation Club',
      role: 'English Club Moderator',
      period: 'June 2020 - December 2021',
      description: 'Volunteered as an English conversation club moderator, developing and implementing club programs to improve participants\' English communication skills.',
      achievements: [
        'Developed and implemented engaging club curriculum',
        'Facilitated, reviewed, and guided discussions and debates',
        'Created a welcoming environment for language practice',
        'Managed interactions and encouraged active participation among club members'
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

  // View Resume Function - Opens in new tab
  downloadResume() {
    window.open(this.profile.resumeUrl, '_blank');
  }

  // Email sending function
  async sendEmail() {
    // Validate form
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      alert('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }

    this.isSubmitting = true;

    try {
      // Template parameters that match your EmailJS template
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

        // Reset form
        this.contactForm = {
          name: '',
          email: '',
          message: ''
        };
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      alert('Oops! Something went wrong. Please try again or contact me directly at ' + this.profile.email);
    } finally {
      this.isSubmitting = false;
    }
  }
}
