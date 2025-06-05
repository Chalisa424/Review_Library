import express, { Request, Response } from 'express';
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to My Library");
})

app.get("/books",(req,res) =>{
    if(req.query.title){
        const title = req.query.title as string;
        const filteredBooks = books.filter((book) => book.title.toLowerCase().startsWith(title.toLowerCase()));
        res.json(filteredBooks);
    }else{
    res.json(books);   
    } 
})

app.get("/books/:id",(req,res) =>{
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if(book){
    res.json(book);
  }else{
    res.status(404).json("Book not found");
  }
})

app.post("/books",(req, res) =>{
    const newBook: Book = req.body;
    newBook.id = books.length +1;
    books.push(newBook);
    res.json(newBook);
    
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})

interface Book {
    id: number;
    title: string;
    Author_name: string;
    description: string;
    groups: string;

}

const books: Book[] = [
    {
        id: 1,
        title: "The Silent Forest",
        Author_name: "Emily Stone",
        description: "A mysterious tale set in a quiet forest village hiding ancient secrets.",
        groups: "Fiction"
    },
    {
        id: 2,
        title: "Mastering JavaScript",
        Author_name: "Daniel Kim",
        description: "A comprehensive guide for learning JavaScript from beginner to advanced levels.",
        groups: "Programming"
    },
    {
        id: 3,
        title: "Ancient Civilizations",
        Author_name: "Dr. Laura Chen",
        description: "An exploration of early human societies and their lasting impact on the modern world.",
        groups: "History"
    },
    {
        id: 4,
        title: "Mindful Living",
        Author_name: "Sophie Nguyen",
        description: "A practical guide to incorporating mindfulness and balance into your daily life.",
        groups: "Self-help"
    },
    {
        id: 5,
        title: "Space Explorers",
        Author_name: "Raj Patel",
        description: "Discover the adventures of astronauts and the mysteries of the universe.",
        groups: "Science"
    },
    {
        id: 6,
        title: "The Art of Thai Cuisine",
        Author_name: "Pimchanok S.",
        description: "Traditional and modern Thai recipes with beautiful illustrations and cooking tips.",
        groups: "Cookbook"
    }

]