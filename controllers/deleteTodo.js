//import todo model
const Todo = require("../models/Todo");


exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body;
       const todo = await Todo.findByIdAndDelete(
        {_id:id},
        {title,description ,updatedAt: Date.now()}
        )
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Deleted Successfully'
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
            success:false,
            data:"internal server error",
            message:err.message,
        }
        );
    }
};