var pool = require('./bd');

async function getPosts() {

    var query = 'select * from posts order by id_post desc';
    var rows = await pool.query(query);
    return rows;

}

async function insertPost(obj) {

    try {

        var query_aux = 'select usuario from usuarios where id = ?';
        var nombre_usuario = await pool.query(query_aux, [obj.id_usuario]);

        var query_aux2 = 'select foto_perfil from nosotros where id_usuario = ?';
        var foto_usuario = await pool.query(query_aux2, [obj.id_usuario]);

        if ( nombre_usuario.length > 0 ) {

            obj.nombre_usuario = nombre_usuario[0].usuario;
            obj.foto_usuario = foto_usuario[0].foto_perfil;

        }

        else {

            obj.nombre_usuario = 'desconocido';
            obj.foto_usuario = 'no_profile_image_uualrz';

        }   

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

        var query_aux = 'select usuario from usuarios where id = ?';
        var nombre_usuario = await pool.query(query_aux, [obj.id_usuario]);

        var query_aux2 = 'select foto_perfil from nosotros where id_usuario = ?';
        var foto_usuario = await pool.query(query_aux2, [obj.id_usuario]);

        if ( nombre_usuario.length > 0 ) {

            obj.nombre_usuario = nombre_usuario[0].usuario;
            obj.foto_usuario = foto_usuario[0].foto_perfil;

        }

        else {

            obj.nombre_usuario = 'desconocido';
            obj.foto_usuario = 'no_profile_image_uualrz';

        }   

        var query = 'update posts set ? where id_post = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }

    catch (error) {

        throw error;

    }

}

module.exports = { getPosts, insertPost, deletePost, getPostById, modifyPost }