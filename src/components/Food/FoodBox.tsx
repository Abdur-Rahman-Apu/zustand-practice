import { useFoodStore } from '../../store/foodStore'

const FoodBox = () => {
    const fish=useFoodStore((state)=>state.fish)
    const addOneFish=useFoodStore((state)=>state.addOneFish)
    const removeOneFish=useFoodStore((state)=>state.removeOneFish)
    const removeAllFish=useFoodStore((state)=>state.removeAllFish)

    const addFiveFish=()=>{
        useFoodStore.setState((state)=>({fish:state.fish+5}))
    }

    const nonReactiveFish=useFoodStore.getState().fish;
  return (
    <div>
        <h1>Food Box</h1>
        <h2>Fish: {fish}</h2>
        <h2>Non Reactive Fish: {nonReactiveFish}</h2>
        <button onClick={addOneFish} style={{margin:"3px"}}>Add One Fish</button>
        <button onClick={removeOneFish} style={{margin:"3px"}}>Remove One Fish</button>
        <button onClick={removeAllFish} style={{margin:"3px"}}>Remove All Fish</button>
        <button onClick={addFiveFish} style={{margin:"3px"}}>Add Five Fish</button>
    </div>

  )
}

export default FoodBox