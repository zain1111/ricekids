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
    image: "/images/PXL_20260301_190855566-1-scaled.jpg",
    description:
      "As technology advances rapidly, learning methods are evolving at an equal pace. But many kids in our community do not have access to the devices and tools their peers use every day. This drive is focused on helping kids from marginalized schools receive the tools they lack – calculators, Chromebooks, and iPads.",
  },
  {
    slug: "driving-equity-through-financial-literacy",
    title: "Driving Equity through Financial Literacy",
    period: "March – April 2026",
    raised: 4250,
    goal: 7500,
    donors: 18,
    image: "/images/Rice-Kids-Why-Education-1-1-scaled.jpg",
    description:
      "One of the most important types of literacy is financial literacy, and very few, if any, resources are available to students in schools. We arrange for a financial literacy expert to meet with students and teach them fundamental concepts of resources, opportunities, income, assets, liabilities, and investing. This early exposure helps kids make the right decisions and inspires them toward financial independence.",
  },
  {
    slug: "new-years-school-supply-drive",
    title: "New Year's School Supply Drive",
    period: "Jan – Feb 2026",
    raised: 6250,
    goal: 6000,
    donors: 99,
    image:
      "/images/School-Supply-Drive-SAGE-Rice-Kids-Anakh-Sawhney.png",
    description:
      "As the new marking period begins and funding is cut, our teachers are struggling to obtain the educational supplies and tools they need to support students. This drive will help bring the required resources, so the teachers don't have to purchase these items using their personal funds",
  },
  {
    slug: "winter-coat-drive-for-newark-and-plainfield-schools",
    title: "Winter Coat Drive For Newark and Plainfield Schools",
    period: "Nov – Dec 2025",
    raised: 13500,
    goal: 15000,
    donors: 302,
    image: "/images/Winter-Coat-Drive.jpg",
    description:
      "As it gets cold, so many kids from our local school districts do not have warm coats to protect them from extreme weather. This drive helped us collect coats and jackets for K-8 kids and bring warmth to those in need. A special thanks to all the volunteers, teachers, and donors who made this happen!",
  },
  {
    slug: "educational-resources-for-nj-kids",
    title: "Educational Resources for NJ Kids",
    period: "Nov – Dec 2025",
    raised: 5000,
    goal: 5000,
    donors: 58,
    image: "/images/PXL_20230301_193531408-1.jpg",
    description:
      "It is incredible to experience when hundreds of kids from our community are energized to help hundreds of kids from another NJ school system who simply need basic educational resources and some cheer to succeed. Our volunteers enthusiastically bought supplies and materials and delivered them to the kids, who received them with a smile, and the special holiday surprise brought them distinct happiness.",
  },
  {
    slug: "holistic-education-support-for-kids",
    title: "Holistic Education Support for Kids",
    period: "Oct – Dec 2025",
    raised: 48000,
    goal: 50000,
    donors: 8,
    image: "/images/IMG_0006-scaled.jpg",
    description:
      "As we progress with our mission, we have taken over the responsibility of providing holistic support so that kids' focus remains on education, and we create pathways for them to come out of poverty. This can only be achieved with holistic support that ensures education is made accessible to kids, they remain healthy, and get proper nutrition. We have ambitious goals to support thousands of kids, so this is just the start!",
  },
  {
    slug: "rice-kids-sunaayy",
    title: "Rice Kids + Sunaay",
    period: "Aug – Sep 2025",
    raised: 5050,
    goal: 5000,
    donors: 56,
    image: "/images/IMG_0039-scaled.jpg",
    description:
      "We continue to build partnerships and work with impactful local organizations, like the Sunaayy Foundation, which is helping kids return to school through education and skill development.",
  },
  {
    slug: "education-supplies-for-kids",
    title: "Education supplies for kids",
    period: "May – Jul 2025",
    raised: 2000,
    goal: 2000,
    donors: 28,
    image: "/images/IMG_9998-scaled.jpg",
    description:
      "Many kids who come to our centers do not have even the basic school supplies and tools. Without these tools, it becomes tough for them to understand instruction and learn. This program provides the much-needed supplies and tools to kids in need.",
  },
  {
    slug: "supporting-kids-in-our-jharkhand-center",
    title: "Supporting Kids In Our Jharkhand Center",
    period: "Feb – Apr 2025",
    raised: 5050,
    goal: 5000,
    donors: 59,
    image: "/images/Rice-Kids-Jharkhand-Center.jpg",
    description:
      "Supporting our Jharkhand center where young learners are immersed in their books, supporting each other, totally ignoring their challenging circumstances.",
  },
  {
    slug: "ncr-street-education-program",
    title: "NCR Street Education Program",
    period: "Feb – Apr 2025",
    raised: 7650,
    goal: 7500,
    donors: 61,
    image: "/images/IMG_9940-scaled.jpg",
    description:
      "Enabled local partners to recruit and train teachers for educating kids who have dropped out of school, and are left behind, so they catch up with other kids and get comfortable to be able to get school re-admission.",
  },
  {
    slug: "nanaks-gift",
    title: "Nanak's Gift",
    period: "Nov 24 – Jan 25",
    raised: 8200,
    goal: 7500,
    donors: 156,
    image:
      "/images/Rice-kids-nanaks-gift-20-30-poster-scaled.jpg",
    description:
      "Multiple teams came together to run this initiative and extend Guru Nanak's vision of Vand Chakhna and selfless service to the communities across the northeast. Families, kids, and volunteers from various walks of life helped prepare hot meals and serve them at dozens of locations.",
  },
  {
    slug: "thanksgiving-winter-drive",
    title: "Thanksgiving Drive-Thru",
    period: "November 2024",
    raised: 6150,
    goal: 6000,
    donors: 89,
    image: "/images/IMG-20241124-WA0023.jpg",
    description:
      "Rice Kids team is blessed with the support of so many donors and volunteers who helped us run this drive. We sourced winter supplies for kids who don't have basic items like jackets, gloves, and hats, and delivered them to multiple locations. We organized around Thanksgiving to ensure every home has the opportunity to prepare for the winter ahead.",
  },
  {
    slug: "sponsorship-program",
    title: "Sponsorship Program",
    period: "Oct – Dec 2024",
    raised: 2200,
    goal: 2000,
    donors: 21,
    image: "/images/IMG_0057-n.jpg",
    description:
      "Incredible to see dedication and hard work of the kids as they pave the path to prosperity with return to mainstream education. Our team is honored to support them in their journey with education scholarships as they are admitted to prestigious schools.",
  },
  {
    slug: "investing-in-physical-education",
    title: "Investing In Physical Education",
    period: "Oct – Nov 2024",
    raised: 3000,
    goal: 3000,
    donors: 38,
    image: "/images/IMG-20221231-WA0155-1.jpg",
    description:
      "It is incredible to experience when hundreds of kids from our community are energized to help hundreds of kids from another NJ school system who simply need basic educational resources and some cheer to succeed. Our volunteers enthusiastically bought supplies and materials and delivered them to the kids, who received them with a smile, and the special holiday surprise brought them distinct happiness.",
  },
  {
    slug: "upper-east-side-event",
    title: "Upper East Side Event",
    period: "October 2024",
    raised: 1355,
    goal: 1500,
    donors: 39,
    image: "/images/PXL_20241123_144443989-scaled.jpg",
    description:
      "A great outing to support the many kids at local NYC schools who struggle with poverty in the city, and only get to eat cold or brown bag meals. We partnered with local organizations to prepare and deliver to schools, where kids were ecstatic to receive hot/nutritious meals and supplies. This is becoming even more important as the cost of living continues to rise.",
  },
  {
    slug: "education-supplies-program",
    title: "Education Supplies Program",
    period: "Sep – Oct 2024",
    raised: 3000,
    goal: 3000,
    donors: 66,
    image:
      "/images/Rice-Kids-Teacher-Supplies-Program-1.jpg",
    description:
      "What a successful turnout for our educational supplies program, where we had thousands of supplies ready for teachers and students. It is not just students who struggle. It is the teachers who have the biggest dilemma when they don't have the funding but are committed to providing resources to kids using their own personal funds.",
  },
  {
    slug: "establishing-a-new-center",
    title: "Establishing A New Center",
    period: "Aug – Sep 2024",
    raised: 6500,
    goal: 7000,
    donors: 80,
    image: "/images/IMG_0001.jpg",
    description:
      "The intent, focus, and hard work are always on display at our centers. That is what keeps us going, launching new centers with the support of our local community members. Thank you so much to all the donors and volunteers who helped us launch this new center.",
  },
  {
    slug: "setting-up-the-bengal-center",
    title: "Setting Up The Bengal Center",
    period: "Jun – Aug 2024",
    raised: 4500,
    goal: 4500,
    donors: 49,
    image: "/images/Rice-Kids-Bengal-School.jpg",
    description:
      "It has been a great honor to work with local partners, community leaders, and volunteers. Our recent visit was immensely satisfying, with the genuine smiles on these bright young faces as they connected with their books. Such moments keep us going and encourage our dedicated volunteers to reach even further. We worked with partners to set up this center in Bengal. Thank you for helping us bring these smiles to life!",
  },
  {
    slug: "delivering-packages-of-hope",
    title: "Delivering Packages of Hope",
    period: "Jul – Aug 2024",
    raised: 2800,
    goal: 3000,
    donors: 64,
    image: "/images/PXL_20240413_165642509-scaled.jpg",
    description:
      "In the day and age when all types of deliveries are one tap away, why not deliver the supplies to the amazing residents of Central Jersey who just happen to struggle because of their circumstances? The volunteers came together to run this drive and deliver hope to so many in need!",
  },
  {
    slug: "kasa-south-amboy-partnership",
    title: "KASA & South Amboy Partnership",
    period: "April – May 2024",
    raised: 6900,
    goal: 7500,
    donors: 148,
    image: "/images/PXL_20240413_135504026-scaled.jpg",
    description:
      "Rice Kids team, Kaur and Singh Academy, and South Amboy Kitchen came together for this hugely successful drive. Like-minded families, kids, and volunteers from various backgrounds helped prepare hot meals and serve them at over a dozen locations in the northeast.",
  },
  {
    slug: "hunger-heroes",
    title: "Hunger Heroes",
    period: "Jan – March 2024",
    raised: 5000,
    goal: 5000,
    donors: 114,
    image: "/images/Hunger-Heroes-Program-1-1.png",
    description:
      "What an amazing program that helped us bring together our superhero volunteers to help feed the marginalized individuals and families within our neighborhoods and beyond. We raised funds from over a hundred donors and brought smiles to so many faces.",
  },
  {
    slug: "help-at-the-doorstep",
    title: "Help At The Doorstep",
    period: "Oct – Nov 2023",
    raised: 2000,
    goal: 2000,
    donors: 46,
    image: "/images/PXL_20240413_162630587-scaled.jpg",
    description:
      "We proudly collaborated with NJ businesses to support them in their community efforts and helped reach hundreds of needy families in New Jersey providing them with hot and nutritious meals at their doorstep.",
  },
  {
    slug: "sandwiches-with-a-smile",
    title: "Sandwiches with a smile!",
    period: "September 2023",
    raised: 2000,
    goal: 2000,
    donors: 49,
    image: "/images/IMG_4256-1.jpg",
    description:
      "Kids have so much energy – we just need to channel it the right way. We experienced this as kids and families came together to pack thousands of sandwiches that were delivered and served to the needy in South Jersey communities.",
  },
  {
    slug: "balanced-meals-for-the-local-community",
    title: "Balanced Meals for The Local Community",
    period: "August 2023",
    raised: 1300,
    goal: 1500,
    donors: 37,
    image: "/images/PXL_20230304_150423735.jpg",
    description:
      "The Rice Kids team cooked meals at a community kitchen to serve the local population providing a meal with the right amount of protein, vegetables, fiber rich carbohydrates, fats, drinks, and some dessert!",
  },
  {
    slug: "holistic-education-support",
    title: "Holistic Education Support",
    period: "Jul – Aug 2023",
    raised: 1600,
    goal: 1500,
    donors: 19,
    image: "/images/Rice-Kids-Visiting-Rural-Center.jpg",
    description:
      "This project is helping us enable holistic education in our rural centers so kids can learn and express their creativity in the best way. Our volunteers and art teachers help us fulfil this objective. The talented young artists at our centers are even preparing for local competitions!",
  },
  {
    slug: "north-jersey-hot-meals-cook-off-and-service",
    title: "North Jersey Hot Meals Cook-off and Service",
    period: "July 2023",
    raised: 1200,
    goal: 1200,
    donors: 31,
    image: "/images/PXL_20230213_000910226.jpg",
    description:
      "The Rice Kids team cooked and served meals delivered to North Jersey shelters and community centers driving forward our mission of providing hot meals balanced with the right amount of nutrition for everyone.",
  },
  {
    slug: "partnering-with-nourish-nj",
    title: "Partnering with Nourish NJ",
    period: "May – June 2023",
    raised: 900,
    goal: 1000,
    donors: 28,
    image: "/images/PXL_20230127_141545939.jpg",
    description:
      "The Rice Kids team partnered with Nourish NJ to bring joy to the food insecure through their brown bags program. Amazing work being done by Nourish NJ helping bring nutrition to communities across NJ.",
  },
  {
    slug: "new-york-city-homeless-drive",
    title: "New York City Homeless Drive",
    period: "April 2023",
    raised: 3000,
    goal: 3000,
    donors: 69,
    image: "/images/PXL_20230304_164543878.jpg",
    description:
      "The Rice Kids team had such a humble experience cooking hot and nutritious meals and serving to the homeless in New York City. Thanks to the local NYC volunteers who helped us in large numbers to make this event such a success!",
  },
  {
    slug: "bags-of-hope",
    title: "Bags of Hope",
    period: "March 2023",
    raised: 5000,
    goal: 5000,
    donors: 102,
    image: "/images/IMG_2207.jpg",
    description:
      "The Rice Kids team and all the wonderful volunteers ran a campaign to provide breakfast and snack time brown bags for kids and families across NJ. Thousands of bags were packed and delivered to food insecure individuals. Thanks to hundreds of volunteers who helped with this drive, especially young kids who helped with all their passion sporting a big smile!",
  },
  {
    slug: "rural-center-project",
    title: "Rural Center Project",
    period: "Jan – May 2023",
    raised: 3600,
    goal: 4000,
    donors: 39,
    image: "/images/Rice-Kids-Empowering-Women-1-1.jpg",
    description:
      "Extending our work to rural areas is a key priority, and the funds raised for this program through committed donors, along with community leaders and women educators, are helping us achieve the expansion goals.",
  },
  {
    slug: "feed-5k-program",
    title: "Feed 5K Program",
    period: "Nov 22 – Feb 23",
    raised: 15000,
    goal: 15000,
    donors: 376,
    image:
      "/images/Gray-Minimalist-Elegant-Fundraising-Disability-GoFundMe-Story-Image-2.png",
    description:
      "Rice Kids is running the Feed 5K program during the holiday season, where our goal is to feed 5000 food-insecure individuals in the northeast with nutritious meals. Please donate and volunteer so we all can do our part to help them sleep with full stomachs during the holidays. Any help, no matter how big or small, will go a long way to bringing a smile to their face.",
  },
  {
    slug: "feeding-the-homeless-in-the-upper-west-side",
    title: "Feeding The Homeless In The Upper West Side",
    period: "Nov 2022",
    raised: 1500,
    goal: 1500,
    donors: 63,
    image: "/images/IMG_2015.jpg",
    description:
      "Working with so many lovely local community volunteers in New York City to reach the homeless who are in desperate need of nutritious and balanced meals.",
  },
  {
    slug: "fresh-produce-and-pantry-supplies",
    title: "Fresh Produce And Pantry Supplies",
    period: "Sep – Oct 2022",
    raised: 2000,
    goal: 2000,
    donors: 81,
    image: "/images/IMG_1931-543x407.jpg",
    description:
      "Everyone needs fresh produce but unfortunately among rising inflation and exorbitant food costs, it has become out of reach for most poor households. Rice Kids partnered with organizations in NYC to deliver fresh produce and pantry supplies to the needy.",
  },
  {
    slug: "advent-community",
    title: "Advent Community",
    period: "July – Aug 2022",
    raised: 980,
    goal: 1200,
    donors: 39,
    image: "/images/IMG_1937.jpg",
    description:
      "Hot meals for the Advent community in New York City – prepared delicious meals at the common kitchen and served the community in the afternoon.",
  },
  {
    slug: "morristown-food-drive",
    title: "Morristown food drive",
    period: "May – June 2022",
    raised: 1500,
    goal: 1500,
    donors: 72,
    image: "/images/IMG_9700.jpg",
    description:
      "Prepared fresh nutritious meals at a community kitchen and brought them to multiple Morristown locations including homeless shelters in the area.",
  },
  {
    slug: "local-food-shelter",
    title: "Local food shelter",
    period: "February – April 2022",
    raised: 1000,
    goal: 1000,
    donors: 56,
    image: "/images/IMG_9711-543x407.jpg",
    description:
      "Served meals at three local shelters in NJ. Organized a cook-off at a community kitchen to prepare fresh warm meals and serve the shelter residents.",
  },
  {
    slug: "holiday-meal-program",
    title: "Holiday meal program",
    period: "November – December 2021",
    raised: 5150,
    goal: 5000,
    donors: 322,
    image: "/images/IMG_9688.jpg",
    description:
      "Worked with local school systems to raise awareness of the hunger crisis and help local families and individuals in need. It is especially important during the holiday time when most people are on a spending spree but some are struggling to put food on the table.",
  },
  {
    slug: "serving-families-dealing-with-unforeseen-crisis",
    title: "Serving families dealing with unforeseen crisis",
    period: "September – October 2021",
    raised: 2000,
    goal: 2000,
    donors: 82,
    image: "/images/IMG_9710.jpg",
    description:
      "Worked with neighborhood groups to raise awareness about families in desperate need of proper nutrition. All the families were in NJ and were struggling due to unforeseen crises or situations.",
  },
  {
    slug: "india-covid-relief-program",
    title: "India Covid Relief Program",
    period: "April – July 2021",
    raised: 18750,
    goal: 15000,
    donors: 822,
    image: "/images/Project-6-3-543x407.jpg",
    description:
      "India’s second Covid wave took the lives of hundreds of thousands of citizens, while healthcare infrastructure completely collapsed. Hundreds of thousands of people couldn’t find oxygen support as cities ran out of oxygen, including the suppply to hospitals. This small program helped Covid patients in desperate need. To ensure proper use of funds, we worked with local partners who had accurate onthe ground knowledge.",
  },
  {
    slug: "food-bank-drive",
    title: "Food bank drive",
    period: "January – March 2021",
    raised: 2800,
    goal: 3000,
    donors: 140,
    image: "/images/IMG_0744-543x407.jpg",
    description:
      "Partnered with local food banks to help stock up basic food supplies. Involved elementary and middle school kids to pack dry food and bringing it over to delivery centers.",
  },
  {
    slug: "new-york-feeding-the-homeless",
    title: "New York – Feeding the homeless",
    period: "November – December 2020",
    raised: 2400,
    goal: 2400,
    donors: 124,
    image: "/images/IMG_9685-543x407.jpg",
    description:
      "Coordinated with local organizations and set up food serving tables and delivery vans to serve food to the needy and homeless in New York City.",
  },
  {
    slug: "ncr-india-covid-food-service-2",
    title: "NCR – India – Covid Food Service",
    period: "July – September 2020",
    raised: 4450,
    goal: 4500,
    donors: 379,
    image: "/images/Project-3-1-543x407.jpg",
    description:
      "Worked with local charities in the NCR region to organize free langar services for families in need.",
  },
  {
    slug: "nj-food-service",
    title: "NJ Food Service",
    period: "June – July 2020",
    raised: 3300,
    goal: 3000,
    donors: 264,
    image: "/images/IMG_0774.jpg",
    description:
      "Coordinated with 86 shelters, churches, and other serving locations to serve hot nutrition meals to needy families and individuals. Organized mass cooking and delivery of food to multiple locations.",
  },
  {
    slug: "ncr-india-covid-food-service",
    title: "NCR – India – Covid Food Service",
    period: "March – May 2020",
    raised: 6800,
    goal: 10000,
    donors: 450,
    image: "/images/Project-1-2--543x407.jpg",
    description:
      "Worked with local charities in the NCR region to organize free langar services for migrant workers and other needy individuals and families who had lost their source of income at the beginning of the pandemic.",
  },
  {
    slug: "anakh-11th-birthday-fundraiser",
    title: "Anakh's 11th Birthday Fundraiser",
    period: "Feb – April 2020",
    raised: 1290,
    goal: 1000,
    donors: 30,
    image:
      "/images/Rice-Kids-Anakh-11th-Birthday-Featured.jpg",
    description:
      "Nearly 1 in 8 NYC residents, and 1 in 9 NJ residents are food insecure. That rate is even higher for kids. To help feed the hungry, Anakh is donating her birthday this year. Instead of celebration and gifts, she would like to raise money for the cause. Through Rice Kids, Anakh's family is hosting 4 cook-offs and food service days between Feb and April to serve more than 500 people in NJ-NYC area. If you would like to volunteer, please reach out! Other than time commitment, it would be great if you can help Anakh raise money for this initiative, so she can can reach even a greater number number of people.",
  },
  {
    slug: "akhil-bhartiya-netrahin-sangh",
    title: "Akhil Bhartiya Netrahin Sangh",
    period: "April 13, 2019",
    raised: 2000,
    goal: 2000,
    donors: 28,
    image:
      "/images/Rice-Kids-Serving-Blind-India-Featured.jpg",
    description:
      "Akhil Bhartiya Netrahin Sangh is one of the biggest schools for kids who are blind, or have some form of vision impairment. It provides free lodging, meals, education, and supplies to kids in need. Visiting the school has been one of the most humbling experiences for the Rice Kids team. As we saw these talented kids study, play, and take care of their daily chores without any support, it brought tears to our eyes. Not because we thought they had a disability, but for our impairments. In that moment, we felt pity for ourselves in how we deal with life’s challenges. If anything, these kids have special abilities, and the courage they exhibit cannot be described in words. The icing on the cake was their constant and infectious smile that they carried effortlessly throughout the day.",
  },
  {
    slug: "agape-house-families-somerville",
    title: "Meeting Agape House Families",
    period: "Jan 19, 2019",
    raised: 720,
    goal: 500,
    donors: 32,
    image:
      "/images/Rice-Kids-Agape-house-somerville-featured.jpg",
    description:
      "Somerset county has many homeless shelters that provide resources to families. One such shelter is Agape House run by Volunteers of America. Most of the families are unable to afford nutritious food.",
  },
  {
    slug: "serving-homeless-new-york",
    title: "Serving The Homeless In New York",
    period: "Oct 28, 2018",
    raised: 1225,
    goal: 1000,
    donors: 43,
    image:
      "/images/Rice-Kids-Serving-Homeless-NY-Featured-Image.jpg",
    description:
      "We organized a cook-off, and delivered food to specific locations across New York city. It was a great experience for both adults and kids who were able to catchup with the community and learn about their challenges. Everyone was really appreciative of the chance to eat warm and nutritious food.",
  },
];
