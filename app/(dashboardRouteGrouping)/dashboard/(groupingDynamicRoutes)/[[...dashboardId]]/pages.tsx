
function DynamicDashboard ({params}){
    const {dashboardId} = params
    return <div>
        DynamicDashboard for optional catch all
        <h1>
        {dashboardId}
        </h1>
    </div>
}

export default DynamicDashboard;