'use strict';

const Injection = require('../core/injection');

Injection.annotate(CommentsController, { injections: ['commentsService'] });

function CommentsController() {}

module.exports = CommentsController;
