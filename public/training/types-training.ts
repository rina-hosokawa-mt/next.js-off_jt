type User = {
  name2: string;
  age: number;
  fruits: string[];
};
const user: User = {
  name2: "Hanako",
  age: 22,
  fruits: ["りんご", "バナナ", "みかん"],
};

function getProfile(user: User): string {
  return `${user.name2} (${user.age}歳)`;
}
