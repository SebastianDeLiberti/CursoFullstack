var express = require('express');
var router = express.Router();

var postsModel = require('../../models/postsModel');


router.get('/', async function(req, res, next) {

  var posts = await postsModel.getPosts();

  res.render('admin/administracion', { 
  
    layout: 'admin/layout',
    persona: req.session.nombre,
    posts

  });

});



router.get('/agregar', async function(req, res, next) {

  res.render('admin/agregar', { 
  
    layout: 'admin/layout',

  });
  
});


router.post('/agregar', async(req, res, next) => {

  try {

    if (req.body.id_usuario != "" && req.body.fecha != "" && req.body.tipo != "" && req.body.portada != "" && req.body.titulo != "" && req.body.cuerpo != "" ) {

      await postsModel.insertPost(req.body);
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

router.get('/eliminar/:id', async (req, res, next) => {

  var id = req.params.id;

  await postsModel.deletePost(id);
  res.redirect('/admin/administracion');

});

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

    var obj = {

      id_usuario: req.body.id_usuario,
      fecha: req.body.fecha,
      tipo: req.body.tipo,
      portada: req.body.portada,
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo

    }

    await postsModel.modifyPost(obj, req.body.id_post);
    res.redirect('/admin/administracion');

  }

  catch (error) {

    res.render('admin/modificar', {

      layout: 'admin/layout',
      error: true,
      message: 'No se pudo modificar la novedad'

    })

  }

});

module.exports = router;