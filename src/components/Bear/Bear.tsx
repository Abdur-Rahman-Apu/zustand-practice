import { useBearStore } from "../../store/bearStore";

export default function Bear() {
  const bears = useBearStore((state) => state.bears);
  const summary = useBearStore((state) => state.summary);
  const incrementSmallBear = useBearStore((state) => state.incrementSmallBear);
  const incrementBigBear = useBearStore((state) => state.incrementBigBear);
  return (
    <div className="container">
      <h3>Bear</h3>

      <div>
        <p>Big: {bears.big}</p>
        <p>Small: {bears.small}</p>
        <p>{summary()}</p>
      </div>

      <div>
        <button onClick={incrementBigBear}>Add Big Bear</button>{" "}
        <button onClick={incrementSmallBear}>Add Small Bear</button>
      </div>
    </div>
  );
}
