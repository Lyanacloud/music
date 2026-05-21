import { create } from 'zustand';
import {Data} from "./data/data.ts";
import type {Artist} from "./data/data.ts";

interface StoreData {
    artists: Artist[];
    findArtist: (id:number) => Artist;
}
export const useArtistStore = create<StoreData>((_,get)=>({
    artists: Data,
    findArtist: (id) => {
        return get().artists.find(((artist: Artist )=> artist.id === id))!;
    },
}))
