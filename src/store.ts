import { create } from 'zustand';
import {Data} from "./data/data.ts";
import type {Artist} from "./data/data.ts";

interface StoreData {
    Artists: Artist[];
    findArtist: (id:number) => Artist|undefined;
}
export const useArtistStore = create<StoreData>()((set,get)=>({
    artists: Data,
    findArtist: (id) => {
        return get().artists.find(artist => artist.id === id);
    },
}))
