var express = require('express');
var router = express.Router();

var postsModel = require('../../models/postsModel');
var enlacesModel = require('../../models/enlacesModel');
var nosotrosModel = require('../../models/nosotrosModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

//////////////////////// GET (POSTS, NOSOTROS, ENLACES) ///////////////////////////////////////

router.get('/', async function (req, res, next) {
  
  var posts = await postsModel.getPosts();
  var nosotros = await nosotrosModel.getNosotros();
  var enlaces = await enlacesModel.getEnlaces();
  
  posts = posts.map(post => {

    if (post.foto_usuario && post.portada) {
      
      const foto_usuario = cloudinary.image(post.foto_usuario, {
   
        width: 80,
        height: 80,
        crop: 'fill'

      });

      const portada = cloudinary.image(post.portada, {

        width: 80,
        height: 80,
        crop: 'fill'

      });

      return {

        ...post,
        foto_usuario,
        portada

      }

    }

    else {

      return {

        ...post,
        foto_usuario: '',
        portada: ''

      }

    }

  });

  nosotros = nosotros.map(nosotros_row => {

    if (nosotros_row.foto_perfil) {

      const foto_perfil = cloudinary.image(nosotros_row.foto_perfil, {

        width: 80,
        height: 80,
        crop: 'fill'

      });

      return {

        ...nosotros_row,
        foto_perfil

      }

    }

    else {

      return {

        ...nosotros_row,
        foto_perfil: ''

      }

    }

  });

  res.render('admin/administracion', {

    layout: 'admin/layout',
    persona: req.session.nombre,
    posts,
    nosotros,
    enlaces

  });

});

////////// AGREGAR (POST) ////////// 

router.get('/agregar', async function (req, res, next) {

  res.render('admin/agregar', {

    layout: 'admin/layout',

  });

});

router.post('/agregar', async (req, res, next) => {

  try {

    var portada = '';

    if ( req.files && Object.keys(req.files).length > 0 ) {

      imagen = req.files.portada;
      portada = (await uploader(imagen.tempFilePath)).public_id;

    }

    else {

      portada = 'no_image_rtpy6t';

    }

    if (req.body.id_usuario != "" && req.body.fecha != "" && req.body.tipo != "" && req.body.titulo != "" && req.body.cuerpo != "" ) {

      await postsModel.insertPost({

        ...req.body,
        portada

      });
      res.redirect('/admin/administracion');

    }

    else {

      res.render('admin/agregar', {

        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'

      });

    }

  }

  catch (error) {

    res.render('admin/agregar', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el post'

    });

  }

});

////////// ELIMINAR (POST) ////////// 

router.get('/eliminar/:id', async (req, res, next) => {

  var id = req.params.id;

  let post = await postsModel.getPostById(id);

  if (post.portada && post.portada != 'no_image_rtpy6t' ) {

    await (destroy(post.portada));

  }

  await postsModel.deletePost(id);
  res.redirect('/admin/administracion');

});

////////// MODIFICAR (POST) ////////// 

router.get('/modificar/:id', async (req, res, next) => {

  var id = req.params.id;
  var post = await postsModel.getPostById(id);

  res.render('admin/modificar', {

    layout: 'admin/layout',
    post

  })

});

router.post('/modificar', async (req, res, next) => {

  try {

    let portada = req.body.portada_original;

    if (req.files && Object.keys(req.files).length > 0) {

      imagen = req.files.portada;
      portada = (await uploader(imagen.tempFilePath)).public_id;

      if (req.body.borrar_portada === "1" && req.body.portada_original && req.body.portada_original != 'no_image_rtpy6t' ) {

        await (destroy(req.body.portada_original));
  
      }      

    }

    else {

      if (req.body.borrar_portada === "1" && req.body.portada_original && req.body.portada_original != 'no_image_rtpy6t' ) {

        portada = 'no_image_rtpy6t';
        await (destroy(req.body.portada_original));
  
      }

    }

    var obj = {

      id_usuario: req.body.id_usuario,
      fecha: req.body.fecha,
      tipo: req.body.tipo,
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo,
      portada

    }

    await postsModel.modifyPost(obj, req.body.id_post);
    res.redirect('/admin/administracion');

  }

  catch (error) {

    res.render('admin/modificar', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el post'

    })

  }

});

////////// AGREGAR (NOSOTROS) ////////// 

router.get('/agregarnosotros', async function (req, res, next) {

  res.render('admin/agregarnosotros', {

    layout: 'admin/layout',

  });

});

