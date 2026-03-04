import AdminNavbar from "../../components/admin-navbar";
import SideBar from "../../components/side-bar"


const  Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <hr />
      <div className="app_content">
       <SideBar />
      </div>
    </div>
  )
}

export default Admin;