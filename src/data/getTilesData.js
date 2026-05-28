"use server"

export const getAllTilesData = async () => {
    const res = await fetch("https://royal-tiles-gallery.vercel.app/tiles-data.json", { cache: "no-store" })
    const data = await res.json()
    return data?.tiles;

};

