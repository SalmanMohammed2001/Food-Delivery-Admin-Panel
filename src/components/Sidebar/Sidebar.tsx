// @ts-ignore
import {assets} from "../../assets/assets";


const Sidebar=()=>{
    return(
        <div className={"sidebar w-[18%] min-h-[100vh]   "}>
            <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
                <div className="sidebar-option  flex  items-center gap-[12px] ">
                    <img src={assets.add_icon} alt=""/>
                    <p>Add Items</p>
                </div>
                <div className="sidebar-option flex items-center gap-[12px] ">
                    <img src={assets.order_icon} alt=""/>
                    <p>List Items</p>
                </div>
                <div className="sidebar-option flex items-center gap-[12px] ">
                    <img src={assets.order_icon} alt=""/>
                    <p>Orders</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;