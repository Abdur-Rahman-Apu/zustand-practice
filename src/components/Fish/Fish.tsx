import { useFishStore } from "../../store/fishStore";

const Fish = () => {
  const incrementSmallFish = useFishStore.use.incrementSmallFish();
  return (
    <div>
      <p>Fish</p>
      <p>{Math.random()}</p>
      <button onClick={incrementSmallFish}>Add Small Fish</button>
    </div>
  );
};

export default Fish;
