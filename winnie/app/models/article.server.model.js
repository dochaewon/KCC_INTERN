var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    created : { //회의일시
        type : Date,
        default : Date.now
    },
    title : { //회의제목
        type : String,
        default : '',
        trim : true ,
        required : 'Title cannot be blank'
    },
    personalDetails: [{
      company: {
         type: String,
         default:'',
         trim:true
      },
      rank: {
         type: String,
         default:'',
         trim:true
      },
      name: {
         type: String,
         default:'',
         trim:true
      }
    }],
    date : {//일시
        type : Date,
        default : '',
        trim : true ,
        required : 'Date cannot be blank'
    },
    place : { //장소
        type : String,
        default : '',
        trim : true ,
        required : 'Place cannot be blank'
    },

    content : {//회의내용
        type : String,
        default : '',
        trim : false
    },
    creator : {//작성자
        type : Schema.ObjectId,
        ref : 'User'
    },
    topic : { //회의안건
      type : String,
      default : '',
      trim : true ,
      required : 'topic cannot be blank'
    },
    approver : { //승인자
      type : String,
      default : '',
      trim : true
    },
    approverDate : { //승인자
      type : String,
      default : '',
      trim : true
    },
    approver2 : { //승인자
      type : String,
      default : '',
      trim : true
    },
    approverDate2 : { //승인자
      type : String,
      default : '',
      trim : true
    }
});

mongoose.model('Article',  ArticleSchema );
