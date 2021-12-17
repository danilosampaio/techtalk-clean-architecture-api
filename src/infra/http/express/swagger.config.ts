import swaggerJsDoc from 'swagger-jsdoc';

export default swaggerJsDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Clean Architecture API',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local'
            }
        ]
    },
    apis: ['src/infra/http/express/**/*.ts']
});
