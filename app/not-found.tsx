import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found /app</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home</Link>
      </p>
    </div>
  )
}