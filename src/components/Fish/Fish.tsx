import { useFishStore } from "../../store/fishStore";

const Fish = () => {
  const incrementSmallFish = useFishStore((state) => state.incrementSmallFish);
  const reset = useFishStore((state) => state.reset);
  return (
    <div>
      <p>Fish</p>
      <p>{Math.random()}</p>
      <button onClick={incrementSmallFish}>Add Small Fish</button>
      <button onClick={useFishStore.persist.clearStorage}>Clear Storage</button>
      <button onClick={reset}>Reset Memory</button>
    </div>
  );
};

export default Fish;
