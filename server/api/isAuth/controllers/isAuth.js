const { sanitizeEntity } = require('strapi-utils');
const jwt = require('jwt-decode')
module.exports = {

  async auth(ctx) {
    const isauth = ctx.isAuthenticated();
    return ctx;
    if(isauth!==true){
        return false;
    }
    return true;

  },
};