import express, { Request, Response } from 'express';
import { getBookByTitle, getAllBooks , getBookById, addBook } from './service/BooksService';
import type { Book } from './service/BooksService';
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to My Library");
})

app.get("/books",async (req,res) =>{
    if(req.query.title){
        const title = req.query.title as string;
        const filteredBooks = await getBookByTitle(title);
        res.json(filteredBooks);
    }else{
    res.json(await getAllBooks());   
    } 
})

app.get("/books/:id",async (req,res) =>{
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  if(book){
    res.json(book);
  }else{
    res.status(404).json("Book not found");
  }
})

app.post("/books",async (req, res) =>{
    const newBook: Book = req.body;
    await addBook(newBook)
    res.json(newBook);
    
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})

