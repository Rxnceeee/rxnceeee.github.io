export const skills = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'VB.NET', 'Java', 'HTML', 'CSS'] },
  { title: 'Frameworks & libraries', items: ['FastAPI', 'Node.js', 'Express.js', 'Vue 3', 'Next.js', 'React', 'Redux Toolkit', 'shadcn/ui', 'Tailwind CSS'] },
  { title: 'Databases & data access', items: ['MySQL (XAMPP)', 'MS SQL Server (SSMS)', 'SQLAlchemy'] },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'SSMS', 'Railway', 'InfinityFree'] },
  { title: 'Authentication & reporting', items: ['REST API Design', 'Microsoft Entra ID / MSAL', 'JWT Authentication', 'Crystal Reports', 'openpyxl', 'python-docx'] },
  { title: 'Core competencies', items: ['System Design', 'API Development', 'Business Logic', 'Debugging & Testing', 'Database Management', 'Agile/Scrum', 'OOP'] },
]
export const softSkills = ['Problem Solving', 'Logical & Critical Thinking', 'Teamwork & Collaboration', 'Communication', 'Time Management']
export const experience = [
  'Developed and maintained full-stack business systems using FastAPI, Vue 3, Docker, and .NET 4.8, including an internal cheque-printing system, from backend API design through frontend UI implementation.',
  'Developed a Cheque Printing System with Microsoft Entra ID SSO (MSAL), bcrypt-based local authentication, and JWT sessions; integrated a .NET/ESC-P print agent for dot-matrix cheque printing and deployed it on a local server over LAN.',
  'Extended an enterprise IT Asset Management System with bulk import and batch views using FastAPI, Next.js, and SQLAlchemy.',
  'Continued contributing as a volunteer IT team member after completing required OJT hours, sustaining ongoing development work.',
  'Participated in manual testing of a new version of internal systems.',
]
export const projects = [
  { title: 'FMC Cheque Printing System', category: 'Internship · Internal business system', description: 'Secure cheque printing with Microsoft Entra ID SSO, bcrypt local authentication, and JWT sessions. A .NET/ESC-P print agent supports dot-matrix printing, with deployment on a local server over LAN.', tech: ['FastAPI', 'Vue 3', 'Docker', '.NET 4.8', 'MSAL'], internal: true },
  { title: 'IT Asset Management System', category: 'Internship · Feature development', description: 'Extended an enterprise IT asset management system with bulk import and batch views to support day-to-day asset workflows.', tech: ['FastAPI', 'Next.js', 'SQLAlchemy'], internal: true },
  { title: 'Appointment & Document Status Tracking System', category: '3rd year · Web application', description: 'Client-admin portal for appointments and document status, with automated Gmail notifications, cron jobs, authentication, and role-based access. Deployed on Railway.', tech: ['Vanilla JS', 'Node.js', 'Express', 'MySQL', 'Gmail API', 'Railway'], href: 'https://randcdocumentations.up.railway.app' },
  { title: 'Dental Clinic Management System', category: '3rd year · Desktop application', description: 'Full-featured desktop application covering patient records, billing, pharmacy sales, inventory, and QR/barcode scanning.', tech: ['VB.NET', 'SSMS', 'GUNA UI'] },
  { title: 'Client Orders & Inquiry System', category: '2nd–3rd year · Academic project', description: 'Web platform for managing client orders and inquiries with automated email notifications.', tech: ['Vanilla JS', 'PHP', 'MySQL', 'Gmail API'] },
  { title: 'Web-Based Library Management System', category: '2nd–3rd year · Academic project', description: 'Browser-based book cataloging and borrower/return management, backed by a REST API.', tech: ['Vanilla JS', 'Node.js', 'Express', 'MySQL'] },
]
