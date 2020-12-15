'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(CommentsService, { injections: ['commentsRepository'] });
function CommentsService() {}

module.exports = CommentsService;
