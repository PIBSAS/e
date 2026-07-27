# Generador de portadas para visor de pdfs con WPA

Se parte de la siguiente estructura en el repo:

## Repo:
- arialbd.ttf
- biblioteca_git_v2.py
- Pdfs sueltos en el root del repo.
- Carpetas contenedoras de archivos PDFs
- .github/workflows/deploy.yaml

Activar Github pages eligiendo como root el main.

La acción instalará dependencias del script y lo ejecutará, clonando el repo en la acción, buscará recursivamente pdfs, creará logo e icono y construirá en base a lo encontrado un html que será servido por github pages, además para compatibilidad con dispositivos moviles usara pdfjs de Mozilla como visualizador de pdfs.

El resto de archivos generados tras la acción, se actualizarán cada vez que se suba un pdf o carpeta contenedora dentro de las restricciones de 25mb de github, para estudio academico es un tamaño suficiente, si se requiere subir archivos mas grandes, se optará por GitHub Large File System, en tal caso, no se afecta en nada el repo actual, pero tener en cuenta la cuota de GitHub para LFS.
