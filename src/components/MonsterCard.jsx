const MonsterCard = ({ monsterList }) => {
  return (
    <div className="mt-4 grid justify-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6">
      {monsterList.map((monster) => (
        <div
          key={monster.id}
          className="w-full flex flex-col items-center justify-center px-4 py-10
          border-2 rounded-2xl shadow-xl cursor-pointer hover:border-gray-500"
        >
          <img
            alt={`monster ${monster.name}`}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          />
          <h2 className="text-2xl font-semibold font-anta leading-normal mt-4">
            {monster.name}
          </h2>
          <p className="text-xl leading-normal font-montserrat">
            {monster.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MonsterCard;
