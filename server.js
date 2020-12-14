//モジュール
const express = require('express')
const ejs = require('ejs')
const config = require('config')
//追加
const layouts = require('express-ejs-layouts')

//カスタムモジュール　読み込み
const routes = require('./routes')

//設定読み込み
const port = config.server.port
const host = config.server.host 

console.log(port)
console.log(host)

//Express　作成
const app = express()
//EJS　有効
app.set('ejs',ejs.renderFile)
app.set('view engine','ejs')
app.set('layout','layouts/layout')
app.use(layouts)

//ミドルウェア
app.use(express.json())

//URLエンコード
app.use(express.urlencoded({extended:true}))

//静的ファイル有効
app.use(express.static(__dirname + '/public'))

//ミドルウェアルーティング
app.use(routes)

//
app.listen(port,host,() =>{
    console.log('app listen:http://${host}:${post}')
});