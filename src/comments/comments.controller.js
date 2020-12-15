'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(CommentsController, { injections: ['commentsService'] });
function CommentsController() {}

module.exports = CommentsController;
