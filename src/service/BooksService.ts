export interface Book {
    id: number;
    title: string;
    Author_name: string;
    description: string;
    groups: string;
}

export const books: Book [] = [
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

    export function getBookByTitle(title : string) : Promise <Book[]>{
        const filteredBooks = books.filter((book)=> book.title.toLowerCase().startsWith(title.toLowerCase()));
        return Promise.resolve(filteredBooks);
    }

    export function getAllBooks(): Promise <Book[]>{
        return Promise.resolve(books);
    }

    export function getBookById(id: number): Promise<Book | undefined> {
        const book = books.find((book) => book.id === id);
        return Promise.resolve(book);
    }

    export function addBook(newBook: Book): Promise <Book> {
        newBook.id = books.length + 1;
        books.push(newBook);
        return Promise.resolve(newBook);
    }