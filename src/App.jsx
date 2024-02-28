import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="max-w-[1440px] px-8 sm:px-10 py-8 sm:py-10">
      <h1 className="font-anta text-4xl font-bold text-red-500"> Monsters </h1>
      <Hero />
    </div>
  );
};

export default App;
