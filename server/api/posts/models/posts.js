const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.Title_English) {
        data.Slug = slugify(data.Title_English, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.Title_English) {
        data.Slug = slugify(data.Title_English, {lower: true});
      }
    },
  },
};
