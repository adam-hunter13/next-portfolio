type RecommendationItem = {
    id: number
    recommendationPartOne: string
    recommendationPartTwo?: string
    recommendationPartThree?: string
    author: string
    authorTitle: string
    company: string
    relationship: string
}

export const recommendations: RecommendationItem[] = [
    {
        id: 1,
        recommendationPartOne: "I had the privilege of working with Adam Hunter, and I can confidently say he is one of the most dedicated and reliable team members I’ve ever worked with. Adam consistently approaches his work with a positive attitude and a genuine eagerness to support others. Whether it’s stepping up to help a teammate, jumping into a new project, or taking the time to understand complex user needs, Adam is always there - thoughtful, engaged, and solution-focused.",
        recommendationPartTwo: "Adam has a natural curiosity that drives him to constantly expand his technical skills. He’s not afraid to dive into new tools or frameworks, and he does so with both precision and purpose. His technical growth is matched by his deep empathy for users - he’s always advocating for what’s best for them and goes the extra mile to create intuitive, accessible experiences.",
        recommendationPartThree: "In addition to his sharp technical skills, Adam brings a strong sense of ownership and follow-through to everything he does. You can always count on him to deliver high-quality work, and to do so in a collaborative, humble, and proactive way. Any company would be lucky to have him on board.",
        author: "Crystal Meyer",
        authorTitle: "Manager of Front End Development",
        company: "Modere",
        relationship: "Co-worker",
    },
    {
        id: 2,
        recommendationPartOne: "I had the pleasure of managing Adam during his time at Modere, where he consistently impressed with his front-end development skills and hunger to learn more. With a strong command of HTML and CSS, Adam brought precision and consistency to every UI he touched.",
        recommendationPartTwo: "One of his standout contributions was building a documentation site for our design system — inspired by Atlassian.design — using React and Next.js. As he learned the framework, he quickly picked up advanced concepts like state management and component organization, applying them thoughtfully to create a polished, scalable internal tool.",
        recommendationPartThree: "Adam’s ability to take initiative, dive into new technologies, and deliver high-quality work made him an invaluable part of the team. His attention to detail and eagerness to grow would be an asset to any development team.",
        author: "Brad Bartell",
        authorTitle: "Director of Digital Marketing & Customer Experience",
        company: "Modere",
        relationship: "Supervisor",
    },
    {
        id: 3,
        recommendationPartOne: "Adam was the most incredible employee and coworker. Always a team player, willing to do whatever was asked of him and help out other coworkers any way possible. Eager to learn and always willing to teach. He was great at helping us find ways to improve processes and implement them. Amazing communicator! He’s very smart and thorough with amazing skills, and a quick learner. Always reliable, went over and beyond and did impeccable work, always. It was a true honor to manage and work with Adam! He’ll be a true asset to any company who is lucky enough to hire him! ",
        author: "Jenya Garfield",
        authorTitle: "Sr. Project Manager",
        company: "Modere",
        relationship: "Supervisor",
    },
]