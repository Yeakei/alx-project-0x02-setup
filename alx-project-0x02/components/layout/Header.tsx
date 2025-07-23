import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
        </div>
    );
};

export default Header;
