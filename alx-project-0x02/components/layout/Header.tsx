import Link from "next/link"

export const Header = () => {
  return (
    <div>
      <Link href="home">Home</Link>
      <Link href="about">About</Link>
    </div>
  )
}