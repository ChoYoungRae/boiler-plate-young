const mongoose = require('mongoose');

const userSchema = mongoose.Scheama({
  name:{
    type: String,
    maxlength:50
  },
  email:{
    type:String,
    trim:true,  //띄어쓰기제거
    unique:1    //중복 불가
  },
  password:{
    type:String,
    minlength:5
  },
  lastname:{  //뭔지 모르겠음 지워도됨.
    type:String,
    maxlength:50
  },
  role:{//관리자
      type:Number,
      default:0
  },
  image: String,
  token:{
    type:Number
  },
  tokenExp:{
    type:Number
  }
})

const User = mongoose.model('User',userSchema)

module.export = {User}
