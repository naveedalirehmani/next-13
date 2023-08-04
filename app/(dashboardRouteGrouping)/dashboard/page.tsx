import Link from "next/link";
import { Tweet } from 'react-tweet'
 
export default function Page() {
    return <div>
        
        <Tweet id="1673894319957180416" />
        
        <div id="first" style={{border:'1px solid white', height:'100vh'}}>
        <h1>Hello, Dashboard Page!</h1>
            <Link href='/dashboard/:dynamic'>dynamicLink</Link>
        </div>
        <div id="second" style={{border:'1px solid white', height:'100vh'}}>
            <Link href='/dashboard/:dynamico'>dynamic link but not in generateStaticParams</Link>
        </div>
        <div>
            <Link href='/'>goto home</Link>
        </div>
    </div>
}