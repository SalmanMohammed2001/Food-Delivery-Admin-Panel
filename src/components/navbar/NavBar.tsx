
// @ts-ignore
import {assets} from '../../assets/assets.js'
const NavBar=()=>{
    return(
        <div>
            <div className="navbar flex items-center justify-between py-[8px] px-[4%]">
                <img className={"logo max-w-[10%]"} src={assets.logo} alt=""/>
                <img className={"profile w-[40px]"} src={assets.profile_image} alt=""/>
            </div>
        </div>
    )
}
export default NavBar