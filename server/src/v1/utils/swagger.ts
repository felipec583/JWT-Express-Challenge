import { Express, Response, Request } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { getFileData } from "./readJson.js";

const packageJson = getFileData("package.json");
const { version } = packageJson;

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Soft Jobs API",
      version,
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "jwt",
        },
      },
      security: {
        BearerAuth: [],
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["**/docs/*.{ts,js}"],
};

const swaggerDoc = swaggerJSDoc(options);

function swaggerDocs(app: Express, port: number | string) {
  //Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  //Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDoc);
  });

  console.log(`Docs available on http://localhost:${port}/docs`);
}

export default swaggerDocs;
