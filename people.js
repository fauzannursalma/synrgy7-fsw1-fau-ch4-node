const fs = require("fs");

const people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const writeData = (data) => {
  fs.writeFile("./people.txt", JSON.stringify(data), "utf-8", (err) => {
    if (err) console.log("error saving data!");
    console.log("Data has been saved!");
  });
};

// Read All Data (array of objects)
// ==================================================
// const readData = () => {
//   fs.readFile("./people.txt", "utf-8", (err, data) => {
//     if (err) console.log("error reading data!");
//     const parsed = JSON.parse(data);
//     console.log("Data has been read!");
//     console.log("===== People Data =====");
//     console.log(parsed);
//   });
// };

// Read All Name (array of strings)
// ==================================================
const readData = () => {
  fs.readFile("./people.txt", "utf-8", (err, data) => {
    if (err) console.log("error reading data!");
    const parsed = JSON.parse(data);
    console.log("===== People Data (All Names) =====");
    // built-in map
    const names = parsed.map((item) => item.name);
    // alternative forEach
    // const names = [];
    // parsed.forEach((item) => {
    //   names.push(item.name);
    // });
    console.log(names);
  });
};

const readDetailData = (id) => {
  fs.readFile("./people.txt", "utf-8", (err, data) => {
    if (err) console.log("error reading data!");
    const parsed = JSON.parse(data);
    // built-in find
    const detailData = parsed.find((item) => item.id === id);
    // alternative filter
    // const detailData = parsed.filter((item) => item.id === id)[0];
    console.log("===== Detail Data By Id =====");
    console.log(detailData);
  });
};

module.exports = {
  people,
  writeData,
  readData,
  readDetailData,
};
