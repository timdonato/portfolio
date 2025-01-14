import {
    // mobile,
    // backend,
    // creator,
    // web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import react from '../assets/react.png'; 
  import webdev from '../assets/webdev.png';
  import mobdev from '../assets/mobdev.png';  
  import wp from '../assets/wp.png';
  import seo from '../assets/seo.png';
  import conversational from '../assets/conversational.png';
  import winningkings from '../assets/winningkings.png';
  import healthconnect from '../assets/healthconnect.png';
  import leandra from '../assets/leandra.png';
  import elite from '../assets/elite-black.png';
  import sanderson from '../assets/sanderson.jpeg';
  import norikocapital from '../assets/norikocapital.jpeg';
  import gleent from '../assets/gleent.png';
  import leandraramm from '../assets/leandra.jpg';
  import princetech from '../assets/princetech.jpg'
  import java from '../assets/tech/java.png';
  import santi from '../assets/santi.jpg';

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "React Native Developer",
      icon: react,
    },
    {
      title: "Wordpress Developer",
      icon: wp,
    },
    {
      title: "Mobile App Developer",
      icon: mobdev,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Sr. Web Developer",
      company_name: "Noriko Capital",
      icon: norikocapital,
      iconBg: "#fff",
      date: "October 2019 - Present",
      points: [
        "Overseeing the development and maintenance of server-side components, databases, and APIs.",
        "Managing the website's performance by optimizing server configurations, caching, and ensuring efficient resource use.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to junior developers.",
      ],
    },
    {
      title: "Frontend Web Developer",
      company_name: "Themeco/Elite Dev (Freelance)",
      icon: elite,
      iconBg: "#fff",
      date: "Jan 2022 - March 2024",
      points: [
        "Customized and extended WordPress themes using the Themeco Pro theme builder to meet client requirements, ensuring that all themes are responsive, cross-browser compatible, and SEO-friendly.",
        "Implemented high-quality, user-centric designs that align with the client\'s branding, ensuring a seamless user experience.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensured the performance of the WordPress site by optimizing images, scripts, and other assets.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Sanderson Concrete (Freelance)",
      icon: sanderson,
      iconBg: "#fff",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed fully functional blog pages for the site.",
        "Created landing page for company\'s marketing projects.",
        "Tested websites and performed troubleshooting prior to deployment.",
        "Helped clients to troubleshoot site issues and problems and found solution to site searching functionality.",
      ],
    },
    {
      title: "Virtual Assistant",
      company_name: "Leandra Ramm (Freelance)",
      icon: leandra,
      iconBg: "#fff",
      date: "Aug 2018 - March 2020",
      points: [
        "Updated and maintained websites, adding new pages or features, and monitoring website performance.",
        "Troubleshot website issues, set up hosting, and managed domains.",
        "Managed social media accounts, created, and scheduled social media posts, and engaged with followers.",
        "Managed personal calendars, made reservations, and arranged appointments.",
      ],
    },
    {
      title: "Frontend Web Developer",
      company_name: "Gleent Incorporated",
      icon: gleent,
      iconBg: "#fff",
      date: "Jan 2018 - Sep 2019",
      points: [
        "Designed and built front-end of website which are mobile responsive.",
        "Developed website and eCommerce sites using Wordpress and Shopify platform.",
        "Transformed complex layout PSDs into pixel-perfect presentation-layer HTML5/CSS3 templates.",
        "Used programming capabilities in PHP, SQL, JavaScript, and other libraries as needed.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Tim is a topnotch! The quality of everything has been great. He has consistently exceeded expectations.",
      name: "Leandra R",
      designation: "Singer",
      company: "Actress",
      image: leandraramm,
    },
    {
      testimonial:
        "Tim combines technical skills with excellent leadership, always delivering high-quality web solutions.",
      name: "Prince",
      designation: "CEO",
      company: "Princetech",
      image: princetech,
    },
    {
      testimonial:
        "After Tim revamped our website, our traffic increased by 50%. We can't thank him enough for all his help!",
      name: "Santi T",
      designation: "Director",
      company: "AdCore",
      image: santi,
    },
  ];
  
  const projects = [
    {
      name: "WinningKings IN",
      description:
        "Web application built using a custom WordPress theme and JavaScript, delivering an immersive and dynamic experience with interactive features.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "custom-theme",
          color: "pink-text-gradient",
        },
      ],
      image: winningkings,
      source_code_link: "https://winningkingsnew.com/",
    },
    {
      name: "Conversational",
      description:
        "Web-based application built using the WordPress Pro Theme, with customization features created in a responsive, dynamic, and user-friendly manner.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "pro-theme",
          color: "green-text-gradient",
        },
        {
          name: "builder",
          color: "pink-text-gradient",
        },
      ],
      image: conversational,
      source_code_link: "https://conversational.com/",
    },
    
    {
      name: "Health Hub",
      description:
        "A comprehensive mobile app designed to help doctors in a small clinic manage patient records, appointments, treatments, and medications.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mobile",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: healthconnect,
      source_code_link: "https://github.com/timdonato/healthhubheroesv0",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };