import connection from "../config/dbConfig.js";

export default async function updateStudentController(req,res){
    const {name,fees,medium}=req.body;
    const studentId=req.params.id;
    try {
        const updateData=await connection.query('UPDATE student SET name=? ,fees=?, medium=? WHERE id=?',[name,fees,medium,studentId])
        if(updateData){
            return res.status(200).json({message:"update success"})
        }
        return res.status(400).json({message:"update unsuccess"})
    } catch (error) {
        console.log(error)
    }
}