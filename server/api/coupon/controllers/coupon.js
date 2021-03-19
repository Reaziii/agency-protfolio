'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOne(ctx) {
        const {id} = ctx.params;
        const check = strapi.query('coupon').findOne({CouponID : id});

        return check;
    },
};
