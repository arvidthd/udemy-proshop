import bycript from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'admin@gmail.com',
        password: bycript.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: bycript.hashSync('1234567', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        password: bycript.hashSync('12345678', 10),
        isAdmin: false,
    },
];

export default users;