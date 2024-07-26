import connection from "../config/dbConfig.js";

export default async function oneStudentController(req,res){
    const id=req.params.id;
    try {
        const data=await connection.query(`SELECT * FROM student WHERE id=?`,[id])
        if(data){
            return res.status(200).json({data})
        }
    } catch (error) {
        console.log(error)
    }
}