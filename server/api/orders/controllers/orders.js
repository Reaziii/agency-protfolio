const { sanitizeEntity } = require('strapi-utils');
const jwt = require('jwt-decode')
module.exports = {

  async find(ctx) {
    const isauth = ctx.isAuthenticated();
    if(isauth!==true){
        return {message : "Login faild"}
    }
    const token =  ctx.request.header.authorization.split(' ')[1];  
    const decode = jwt(token)
    const userid = decode.id;
    const orders = strapi.query('Orders').find({UserID__ : userid})

    return orders;
  },
};