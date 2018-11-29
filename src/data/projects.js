const projects = [
  {
    title: "I Call You Friend",
    by: "Michelle Butts",
    description: "Second-class animals make first-class friends.",
    url: "https://www.michellebutts.net",
    img: "img/Butts_Michelle_ICALLYOUFRIEND.png"
  },
  {
    title: "Calma",
    by: "Tomie Castillo",
    description: "Emotional well-being through color and design.",
    url: "https://tcastillo.studio.mcad.edu/Calma",
    img: "img/Castillo_Tomie_Calma.png"
  },
  {
    title: "Six One Two: Building a Brand for a Small Coffeeshop + Bar",
    by: "Angie Diedrich",
    description:
      "Bringing a small coffeeshop and bar life with branding techniques, design and a development plan.",
    url: "https://adiedrich.studio.mcad.edu/six_one_two/index.html",
    img: "img/diedrich_angie_sixOneTwo.png"
  },
  {
    title: "Come On Get Happy",
    by: "Erica Hartmann",
    description:
      "What truly makes us happy and how can we live happier, healthier lives every day?",
    url: "https://ericahrtmann.github.io/",
    img: "img/Hartmann_Erica_ComeOnGetHAppy.png"
  },
  {
    title: "brassy",
    by: "Maren Nelson",
    description: "Dedicated to the care and keeping of brassy women.",
    url: "https://marstarmpls.github.io/brassy/",
    img: "img/nelson_maren_brassy.png"
  },
  {
    title: "Happy Ocean",
    by: "Alex Ogden",
    description: "A happy ocean is a clean ocean!",
    url: "https://cogden.studio.mcad.edu/capstone/index.html",
    img: "img/ogden_alex_happyocean.png"
  },
  {
    title: "Drag Me",
    by: "Melissa Pinkowski",
    description: "Fusing passion for Twin Cities drag with design.",
    url:
      "https://mpinkowski.studio.mcad.edu/capstone%20page/dragmecapstone.html",
    img: "img/pinkowski_melissa_dragme.jpg"
  },
  {
    title: "The Resort at Ailiwi",
    by: "Kt Schramm",
    description:
      "Discover the Tri-State area as the adventure you never thought of.",
    url: "https://kschramm.studio.mcad.edu/ailiwi/index.html ",
    img: "img/Schramm_Kt_Ailiwi.jpg"
  },
  {
    title: "Embracing Design Limitations",
    by: "Lindsey Bemmels",
    description:
      "Can captivating and effective design be created with Microsoft Office alone?",
    img: "img/Bemmels-Lindsey-Embracing-Design-Limitations.jpg",
    url: "http://embracinglimitations.com/"
  },
  {
    title: "Pattern Library",
    by: "Kristi Bryden",
    description:
      "A practical approach to streamlining workflows and coding processes across teams.",
    url: "http://kristibryden.com/PUBLIC/patternlibrary.html",
    img: "img/Bryden_Kristi_PatternLibrary.png"
  },
  {
    by: "Emily Burchell",
    title: "Northern Elves Festival",
    description:
      "A holiday inspired event to enhance community collaboration and promote tourism.",
    url: "http://www.northernelves.com",
    img: "img/burchell_emily_northernelvesfestival.png"
  },
  {
    by: "Sarah Christ",
    title: "Bride to Bride Wedding Consignment Brand Refresh",
    description:
      "A branding refresh project to help educate potential customers that Bride to Bride sells high-quality items, many that are brand new.",
    url: "http://sarahchrist.com/capstone/",
    img: "img/christ_sarah_BridetoBrideBrandRefresh.png"
  },
  {
    by: "Sidney Cui",
    title: "Knocknock",
    description:
      "Smart building.Connected Knocknock is an integrated app providing a digital solutions for people living in the same building or neighborhood.",
    url: "http://cuixianning.com/capstone/",
    img: "img/xianning_cui_knocknock.jpg"
  },
  {
    by: "Nick Martin",
    title: "Emberwood",
    description:
      "An online interactive experience designed to foster responsible engagement with our wildlands.",
    url: "https://nmartin.studio.mcad.edu/emberwoodPROJECT/index.html",
    img: "img/martin_nick_emberwood.gif"
  },
  {
    by: "Ashley Mary",
    title: "Curiosity Studio",
    description:
      "A 12-week course for adults that explores tools, environments and research that fosters creativity, inspiration, and curiosity.",
    url: "https://curiositystudioclass.com/",
    img: "img/mary_ashley_curiousityStudio.jpg"
  },
  {
    by: "Jeff Mooridian Jr.",
    title: "The Annual Rebranding of the Irish Fair of Minnesota for 2019",
    description:
      "Designing the annual poster for the Irish Fair of Minnesota for its 40th anniversary, and using this design to rebrand the IFM for 2019.",
    url:
      "https://jmooridianjr.studio.mcad.edu/Capstone%20Web%20Page/index3.html",
    img: "img/Mooridian_Jeff_IFMPosterAnnualRebrand.jpg"
  },
  {
    by: "Mónica Nadal",
    title: "Votemos",
    description: "Votemos is a nonpartisan voter site created for Puerto Rico.",
    url: "https://mnadal.github.io/",
    img: "img/votemosicon_mcad_icon.png"
  },
  {
    by: "John Valko",
    title: "Big Ideas",
    description:
      "Community Fosters Creativity: The Whittier Alliance BIG IDEAS Grant.",
    url: "https://www.hellovalko.com/big-ideas",
    img: "img/valko_john_bigideas.png"
  }
];

const getLastName = fullName => {
  const names = fullName.split(" ");
  return names[1];
};

function byLastName(project1, project2) {
  const lastname1 = getLastName(project1.by).toUpperCase();
  const lastname2 = getLastName(project2.by).toUpperCase();
  if (lastname1 < lastname2) return -1;
  if (lastname1 > lastname2) return 1;
  return 0;
}

export default projects.sort(byLastName);
