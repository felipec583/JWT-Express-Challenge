"use strict";
/**
 * @openapi
 *  tags:
 *    name: Usuarios
 *    description: API to handle users
 */
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     usuarios:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - rol
 *         - lenguaje
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the users
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         role:
 *           type: string
 *           description: The user's role in development
 *         lenguaje:
 *           type: string
 *           description: The user's go-to programming language
 *       example:
 *         email: user@test.com
 *         password: password
 *         role: Backend Developer
 *         lenguaje: Python
 */
/**
 * @openapi
 * /usuarios:
 *   get:
 *     tags:  [Usuarios]
 *     summary: Mostrar un JSON con la lista de usuarios
 *     description: Muestra un JSON con la lista de usuarios registrados
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Un array de objetos mostrando la información de cada usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/usuarios'
 *       "400":
 *         description: No se encontraron usuarios
 */
/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 $ref: '#/components/schemas/usuarios'
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario:
 *                   $ref: '#/components/schemas/usuarios'
 *       "400":
 *         description: Error al crear usuario
 */
//# sourceMappingURL=user.docs.js.map