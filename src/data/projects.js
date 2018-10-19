import faker from "faker";

const generateFakes = n => {
  faker.seed(1302);
  const fakes = [];
  for (let i = 0; i < n; i++) {
    fakes.push({
      title: faker.company.catchPhrase(),
      by: faker.name.findName(),
      url: "https://mcad.edu/magwd",
      description: faker.lorem.sentence(),
      img: `https://picsum.photos/640?image=${i + 50}`
    });
  }
  return fakes;
};

export default generateFakes(10);
