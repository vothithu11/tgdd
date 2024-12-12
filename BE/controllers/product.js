import Product from '../models/product.js';

// export const getPosts = async (req, res) => {
//     const { brand, ram, type, screen, storage, charger, isPromotion, price, keyword, category, demand, pricerange} = req.query;
   
//     let filter = {};
    
//     if (brand) filter.brand = brand;
//     if (type) filter.type = type;
//     if (ram) filter.ram = ram;
//     if (screen) filter.screen = screen;
//     if (storage) filter.storage = storage;
//     if (charger) filter.charger = charger;
//     if (isPromotion) filter.isPromotion = isPromotion; 
//     if (category) filter.category = category;
//     if (demand) filter.demand = demand;

//     if (price) {
//         const priceFilter = {};
//         switch (price) {
//             case 'below4':
//                 priceFilter.$lte = 4000000;
//                 break;
//             case '4to10':
//                 priceFilter.$gte = 4000000;
//                 priceFilter.$lte = 10000000;
//                 break;
//             case '10to20':
//                 priceFilter.$gte = 10000000;
//                 priceFilter.$lte = 20000000;
//                 break;
//             case 'above20':
//                 priceFilter.$gte = 20000000;
//                 break;
//             default:
//                 break;
//         }
//         filter.salePrice = priceFilter;
//     }
//     if (pricerange) {
//         const priceLaptopFilter = {};
//         switch (pricerange) {
//             case 'below10':
//                 priceLaptopFilter.$lte = 10000000;
//                 break;
//             case '10to20':
//                 priceLaptopFilter.$gte = 10000000;
//                 priceLaptopFilter.$lte = 20000000;
//                 break;
//             case '20to30':
//                 priceLaptopFilter.$gte = 20000000;
//                 priceLaptopFilter.$lte = 30000000;
//                 break;
//             case 'above30':
//                 priceLaptopFilter.$gte = 30000000;
//                 break;
//             default:
//                 break;
//         }
//         filter.salePrice = priceLaptopFilter;
//     }
//     if (keyword) {
//         const regex = new RegExp(keyword, 'i');
//         filter.$or = [
//             { title: { $regex: regex } },
//             { desc: { $regex: regex } },
//             { brand: { $regex: regex } },
//             { category: { $regex: regex } },
//             { type: { $regex: regex } },
//             { demand: { $regex: regex } }
//         ];
//     }
   


//     try {
//         const postProducts = await PostProduct.find(filter);
//         res.status(200).json(postProducts);
//     } catch (error) {
//         console.error('Error fetching posts:', error.message); 
//         res.status(404).json({ message: error.message });
//     }
// }
export const getProducts = async (req, res) => {
    try {
    const queryObj = {...req.query};
   
    const excludedFileds  = ['page', 'sort', 'limit','fields','keyword'];
    excludedFileds.forEach(el=> delete queryObj[el]);
    
 
    //filter $
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    const validQueryObj = JSON.parse(queryStr);
    Object.keys(validQueryObj).forEach(key => {
        if (validQueryObj[key] === "") {
            delete validQueryObj[key];
        }
    });
  

    let query = Product.find(validQueryObj);
    //sort
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
       query = query.sort(sortBy);
      } 

    //pagination
    // if (req.query.page && req.query.limit) {
    //     const page = req.query.page * 1 || 1;
    //     const limit = req.query.limit * 1 ||100;
    //     const skip = (page - 1) * limit;
    
    //     query = query.skip(skip).limit(limit);
    //   } 
      if (req.query.keyword) {
        const regex = new RegExp(req.query.keyword, 'i');
        query = query.find({
            $or: [
                { title: { $regex: regex } },
                { desc: { $regex: regex } },
                { brand: { $regex: regex } },
                { category: { $regex: regex } },
                { type: { $regex: regex } },
                { demand: { $regex: regex } }
            ]
        });
    }

        const Products = await query;
        res.status(200).json(Products);
    } catch (error) {
        console.error('Error fetching products:', error.message); 
        res.status(404).json({ message: error.message });
    }
}

export const getIdProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const detailProduct = await Product.findById(id);

        if (!detailProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(detailProduct);
    } catch (error) {
        console.error('Error fetching product by ID:', error.message);
        res.status(404).json({ message: 'Invalid ObjectId' });
    }
}
export const createProduct = async (req, res) => {
    const body = req.body;
    const newProduct = new Product(body);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(400).json({ message: 'Error creating product' });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error.message);
      res.status(400).json({ message: 'Error updating product' });
    }
  }

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(400).json({ message: 'Error deleting product' });
    }
}


