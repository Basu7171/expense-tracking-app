const counterValidationSchema = {
    value:{
        in:['body'],
        exists:{
            errorMessage : 'This field is required'
        },
        notEmpty:{
            errorMessage:'value  cannot be empty'
        },
        isInt:{
            options:{min:0},
            errorMessage:"count value should be greater than or equal 0"
        },trim:true
    }
}

const counterIdValidationSchema={
    id:{
        in:['params'],
        isMongoId:{
            errorMessage:'Invalid MongoId'
        }
    }
}
module.exports = {
    counterValidationSchema,
    counterIdValidationSchema
}