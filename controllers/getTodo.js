//import todo model
const Todo = require("../models/Todo");


exports.getTodo = async(req,res) => {
    try{
       const response = await Todo.find() ({});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Fetched Successfully'
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

exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
       const response = await Todo.findById({_id:id});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Fetched id Successfully'
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