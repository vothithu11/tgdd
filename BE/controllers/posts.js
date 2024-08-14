import PostProduct from '../models/postProduct.js';

export const getPosts = async (req, res) => {
    const { brand, ram, type, screen, storage, charger, isPromotion, price, keyword, category, demand, pricerange, page = 1, limit = 60 } = req.query;
   
    let filter = {};
    
    if (brand) filter.brand = brand;
    if (type) filter.type = type;
    if (ram) filter.ram = ram;
    if (screen) filter.screen = screen;
    if (storage) filter.storage = storage;
    if (charger) filter.charger = charger;
    if (isPromotion) filter.isPromotion = isPromotion; 
    if (category) filter.category = category;
    if (demand) filter.demand = demand;

    if (price) {
        const priceFilter = {};
        switch (price) {
            case 'below4':
                priceFilter.$lte = 4000000;
                break;
            case '4to10':
                priceFilter.$gte = 4000000;
                priceFilter.$lte = 10000000;
                break;
            case '10to20':
                priceFilter.$gte = 10000000;
                priceFilter.$lte = 20000000;
                break;
            case 'above20':
                priceFilter.$gte = 20000000;
                break;
            default:
                break;
        }
        filter.salePrice = priceFilter;
    }
    if (pricerange) {
        const priceLaptopFilter = {};
        switch (pricerange) {
            case 'below10':
                priceLaptopFilter.$lte = 10000000;
                break;
            case '10to20':
                priceLaptopFilter.$gte = 10000000;
                priceLaptopFilter.$lte = 20000000;
                break;
            case '20to30':
                priceLaptopFilter.$gte = 20000000;
                priceLaptopFilter.$lte = 30000000;
                break;
            case 'above30':
                priceLaptopFilter.$gte = 30000000;
                break;
            default:
                break;
        }
        filter.salePrice = priceLaptopFilter;
    }
    if (keyword) {
        const regex = new RegExp(keyword, 'i');
        filter.$or = [
            { title: { $regex: regex } },
            { desc: { $regex: regex } },
            { brand: { $regex: regex } },
            { category: { $regex: regex } },
            { type: { $regex: regex } },
            { demand: { $regex: regex } }
        ];
    }
    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
    };


    try {
        const postProducts = await PostProduct.paginate(filter, options);
        res.status(200).json(postProducts);
    } catch (error) {
        console.error('Error fetching posts:', error.message); 
        res.status(404).json({ message: error.message });
    }
}

export const getIdPost = async (req, res) => {
    const { id } = req.params;

    try {
        const postDetailProduct = await PostProduct.findById(id);

        if (!postDetailProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(postDetailProduct);
    } catch (error) {
        console.error('Error fetching post by ID:', error.message);
        res.status(404).json({ message: 'Invalid ObjectId' });
    }
}
export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostProduct(body);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error.message);
        res.status(400).json({ message: 'Error creating post' });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const updatedProduct = await PostProduct.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating post:', error.message);
      res.status(400).json({ message: 'Error updating post' });
    }
  }

  export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await PostProduct.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error.message);
        res.status(400).json({ message: 'Error deleting post' });
    }
}


