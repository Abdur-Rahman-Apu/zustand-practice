import { useFishStore } from "../../store/fishStore";

const SmallFish = () => {
  const smallFish = useFishStore.use.count().small;
  const incrementSmallFish = useFishStore.use.incrementSmallFish();
  return (
    <div>
      <p>Small Fish: {smallFish}</p>
      <p>{Math.random()}</p>
      <button onClick={incrementSmallFish}>Add Small Fish</button>
    </div>
  );
};

export default SmallFish;
