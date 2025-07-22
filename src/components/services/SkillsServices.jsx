import React, { useState } from 'react';
import { CheckBadgeIcon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Code, Smartphone, Palette } from 'lucide-react';

const SkillsServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Skills data organized by service
  const skillsByService = {
    1: [
      { name: "Java", level: "Basic" },
      { name: "OOPS", level: "Basic" },
      { name: "Spring Boot", level: "Basic" },
      { name: ".NET & C#", level: "Basic" },
      { name: "DSA", level: "Basic" },
      { name: "HTML", level: "Basic" },
      { name: "CSS/SASS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Git", level: "Fundamental" }
    ],
    2: [
      { name: "Java", level: "Basic" },
      { name: "Android SDK", level: "Intermediate" },
      { name: "OOPS", level: "Basic" },
      { name: "DSA", level: "Basic" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Basic" },
      { name: "Git", level: "Fundamental" }
    ],
    3: [
      { name: "HTML", level: "Basic" },
      { name: "CSS/SASS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Basic" },
      { name: "AngularJS", level: "Basic" },
      { name: "Git", level: "Fundamental" }
    ]
  };

  // Services data with combined skills
  const services = [
    {
      id: 1,
      title: "Web API Development",
      icon: <Code className="w-8 h-8" />,
      description: "Full-stack web development with modern technologies and best practices.",
      skills: skillsByService[1],
      details: [
        "Web page and app development",
        "RESTful API design and implementation", 
        "Database integration and optimization",
        "Code debugging and performance tuning",
        "Cross-platform development experience"
      ]
    },
    {
      id: 2,
      title: "Mobile App Development", 
      icon: <Smartphone className="w-8 h-8" />,
      description: "Native and cross-platform mobile application development.",
      skills: skillsByService[2],
      details: [
        "Created Android application using JAVA",
        "User-friendly interface design",
        "Mobile app architecture and patterns",
        "Performance optimization for mobile devices",
        "Design with accessibility in mind"
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      icon: <Palette className="w-8 h-8" />,
      description: "Modern frontend development with focus on user experience and design.",
      skills: skillsByService[3],
      details: [
        "Responsive web design and development",
        "Modern JavaScript frameworks and libraries", 
        "UI/UX design implementation",
        "Cross-browser compatibility",
        "Company logo and branding",
        "Custom website and landing page"
      ]
    }
  ];

  const openModal = (serviceId) => {
    setSelectedService(serviceId);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <>
      <section className="skills-services-section" id="services">
        <div className="container">
          <h2 className="section__title">Services | Skills</h2>
          <span className="section__subtitle">Create + Collaborate</span>
            
          <div className="services__container">
            {services.map((service) => (
              <div key={service.id} className="services__content">
                <div className="service-header">
                  <div className="services__icon">
                    {service.icon}
                  </div>
                  <h3 className="services__title">{service.title}</h3>
                </div>
                
                <span 
                  className="services__button"
                  onClick={() => openModal(service.id)}
                >
                  View More
                  <ArrowRightIcon className="services__button-icon" />
                </span>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedService && selectedServiceData && (
            <div className={`services__modal ${selectedService ? 'active-modal' : ''}`}>
              <div className="services__modal-content">
                <XMarkIcon 
                  onClick={closeModal}
                  className="services__modal-close"
                />
                
                <h3 className="services__modal-title">{selectedServiceData.title}</h3>
                <p className="services__modal-description">
                  {selectedServiceData.description}
                </p>

                <div className="modal-sections">
                  {/* Skills Section */}
                  <div className="modal-skills-section">
                    <h4 className="modal-section-title">Technical Skills</h4>
                    <ul className="services__modal-services">
                      {selectedServiceData.skills.map((skill, index) => (
                        <li key={index} className="services__modal-service">
                          <CheckBadgeIcon className="services__modal-icon" />
                          <div className="services__modal-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">({skill.level})</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details Section */}
                  <div className="modal-details-section">
                    <h4 className="modal-section-title">Service Details</h4>
                    <ul className="services__modal-services">
                      {selectedServiceData.details.map((detail, index) => (
                        <li key={index} className="services__modal-service">
                          <CheckBadgeIcon className="services__modal-icon" />
                          <p className="services__modal-info">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        /* CSS Variables */
        :root {
          --container-color: #ffffff;
          --title-color: #000000;
          --normal-font-size: 1rem;
          --font-medium: 500;
          --mb-1-5: 1.5rem;
          --smaller-font-size: 0.813rem;
          --small-font-size: 0.875rem;
          --h3-font-size: 1.25rem;
          --mb-1: 1rem;
          --mb-2: 2rem;
          --z-modal: 1000;
        }

        /* Main Section */
        .skills-services-section {
          padding: 4rem 0;
          background: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section__title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          color: var(--title-color);
        }

        .section__subtitle {
          display: block;
          text-align: center;
          font-size: 1.25rem;
          color: #666666;
          margin-bottom: 3rem;
        }

        .services__container {
          grid-template-columns: repeat(3, 280px);
          justify-content: center;
          column-gap: 2rem;
          display: grid;
          margin-bottom: 2rem;
        }

        .services__content {
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: var(--container-color);
          padding: 4rem 0 2rem 2rem;
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }

        .services__content:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          border-color: #000000;
        }

        .service-header {
          margin-bottom: 1.5rem;
        }

        .services__icon {
          display: block;
          font-size: 2.5rem;
          color: var(--title-color);
          margin-bottom: 1rem;
        }

        .services__title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: var(--font-medium);
        }

        .services__button {
          color: var(--title-color);
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          column-gap: 0.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid transparent;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .services__button:hover {
          color: #495057;
          background-color: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
          border: 1px solid #e9ecef;
        }

        .services__button-icon {
          width: 1rem;
          height: 1rem;
          transition: 0.3s;
        }

        .services__button:hover .services__button-icon {
          transform: translateX(0.25rem);
        }

        /* Modal Styles */
        .services__modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: var(--z-modal);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1rem;
          opacity: 0;
          visibility: hidden;
          transition: .3s;
        }

        .services__modal-content {
          width: 900px;
          max-width: 95vw;
          max-height: 85vh;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          position: relative;
          background-color: var(--container-color);
          padding: 3rem 2rem 2rem;
          border-radius: 2rem;
        }

        .services__modal-content::-webkit-scrollbar {
          display: none;
        }

        .services__modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 2rem;
          height: 2rem;
          color: var(--title-color);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .services__modal-close:hover {
          color: #ef4444;
        }

        .services__modal-title {
          font-size: 2rem;
          font-weight: var(--font-medium);
          margin-bottom: 1rem;
          text-align: center;
        }

        .services__modal-description {
          font-size: 1.1rem;
          padding: 0 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #555555;
        }

        .modal-sections {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .modal-section-title {
          font-size: 1.3rem;
          font-weight: var(--font-medium);
          margin-bottom: 0.75rem;
          color: var(--title-color);
          border-bottom: 2px solid #cccccc;
          padding-bottom: 0.5rem;
        }

        .services__modal-services {
          display: grid;
          row-gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .services__modal-service {
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
          padding: 0.25rem 0;
        }

        .services__modal-icon {
          color: #000000;
          width: 1.2rem;
          height: 1.2rem;
          flex-shrink: 0;
        }

        .services__modal-info {
          font-size: 1rem;
          line-height: 1.5;
        }

        .skill-name {
          font-weight: var(--font-medium);
          color: var(--title-color);
        }

        .skill-level {
          color: #777777;
          font-size: 0.85rem;
          margin-left: 0.5rem;
          font-style: italic;
        }

        /* Active Modal */
        .active-modal {
          opacity: 1;
          visibility: visible;
        }

        /* Responsive Design */
        @media screen and (max-width: 992px) {
          .services__container {
            grid-template-columns: repeat(3, 240px);
            column-gap: 1.5rem;
          }

          .modal-sections {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .services__modal-content {
            width: 95vw;
            padding: 2.5rem 1.5rem 1.5rem;
          }

          .services__modal-description {
            padding: 0 1rem;
          }
        }

        @media screen and (max-width: 768px) {
          .services__container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .services__content {
            padding: 2.5rem 0.5rem 1.25rem 1.25rem;
          }

          .services__icon {
            font-size: 1.75rem;
          }

          .services__title {
            font-size: 1.25rem;
          }

          .services__description {
            font-size: 0.875rem;
          }

          .services__modal-content {
            padding: 2rem 1.5rem 1.5rem;
            width: 90vw;
          }

          .services__modal-title {
            font-size: 1.5rem;
          }

          .services__modal-description {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .modal-sections {
            gap: 1rem;
          }
        }

        @media screen and (max-width: 576px) {
          .services__container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .services__content {
            padding: 2rem 0.5rem 1.25rem 1rem;
          }

          .services__icon {
            font-size: 1.5rem;
          }

          .services__title {
            font-size: 1.125rem;
          }

          .services__description {
            font-size: 0.813rem;
          }

          .services__modal-content {
            padding: 1.5rem 0.75rem 0.75rem;
            width: 95vw;
          }

          .services__modal-title {
            font-size: 1.25rem;
          }

          .services__modal-description {
            font-size: 0.875rem;
            padding: 0;
            margin-bottom: 0.75rem;
          }
        }

        @media screen and (max-width: 350px) {
          .services__container {
            grid-template-columns: 1fr;
          }

          .services__content {
            padding: 1.5rem 0.5rem 0.75rem 0.75rem;
          }

          .services__icon {
            font-size: 1.25rem;
          }

          .services__title {
            font-size: 1rem;
          }

          .services__description {
            font-size: 0.75rem;
          }

          .services__modal-content {
            padding: 1.5rem 0.5rem 0.5rem;
          }

          .services__modal-title {
            font-size: 1.125rem;
          }

          .services__modal-description {
            font-size: 0.813rem;
          }
        }
      `}</style>
    </>
  );
};

export default SkillsServices;