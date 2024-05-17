module.exports = {
    routes: [
        {
            method: "GET",
            path: "/custom",
            handler: "subcategory.customAction",
            config: {
                auth: false
            }
        },

    ],
};