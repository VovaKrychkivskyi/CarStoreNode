const {CREATE_USER, READ_USER, UPDATE_USER,DELETE_USER} = require(`../configs/email-actions.config`);

module.exports = {
  [CREATE_USER]: {
    subject: `[Car Shop] Create!`,
    templateFile: `create.user`
  },

  [READ_USER]: {
    subject: `[Car Shop] Read!`,
    templateFile: `read.user`
  },

  [UPDATE_USER]: {
    subject: `[Car Shop] Update!`,
    templateFile: `update.user`
  },

  [DELETE_USER]: {
    subject: `[Car Shop] Delete!`,
    templateFile: `delete.user`
  },
}