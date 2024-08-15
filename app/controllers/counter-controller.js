const Counter = require('../models/counter-model')
const {validationResult} = require('express-validator')
counterCltr = {}
counterCltr.create = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    Counter.create(body)
    .then((count)=>{
        res.status(201).json(count)
    })
    .catch((err)=>{
        res.status(500).json({error:'something went wrong'})
    })
}

counterCltr.list = (req,res)=>{
    Counter.find()
    .then((counts)=>{
        res.status(200).json(counts)
    })
    .catch((err)=>{
        res.status(500).json({errors:"Something went Wrong"})
    })

}

counterCltr.show = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
    const id=req.params.id
    Counter.findById(id)
    .then((counter)=>{
        res.status(200).json(counter)
    })
    .catch((err)=>{
        res.status(500).json("something went wrong")
    })
}

counterCltr.delete = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    Counter.findByIdAndDelete(id)
    .then((counter)=>{
        res.status(200).json(counter)
    })
    .catch((err)=>{
        res.status(500).json("something went wrong")
    })
}

counterCltr.update = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }

    const id= req.params.id
    const body = req.body
    Counter.findByIdAndUpdate(id,body,{new:true})
    .then((counter)=>{
        res.status(200).json(counter)
    })
    .catch((err)=>{
        res.status(500).json('something went wrong')
    })
}

module.exports = counterCltr