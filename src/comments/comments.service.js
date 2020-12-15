'use strict';

const Injection = require('../core/injection');

Injection.annotate(CommentsService, { injection: ['commentsRepository'] });
function CommentsService() {}

module.exports = CommentsService;
