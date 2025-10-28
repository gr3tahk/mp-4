import getData from "@/lib/getData";
import {ArtworkTypes} from "@/types/ArtworkTypes";
import Image from "next/image";

export default async function Home() {
    const data = await getData();
    const artworks = Array.isArray(data.artworks)?data.artworks.flat():[];

    return (
        <>
            {
                artworks.map((artwork:ArtworkTypes) =>
                    <div key={artwork.id}>
                        <h1>{artwork.title}</h1>
                        <img src={artwork.image} alt={artwork.title}/>
                    </div>
                )
            }
        </>
    );
}
