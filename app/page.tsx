import getData from "@/lib/getData";
import {ArtworkTypes} from "@/types/ArtworkTypes";

export default async function Home() {
    const data = await getData();
    const artworks = Array.isArray(data.artworks) ? data.artworks.flat() : [];

    return (
        <div className="p-8">
            {artworks.map((artwork: ArtworkTypes) => (
                <div key={artwork.id} className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">{artwork.title}</h1>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={artwork.image} alt={artwork.title} className="w-90"/>
                </div>
            ))}
        </div>
    );
}