router.post('/agregarnosotros', async (req, res, next) => {

  try {

    var foto_perfil = '';

    if ( req.files && Object.keys(req.files).length > 0 ) {

      imagen = req.files.foto_perfil;
      foto_perfil = (await uploader(imagen.tempFilePath)).public_id;

    }

    else {

      foto_perfil = 'no_profile_image_uualrz';

    }

    if (req.body.id_usuario != "" && req.body.texto != "" ) {

      await nosotrosModel.insertNosotros({

        ...req.body,
        foto_perfil

      });
      res.redirect('/admin/administracion');

    }

    else {

      res.render('admin/agregarnosotros', {

        layout: 'admin/layout',
        error: true,
        message: 'La id y el texto son necesarios'

      });

    }

  }

  catch (error) {

    res.render('admin/agregarnosotros', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el perfil'

    });

  }

});

////////// MODIFICAR (NOSOTROS) ////////// 

router.get('/modificarnosotros/:id', async (req, res, next) => {

  var id = req.params.id;
  var nosotros_row = await nosotrosModel.getNosotrosById(id);

  res.render('admin/modificarnosotros', {

    layout: 'admin/layout',
    nosotros_row

  })

});

router.post('/modificarnosotros', async (req, res, next) => {

  try {

    let foto_perfil = req.body.foto_perfil_original;

    if (req.files && Object.keys(req.files).length > 0) {

      imagen = req.files.foto_perfil;
      foto_perfil = (await uploader(imagen.tempFilePath)).public_id;

      if (req.body.borrar_foto_perfil === "1" && req.body.foto_perfil_original && req.body.foto_perfil_original != 'no_profile_image_uualrz' ) {

        await (destroy(req.body.foto_perfil_original));

      }

    }

    else {

      if (req.body.borrar_foto_perfil === "1" && req.body.foto_perfil_original && req.body.foto_perfil_original != 'no_profile_image_uualrz' ) {

        foto_perfil = 'no_profile_image_uualrz';
        await (destroy(req.body.foto_perfil_original));

      }

    }

    var obj = {

      id_usuario: req.body.id_usuario,
      texto: req.body.texto,
      sm_face: req.body.sm_face,
      sm_twit: req.body.sm_twit,
      sm_inst: req.body.sm_inst,
      foto_perfil

    }

    await nosotrosModel.modifyNosotros(obj, req.body.id_nosotros);
    res.redirect('/admin/administracion');

  }

  catch (error) {

    res.render('admin/modificarnosotros', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el perfil'

    })

  }

});

////////// ELIMINAR (NOSOTROS) ////////// 

router.get('/eliminarnosotros/:id', async (req, res, next) => {

  var id = req.params.id;

  let nosotros_row = await nosotrosModel.getNosotrosById(id);

  if (nosotros_row.foto_perfil && nosotros_row.foto_perfil != 'no_profile_image_uualrz' ) {

    await (destroy(nosotros_row.foto_perfil));

  }

  await nosotrosModel.deleteNosotros(id);
  res.redirect('/admin/administracion');

});

////////// AGREGAR (ENLACES) ////////// 

router.get('/agregarenlaces', async function (req, res, next) {

  res.render('admin/agregarenlaces', {

    layout: 'admin/layout',

  });

});

router.post('/agregarenlaces', async (req, res, next) => {

  try {

    if (req.body.nombre != "" && req.body.enlace != "" && req.body.descripcion != "" ) {

      await enlacesModel.insertEnlaces(req.body);
      res.redirect('/admin/administracion');

    }

    else {

      res.render('admin/agregarenlaces', {

        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'

      });

    }

  }

  catch (error) {

    res.render('admin/agregarenlaces', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el post'

    });

  }

});

////////// MODIFICAR (ENLACES) ////////// 

router.get('/modificarenlaces/:id', async (req, res, next) => {

  var id = req.params.id;
  var enlace = await enlacesModel.getEnlacesById(id);

  res.render('admin/modificarenlaces', {

    layout: 'admin/layout',
    enlace

  })

});

router.post('/modificarenlaces', async (req, res, next) => {

  try {

    var obj = {

      nombre: req.body.nombre,
      enlace: req.body.enlace,
      descripcion: req.body.descripcion

    }

    await enlacesModel.modifyEnlaces(obj, req.body.id_enlace);
    res.redirect('/admin/administracion');

  }

  catch (error) {

    res.render('admin/modificarenlaces', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar el enlace'

    })

  }

});

////////// ELIMINAR (ENLACES) ////////// 

router.get('/eliminarenlaces/:id', async (req, res, next) => {

  var id = req.params.id;

  await enlacesModel.deleteEnlaces(id);
  res.redirect('/admin/administracion');

});

//////////////////////////////////////////////////////////////////////

module.exports = router;