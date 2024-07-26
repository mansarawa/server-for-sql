import connection from "../config/dbConfig.js";

export default async function createStudentController(req,res){
    const {name,fees,medium}=req.body;
    try {
        const data=await connection.query('INSERT INTO student (name,fees,medium) VALUES (?,?,?)',[name,fees,medium])
        if(data){
            return res.status(200).json({message:"insert success"})
            
        }
        return res.status(400).json({message:"insert unsuccess"})
    } catch (error) {
        
    }
}