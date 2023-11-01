import mongoose from 'mongoose'

export async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI!)
		const connection = mongoose.connection
		connection.on('connected', () => {
			console.log('mongodb connected successfully')
		})
		connection.on('error', (error) => {
			console.log(
				'mongodb connection error. Please make sure mongod is running.' + error
			)
			process.exit()
		})
	} catch (error) {
		console.log('something went wrong')
		console.log(error)
	}
}

// const connect = () => {
//     mongoose.connect(process.env.MONGO_URI!).then((data)=>{
//         console.log(`mongodb is connected with the server: ${data.connection.host}`)
//     }).catch((error)=>{
//         console.log("mongodb connection error. Please make sure that the server of mongodb is running"+error);
//         process.exit();
//     })
// }
