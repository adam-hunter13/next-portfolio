type ExperienceItem = {
  role: string
  company: string
  date: string
  description: string[]
  tools: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'Web Manager',
    company: 'Amare Global',
    date: 'May 2025 – Present',
    description: [
      "Developed, maintained, and optimized front-end content using modern CMS platforms like ContentStack.",
      "Applied SEO best practices to improve organic search performance and user engagement.",
      "Partnered with cross-functional teams (creative, IT, marketing) to implement technical updates and ensure brand consistency.",
      "Enhanced user experience through iterative content revisions.",
    ],
    tools: [
      "ContentStack",
      "Exigo",
      "Azure Storage",
      "Canva",
      "HTML",
      "CSS",
      "WIX",
      "Asana",
      "Excel",
    ]
  },
  {
    role: 'Web Content Manager',
    company: 'Modere',
    date: 'July 2022 – April 2025',
    description: [
      "Developed, maintained, and optimized front-end content using modern CMS platforms like ContentStack and PimCore.",
      "Applied SEO best practices to improve organic search performance and user engagement.",
      "Partnered with cross-functional teams (creative, IT, marketing) to implement technical updates and ensure brand consistency.",
      "Enhanced user experience through iterative content revisions.",
    ],
    tools: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Video.js",
      "HTML",
      "CSS",
      "ContentStack",
      "WordPress",
      "PimCore",
      "BigCommerce",
      "Exigo",
      "Cloudinary",
      "Canva",
      "SmartSheet",
      "Excel",
    ]
  },
  {
    role: 'Call Floor Manager',
    company: 'Engagex',
    date: 'December 2017 – September 2021',
    description: [
      "Led team performance tracking and agile-style communication.",
      "Used internal CRM data to improve KPI tracking and workflow efficiency.",
      "Reported software issues via Jira and collaborated with developers to resolve bugs.",
      "Contributed to technical hiring processes by screening candidates for both cultural and technical fit.",
    ],
    tools: [
      "Jira",
      "Excel",
    ]
  },
  {
    role: 'Billing and Collections Agent',
    company: 'Vivint',
    date: 'May 2017 – December 2017',
    description: [
      "Managed high-volume client communications.",
      "Negotiated payment plans and resolved discrepancies.",
    ],
    tools: [
      "Salesforce",
      "Excel",
    ]
  },
  {
    role: 'Warehouse Worker',
    company: 'ACH Fulfillment',
    date: 'April 2015 – May 2017',
    description: [
      "Accurately picked, packed, and shipped customer orders, ensuring timely delivery and compliance with quality standards.",
      "Coordinated inventory and logistics for large-scale global events, including preparation of bulk orders and specialized packaging.",
      "Conducted inventory audits and restocked shelves to maintain order accuracy and warehouse organization.",
    ],
    tools: [
      "Excel",
    ]
  },
]

export default experiences
