import connection from "../config/dbConfig.js";

export default async function deleteStudentController(req,res){
    const id=req.params.id;
    try {
        const data=await connection.query('DELETE FROM student WHERE id=?',[id])
        if(data){
            return res.status(200).json({message:"delete success"})
        }
        return res.status(400).json({message:"delete unsuccess"})
    } catch (error) {
        console.log(error)
    }
}