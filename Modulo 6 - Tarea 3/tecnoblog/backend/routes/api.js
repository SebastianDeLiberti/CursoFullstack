var express = require('express');
var router = express.Router();

var postsModel = require('./../models/postsModel');
var enlacesModel = require('./../models/enlacesModel');
var nosotrosModel = require('./../models/nosotrosModel');

var cloudinary = require('cloudinary').v2;

////// INDEX ///////////////

router.get('/index', async function (req, res, next) {

    var posts = await postsModel.getPosts();

    posts = posts.map(post => {

        if (post.foto_usuario && post.portada) {

            const foto_usuario = cloudinary.url(post.foto_usuario, {

            //    width: 100,
           //     height: 100,
            //    crop: 'fill'

            });

            const portada = cloudinary.url(post.portada, {

            //    width: 100,
           //     height: 100,
           //     crop: 'fill'

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
    
    res.json(posts);

});

/////////// NOTICIAS ////////////

router.get('/noticias', async function (req, res, next) {

    var posts = await postsModel.getPosts();

    posts = posts.map(post => {

        if (post.foto_usuario && post.portada) {

            const foto_usuario = cloudinary.url(post.foto_usuario, {

             //   width: 55,
           //     height: 100,
             //   crop: 'fill'

            });

            const portada = cloudinary.url(post.portada, {

            //    width: 100,
   //             height: 100,
             //   crop: 'fill'

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

    var noticias = [];

    for ( let x = 0 ; x < posts.length ; x++ ) {

        if (posts[x].tipo == 'noticia') noticias[noticias.length] = posts[x];

    }

    res.json(noticias);

});

/////////// TUTORIALES ////////////

router.get('/tutoriales', async function (req, res, next) {

    var posts = await postsModel.getPosts();

    posts = posts.map(post => {

        if (post.foto_usuario && post.portada) {

            const foto_usuario = cloudinary.url(post.foto_usuario, {

              //  width: 55,
           //     height: 100,
             //   crop: 'fill'

            });

            const portada = cloudinary.url(post.portada, {

             //   width: 100,
   //             height: 100,
            //    crop: 'fill'

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

    var tutoriales = [];

    for ( let x = 0 ; x < posts.length ; x++ ) {

        if (posts[x].tipo == 'tutorial') tutoriales[tutoriales.length] = posts[x];

    }

    res.json(tutoriales);

});

//////////////////////// ENLACES ////////////////

router.get('/enlaces', async function (req, res, next) {

    var enlaces = await enlacesModel.getEnlaces();

    res.json(enlaces);

});

////////////// NOSOTROS //////////////////////

router.get('/nosotros', async function (req, res, next) {

    var nosotros = await nosotrosModel.getNosotros();
    
    nosotros = nosotros.map(nosotros_row => {

        if (nosotros_row.foto_perfil) {

            const foto_perfil = cloudinary.url(nosotros_row.foto_perfil, {

              //  width: 15,
            //    height: 80,
             //   crop: 'fill'

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

    res.json(nosotros);

});

///////////////////////////////////////////////////////////////////////////

module.exports = router;