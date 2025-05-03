import pkg  from 'pg';

const { Pool } = pkg;

const pgObj = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'React',
    password: 'okudera2003',
    port: 3000,
});

export default pgObj;