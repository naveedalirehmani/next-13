export async function generateStaticParams() {
    const posts = ['dynamic','static']
   
    return posts.map((post) => ({
      dashboardId: post,
    }))
}

function DynamicDashboard ({params}){
    const {dashboardId} = params
    return <div>
        DynamicDashboard
        <h1>
        {dashboardId}
        </h1>
    </div>
}

export default DynamicDashboard;