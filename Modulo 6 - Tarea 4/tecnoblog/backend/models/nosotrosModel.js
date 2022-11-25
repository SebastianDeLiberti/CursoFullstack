var pool = require('./bd');

async function getNosotros() {

    var query = 'select * from nosotros';
    var rows = await pool.query(query);
    return rows;

}

async function insertNosotros(obj) {

    try {

        var query_aux = 'select usuario from usuarios where id = ?'
        var nombre_usuario = await pool.query(query_aux, [obj.id_usuario]);

        if ( nombre_usuario.length > 0 ) {

            obj.nombre_usuario = nombre_usuario[0].usuario;

        }

        else {

            obj.nombre_usuario = 'desconocido';

        }   

        var query = 'insert into nosotros set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    }

    catch (error) {

        console.log(error);
        throw error;

    }

}

async function deleteNosotros(id) {

    var query = 'delete from nosotros where id_nosotros = ?';
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getNosotrosById(id) {

    var query = 'select * from nosotros where id_nosotros = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];

}

async function modifyNosotros(obj, id) {

    try {

        var query_aux = 'select usuario from usuarios where id = ?'
        var nombre_usuario = await pool.query(query_aux, [obj.id_usuario]);

        if ( nombre_usuario.length > 0 ) {

            obj.nombre_usuario = nombre_usuario[0].usuario;

        }

        else {

            obj.nombre_usuario = 'desconocido';

        }   

        var query = 'update nosotros set ? where id_nosotros = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;

    }

    catch (error) {

        throw error;

    }

}

module.exports = { getNosotros, insertNosotros, deleteNosotros, getNosotrosById, modifyNosotros }