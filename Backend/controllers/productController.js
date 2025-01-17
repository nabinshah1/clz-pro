


//function for add product
const addProduct =async(req,res)=>{
    console.log("addproduct")
   /* try {
        const {name,description,price,category,subCategory, size, bestseller}=req.body

        const image1=req.files.image1[0]
        const image2=req.files.image2[0]
        const image3=req.files.image3[0]
        const image4=req.files.image4[0]

        console.log(name,description,price,category,subCategory, size, bestseller)
        console.log(image1,image2,image3,image4)


        res.json({})



    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:ErrorEvent.message})
        
    }*/



}
//function for List Product
const listProduct =async(req,res)=>{


}


//function for removing 

const removeproduct =async(req,res)=>{


}



const singleProduct =async(req,res)=>{


}

export {listProduct,addProduct,removeproduct,singleProduct}