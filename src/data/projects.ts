export interface Project {
  slug: string;
  title: string;
  period: string;
  raised: number;
  goal: number;
  donors: number;
  image: string;
  description: string;
}

export const allProjects: Project[] = [
  {
    slug: "digital-tech-to-advance-learning",
    title: "Digital Tech To Advance Learning",
    period: "April – May 2026",
    raised: 2500,
    goal: 50000,
    donors: 26,
    image: "https://www.ricekids.org/wp-content/uploads/2026/03/PXL_20260301_190855566-1-scaled.jpg",
    description:
      "Modern learning depends on modern tools, yet many kids in marginalized schools still lack the basics their peers use daily. This drive puts calculators, Chromebooks, and iPads directly into the hands of students who need them.",
  },
  {
    slug: "driving-equity-through-financial-literacy",
    title: "Driving Equity through Financial Literacy",
    period: "March – April 2026",
    raised: 4250,
    goal: 7500,
    donors: 18,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Rice-Kids-Why-Education-1-1-scaled.jpg",
    description:
      "Financial literacy is rarely taught in school, yet it shapes a child's entire future. We bring in financial experts to walk students through income, assets, liabilities, and investing — early exposure that helps them make confident decisions on the path to financial independence.",
  },
  {
    slug: "new-years-school-supply-drive",
    title: "New Year's School Supply Drive",
    period: "Jan – Feb 2026",
    raised: 6250,
    goal: 6000,
    donors: 99,
    image:
      "https://www.ricekids.org/wp-content/uploads/2026/01/School-Supply-Drive-SAGE-Rice-Kids-Anakh-Sawhney.png",
    description:
      "With budgets cut at the start of the new marking period, teachers were paying for classroom supplies out of pocket. This drive delivered the notebooks, pencils, and learning tools they needed so they could focus on teaching, not funding.",
  },
  {
    slug: "winter-coat-drive-for-newark-and-plainfield-schools",
    title: "Winter Coat Drive For Newark and Plainfield Schools",
    period: "Nov – Dec 2025",
    raised: 13500,
    goal: 15000,
    donors: 302,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Winter-Coat-Drive.jpg",
    description:
      "Many K-8 students in nearby school districts head into winter without a warm coat. Thanks to volunteers, teachers, and donors, this drive collected coats and jackets to keep these kids protected through the cold months.",
  },
  {
    slug: "educational-resources-for-nj-kids",
    title: "Educational Resources for NJ Kids",
    period: "Nov – Dec 2025",
    raised: 5000,
    goal: 5000,
    donors: 58,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/PXL_20230301_193531408-1.jpg",
    description:
      "Hundreds of kids in our community came together to support hundreds more in another NJ district who needed basic educational resources. Volunteers shopped, packed, and delivered supplies along with a holiday surprise that left every child smiling.",
  },
  {
    slug: "holistic-education-support-for-kids",
    title: "Holistic Education Support for Kids",
    period: "Oct – Dec 2025",
    raised: 48000,
    goal: 50000,
    donors: 8,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0006-scaled.jpg",
    description:
      "Lasting impact requires more than school supplies. This initiative wraps education with nutrition, health, and care — the holistic support kids need to stay focused on learning and build a real path out of poverty. This is only the beginning of an ambitious effort to reach thousands.",
  },
  {
    slug: "rice-kids-sunaayy",
    title: "Rice Kids + Sunaay",
    period: "Aug – Sep 2025",
    raised: 5050,
    goal: 5000,
    donors: 56,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0039-scaled.jpg",
    description:
      "A partnership with the Sunaayy Foundation, an organization helping children return to school through education and skill development. Together we extend learning opportunities to kids who had fallen out of the system.",
  },
  {
    slug: "education-supplies-for-kids",
    title: "Education supplies for kids",
    period: "May – Jul 2025",
    raised: 2000,
    goal: 2000,
    donors: 28,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9998-scaled.jpg",
    description:
      "Many children arriving at our centers lack even the most basic school supplies, which makes following lessons nearly impossible. This program puts essential tools directly in their hands so they can fully participate in learning.",
  },
  {
    slug: "supporting-kids-in-our-jharkhand-center",
    title: "Supporting Kids In Our Jharkhand Center",
    period: "Feb – Apr 2025",
    raised: 5050,
    goal: 5000,
    donors: 59,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Jharkhand-Center.jpg",
    description:
      "At our Jharkhand center, young learners are buried in their books and lifting each other up despite difficult circumstances. Moments like these are exactly why we keep going — every child deserves the resources and support to learn and grow.",
  },
  {
    slug: "ncr-street-education-program",
    title: "NCR Street Education Program",
    period: "Feb – Apr 2025",
    raised: 7650,
    goal: 7500,
    donors: 61,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9940-scaled.jpg",
    description:
      "We helped local partners recruit and train teachers for children who had dropped out of school. The goal: bring them up to speed and ready for re-admission so they aren't left behind.",
  },
  {
    slug: "nanaks-gift",
    title: "Nanak's Gift",
    period: "Nov 24 – Jan 25",
    raised: 8200,
    goal: 7500,
    donors: 156,
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/02/Rice-kids-nanaks-gift-20-30-poster-scaled.jpg",
    description:
      "Inspired by Guru Nanak's teaching of Vand Chakhna and selfless service, multiple teams of families, kids, and volunteers came together to prepare and serve hot meals at dozens of locations across the Northeast.",
  },
  {
    slug: "thanksgiving-winter-drive",
    title: "Thanksgiving Drive-Thru",
    period: "November 2024",
    raised: 6150,
    goal: 6000,
    donors: 89,
    image: "https://www.ricekids.org/wp-content/uploads/2025/02/IMG-20241124-WA0023.jpg",
    description:
      "A community-driven Thanksgiving event where families in need received complete holiday meal packages through a convenient drive-thru format.",
  },
  {
    slug: "sponsorship-program",
    title: "Sponsorship Program",
    period: "Oct – Dec 2024",
    raised: 2200,
    goal: 2000,
    donors: 21,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0057-n.jpg",
    description:
      "Our sponsorship program pairs donors directly with kids who need ongoing support — covering education, nutrition, and overall well-being month after month.",
  },
  {
    slug: "investing-in-physical-education",
    title: "Investing In Physical Education",
    period: "Oct – Nov 2024",
    raised: 3000,
    goal: 3000,
    donors: 38,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG-20221231-WA0155-1.jpg",
    description:
      "Physical activity is just as important as academics. This project equipped schools with sports gear, organized activities, and play space for kids who otherwise had none.",
  },
  {
    slug: "upper-east-side-event",
    title: "Upper East Side Event",
    period: "October 2024",
    raised: 1355,
    goal: 1500,
    donors: 39,
    image: "https://www.ricekids.org/wp-content/uploads/2025/02/PXL_20241123_144443989-scaled.jpg",
    description:
      "A community fundraiser hosted on Manhattan's Upper East Side, bringing supporters together to raise both awareness and funds for Rice Kids' education initiatives.",
  },
  {
    slug: "education-supplies-program",
    title: "Education Supplies Program",
    period: "Sep – Oct 2024",
    raised: 3000,
    goal: 3000,
    donors: 66,
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Teacher-Supplies-Program-1.jpg",
    description:
      "Providing teachers and students in underfunded schools with the classroom supplies they need to create a better learning environment.",
  },
  {
    slug: "establishing-a-new-center",
    title: "Establishing A New Center",
    period: "Aug – Sep 2024",
    raised: 6500,
    goal: 7000,
    donors: 80,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0001.jpg",
    description:
      "The focus and hard work on display at our centers is what keeps us launching new ones. With the support of local community members, donors, and volunteers, we opened another center for kids who needed it.",
  },
  {
    slug: "setting-up-the-bengal-center",
    title: "Setting Up The Bengal Center",
    period: "Jun – Aug 2024",
    raised: 4500,
    goal: 4500,
    donors: 49,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Bengal-School.jpg",
    description:
      "Working alongside local partners and community leaders, we set up a new center in Bengal. Recent visits confirmed the impact — bright, engaged kids connecting with their books and lighting up the room.",
  },
  {
    slug: "delivering-packages-of-hope",
    title: "Delivering Packages of Hope",
    period: "Jul – Aug 2024",
    raised: 2800,
    goal: 3000,
    donors: 64,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_165642509-scaled.jpg",
    description:
      "When everything else gets delivered to the door, why shouldn't help? Volunteers ran this drive to bring supplies straight to Central Jersey residents facing tough circumstances.",
  },
  {
    slug: "kasa-south-amboy-partnership",
    title: "KASA & South Amboy Partnership",
    period: "April – May 2024",
    raised: 6900,
    goal: 7500,
    donors: 148,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_135504026-scaled.jpg",
    description:
      "Rice Kids joined forces with Kaur and Singh Academy and South Amboy Kitchen for a hugely successful drive. Like-minded families and volunteers prepared and served hot meals at more than a dozen locations across the Northeast.",
  },
  {
    slug: "hunger-heroes",
    title: "Hunger Heroes",
    period: "Jan – March 2024",
    raised: 5000,
    goal: 5000,
    donors: 114,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/Hunger-Heroes-Program-1-1.png",
    description:
      "A program that rallied over a hundred donors and a team of volunteer heroes to feed marginalized individuals and families across our neighborhoods and beyond.",
  },
  {
    slug: "help-at-the-doorstep",
    title: "Help At The Doorstep",
    period: "Oct – Nov 2023",
    raised: 2000,
    goal: 2000,
    donors: 46,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_162630587-scaled.jpg",
    description:
      "We partnered with local NJ businesses to reach hundreds of families across New Jersey, delivering hot, nutritious meals right to their doorsteps.",
  },
  {
    slug: "sandwiches-with-a-smile",
    title: "Sandwiches with a smile!",
    period: "September 2023",
    raised: 2000,
    goal: 2000,
    donors: 49,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_4256-1.jpg",
    description:
      "Kids have endless energy — and channeling it into service produces something special. Volunteers came together to prepare and distribute hundreds of sandwiches to neighbors in need.",
  },
  {
    slug: "balanced-meals-for-the-local-community",
    title: "Balanced Meals for The Local Community",
    period: "August 2023",
    raised: 1300,
    goal: 1500,
    donors: 37,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230304_150423735.jpg",
    description:
      "Preparing and distributing nutritionally balanced meals to local families navigating food insecurity.",
  },
  {
    slug: "holistic-education-support",
    title: "Holistic Education Support",
    period: "Jul – Aug 2023",
    raised: 1600,
    goal: 1500,
    donors: 19,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Visiting-Rural-Center.jpg",
    description:
      "Supporting children's full development through a combination of academic tutoring, nutritional support, and creative arts programming in one integrated effort.",
  },
  {
    slug: "north-jersey-hot-meals-cook-off-and-service",
    title: "North Jersey Hot Meals Cook-off and Service",
    period: "July 2023",
    raised: 1200,
    goal: 1200,
    donors: 31,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230213_000910226.jpg",
    description:
      "A volunteer-led cook-off in North Jersey that turned into hot meals for community members in need.",
  },
  {
    slug: "partnering-with-nourish-nj",
    title: "Partnering with Nourish NJ",
    period: "May – June 2023",
    raised: 900,
    goal: 1000,
    donors: 28,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230127_141545939.jpg",
    description:
      "Teaming up with Nourish NJ to prepare and serve meals to neighbors facing hunger in the Morristown area.",
  },
  {
    slug: "new-york-city-homeless-drive",
    title: "New York City Homeless Drive",
    period: "April 2023",
    raised: 3000,
    goal: 3000,
    donors: 69,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230304_164543878.jpg",
    description:
      "A citywide effort across New York collecting and distributing warm clothing, hygiene kits, and food to homeless individuals and families.",
  },
  {
    slug: "bags-of-hope",
    title: "Bags of Hope",
    period: "March 2023",
    raised: 5000,
    goal: 5000,
    donors: 102,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_2207.jpg",
    description:
      "Bags packed with school supplies, snacks, and personal-care items, distributed to children to help them show up ready and confident at school.",
  },
  {
    slug: "rural-center-project",
    title: "Rural Center Project",
    period: "Jan – May 2023",
    raised: 3600,
    goal: 4000,
    donors: 39,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Empowering-Women-1-1.jpg",
    description:
      "Establishing and supporting rural education centers in India to bring quality learning and empowerment programs to children in remote villages.",
  },
  {
    slug: "feed-5k-program",
    title: "Feed 5K Program",
    period: "Nov 22 – Feb 23",
    raised: 15000,
    goal: 15000,
    donors: 376,
    image:
      "https://www.ricekids.org/wp-content/uploads/2022/12/Gray-Minimalist-Elegant-Fundraising-Disability-GoFundMe-Story-Image-2.png",
    description:
      "An ambitious initiative to feed 5,000 people in need. Through generous community support and a dedicated volunteer base, the program delivered nutritious meals at scale.",
  },
  {
    slug: "feeding-the-homeless-in-the-upper-west-side",
    title: "Feeding The Homeless In The Upper West Side",
    period: "Nov 2022",
    raised: 1500,
    goal: 1500,
    donors: 63,
    image: "https://www.ricekids.org/wp-content/uploads/2022/12/IMG_2015.jpg",
    description:
      "Volunteers prepared and served warm meals to homeless individuals in Manhattan's Upper West Side.",
  },
  {
    slug: "fresh-produce-and-pantry-supplies",
    title: "Fresh Produce And Pantry Supplies",
    period: "Sep – Oct 2022",
    raised: 2000,
    goal: 2000,
    donors: 81,
    image: "https://www.ricekids.org/wp-content/uploads/2022/12/IMG_1931-543x407.jpg",
    description:
      "Stocking local pantries with fresh produce and staples to support families facing food insecurity.",
  },
  {
    slug: "advent-community",
    title: "Advent Community",
    period: "July – Aug 2022",
    raised: 980,
    goal: 1200,
    donors: 39,
    image: "https://www.ricekids.org/wp-content/uploads/2022/12/IMG_1937.jpg",
    description:
      "Partnering with the Advent community to provide meals and essentials to neighbors in need.",
  },
  {
    slug: "morristown-food-drive",
    title: "Morristown food drive",
    period: "May – June 2022",
    raised: 1500,
    goal: 1500,
    donors: 72,
    image: "https://www.ricekids.org/wp-content/uploads/2024/11/IMG_9700.jpg",
    description:
      "A local food drive in Morristown collecting and distributing essentials to families in need.",
  },
  {
    slug: "local-food-shelter",
    title: "Local food shelter",
    period: "February – April 2022",
    raised: 1000,
    goal: 1000,
    donors: 56,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_9711-543x407.jpg",
    description:
      "Supporting a local food shelter with meals, supplies, and volunteer service for community members in need.",
  },
  {
    slug: "holiday-meal-program",
    title: "Holiday meal program",
    period: "November – December 2021",
    raised: 5150,
    goal: 5000,
    donors: 322,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_9688.jpg",
    description:
      "Delivering complete holiday meals to families so no household goes without a warm meal during the season.",
  },
  {
    slug: "serving-families-dealing-with-unforeseen-crisis",
    title: "Serving families dealing with unforeseen crisis",
    period: "September – October 2021",
    raised: 2000,
    goal: 2000,
    donors: 82,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_9710.jpg",
    description:
      "Providing emergency food and essentials to families navigating sudden hardships and unforeseen crises.",
  },
  {
    slug: "india-covid-relief-program",
    title: "India Covid Relief Program",
    period: "April – July 2021",
    raised: 18750,
    goal: 15000,
    donors: 822,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/Project-6-3-543x407.jpg",
    description:
      "Mobilized during India's devastating COVID-19 wave to deliver oxygen concentrators, medical supplies, food packages, and financial aid to affected families.",
  },
  {
    slug: "food-bank-drive",
    title: "Food bank drive",
    period: "January – March 2021",
    raised: 2800,
    goal: 3000,
    donors: 140,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_0744-543x407.jpg",
    description:
      "Restocking local food banks with staples and fresh items to support neighbors facing hunger.",
  },
  {
    slug: "new-york-feeding-the-homeless",
    title: "New York – Feeding the homeless",
    period: "November – December 2020",
    raised: 2400,
    goal: 2400,
    donors: 124,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_9685-543x407.jpg",
    description:
      "Distributing hot meals and essentials to homeless community members across New York City during the winter season.",
  },
  {
    slug: "ncr-india-covid-food-service-2",
    title: "NCR – India – Covid Food Service",
    period: "July – September 2020",
    raised: 4450,
    goal: 4500,
    donors: 379,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/Project-3-1-543x407.jpg",
    description:
      "Continuing food relief in India's National Capital Region for daily-wage workers and families impacted by COVID-19 lockdowns.",
  },
  {
    slug: "nj-food-service",
    title: "NJ Food Service",
    period: "June – July 2020",
    raised: 3300,
    goal: 3000,
    donors: 264,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/IMG_0774.jpg",
    description:
      "Preparing and distributing meals to New Jersey families hit hardest by the pandemic's economic impact.",
  },
  {
    slug: "ncr-india-covid-food-service",
    title: "NCR – India – Covid Food Service",
    period: "March – May 2020",
    raised: 6800,
    goal: 10000,
    donors: 450,
    image: "https://www.ricekids.org/wp-content/uploads/2022/07/Project-1-2--543x407.jpg",
    description:
      "Emergency food packets distributed across India's NCR to migrant workers and families stranded by the first COVID-19 lockdown.",
  },
  {
    slug: "anakh-11th-birthday-fundraiser",
    title: "Anakh's 11th Birthday Fundraiser",
    period: "Feb – April 2020",
    raised: 1290,
    goal: 1000,
    donors: 30,
    image:
      "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Anakh-11th-Birthday-Featured.jpg",
    description:
      "Founder Anakh dedicated his 11th birthday to raising funds for children in need — a celebration turned into service.",
  },
  {
    slug: "akhil-bhartiya-netrahin-sangh",
    title: "Akhil Bhartiya Netrahin Sangh",
    period: "April 13, 2019",
    raised: 2000,
    goal: 2000,
    donors: 28,
    image:
      "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Serving-Blind-India-Featured.jpg",
    description:
      "Serving meals and providing support at Akhil Bhartiya Netrahin Sangh, a community caring for visually impaired individuals in India.",
  },
  {
    slug: "agape-house-families-somerville",
    title: "Meeting Agape House Families",
    period: "Jan 19, 2019",
    raised: 720,
    goal: 500,
    donors: 32,
    image:
      "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Agape-house-somerville-featured.jpg",
    description:
      "Spending time with families at Agape House in Somerville — sharing meals, stories, and support.",
  },
  {
    slug: "serving-homeless-new-york",
    title: "Serving The Homeless In New York",
    period: "Oct 28, 2018",
    raised: 1225,
    goal: 1000,
    donors: 43,
    image:
      "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Serving-Homeless-NY-Featured-Image.jpg",
    description:
      "One of Rice Kids' earliest projects — volunteers served hot meals and distributed warm clothing to homeless individuals across New York City.",
  },
];
