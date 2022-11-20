var pool = require('./bd');

async function getPosts() {

    var query = 'select * from posts';
    var rows = await pool.query(query);
    return rows;

}

async function insertPost(obj) {

    try {

        var query = 'insert into posts set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    }

    catch (error) {

        console.log(error);
        throw error;

    }

}

async function deletePost(id) {

    var query = 'delete from posts where id_post = ?';
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getPostById(id) {

    var query = 'select * from posts where id_post = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];

}

async function modifyPost(obj, id) {

    try {

        var query = 'update posts set ? where id_post = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }

    catch (error) {

        throw error;

    }

}

module.exports = { getPosts, insertPost, deletePost, getPostById, modifyPost }