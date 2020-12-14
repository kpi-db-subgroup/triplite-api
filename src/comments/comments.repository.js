'use strict';

const Injection = require('../core/injection');

Injection.annotate(CommentsRepository,
  { injection: ['database', 'commentsEntityBuilder'] });

function CommentsRepository() {}

CommentsRepository.prototype.create = async function (comment) {
  const result = await this.database.run(`
    INSERT INTO comments(message, userId, placeId, commentId, isDeleted)
    VALUES(${comment.message}, ${comment.userId}, ${comment.placeId}, 
      ${comment.commentId}, ${comment.isDeleted})`);
  return result;
};

CommentsRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`SELECT * FROM comments WHERE id=${id}`);
  return this.commentEntityBuilder.getEntityFromRow(row);
};

CommentsRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM comments');
  return this.commentEntityBuilder.getEntitiesFromRows(rows);
};

CommentsRepository.prototype.update = async function (id, comment) {
  const result = await this.database.run(`
    UPDATE comments SET message=${comment.message}, userId=${comment.userId},
    placeId=${comment.placeId}, commentId=${comment.commentId},
    isDeleted=${comment.isDeleted} WHERE id=${id}`);
  return result;
};

CommentsRepository.prototype.delete = async function (id) {
  const result = await this.database.run(`DELETE FROM comments WHERE id=${id}`);
  return result;
};

module.exports = CommentsRepository;
