export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  imageId: string;
  author: string;
  date: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-recruitment',
    title: 'The Future of Recruitment: AI and Automation',
    description: 'Explore how artificial intelligence and automation are reshaping the landscape of talent acquisition and what it means for your business.',
    imageId: 'blog-post-1',
    author: 'Alex Johnson',
    date: '2024-07-28',
    content: `
      <p>The world of recruitment is undergoing a seismic shift. Driven by advancements in artificial intelligence and automation, the traditional methods of sourcing, screening, and hiring candidates are rapidly becoming obsolete. In this post, we'll delve into the key trends and technologies that are defining the future of recruitment.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">AI-Powered Sourcing</h3>
      <p>AI algorithms can now scan millions of profiles across various platforms to identify the most suitable candidates for a given role. This not only speeds up the process but also uncovers talent that might have been missed by human recruiters.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">Automated Screening</h3>
      <p>Say goodbye to manually reviewing hundreds of resumes. Automated systems can now screen resumes, cover letters, and even initial video interviews to shortlist the most promising candidates based on predefined criteria.</p>
      <p class="mt-4">By embracing these technologies, companies can gain a significant competitive advantage in the war for talent. The future is here, and it's intelligent.</p>
    `
  },
  {
    slug: 'building-a-strong-company-culture',
    title: 'Building a Strong Company Culture That Attracts Top Talent',
    description: 'Your company culture is one of your most powerful recruitment tools. Learn how to cultivate a culture that resonates with top professionals.',
    imageId: 'blog-post-2',
    author: 'Samantha Lee',
    date: '2024-07-20',
    content: `
      <p>In today's competitive job market, a high salary is no longer enough to attract and retain top talent. Professionals are looking for a workplace where they feel valued, engaged, and aligned with the company's mission. This is where a strong company culture comes into play.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">Define Your Values</h3>
      <p>What does your company stand for? Your core values are the foundation of your culture. They should be more than just words on a wall; they should guide every decision and action within the organization.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">Promote Transparency</h3>
      <p>Open and honest communication builds trust. Keep your team informed about the company's performance, challenges, and successes. When employees feel they are in the loop, they are more likely to be engaged and committed.</p>
      <p class="mt-4">A positive culture doesn't just happen; it's built intentionally. By investing in your culture, you're investing in your people and the long-term success of your business.</p>
    `
  },
  {
    slug: 'the-art-of-executive-search',
    title: 'The Art of Executive Search: Finding Your Next Leader',
    description: "Hiring for leadership positions requires a unique approach. Discover the key strategies for a successful executive search.",
    imageId: 'blog-post-3',
    author: 'Michael Chen',
    date: '2024-07-15',
    content: `
      <p>Finding the right leader can transform an organization. However, executive search is a complex and delicate process that requires a strategic approach. It's not just about finding someone with the right skills and experience; it's about finding a leader who aligns with your company's vision and culture.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">Discretion is Key</h3>
      <p>Executive searches are often confidential. It's crucial to work with a partner who understands the importance of discretion and can navigate the search process without disrupting your organization or alerting competitors.</p>
      <h3 class="font-bold text-xl mt-4 mb-2">Look Beyond the Resume</h3>
      <p>While a candidate's track record is important, it's equally important to assess their leadership style, emotional intelligence, and cultural fit. The most successful leaders are those who can inspire and motivate their teams.</p>
      <p class="mt-4">Partnering with an experienced executive search firm can make all the difference. They have the network, expertise, and resources to identify and attract the high-impact leaders who will drive your company forward.</p>
    `
  },
];
