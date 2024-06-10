import {useEffect, useState} from "react";
import axios from "axios";


const  List=()=>{

    const[list,setList]=useState([])


    const fetchList =async ()=>{
        const  response=  await axios.get('http://localhost:4000/api/food/list')
        console.log(response.data.data)
        if(response.data.success){
            setList(response.data.data)

        }else {
            alert('error')
        }

    }

    useEffect(()=>{
        fetchList()
    },[])

    return(
        <div className={"list add flex-coll  w-[70%] ml-[5vw] mt-[50px] text-[#6d6d6d] text-[16px]"}>
            <p>All Foods List</p>
                <div className="list-table">
                    <div className="list-table-format title bg-[#f9f9f9]">
                        <b>Image</b>
                        <b>Name</b>
                        <b>Category</b>
                        <b>Price</b>
                        <b>Action</b>
                    </div>
                    {list.map((item,index)=>{
                        // @ts-ignore
                        return <div key={index} className={"list-table-format"}>
                            <img src={`http://localhost:4000/images/`+item.image} alt="" className={"w-[50px]"} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                            <p>X</p>
                        </div>
                    })}
                </div>
        </div>
    )
}
export default List