const express = require('express')

const homecontroller = require('./controllers/homecontroller')
const router = express.Router()

// //ルーティングの設定
// router.get('/',(req,res)=>{
//     res.send('Hello routes /')
// })

router.get('/',homecontroller.index)
router.get('/about',homecontroller.index)
router.get('/items',homecontroller.index)

module.exports = router