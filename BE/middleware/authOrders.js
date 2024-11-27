// const  authOrders = async (req, res, next)=>{
//     try {
//         const token = req.headers.authorization?.split(' ')[1];
//         if(token){
//             jwt.verify(token, 'test',(err,user)=>{
//                 if(err){
//                    return res.status(403).json("Token is not valid!");
//                 }
//                 req.user=user;
//                 if (!req.user.isAdmin || req.user.id !== req.params.id) {
//                     return res.status(403).json("You is not allow!");
//                 }
//                 next();
//             });
           
//         }
//     } catch (error) {
//         console.error( error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }

// }
// export default authOrders;