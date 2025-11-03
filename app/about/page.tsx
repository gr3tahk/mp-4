import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">About Medieval Art</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Study Medieval Art?</h2>
                <p className="mb-4">
                    Medieval art provides us with invaluable insights into the culture, technology,
                    and daily life of knights and warriors from centuries past. Each sword, piece of
                    armor, and manuscript illustration tells a story of craftsmanship, honor, and the
                    evolution of warfare.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What You'll Find</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">Authentic Medieval Weapons: Swords, daggers, and polearms used by knights throughout the Middle Ages</li>
                    <li className="mb-2">Armor & Protection: Chainmail, plate armor, and shields that defined medieval combat</li>
                    <li className="mb-2">Historical Context: Learn about the time periods, cultures, and craftsmanship behind each piece</li>
                    <li className="mb-2">Chivalric Culture: Discover how these artifacts reflect the ideals of knighthood and honor</li>
                </ul>
            </div>

            <div className="mb-8">
                <p className="mb-4">
                    Visit our gallery to view stunning images and learn about medieval knights and their equipment.
                </p>
                <Link href="/" className="text-blue-600 hover:underline text-lg">
                    View Gallery
                </Link>
            </div>
        </div>
    );
}