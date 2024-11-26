import jwt from "jsonwebtoken";
// const  auth = async (req, res, next)=>{
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         const isCustomAuth = token.length < 500;
//         let decodedData;
//         if(token && isCustomAuth){
//             decodedData = jwt.verify(token, 'test');
//             req.userId = decodedData?.id;
//         }
//         next();
//     } catch (error) {
//         console.error( error);
//     }

// }
// export default auth;
const  auth = async (req, res, next)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(token){
            jwt.verify(token, 'test',(err,user)=>{
                if(err){
                   return res.status(403).json("Token is not valid!");
                }
                req.user=user;
                if (!req.user.isAdmin) {
                    return res.status(403).json("You is not admin!");
                }
                next();
            });
           
        }
    } catch (error) {
        console.error( error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}
export default auth;