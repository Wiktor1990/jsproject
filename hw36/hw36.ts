type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};

const users: User[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];
//1
const names = users.map((user) => user.name).join(", ");
console.log(names);

//2
function sumCarsCount<T extends object, K extends keyof T>(
  items: T[],
  key: K,
): number {
  return items.reduce((acc, item) => {
    const value = item[key];
    if (Array.isArray(value)) {
      return acc + value.length;
    }
    return acc;
  }, 0);
}

const totalCars = sumCarsCount(users, "cars");
console.log(totalCars);

//3

function getUsersHasEducation<T extends Pick<User, "hasEducation">>(
  items: T[],
) {
  return items.filter((item) => item.hasEducation);
}
const usersEducation = getUsersHasEducation(users);
console.log(usersEducation);

//4
function getUsersWithAnimals<T extends Pick<User, "animals">>(items: T[]) {
  return items.filter((item) => item.animals && item.animals.length > 0);
}
const usersAnimals = getUsersWithAnimals(users);
console.log(usersAnimals);

//5
function getUniqueCarsString<T extends Pick<User, "cars">>(items: T[]): string {
  const allCars = items.reduce<string[]>((acc, item) => {
    if (item.cars && Array.isArray(item.cars)) {
      acc.push(...item.cars);
    }
    return acc;
  }, []);
  return Array.from(allCars).join(", ");
}

const carsString = getUniqueCarsString(users);
console.log(carsString);
