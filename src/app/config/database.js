import mongoose from 'mongoose'

const DB_URI = 'mongodb://localhost:27017/InventarioDB'

module.exports = function() {
    const connect = function()  {
        connect.mongoose(
            DB_URI, {
                keepAlive: true,
                useNewUrlParer: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB Error')
                }else{
                    console.log('Conexion correcta.!!')
                }
            } 
        )
    }
}
export function connect()