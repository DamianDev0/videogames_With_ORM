### Project Movies with ORM

## Iniciar Proyecto desde Cero

Para configurar el proyecto, sigue estos pasos:

1. **Inicializar un nuevo proyecto Node.js**

   Ejecuta el siguiente comando para crear un archivo `package.json` con los valores predeterminados:

   ```bash
   npm init -y


### Configuración de TypeScript

Para configurar TypeScript en tu proyecto, sigue estos pasos:

1. **Inicializa TypeScript**

   Ejecuta el siguiente comando para crear un archivo de configuración de TypeScript (`tsconfig.json`):

   ```bash
   npx tsc --init


### Configuración de `tsconfig.json`

A continuación se muestra un ejemplo de configuración para el archivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "outDir": "./dist",                // Directorio de salida para los archivos transpilados
    "rootDir": "./src",                // Directorio raíz de los archivos fuente
    "baseUrl": "./",                   // Base URL para los módulos
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src"],                   
  "exclude": ["node_modules"]  
}

```

### Instalación de Dependencias

Este proyecto requiere varias dependencias para su funcionamiento y desarrollo. A continuación, se detallan los comandos para instalar las dependencias necesarias.

#### Instalación de Dependencias de Producción

Para instalar las dependencias de producción, ejecuta el siguiente comando:

```bash
npm install @types/bcryptjs bcrypt bcryptjs cors express jsonwebtoken multer mysql2 reflect-metadata sequelize sequelize-typescript tsyringe typeorm
```

#### Instalación de Dependencias de Desarrollador

```bash
npm install --save-dev @types/bcrypt @types/cors @types/express @types/jsonwebtoken @types/multer @types/node @types/sequelize nodemon ts-node typescript
```

#### Configuracion de `nodemon.json`

```json
{
    "watch": [
        "src"
    ],
    "ext": "ts",
    "exec": "ts-node ./src/index.ts"
}
```

### Estructura de Directorios

Para organizar tu proyecto, sigue estos pasos para crear los directorios necesarios:

1. **Crear el directorio `src`**

   Ejecuta el siguiente comando para crear el directorio `src`:

   ```bash
   mkdir src
   mkdir src/config
   mkdir src/models
   mkdir src/controllers
   mkdir src/middlewares
   mkdir src/repositories
   mkdir src/services
   mkdir src/routes
```