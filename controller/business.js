// Connect to our model
let Business = require('../models/business');

/* GET users listing. */
module.exports.list = function (req, res, next) {
    Business.find((err, businessList) => {
        //console.log(businessList);
        if (err) {
            return console.error(err);
        }
        else {
            res.render('business/list', { title: 'Business List', BusinessList: businessList, userName: req.user ? req.user.username : '' })
        }
    })
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            // console.log(itemToEdit);
            res.render('business/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });

}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    // console.log(req.body);

    let updatedItem = Business({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email

    });

    // console.log(updatedItem);

    Business.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    let newItem = Business();

    res.render('business/add_edit', {
        title: 'Add a new Item',
        item: newItem,
        userName: req.user ? req.user.username : ''
        
    })          
}

module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Business({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    Business.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business/list');
        }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}