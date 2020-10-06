// const authPost = async (req, res, next) => {
//     try {
//         const token = req.header('Authorization').replace('Bearer ','');
//         if(token !== process.env.MYSECRET_KEY) {
//             throw new Error();
//         }
        
//         next();
//     } catch(e) {
//         res.status(401).json({error : "Please authenticate"});
//     }
// };

// module.exports = {
//     authPost
// }