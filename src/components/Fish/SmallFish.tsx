import { useShallow } from "zustand/shallow";
import { useFishStore } from "../../store/fishStore";

const SmallFish = () => {
  const store = useFishStore(
    useShallow((state) => {
      return {
        smallFish: state.count.small,
        incrementSmallFish: state.incrementSmallFish,
      };
    })
  );
  return (
    <div>
      <p>Small Fish: {store.smallFish}</p>
      <p>{Math.random()}</p>
      <button onClick={store.incrementSmallFish}>Add Small Fish</button>
    </div>
  );
};

export default SmallFish;
