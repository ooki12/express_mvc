
exports.index = (req,res)=>{
    // res.send('homecontroller index')
    let data = {
        title: 'Index Page',
        message: 'Welcome to Homepage',
    }
    res.render('home/index.ejs',data)
}

exports.about = (req,res) => {
    let data = {
        title: 'About Page',
        message: 'this is about page',
        name: 'Tokyo Taro',
    }

    res.render('home/about.ejs',data)
}

exports.items=(req,res) =>{
    let items =[
        {name: 'Apple',price:150},
        {name: 'Orange',price:200},
        {name: 'Peach',price:350},
    ]
    let data = {
        items:items,
    }
    res.render('home/items.ejs',data)
}