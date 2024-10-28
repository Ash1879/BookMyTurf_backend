const bookingController= (req,res,next) =>{
    try {
        

      res.json({message:"get booking"})

    } catch (error) {

        console.log(error);
        res.status(error.status || 500).json({error:error.message || "Internal server Error"})

    }
}
module.exports = {bookingController}