// @ts-ignore
import {assets} from "../../assets/assets";
import {NavLink} from "react-router-dom";


const Sidebar=()=>{
    return(
        <div className={"sidebar w-[18%] min-h-[100vh]   "}>
            <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
                <NavLink to={"/add"} className="sidebar-option  flex  items-center gap-[12px] ">
                    <img src={assets.add_icon} alt=""/>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to={"/list"} className="sidebar-option flex items-center gap-[12px] ">
                    <img src={assets.order_icon} alt=""/>
                    <p>List Items</p>
                </NavLink>
                <NavLink to={"order"} className="sidebar-option flex items-center gap-[12px] ">
                    <img src={assets.order_icon} alt=""/>
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}
export default Sidebar;