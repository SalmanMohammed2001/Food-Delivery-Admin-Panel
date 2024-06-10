// @ts-ignore
import {assets} from "../../assets/assets";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Add = () => {
    const [image, setImage] = useState<boolean>(false)

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "salad"
    })


    const onChangeHandler = (event: { target: { name: any; value: any; }; }) => {
        const name = event.target.name;
        const value = event.target.value
        setData(data => ({...data, [name]: value}))

    }

    const onSubmitHandler = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        // @ts-expect-error
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        // @ts-ignore
        formData.append("image", image)

        const response= await  axios.post("http://localhost:4000/api/food/add",formData)

        if(response.data.success){
            setImage(false)
            setData({
                name: '',
                description: '',
                price: '',
                category: "salad"
            })

        }else {
            toast.success(response.data.message)
        }


    }


    // @ts-ignore
    return (

        <div className={"add w-[70%] ml-[5vw] mt-[50px] text-[#6d6d6d] text-[16px]"}>
            <form className="flex-coll " onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-coll">
                    <p>upload Images</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className={"w-[120px]"}
                             alt=""/>
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id={"image"} hidden required/>
                </div>

                <div className={"add-product-name    flex-coll"}>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} type="text" name="name" placeholder={"Type Here"}/>
                </div>
                <div className={"add-product-description flex-coll"}>
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} name="description" rows={6}
                              placeholder={"Write content Here"}/>
                </div>

                <div className={"add-category-price flex gap-[20px] "}>
                    <div className="add-category flex-coll">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category" id="">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Veg">Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-coll">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} type="number" name="price" placeholder={"Price"}/>
                    </div>
                </div>
                <button type={"submit"}
                        className={"add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer"}>Add
                </button>
            </form>
        </div>

    )

}
export default Add