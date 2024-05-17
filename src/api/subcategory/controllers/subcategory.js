'use strict';

/**
 * subcategory controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subcategory.subcategory', ({ strapi }) => ({
    // ceci est un foction pour tester la personnalisation des controller
    // https://docs.strapi.io/dev-docs/backend-customization/controllers
    async customAction(ctx) {
        try {
            console.log(ctx.body),
                ctx.body = "it is custom action"
        } catch (err) {
            ctx.body = err
        }
    },
    async find(ctx) {
        const result = await super.find(ctx);
        result.meta.customField = "custom field";
        return result;
    },
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const entity = await strapi
            .service("api::subcategory.subcategory")
            .findOne(id, query);
        entity.customFieldFindOne = "custom field fine by one";
        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedResults);
    }

}));
