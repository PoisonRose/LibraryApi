const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const database = {
    books: [],
    users: [],
    loans: [],
    bookIdCounter: 1,
    userIdCounter: 1,
    loanIdCounter: 1
};

const initializeData = () => {
    //livros
    const initialBooks = [
        {
            id: database.bookIdCounter++,
            title: "Fausto",
            author: "Johann Wolfgang von Goethe",
            genre: "Drama filosófico",
            publicationYear: 1808,
            available: true,
            description: "Uma obra-prima sobre um erudito que faz um pacto com Mefistófeles",
            language: "Alemão",
            pages: 492,
            edition: "Segunda parte publicada em 1832"
        },
        {
            id: database.bookIdCounter++,
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            genre: "Romance cavaleiresco",
            publicationYear: 1605,
            available: true,
            description: "A história do cavaleiro que luta contra moinhos de vento",
            language: "Espanhol",
            pages: 863,
            edition: "Primeira edição moderna"
        },
        {
            id: database.bookIdCounter++,
            title: "Odisseia",
            author: "Homero",
            genre: "Épico",
            publicationYear: -800,
            available: true,
            description: "A jornada de Ulisses de volta para casa após a Guerra de Troia",
            language: "Grego Antigo",
            pages: 384,
            edition: "Tradução contemporânea"
        },
        {
            id: database.bookIdCounter++,
            title: "Demian",
            author: "Herman Hesse",
            genre: "Romance filosófico",
            publicationYear: 1919,
            available: true,
            description: "A história de Emil Sinclair e sua jornada de autodescoberta",
            language: "Alemão",
            pages: 256,
            edition: "Edição crítica"
        },
        {
            id: database.bookIdCounter++,
            title: "A Metamorfose",
            author: "Franz Kafka",
            genre: "Ficção absurdista",
            publicationYear: 1915,
            available: true,
            description: "Gregor Samsa acorda transformado em um inseto gigante",
            language: "Alemão",
            pages: 96,
            edition: "Edição comentada"
        },
        {
            id: database.bookIdCounter++,
            title: "Crime e Castigo",
            author: "Fiódor Dostoiévski",
            genre: "Romance psicológico",
            publicationYear: 1866,
            available: true,
            description: "A história de Raskólnikov e seu dilema moral após cometer um assassinato",
            language: "Russo",
            pages: 671,
            edition: "Edição especial"
        },
        {
            id: database.bookIdCounter++,
            title: "Moby Dick",
            author: "Herman Melville",
            genre: "Romance marítimo",
            publicationYear: 1851,
            available: true,
            description: "A obsessiva perseguição do Capitão Ahab à baleia branca",
            language: "Inglês",
            pages: 585,
            edition: "Edição ilustrada"
        },
        {
            id: database.bookIdCounter++,
            title: "Hell Screen",
            author: "Ryūnosuke Akutagawa",
            genre: "Conto gótico",
            publicationYear: 1918,
            available: true,
            description: "Um artista obcecado pela perfeição em retratar o inferno",
            language: "Japonês",
            pages: 48,
            edition: "Coletânea de contos"
        },
        {
            id: database.bookIdCounter++,
            title: "The Dream of the Red Chamber",
            author: "Cao Xueqin",
            genre: "Romance familiar",
            publicationYear: 1791,
            available: true,
            description: "Uma das quatro grandes obras clássicas da literatura chinesa",
            language: "Chinês",
            pages: 2500,
            edition: "Edição completa"
        },
        {
            id: database.bookIdCounter++,
            title: "A Divina Comédia",
            author: "Dante Alighieri",
            genre: "Poema épico",
            publicationYear: 1320,
            available: true,
            description: "A jornada de Dante através do Inferno, Purgatório e Paraíso",
            language: "Italiano",
            pages: 798,
            edition: "Edição trilíngue"
        }
    ];

    //usuários
    const initialUsers = [
        {
            id: database.userIdCounter++,
            name: "Maria Silva",
            address: "Rua das Flores, 123",
            email: "maria.silva@email.com",
            phone: "(11) 98765-4321",
            activeLoans: 0,
            memberSince: "2023-01-15",
            preferences: ["Literatura Clássica", "Filosofia"]
        },
        {
            id: database.userIdCounter++,
            name: "João Santos",
            address: "Avenida Principal, 456",
            email: "joao.santos@email.com",
            phone: "(11) 91234-5678",
            activeLoans: 0,
            memberSince: "2023-03-20",
            preferences: ["Ficção", "Romance"]
        },
        {
            id: database.userIdCounter++,
            name: "Ana Oliveira",
            address: "Praça Central, 789",
            email: "ana.oliveira@email.com",
            phone: "(11) 92345-6789",
            activeLoans: 0,
            memberSince: "2023-06-10",
            preferences: ["Poesia", "Drama"]
        }
    ];

    database.books.push(...initialBooks);
    database.users.push(...initialUsers);

    const initialLoans = [
        {
            id: database.loanIdCounter++,
            userId: 1,
            bookId: 1,
            loanDate: new Date("2024-01-15"),
            dueDate: new Date("2024-01-29"),
            returned: true,
            returnDate: new Date("2024-01-28")
        },
        {
            id: database.loanIdCounter++,
            userId: 2,
            bookId: 3,
            loanDate: new Date("2024-02-01"),
            dueDate: new Date("2024-02-15"),
            returned: false
        }
    ];

    database.loans.push(...initialLoans);
};

