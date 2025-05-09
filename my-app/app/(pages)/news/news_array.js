const newsArticles = [
  {
    id: 1,
    title: "Students painting on the walls of MPP school",
    publication: "Green Energy Times",
    date: "15-08-2023", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Fstudents%20painting.jpg?alt=media&token=0f3d3b48-e310-4d3d-aaba-bbc21ffca393",
    excerpt: "A rural village in India has successfully transitioned to 100% renewable energy, setting a precedent for sustainable development in remote areas.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/2300030350_kluniversity_in/Ec64JtI9j0lAt2ZEaIp1iMwBNfWdpSnBNFlYjPDqyGripw?e=YfAZRl',
  },
  {
    id: 2,
    title: "Pharmacy students conducting blood group tests for villagers in Musi again village",
    publication: "The Guardian",
    date: "30-05-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FHealth%20Services.png?alt=media&token=fc7baf56-42eb-4948-bd7b-67d80d15cbec",
    excerpt: "A village in rural Africa is empowering women by reviving traditional crafts, providing them with sustainable livelihoods and preserving cultural heritage.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/Eca4jy_gndFKgbnHf8vtzlIBPMe93xfzdngGq1Y2ZBPmsA?e=1ykj8q',
  },
  {
    id: 3,
    title: "Family Welfare Commissioner J Niwas talking about medical services",
    publication: "BBC News",
    date: "22-07-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FHeath%20Minister%20speech.png?alt=media&token=119f26b4-6e8b-4a64-8e20-5d321147419f",
    excerpt: "Villages in drought-prone areas are adopting innovative water conservation techniques, ensuring water availability for future generations.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/EVS-kqO5NWJIpXvi3BcBDSwBl2mfFcYWG9bpAVLVQ0YJDQ?e=vg5RyU',
  },
  {
    id: 4,
    title: "KLU students organizing Swachh Bharat in Tadepalli",
    publication: "Agriculture Today",
    date: "05-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FKl%20Students%20awareness.png?alt=media&token=7c76e7bb-384e-4991-87e1-e48a07bec467",
    excerpt: "A program introducing smart farming practices is revitalizing agriculture in remote villages, increasing crop yields and improving food security.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/ESYFLo14SjdNg8EA5Qxl4Y0BwIw0zPQj-79LB1YzZTKBQQ?e=wz0ztM',
  },
  {
    id: 5,
    title: "Students conducting a ralley against plastic along with higher officials",
    publication: "Green Energy Times",
    date: "28-09-2019", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Frevolution.png?alt=media&token=3b5e8f62-fa87-4819-abe5-182cbb5922c2",
    excerpt: "A ralley was conducted against use of plastic along with MLA Vasantha in the village Milavaram for a better society.",
  },
  {
    id: 6,
    title: "Village walls turns canvass for youth",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Fvillage%20walls.png?alt=media&token=d01cda0a-7c20-40b3-9f90-e364ac27f01a",
    excerpt: "Students paint a wall in Vellatur village in Krishna district as part of the Smart Village Revolution programme",
    link:"https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/EatYBIk6jERBhuH-sqYbA8MBvW97wICpXoZ-ZeMyiUxEVg?e=26MsBn",
  },
  {
    id: 7,
    title: "An initiative on a village developement committee in Vellaturu",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Fvillage%20committee.png?alt=media&token=747767c2-cd80-4f26-ac46-ce03d4292e8e",
    excerpt: "Students of KL University took an initiative in a Village Developement Committee as a part of Smart Village Revolution",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/ERcUdu6siX5Cqx-BjtNHcvMBhQUUtPVrU_Qe7Mavr-otWA?e=OymVsH',
  },
  {
    id: 8,
    title: "Students demonstrating against plastic ban",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FPlastic.png?alt=media&token=44f3231c-f4a3-4626-913b-14eb44619dab",
    excerpt: "Digital education initiatives are transforming schools in rural villages, bridging the educational gap and providing new opportunities for children.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/venkatasatyanarayana_kluniversity_in/EXhrhxRvyjRHmJkHiGCljxkBriMXpk4QhbSU_2hBOfaPFQ?e=RpUnn5',
  },
  {
    id: 9,
    title: "Awareness demonstration on right to vote",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FVote.png?alt=media&token=ff4e0270-ca41-40f3-8384-948c08ec1718",
    excerpt: "Digital education initiatives are transforming schools in rural villages, bridging the educational gap and providing new opportunities for children.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/2300030350_kluniversity_in/EY-Tgm9xm9RLputyXtFJdUgBZjznVYXlmZ0Y6P_ABXZIRQ?e=GYuW1f',
  },
  {
    id: 10,
    title: "KLU students on a 10-day tour of Nallamalla tribal temple",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Fnallamalla.png?alt=media&token=6efea935-445c-4c34-a84b-eef4e2007c91",
    excerpt: "Digital education initiatives are transforming schools in rural villages, bridging the educational gap and providing new opportunities for children.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/2300030350_kluniversity_in/ETn6xFZWAeVGuQZ9XSLi2rIBq2xq5DCdgckBoPV8h7P2WA?e=3e7EP1',
  },
  {
    id: 11,
    title: "KU students are conducting a survey to be aware of seasonal diseases",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2Fsesonal%20Diseases.png?alt=media&token=60a0df34-f8a7-4e96-8925-55c0e7b99645",
    excerpt: "Digital education initiatives are transforming schools in rural villages, bridging the educational gap and providing new opportunities for children.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/2300030350_kluniversity_in/EQ2tE4q5on1Nium2lfbR__8BqdvCN2GZdMeAI0G7K_4laQ?e=y1R4Io',
  },
  {
    id: 12,
    title: "KL University students participated in the Kavulur health survey",
    publication: "EdTech Magazine",
    date: "10-08-2024", // Use dd-mm-yyyy
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/svrwebsite-1e892.appspot.com/o/news%2FHealth%20Camp.png?alt=media&token=bb343e1e-adeb-48fb-a76b-e5081fc84236",
    excerpt: "Digital education initiatives are transforming schools in rural villages, bridging the educational gap and providing new opportunities for children.",
    link:'https://kluniversityin-my.sharepoint.com/:i:/g/personal/2300030350_kluniversity_in/Ea0gaZJqIGlGttRYZY3cxkUBo05n76pybfJgOZa0RGpHhw?e=4Z1XFK',
  },
];

export default newsArticles;
