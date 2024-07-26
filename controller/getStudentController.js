import connection from "../config/dbConfig.js";

async function getStudentController(req,res){
    try {    
    const getAll=await connection.query('SELECT * FROM student')

    if(getAll){
        return res.json({getAll})
    }return res.json({message:"not found"})
} catch (error) {
    console.log(error)
}
}
export default getStudentController;