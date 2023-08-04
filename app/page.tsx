import Link from 'next/link'

async function getUserName(username:string) {
  const response = await fetch('http://localhost:3000/api/username/naveedalirehmai',{cache:'no-cache'})
  const data = await response.json()
  return data
}

export default function Page() {

  // #second is id to scroll to a specific sections of the page
  // replace true to remove browser routing history
  // prefetch to prefetch the component. defaults to true.
  // we can use route.refresh to refresh a page so that if a value in database has changed we can see the results without refershing or change the state.

  
  const { message } = getUserName('naveedalirehmani')

  return <div>
    <h1>logged in user is {message}</h1>
    <Link href="/dashboard/#second" replace={true} prefetch={true}>Dashboard</Link>
    <br />
    hello
    <Link href="/homepage" replace={true} prefetch={true}>homePage</Link>
  </div>
}