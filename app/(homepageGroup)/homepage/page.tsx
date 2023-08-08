import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage
      <h1>
      <Link href='/homepage/userdetails'>userdetails</Link>
      </h1>
      <div >
        <Link href='/homepage/userdetails'>this is a link to /homepage/userdetails normally this is a dynamic route and linking on this link will just navigate use to the route, but here I am also intercepting this with the help of parallel routes and intercepting routes</Link>
        <br />
        {/* <Link href='/homepage/user'>this is a link to /homepage/user normally this is a dynamic route and linking on this link will just navigate use to the route, but here I am also intercepting this with the help of parallel routes and intercepting routes</Link> */}
        <br />
      </div>
    </div>
  )
}

export default HomePage