import { useShallow } from "zustand/shallow";
import { useFishStore } from "../../store/fishStore";

const BigFish = () => {
  const store = useFishStore(
    useShallow((state) => {
      return {
        bigFish: state.count.big,
        incrementBigFish: state.incrementBigFish,
      };
    })
  );
  return (
    <div>
      <p>Big Fish: {store.bigFish}</p>
      <p>{Math.random()}</p>
      <button onClick={store.incrementBigFish}>Add Big Fish</button>
    </div>
  );
};

export default BigFish;
