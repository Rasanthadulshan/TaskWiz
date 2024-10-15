export const sampleProjects = [
    {
      projectName: "Website Redesign",
      id: 1,
      description: "A comprehensive redesign of the company’s website to improve user experience, update branding, and enhance mobile responsiveness.",
      teamLeader: { name: "Alice", role: "Project Manager" },
      tasks: [ 
        { taskName: "Design Mockups", members: [{ name: "Alice", role: "UI/UX Designer" }], status: "completed", hours: 12 },
        { taskName: "Create Style Guide", members: [{ name: "Bob", role: "Graphic Designer" }, { name: "Charlie", role: "Content Strategist" }], status: "completed", hours: 10 },
        { taskName: "Develop Home Page", members: [{ name: "Alice", role: "Frontend Developer" }, { name: "Dave", role: "Backend Developer" }], status: "not completed", hours: 20 },
        { taskName: "Test Responsive Design", members: [{ name: "Eve", role: "QA Engineer" }], status: "completed", hours: 8 },
        { taskName: "Deploy to Server", members: [{ name: "Frank", role: "DevOps Engineer" }], status: "not completed", hours: 6 },
        { taskName: "Client Feedback", members: [{ name: "Alice", role: "Project Manager" }, { name: "Eve", role: "QA Engineer" }], status: "not completed", hours: 5 },
        { taskName: "Final Adjustments", members: [{ name: "Bob", role: "Graphic Designer" }], status: "not completed", hours: 4 },
        { taskName: "Project Handover", members: [{ name: "Charlie", role: "Content Strategist" }, { name: "Frank", role: "DevOps Engineer" }], status: "completed", hours: 3 }
      ]
    },
    {
      projectName: "Mobile App Development",
      id: 2,
      description: "Development of a mobile application to extend the company’s service offerings, with a focus on user-friendly interfaces and seamless API integration.",
      teamLeader: { name: "Heidi", role: "Lead Developer" },
      tasks: [
        { taskName: "App Wireframing", members: [{ name: "Grace", role: "UI/UX Designer" }], status: "completed", hours: 15 },
        { taskName: "API Integration", members: [{ name: "Heidi", role: "Lead Developer" }, { name: "Ivan", role: "Backend Developer" }], status: "completed", hours: 25 },
        { taskName: "UI/UX Design", members: [{ name: "Judy", role: "UI/UX Designer" }], status: "completed", hours: 18 },
        { taskName: "Backend Development", members: [{ name: "Heidi", role: "Lead Developer" }, { name: "Ivan", role: "Backend Developer" }], status: "completed", hours: 30 },
        { taskName: "Testing & QA", members: [{ name: "Grace", role: "QA Engineer" }, { name: "Judy", role: "QA Engineer" }], status: "completed", hours: 12 },
        { taskName: "User Documentation", members: [{ name: "Judy", role: "Technical Writer" }], status: "completed", hours: 10 },
        { taskName: "Final Deployment", members: [{ name: "Grace", role: "DevOps Engineer" }, { name: "Heidi", role: "Lead Developer" }], status: "completed", hours: 8 }
      ]
    }, 
    {
      projectName: "Marketing Campaign",
      id: 3,
      description: "A targeted marketing campaign designed to increase brand awareness and drive engagement through a combination of digital and traditional marketing strategies.",
      teamLeader: { name: "Bob", role: "Marketing Manager" },
      tasks: [
        { taskName: "Market Research", members: [{ name: "Alice", role: "Market Analyst" }], status: "completed", hours: 7 },
        { taskName: "Strategy Planning", members: [{ name: "Bob", role: "Marketing Manager" }], status: "completed", hours: 9 },
        { taskName: "Content Creation", members: [{ name: "Charlie", role: "Content Writer" }, { name: "Dave", role: "Graphic Designer" }], status: "not completed", hours: 20 },
        { taskName: "Social Media Management", members: [{ name: "Eve", role: "Social Media Specialist" }], status: "completed", hours: 5 },
        { taskName: "Email Campaigns", members: [{ name: "Frank", role: "Email Marketing Specialist" }], status: "not completed", hours: 8 },
        { taskName: "PPC Advertising", members: [{ name: "Alice", role: "Market Analyst" }, { name: "Charlie", role: "Content Writer" }], status: "completed", hours: 6 },
        { taskName: "Campaign Analysis", members: [{ name: "Bob", role: "Marketing Manager" }], status: "not completed", hours: 4 },
        { taskName: "Final Report", members: [{ name: "Dave", role: "Graphic Designer" }, { name: "Eve", role: "Social Media Specialist" }], status: "not completed", hours: 7 }
      ]
    },
    {
        projectName: "E-commerce Platform",
        id: 4,
        description: "Building a scalable e-commerce platform with secure payment gateways and user-friendly navigation to enhance online shopping experience.",
        teamLeader: { name: "Ivan", role: "Technical Lead" },
        tasks: [
          { taskName: "Requirement Analysis", members: [{ name: "Judy", role: "Business Analyst" }], status: "completed", hours: 12 },
          { taskName: "Database Design", members: [{ name: "Ivan", role: "Database Architect" }], status: "completed", hours: 18 },
          { taskName: "Frontend Development", members: [{ name: "Alice", role: "Frontend Developer" }, { name: "Grace", role: "Frontend Developer" }], status: "not completed", hours: 25 },
          { taskName: "Backend Development", members: [{ name: "Ivan", role: "Backend Developer" }, { name: "Heidi", role: "Backend Developer" }], status: "not completed", hours: 30 },
          { taskName: "Payment Gateway Integration", members: [{ name: "Frank", role: "Payment Specialist" }], status: "not completed", hours: 15 },
          { taskName: "Security Testing", members: [{ name: "Eve", role: "Security Analyst" }], status: "completed", hours: 10 },
          { taskName: "User Acceptance Testing", members: [{ name: "Grace", role: "QA Engineer" }], status: "not completed", hours: 12 },
          { taskName: "Deployment & Monitoring", members: [{ name: "Frank", role: "DevOps Engineer" }], status: "not completed", hours: 8 }
        ]
      },
      {
        projectName: "CRM System Implementation",
        id: 5,
        description: "Implementing a Customer Relationship Management (CRM) system to streamline sales processes, improve customer interactions, and boost customer retention.",
        teamLeader: { name: "Grace", role: "CRM Specialist" },
        tasks: [
          { taskName: "System Requirement Gathering", members: [{ name: "Judy", role: "Business Analyst" }], status: "completed", hours: 14 },
          { taskName: "CRM Vendor Selection", members: [{ name: "Grace", role: "CRM Specialist" }], status: "completed", hours: 10 },
          { taskName: "Data Migration", members: [{ name: "Ivan", role: "Data Engineer" }, { name: "Heidi", role: "Database Administrator" }], status: "not completed", hours: 20 },
          { taskName: "System Configuration", members: [{ name: "Frank", role: "System Administrator" }, { name: "Alice", role: "CRM Specialist" }], status: "not completed", hours: 18 },
          { taskName: "User Training", members: [{ name: "Bob", role: "Training Coordinator" }], status: "completed", hours: 12 },
          { taskName: "User Acceptance Testing", members: [{ name: "Eve", role: "QA Engineer" }], status: "not completed", hours: 10 },
          { taskName: "Go-Live Preparation", members: [{ name: "Charlie", role: "Project Coordinator" }, { name: "Dave", role: "Technical Support" }], status: "not completed", hours: 8 },
          { taskName: "Post-Implementation Support", members: [{ name: "Grace", role: "CRM Specialist" }], status: "not completed", hours: 6 }
        ]
      },
      {
        projectName: "Cloud Migration",
        id: 6,
        description: "Migrating the company's IT infrastructure and applications to the cloud to reduce costs, improve scalability, and enhance disaster recovery capabilities.",
        teamLeader: { name: "Charlie", role: "Cloud Architect" },
        tasks: [
          { taskName: "Assessment & Planning", members: [{ name: "Judy", role: "Cloud Consultant" }], status: "completed", hours: 20 },
          { taskName: "Application Refactoring", members: [{ name: "Heidi", role: "Application Developer" }, { name: "Ivan", role: "Cloud Engineer" }], status: "not completed", hours: 30 },
          { taskName: "Data Migration", members: [{ name: "Frank", role: "Data Engineer" }], status: "not completed", hours: 25 },
          { taskName: "Infrastructure Setup", members: [{ name: "Charlie", role: "Cloud Architect" }], status: "not completed", hours: 22 },
          { taskName: "Security & Compliance", members: [{ name: "Eve", role: "Security Specialist" }], status: "completed", hours: 15 },
          { taskName: "Performance Testing", members: [{ name: "Alice", role: "QA Engineer" }], status: "not completed", hours: 12 },
          { taskName: "Cutover & Go-Live", members: [{ name: "Bob", role: "Technical Lead" }], status: "not completed", hours: 10 },
          { taskName: "Post-Migration Support", members: [{ name: "Grace", role: "Support Engineer" }, { name: "Dave", role: "Cloud Support" }], status: "not completed", hours: 8 }
        ]
      },
      {
        projectName: "Cybersecurity Upgrade",
        id: 7,
        description: "Enhancing the company's cybersecurity framework to prevent potential threats and ensure compliance with regulations.",
        teamLeader: { name: "Oliver", role: "Security Lead" },
        tasks: [
          { taskName: "Risk Assessment", members: [{ name: "William", role: "Security Analyst" }], status: "completed", hours: 15 },
          { taskName: "Firewall Setup", members: [{ name: "Sophia", role: "Network Engineer" }], status: "not completed", hours: 22 },
          { taskName: "Penetration Testing", members: [{ name: "Amelia", role: "Pen Tester" }], status: "not completed", hours: 18 },
          { taskName: "Compliance Audit", members: [{ name: "Benjamin", role: "Compliance Specialist" }], status: "not completed", hours: 12 }
        ]
      },
      {
        projectName: "Data Warehouse Implementation",
        id: 8,
        description: "Building a data warehouse for improved data analytics and reporting across the company.",
        teamLeader: { name: "David", role: "Data Architect" },
        tasks: [
          { taskName: "Data Modeling", members: [{ name: "Ethan", role: "Data Modeler" }], status: "completed", hours: 25 },
          { taskName: "ETL Development", members: [{ name: "Henry", role: "ETL Developer" }], status: "not completed", hours: 40 },
          { taskName: "Data Integration", members: [{ name: "Chloe", role: "Data Engineer" }], status: "not completed", hours: 35 },
          { taskName: "Report Creation", members: [{ name: "Zoe", role: "BI Analyst" }], status: "not completed", hours: 20 }
        ]
      }
      
  ];
  