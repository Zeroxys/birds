const express = require("express")
const app = express()
const port = 8080||process.env.PORT

const votes = {}

app.use(express.static('public'))

app.get('/votes', (req,res)=>{
	res.status(200).json(votes)
})

app.post('/votes/:id', (req,res) => {
	var id = req.params.id

	if (votes[id] === undefined){
		votes[id] = 1
	}else{
		votes[id] = votes[id] +1		
	}

	res.status(200).json({ votes : votes[id] })
})

app.listen(port, (err) => {
	if (err){
		console.log(`Ha ocurrido el siguiente error: ${err}`)
	};

	console.log(`servidor escuchando en puerto : ${port}`)
})