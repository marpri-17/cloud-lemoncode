Esta carpeta configura un servidor Azure para el ejemplo de subida a clud FTP.
Express también permite exponer ficheros estáticos y lo vamos a emplear para nuestro web server que correrá en Amazon.
Hay que subir node modules porque no estamos compilando el servidor y necesitamos las dependencias.
Dentro del servidor, necesitamos tener los archivos de nuestra distribución de webpack. Copiamos los archivos de `./dist` a `./server/public` para que pueda ser consumido y expuesto por express en el servidor de producción.
