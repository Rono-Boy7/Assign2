let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect With Book Model

let Book = require('../models/book');

//Read Operation
// Get Route For Book List
router.get('/', (req,res,next)=> {
    Book.find((err, booklist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render("Book", {
                title: "Book List", Booklist: booklist
            })
        }
    });
});

// Add Operation
// Get Route For Displaying The Add-Page. Create Operation
router.get('/add', (req,res,next)=> {
    res.render('book/add', {title:"Add Book"})

});

// Post Route For Processing The Add-Page. Create Operation
router.post('/add', (req,res,next)=> {
    let newBook = Book ({
        "Name":req.body.Name,
        "Author":req.body.Author,
        "Published":req.body.Published,
        "Description":req.body.Description,
        "Price":req.body.Price
    });
    Book.create(newBook,(err,book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect("/book-list")
        }
    });
}); 

// Edit Operation
// Get Route For Displaying The Edit Operation. Update Operation
router.get('/edit/:id', (req,res,next)=> {
    let id = req.params.id;
    Book.findById(id, (err,bookToEdit)=> {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }
        else
        {
            res.render("book/edit", {title:"Edit Book", book: bookToEdit});
        }
    });
});

// Post Route For Displaying The Edit Operation. Update Operation
router.post('/edit/:id', (req,res,next)=> {
    let id = req.params.id;
    let updateBook = Book({
        "_id":id,
        "Name":req.body.Name,
        "Author":req.body.Author,
        "Published":req.body.Published,
        "Description":req.body.Description,
        "Price":req.body.Price
    });
    Book.updateOne({_id:id}, updateBook,(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }
        else
        {
            res.redirect("/book-list")
        }
    });
});

// Delete Operation
// Get To Delete The Delete Operation. Delete Operation
router.get('/delete/:id', (req,res,next)=> {
    let id = req.params.id;
    Book.deleteOne({_id:id},(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }
        else
        {
            res.redirect("/book-list")
        }
    });
});


module.exports = router;