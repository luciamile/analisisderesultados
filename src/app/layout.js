export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Análisis de Resultados</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <main className="container mx-auto p-5">{children}</main>
      </body>
    </html>
  );
}
