# Entrega-Final-React-Hernandez-Colin

Este es el repositorio de el curso de React para Entrega Final, objetivo crear un ecommerce. 

## Descripcion del proyecto

Este proyecto incluye un ecommerce sencillo, donde es posible comprar un producto y mediante acceso a Firebase/Database, guardar los elementos de productos y de ordenes de compra.
Los elementos que se guardan en la base de datos permanecen ahi en tanto no haya modificaciones en el stock. Cuando hay una compra (y el stock se modifica), la aplicacion hace un update de los elementos necesarios para actualizar el stock.

## Tecnologías utilizadas en el desarrollo

* Vite
* ReactJS
* React Router
* Firebase

## Como navegar en la aplicacion

* Página de Inicio con login y lista de productos
* Menu y botones para ir a listado de productos en general y por categorías.
* Acceso a detalles de cada producto para agregar a carrito
* Acceso a carrito de compras
* Realizar orden de compra y se continúa navegando

## Como correr la aplicacion

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Como configurar Firebase

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

