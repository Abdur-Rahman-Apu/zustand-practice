import { useFishStore } from "../../store/fishStore";

const BigFish = () => {
  const bigFish = useFishStore.use.count().big;
  const incrementBigFish = useFishStore.use.incrementBigFish();
  return (
    <div>
      <p>Big Fish: {bigFish}</p>
      <p>{Math.random()}</p>
      <button onClick={incrementBigFish}>Add Big Fish</button>
    </div>
  );
};

export default BigFish;