const validateBook = (req, res, next) => {
    const { title, author, genre, publicationYear } = req.body;
    if (!title || !author || !genre || !publicationYear) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    next();
};

const validateUser = (req, res, next) => {
    const { name, address, email, phone } = req.body;
    if (!name || !address || !email || !phone) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    next();
};

//Livros (CRUD)
app.get('/books', (req, res) => {
    res.json(database.books);
});

app.get('/books/:id', (req, res) => {
    const book = database.books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
});

app.post('/books', validateBook, (req, res) => {
    const book = {
        id: database.bookIdCounter++,
        ...req.body,
        available: true
    };
    database.books.push(book);
    res.status(201).json(book);
});

app.put('/books/:id', validateBook, (req, res) => {
    const index = database.books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Livro não encontrado' });
    
    database.books[index] = {
        ...database.books[index],
        ...req.body
    };
    res.json(database.books[index]);
});

app.delete('/books/:id', (req, res) => {
    const index = database.books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Livro não encontrado' });
    
    database.books.splice(index, 1);
    res.status(204).send();
});

//Usuários (CRUD)
app.get('/users', (req, res) => {
    res.json(database.users);
});

app.get('/users/:id', (req, res) => {
    const user = database.users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
});

app.post('/users', validateUser, (req, res) => {
    const user = {
        id: database.userIdCounter++,
        ...req.body,
        activeLoans: 0
    };
    database.users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', validateUser, (req, res) => {
    const index = database.users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Usuário não encontrado' });
    
    database.users[index] = {
        ...database.users[index],
        ...req.body
    };
    res.json(database.users[index]);
});

app.delete('/users/:id', (req, res) => {
    const index = database.users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Usuário não encontrado' });
    
    database.users.splice(index, 1);
    res.status(204).send();
});

// Rota Empréstimos
app.get('/loans', (req, res) => {
    res.json(database.loans);
});

app.post('/loans', (req, res) => {
    const { userId, bookId } = req.body;
    const user = database.users.find(u => u.id === userId);
    const book = database.books.find(b => b.id === bookId);

    if (!user || !book) {
        return res.status(404).json({ error: 'Usuário ou livro não encontrado' });
    }

    if (!book.available) {
        return res.status(400).json({ error: 'Livro não disponível' });
    }

    if (user.activeLoans >= 3) {
        return res.status(400).json({ error: 'Limite de empréstimos atingido' });
    }

    const loan = {
        id: database.loanIdCounter++,
        userId,
        bookId,
        loanDate: new Date(),
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), 
        returned: false
    };

    book.available = false;
    user.activeLoans++;
    database.loans.push(loan);
    res.status(201).json(loan);
});

app.post('/loans/:id/return', (req, res) => {
    const loan = database.loans.find(l => l.id === parseInt(req.params.id));
    if (!loan || loan.returned) {
        return res.status(404).json({ error: 'Empréstimo não encontrado ou já devolvido' });
    }

    const user = database.users.find(u => u.id === loan.userId);
    const book = database.books.find(b => b.id === loan.bookId);

    loan.returned = true;
    loan.returnDate = new Date();
    book.available = true;
    user.activeLoans--;

    res.json(loan);
});

// Rota Relatórios
app.get('/reports/most-borrowed', (req, res) => {
    const bookLoans = database.books.map(book => {
        const loanCount = database.loans.filter(loan => loan.bookId === book.id).length;
        return { ...book, loanCount };
    });

    const sortedBooks = bookLoans.sort((a, b) => b.loanCount - a.loanCount);
    res.json(sortedBooks);
});

app.get('/reports/pending-loans', (req, res) => {
    const pendingLoans = database.loans
        .filter(loan => !loan.returned)
        .map(loan => {
            const user = database.users.find(u => u.id === loan.userId);
            const book = database.books.find(b => b.id === loan.bookId);
            return {
                loan,
                user: { id: user.id, name: user.name },
                book: { id: book.id, title: book.title }
            };
        });

    res.json(pendingLoans);
});

// TESTE
app.get('/', (req, res) => {
    res.json({
        message: "Bem-vindo à API da Biblioteca",
        endpoints: {
            books: "/books",
            users: "/users",
            loans: "/loans",
            reports: {
                mostBorrowed: "/reports/most-borrowed",
                pendingLoans: "/reports/pending-loans"
            }
        }
    });
});

initializeData();
app.listen(port, () => {
    console.log(`Biblioteca API rodando na porta ${port}`);
    console.log(`Dados iniciais carregados: ${database.books.length} livros, ${database.users.length} usuários, ${database.loans.length} empréstimos`);
});