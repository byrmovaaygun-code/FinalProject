import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://aygunabbf206:bdu25code@cluster0.xf5oxen.mongodb.net')
.then(()=>(console.log("connected")))
.catch(()=>(console.log("err")))

const ShopSchema = new mongoose.Schema({
  name: String,
  img:String,
  price:Number
});

const Movie = mongoose.model('Movie', ShopSchema);



app.get  ('/shops', async (req, res) => {
    const user=await Movie.find()
  res.send(user)
})

app.get ('/shops/:id', async (req, res) => {
     let {id}=req.params
    const user=await Movie.findById(id)
  res.send(user)
})
app.delete ('/shops/:id', async (req, res) => {
     let {id}=req.params
    const user=await Movie.findByIdAndDelete(id)
  res.send(user)
})
app.post ('/shops', async (req, res) => {
     let {body}=req
    const user=await Movie.create(body)
  res.send(user)
})
app.put ('/shops/:id', async (req, res) => {
     let {body}=req
      let {id}=req.params
    const user=await Movie.findByIdAndUpdate(id,body)
  res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})