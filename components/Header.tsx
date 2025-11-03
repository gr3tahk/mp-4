import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 test-xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4">Art Search</h2>
            <nav className="p-2 m-4">
                <ul>
                    <li>
                        <Link href="/" className={linkStyling}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={linkStyling}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}