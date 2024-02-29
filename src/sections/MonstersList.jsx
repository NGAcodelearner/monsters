import { useEffect, useState } from "react";
import MonsterCard from "../components/MonsterCard";

const MonstersList = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monster) => setMonsters(monster));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="mt-32 flex flex-col justify-center gap-6 mx-2-[1440px] m-auto">
      <h1 className="font-anta text-4xl font-bold text-red-400">
        Monsters List
      </h1>
      <input
        type="text"
        placeholder="Search monsters..."
        onChange={(e) => setSearchField(e.target.value)}
        className="block w-full p-2.5 border border-gray-400 bg-gray-50 text-sm rounded-lg outline-none"
      />

      <MonsterCard monsterList={filterMonsters} />
    </div>
  );
};

export default MonstersList;
