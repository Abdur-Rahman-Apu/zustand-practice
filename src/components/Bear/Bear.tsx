import { useEffect, useState } from "react";
import { useBearStore } from "../../store/bearStore";
import { useFoodStore } from "../../store/foodStore";
import { shallow } from "zustand/shallow";

export default function Bear() {
  const bears = useBearStore((state) => state.bears);
  const summary = useBearStore((state) => state.summary);
  const incrementSmallBear = useBearStore((state) => state.incrementSmallBear);
  const incrementBigBear = useBearStore((state) => state.incrementBigBear);

  const [bgColor,setBgColor]=useState<'lightPink'|'lightGreen'>('lightPink')

  useEffect(()=>{
    const unsub=useFoodStore.subscribe(state=>state.fish,(fish,prevFish)=>{
    
      if(fish>5){
        setBgColor('lightGreen')
      }else if(fish<=5){
        setBgColor('lightPink')
      }
    },{
      equalityFn:shallow,
      fireImmediately:true
    })

    return unsub;
  },[])
  return (
    <div className="container" style={{backgroundColor:bgColor}}>
      <h3>Bear</h3>
      <p>{Math.random()}</p>
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
