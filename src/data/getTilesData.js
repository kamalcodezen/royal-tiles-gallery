"use server"



export const getAllTilesData = async () => {
    const res = await fetch("https://royal-tiles-gallery.vercel.app/tiles-data.json", { cache: "no-store" })
    const data = await res.json()
    return data?.tiles;

};


export const getSearchTilesData = async (title = "") => {
    const res = await fetch(
        "https://royal-tiles-gallery.vercel.app/tiles-data.json"
    );
    const data = await res.json();
    // Empty search হলে সব data return
    // if (!title) {
    //     return data.tiles;
    // }

    // Filter
    const foundData = data.tiles.filter((singleData) => {
        return singleData.title
            .toLowerCase()
            .includes(title.toLowerCase().trim());

    });
    return foundData;
};