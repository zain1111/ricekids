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
    donors: 18,
    image: "https://www.ricekids.org/wp-content/uploads/2026/03/PXL_20260301_190855566-1-scaled.jpg",
    description:
      "Equipping underserved classrooms with laptops, tablets, and digital learning tools so every child can access modern, technology-enabled education.",
  },
  {
    slug: "driving-equity-through-financial-literacy",
    title: "Driving Equity through Financial Literacy",
    period: "March – April 2026",
    raised: 4250,
    goal: 7500,
    donors: 34,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Rice-Kids-Why-Education-1-1-scaled.jpg",
    description:
      "Bringing essential financial literacy — budgeting, saving, and money management — to underserved youth so they can build long-term economic independence.",
  },
  {
    slug: "new-years-school-supply-drive",
    title: "New Year's School Supply Drive",
    period: "Jan – Feb 2026",
    raised: 6250,
    goal: 6000,
    donors: 52,
    image:
      "https://www.ricekids.org/wp-content/uploads/2026/01/School-Supply-Drive-SAGE-Rice-Kids-Anakh-Sawhney.png",
    description:
      "Collecting notebooks, pencils, backpacks, and other essential supplies so students in underserved New Jersey schools can start the new year ready to learn.",
  },
  {
    slug: "winter-coat-drive-for-newark-and-plainfield-schools",
    title: "Winter Coat Drive For Newark and Plainfield Schools",
    period: "Nov – Dec 2025",
    raised: 13500,
    goal: 15000,
    donors: 110,
    image: "https://www.ricekids.org/wp-content/uploads/2026/01/Winter-Coat-Drive.jpg",
    description:
      "Providing warm coats, gloves, and hats to students in Newark and Plainfield so no child has to face winter without proper protection.",
  },
  {
    slug: "educational-resources-for-nj-kids",
    title: "Educational Resources for NJ Kids",
    period: "Nov – Dec 2025",
    raised: 5000,
    goal: 5000,
    donors: 42,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/PXL_20230301_193531408-1.jpg",
    description:
      "Supplying books, learning kits, and classroom materials to New Jersey schools that lack adequate funding for basic educational resources.",
  },
  {
    slug: "holistic-education-support-for-kids",
    title: "Holistic Education Support for Kids",
    period: "Oct – Dec 2025",
    raised: 48000,
    goal: 50000,
    donors: 310,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0006-scaled.jpg",
    description:
      "Combining tutoring, mentorship, nutritious meals, and emotional wellness programs to support every dimension of a child's development.",
  },
  {
    slug: "rice-kids-sunaayy",
    title: "Rice Kids + Sunaay",
    period: "Aug – Sep 2025",
    raised: 5050,
    goal: 5000,
    donors: 45,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_0039-scaled.jpg",
    description:
      "A joint initiative with Sunaay delivering educational support and creative arts programming to underserved children.",
  },
  {
    slug: "education-supplies-for-kids",
    title: "Education supplies for kids",
    period: "May – Jul 2025",
    raised: 2000,
    goal: 2000,
    donors: 20,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9998-scaled.jpg",
    description:
      "Providing textbooks, stationery, and learning materials to children who lack access to basic educational tools.",
  },
  {
    slug: "supporting-kids-in-our-jharkhand-center",
    title: "Supporting Kids In Our Jharkhand Center",
    period: "Feb – Apr 2025",
    raised: 5050,
    goal: 5000,
    donors: 48,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Jharkhand-Center.jpg",
    description:
      "Funding educational programs, nutrition, and infrastructure for the most marginalized rural children at our Jharkhand center.",
  },
  {
    slug: "ncr-street-education-program",
    title: "NCR Street Education Program",
    period: "Feb – Apr 2025",
    raised: 7650,
    goal: 7500,
    donors: 62,
    image: "https://www.ricekids.org/wp-content/uploads/2025/09/IMG_9940-scaled.jpg",
    description:
      "Bringing literacy, basic math, and life-skills classes directly to children living and working on the streets of India's National Capital Region.",
  },
  {
    slug: "nanaks-gift",
    title: "Nanak's Gift",
    period: "Nov 24 – Jan 25",
    raised: 8200,
    goal: 7500,
    donors: 70,
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/02/Rice-kids-nanaks-gift-20-30-poster-scaled.jpg",
    description:
      "Inspired by the spirit of giving, this drive delivered warm meals, clothing, and learning materials to hundreds of children during the holiday season.",
  },
  {
    slug: "thanksgiving-winter-drive",
    title: "Thanksgiving Drive-Thru",
    period: "November 2024",
    raised: 2600,
    goal: 3000,
    donors: 25,
    image: "https://www.ricekids.org/wp-content/uploads/2025/02/IMG-20241124-WA0023.jpg",
    description:
      "A community drive-thru distributing complete Thanksgiving meal packages to families in need.",
  },
  {
    slug: "sponsorship-program",
    title: "Sponsorship Program",
    period: "Oct – Dec 2024",
    raised: 2200,
    goal: 2000,
    donors: 18,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0057-n.jpg",
    description:
      "Connecting donors directly with children for ongoing support across education, nutrition, and well-being.",
  },
  {
    slug: "investing-in-physical-education",
    title: "Investing In Physical Education",
    period: "Oct – Nov 2024",
    raised: 3000,
    goal: 3000,
    donors: 30,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG-20221231-WA0155-1.jpg",
    description:
      "Equipping schools with sports gear, organized activities, and play areas so children can develop physically alongside academically.",
  },
  {
    slug: "upper-east-side-event",
    title: "Upper East Side Event",
    period: "October 2024",
    raised: 1355,
    goal: 1500,
    donors: 15,
    image: "https://www.ricekids.org/wp-content/uploads/2025/02/PXL_20241123_144443989-scaled.jpg",
    description:
      "A community fundraising gathering on Manhattan's Upper East Side to raise awareness and funds for Rice Kids' education initiatives.",
  },
  {
    slug: "education-supplies-program",
    title: "Education Supplies Program",
    period: "Sep – Oct 2024",
    raised: 3000,
    goal: 3000,
    donors: 28,
    image:
      "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Teacher-Supplies-Program-1.jpg",
    description:
      "Providing teachers and students at underfunded schools with the classroom supplies needed for a better learning environment.",
  },
  {
    slug: "establishing-a-new-center",
    title: "Establishing A New Center",
    period: "Aug – Sep 2024",
    raised: 6500,
    goal: 7000,
    donors: 55,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/IMG_0001.jpg",
    description:
      "Expanding our reach by opening a new education center to serve more children in underserved communities.",
  },
  {
    slug: "setting-up-the-bengal-center",
    title: "Setting Up The Bengal Center",
    period: "Jun – Aug 2024",
    raised: 4500,
    goal: 4500,
    donors: 40,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Bengal-School.jpg",
    description:
      "Setting up a dedicated education center in Bengal to give local children quality learning, materials, and mentorship.",
  },
  {
    slug: "delivering-packages-of-hope",
    title: "Delivering Packages of Hope",
    period: "Jul – Aug 2024",
    raised: 2800,
    goal: 3000,
    donors: 22,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_165642509-scaled.jpg",
    description:
      "Care packages of essential supplies, educational materials, and hygiene items delivered directly to families and children in need.",
  },
  {
    slug: "kasa-south-amboy-partnership",
    title: "KASA & South Amboy Partnership",
    period: "April – May 2024",
    raised: 6900,
    goal: 7500,
    donors: 58,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_135504026-scaled.jpg",
    description:
      "A partnership with KASA and the South Amboy community providing educational resources and support to local children and families.",
  },
  {
    slug: "hunger-heroes",
    title: "Hunger Heroes",
    period: "Jan – March 2024",
    raised: 5000,
    goal: 5000,
    donors: 50,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/Hunger-Heroes-Program-1-1.png",
    description:
      "Fighting childhood hunger with consistent, nutritious meals delivered to children in food-insecure communities.",
  },
  {
    slug: "help-at-the-doorstep",
    title: "Help At The Doorstep",
    period: "Oct – Nov 2023",
    raised: 2000,
    goal: 2000,
    donors: 18,
    image: "https://www.ricekids.org/wp-content/uploads/2024/10/PXL_20240413_162630587-scaled.jpg",
    description:
      "Bringing food, clothing, and educational materials directly to families' doorsteps in underserved neighborhoods.",
  },
  {
    slug: "sandwiches-with-a-smile",
    title: "Sandwiches with a smile!",
    period: "September 2023",
    raised: 2000,
    goal: 2000,
    donors: 20,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_4256-1.jpg",
    description:
      "Volunteers came together to prepare and distribute hundreds of sandwiches to homeless individuals and families.",
  },
  {
    slug: "balanced-meals-for-the-local-community",
    title: "Balanced Meals for The Local Community",
    period: "August 2023",
    raised: 1300,
    goal: 1500,
    donors: 12,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230304_150423735.jpg",
    description:
      "Preparing and distributing nutritionally balanced meals to local families facing food insecurity.",
  },
  {
    slug: "holistic-education-support",
    title: "Holistic Education Support",
    period: "Jul – Aug 2023",
    raised: 1600,
    goal: 1500,
    donors: 14,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Visiting-Rural-Center.jpg",
    description:
      "Supporting children's growth through tutoring, nutrition, and creative arts programs in a single integrated effort.",
  },
  {
    slug: "north-jersey-hot-meals-cook-off-and-service",
    title: "North Jersey Hot Meals Cook-off and Service",
    period: "July 2023",
    raised: 1200,
    goal: 1200,
    donors: 11,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230213_000910226.jpg",
    description:
      "A volunteer-led cook-off in North Jersey preparing and serving hot meals to community members in need.",
  },
  {
    slug: "partnering-with-nourish-nj",
    title: "Partnering with Nourish NJ",
    period: "May – June 2023",
    raised: 900,
    goal: 1000,
    donors: 9,
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
    donors: 30,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/PXL_20230304_164543878.jpg",
    description:
      "A citywide effort collecting and distributing warm clothing, hygiene kits, and food to homeless individuals across New York.",
  },
  {
    slug: "bags-of-hope",
    title: "Bags of Hope",
    period: "March 2023",
    raised: 5000,
    goal: 5000,
    donors: 45,
    image: "https://www.ricekids.org/wp-content/uploads/2023/11/IMG_2207.jpg",
    description:
      "Bags filled with school supplies, snacks, and personal-care items distributed to children to help them succeed in school.",
  },
  {
    slug: "rural-center-project",
    title: "Rural Center Project",
    period: "Jan – May 2023",
    raised: 3600,
    goal: 4000,
    donors: 32,
    image: "https://www.ricekids.org/wp-content/uploads/2025/12/Rice-Kids-Empowering-Women-1-1.jpg",
    description:
      "Establishing and supporting rural education centers in India to bring quality learning and empowerment to remote villages.",
  },
  {
    slug: "feed-5k-program",
    title: "Feed 5K Program",
    period: "Nov 22 – Feb 23",
    raised: 15000,
    goal: 15000,
    donors: 120,
    image:
      "https://www.ricekids.org/wp-content/uploads/2022/12/Gray-Minimalist-Elegant-Fundraising-Disability-GoFundMe-Story-Image-2.png",
    description:
      "An ambitious initiative to feed 5,000 people in need through community fundraising and volunteer meal service.",
  },
  {
    slug: "feeding-the-homeless-in-the-upper-west-side",
    title: "Feeding The Homeless In The Upper West Side",
    period: "Nov 2022",
    raised: 1500,
    goal: 1500,
    donors: 14,
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
    donors: 17,
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
    donors: 10,
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
    donors: 13,
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
    donors: 9,
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
    donors: 44,
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
    donors: 18,
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
    donors: 150,
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
    donors: 24,
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
    donors: 22,
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
    donors: 38,
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
    donors: 28,
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
    donors: 60,
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
    donors: 14,
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
    donors: 18,
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
    donors: 8,
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
    donors: 10,
    image:
      "https://www.ricekids.org/wp-content/uploads/2020/02/Rice-Kids-Serving-Homeless-NY-Featured-Image.jpg",
    description:
      "One of Rice Kids' earliest projects — volunteers served hot meals and distributed warm clothing to homeless individuals across New York City.",
  },
];
