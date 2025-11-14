import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"


const initialValue={
    fish:0
}

export const useFoodStore=create<typeof initialValue>()(subscribeWithSelector(()=>initialValue))


export const addOneFish=() => {
    useFoodStore.setState((state)=>({fish:state.fish+1}))
}

export const removeOneFish=() => {
    useFoodStore.setState((state)=>({fish:state.fish-1}))
}

export const removeAllFish=() => {
    useFoodStore.setState({fish:0})
}