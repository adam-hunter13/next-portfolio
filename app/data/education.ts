type EducationItem = {
  institution: string
  degree: string
  date: string
  honors?: string
}

const education: EducationItem[] = [
  {
    institution: 'Utah Valley University',
    degree: 'Bachelor of Science — Criminal Justice',
    date: 'August 2015 – May 2022',
    honors: 'Cum Laude',
  },
  {
    institution: 'Dev Mountain',
    degree: 'Web Development Certificate',
    date: 'September 2021 – January 2022',
  },
]

export default education;
