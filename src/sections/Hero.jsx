import { useState, useEffect } from "react";

const Hero = () => {
  const [monsters, setMonsters] = useState([]);
  const [clickMonster, setClickMonster] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        setMonsters(monsters);
        setClickMonster(monsters.slice(-3)[0]);
      });
  }, []);

  const lastThreeMonsters = monsters.slice(-3);

  const onClickChangeMonster = (Clickedmonster) => {
    setClickMonster(Clickedmonster);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen justify-center gap-10 ">
      <div className=" relative flex flex-col w-full lg:w-2/5 items-start justify-center  max-lg:px-10 pt-12">
        <h1 className="text-7xl font-palanquin font-bold max-lg:text-6xl max-sm:text-4xl">
          <span className="relative z-10 lg:bg-white lg:whitespace-nowrap pr-4">
            The New Arrivals
          </span>
          <br />
          <span className="text-red-400 inline-block mt-2">
            {" "}
            Monsters{" "}
          </span>{" "}
          Collections
        </h1>
        <p className="text-gray-500 sm:max-w-md text-lg my-4">
          Explore our captivating new arrival monster collections and unleash
          endless excitement!
        </p>
        <button
          className="px-6 py-3 text-lg font-medium bg-red-500 hover:bg-red-400
       text-white rounded-2xl font-anta leading-none"
        >
          Show Now
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center lg:min-h-screen
       bg-sky-200 bg-center bg-cover max-lg:py-24"
      >
        <img
          alt={`${clickMonster?.name}`}
          src={`https://robohash.org/${clickMonster?.id}?set=set2&size=360x360`}
          className="object-contain relative z-10"
        />
        <div className="absolute -bottom-[10%] flex justify-center items-center gap-6">
          {lastThreeMonsters.map((monster) => (
            <div
              key={monster.id}
              className={`border shadow-md p-2 bg-gray-100 cursor-pointer rounded-xl
              ${
                monster === clickMonster
                  ? "border-gray-400 border-2"
                  : "border-transparent"
              }
              `}
              onClick={() => onClickChangeMonster(monster)}
            >
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=120x120`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
