import AdminPropertyList from './AdminPropertyList';
import AdminPriceList from './AdminPriceList';
import './Dashboard.scss'

const Dashboard = () => {
  
  
  
  return (
    <div className="admin-background">
      <div className="dashboard">
        <div className="dashboard-left">         
                    
        </div>
        <div className="dashboard-center">         
          <div className="admin-all-properties">
            <AdminPropertyList />  
          </div>
        </div>
        <div className="dashboard-right">         
          <div className="admin-all-properties">
            <AdminPriceList />  
          </div>     
        </div>       
      </div>
    </div>
  );
}
 
export default Dashboard;