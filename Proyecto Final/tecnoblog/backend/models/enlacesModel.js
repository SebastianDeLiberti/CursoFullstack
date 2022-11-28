var pool = require('./bd');

async function getEnlaces() {

    var query = 'select * from enlaces';
    var rows = await pool.query(query);
    return rows;

}

async function insertEnlaces(obj) {

    try {

        var query = 'insert into enlaces set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    }

    catch (error) {

        console.log(error);
        throw error;

    }

}

async function deleteEnlaces(id) {

    var query = 'delete from enlaces where id_enlace = ?';
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getEnlacesById(id) {

    var query = 'select * from enlaces where id_enlace = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];

}

async function modifyEnlaces(obj, id) {

    try {

        var query = 'update enlaces set ? where id_enlace = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }

    catch (error) {

        throw error;

    }

}

module.exports = { getEnlaces, insertEnlaces, deleteEnlaces, getEnlacesById, modifyEnlaces }