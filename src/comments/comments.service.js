'use strict';

const Injection = require('../core/injection');

Injection.annotate(CommentsService, { injections: ['commentsRepository'] });
function CommentsService() {}

module.exports = CommentsService;
