/**
 * Contenido predeterminado: Define constantes y valores por defecto para la ficha de matrícula.
 */
const colegios = [
  "Escuela Alameda Linares", "Escuela Alejandro Gidi", "Escuela Basica Espana", "Escuela Bellavista",
  "Escuela Camilo Henriquez", "Escuela Cajón De Pejerrey", "Escuela Chupallar", "Escuela De Robleria",
  "Escuela El Culmen", "Escuela El Emboque", "Escuela Embalse Ancoa", "Escuela Especial Las Violetas",
  "Escuela Francisco Mesa Seco", "Escuela Graciela Letelier", "Escuela Huapi Alto", "Escuela Huapi Bajo",
  "Escuela Isabel Riquelme", "Escuela Jorge Herrera Guzman", "Escuela Las Hornillas", "Escuela Las Toscas",
  "Escuela Los Hualles", "Escuela Los Leones", "Escuela Los Mogotes", "Escuela Maitenes", "Escuela Maipu",
  "Escuela Matias Cousino", "Escuela Paul Harris", "Escuela Presidente Carlos Ibanez Del C.",
  "Escuela Ramon Belmar Saldias", "Escuela Republica De Francia", "Escuela Salomon Salman Dabud",
  "Escuela San Antonio", "Escuela San Victor Alamos", "Instituto Comercial", "Januario Espinosa",
  "Juan Martinez De Rozas", "Liceo Politecnico De Linares", "Liceo Tecnico Profesional Diego Portales",
  "Liceo Valentin Letelier", "Pedro Aguirre Cerda", "Escuela Violeta Parra", "Otro"
];
const comunasMaule = [
  "Cauquenes", "Chanco", "Pelluhue",
  "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén",
  "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas",
  "Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Otro"
];

const cursos = [
  "Pre-Kinder", "Kinder", "1°básico", "2°básico", "3°básico", "4°básico", "5°básico", "6°básico", "7°básico", "8°básico"
];
const escolaridad = [
  "Ninguna", "Pre-Básica", "Básica incompleta", "Básica completa",
  "Media incompleta", "Media completa","Media TP", "T.N.S incompleta","T.N.S completa", "Superior incompleta",
  "Superior completa", "Otro"
];
const parentesco = [
  "Padre", "Madre", "Hermano(a)", "Tío(a)", "Abuelo(a)", "Tutor(a)", "Otro"
];

const date = new Date();
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();

const anio = `${y}`;
const fechaCompleta = `${d}/${m}/${y}`;
const curso = "Curso " + anio + ":";
const fechaMatricula = "Fecha matrícula: " + fechaCompleta;

// Array con los valores predeterminados para cada campo de la ficha
const defaults = [
  "ANTECEDENTES DEL ESTUDIANTE", // 0
  curso,                        // 1
  "N° registro:",               // 2
  fechaMatricula,               // 3
  "Apellido Paterno:",          // 4
  "Apellido Materno:",          // 5
  "Nombres:",                   // 6
  "Run:",                       // 7
  "F. Nacimiento:",             // 8
  "Edad:",                      // 9
  "Dirección:",                 // 10
  "Comuna: Linares",            // 11
  "Vive con:",                  // 12
  "Nacionalidad: Chilena",      // 13
  "¿Repitente? Sí/No señale curso/s:", // 14
  "Colegio de procedencia:",    // 15
  "NECESIDADES EDUCATIVAS ESPECIALES (N.E.E.)", // 16
  "¿Pertenece al P.I.E.? Sí/No:", // 17
  "Diagnóstico:",               // 18
  "T.E.L.:",                    // 19
  "D.I.:",                      // 20
  "D.E.A.:",                    // 21
  "F.I.L.:",                    // 22
  "D.I.M.:",                    // 23
  "ANTECEDENTES DE SALUD DEL ESTUDIANTE", // 24
  "¿Tiene alguna Alergia?:", // 25
  "¿Enfermedad preexistente?:", // 26
  "¿Utiliza medicamentos?:", // 27
  "ANTECEDENTES DEL APODERADO TITULAR", // 28
  "Apellido paterno: ",         // 29
  "Apellido materno:",          // 30
  "Nombres:",                   // 31
  "Rut:",                       // 32
  "Dirección:",                 // 33
  "Comuna: Linares",            // 34
  "Teléfono:",                  // 35
  "Email:",                     // 36
  "Profesión/Ocupación:",       // 37
  "Nivel de escolaridad:",      // 38
  "Parentesco con el estudiante:", // 39
  "¿Apoderado de otros estudiantes en la Escuela? Sí/No Curso/s:", // 40
  "ANTECEDENTES DEL APODERADO SUPLENTE", // 41
  "Apellido paterno:",          // 42
  "Apellido materno:",          // 43
  "Nombres:",                   // 44
  "Rut:",                       // 45
  "Dirección:",                 // 46
  "Comuna: Linares",            // 47
  "Teléfono:",                  // 48
  "Email: ",                    // 49
  "Profesión/Ocupación:",       // 50
  "Nivel de escolaridad:",      // 51
  "Parentesco con el estudiante:", // 52
  "¿Apoderado de otros estudiantes en la Escuela? Sí/No Curso/s:", // 53
  "ANTECEDENTES FAMILIARES DEL ESTUDIANTE", // 54
  "Nombre completo de la Madre:",// 55
  "Rut:",                       // 56
  "Fecha de Nacimiento:",       // 57
  "Dirección:",                 // 58
  "Comuna: Linares",            // 59
  "Teléfono:",                  // 60
  "Escolaridad:",               // 61
  "Profesión/Ocupación:",       // 62
  "Email:",                     // 63
  "Nombre completo del Padre:", // 64
  "Rut:",                       // 65
  "Fecha de Nacimiento:",       // 66
  "Dirección:",                 // 67
  "Comuna: Linares",            // 68
  "Teléfono:",                  // 69
  "Escolaridad:",               // 70
  "Profesión/Ocupación:",       // 71
  "Email:",                     // 72
  "OTROS ANTECEDENTES ",        // 73
  "¿Participa en clases de Religión?:", // 74
  "Tipo de Religión a la que pertenece:", // 75
  "IMPORTANTE \nEl/la estudiante que NO opte por la clase de Religión. Debe permanecer de igual forma en la sala de clases.", // 76
  "",                      // 77
  "Católica:",                   // 78
  "Evangélica:",                 // 79
  "Otra:",                       // 80
  "Uso de imagen \nEl Establecimiento informa que el uso de imágenes de los estudiantes en Redes Sociales y/o actividades escolares públicas y privadas son de uso pedagógico y promocional del Establecimiento. Invitamos a firmar el consentimiento informado sobre esta medida establecida en la Escuela Pedro Aguirre Cerda de Linares. \nAutorizo uso de imagen: Sí _____    No _____         Nombre, Rut, Firma del Apoderado\n\n", // 81
  "El Apoderado se responsabiliza de la veracidad de los antecedentes registrados en la ficha de matrícula. Los cambios que se produzcan en cualquier apartado, deben ser informados al Establecimiento." // 82
];


/**
 * Guarda una copia del documento actual SIN script asociado.
 * Copia formato, márgenes, encabezado, pie de página y contenido.
 */
function onOpen() {
  insertarFechaHoy();
  actualizarFichaMatricula();

  const ui = DocumentApp.getUi();

  ui.createMenu('@Opciones de Automatizacion de Ficha@')
    .addItem('Formulario Antecedentes Estudiante','mostrarFormularioIngreso')
    .addItem('Guardar Copia de Ficha', 'guardarFichaMatricula')
    .addItem('Exportar Copia de Ficha a Word (.docx)', 'copiarPrimeraPaginaSinScript')
    .addItem('Insertar Fecha actual','insertarFechaHoy')
    .addItem('Establecer Nuevo Titulo Hoja', 'actualizarFichaMatricula')
    .addItem('Limpiar todo', 'limpiarFicha')
    .addSubMenu(
      ui.createMenu('Limpiar sección')
        .addItem('Antecedentes estudiante', 'limpiarEstudiante')
        .addItem('Necesidades educativas especiales', 'limpiarNEE')
        .addItem('Antecedentes de salud', 'limpiarSalud')
        .addItem('Apoderado titular', 'limpiarTitular')
        .addItem('Apoderado suplente', 'limpiarSuplente')
        .addItem('Antecedentes familiares', 'limpiarFamilia')
        .addItem('Otros antecedentes', 'limpiarOtros')
    )
    .addToUi();
}

/**
 * Exporta el documento actual como archivo Word (.docx) y lo guarda en la misma carpeta de Drive.
 * El archivo Word NO contendrá ningún script.
 */
function copiarPrimeraPaginaSinScript() {
  var doc = DocumentApp.getActiveDocument();
  var fileName = doc.getName() + " (Copia solo primera página)";
  var nuevoDoc = DocumentApp.create(fileName);

  // --- Copiar encabezado si existe ---
  try {
    var origHeader = doc.getHeader();
    if (origHeader) {
      var newHeader = nuevoDoc.addHeader();
      copiarSeccionTalCual(origHeader, newHeader);
    }
  } catch(e) {
    Logger.log("No se pudo copiar el encabezado: " + e);
  }

  // --- Copiar solo el contenido de la primera página ---
  var body = doc.getBody();
  var newBody = nuevoDoc.getBody();
  newBody.clear(); // Limpia el contenido inicial

  var numChildren = body.getNumChildren();
  var reachedBreak = false;
  for (var i = 0; i < numChildren; i++) {
    var element = body.getChild(i);
    // ¿Encontró salto de página?
    if (element.getType() === DocumentApp.ElementType.PAGE_BREAK) {
      break;
    }
    // Copia según el tipo de elemento
    switch (element.getType()) {
      case DocumentApp.ElementType.PARAGRAPH:
        newBody.appendParagraph(element.asParagraph().copy());
        break;
      case DocumentApp.ElementType.TABLE:
        newBody.appendTable(element.asTable().copy());
        break;
      case DocumentApp.ElementType.LIST_ITEM:
        newBody.appendListItem(element.asListItem().copy());
        break;
      case DocumentApp.ElementType.INLINE_IMAGE:
        newBody.appendImage(element.asInlineImage().copy());
        break;

      default:
        // Si el tipo de elemento no es soportado explícitamente, lo ignoramos.
        break;
    }
  }

  // --- Elimina el primer párrafo vacío creado por defecto ---
  if (newBody.getNumChildren() > 0 && 
      newBody.getChild(0).getType() == DocumentApp.ElementType.PARAGRAPH &&
      newBody.getChild(0).asParagraph().getText().trim() === "") {
    newBody.removeChild(newBody.getChild(0));
  }

  DocumentApp.getUi().alert(
    "Se creó una copia solo con la primera página (sin scripts):\n\n" + nuevoDoc.getUrl() + 
    "\n\nAbre el nuevo documento, revisa que esté correcto y desde ahí puedes descargarlo como Word."
  );
}

/**
 * Copia todos los elementos de una sección (body, header, footer) a otra sección destino, preservando el formato.
 */
function copiarSeccionTalCual(origen, destino) {
  for (var i = 0; i < origen.getNumChildren(); i++) {
    var elemento = origen.getChild(i);
    switch (elemento.getType()) {
      case DocumentApp.ElementType.PARAGRAPH:
        destino.appendParagraph(elemento.asParagraph().copy());
        break;
      case DocumentApp.ElementType.TABLE:
        destino.appendTable(elemento.asTable().copy());
        break;
      case DocumentApp.ElementType.LIST_ITEM:
        destino.appendListItem(elemento.asListItem().copy());
        break;
      case DocumentApp.ElementType.INLINE_IMAGE:
        destino.appendImage(elemento.asInlineImage().copy());
        break;

      default:
        // Ignorar elementos no soportados
        break;
    }
  }
}


/**
 * Obtiene en un array todas las celdas del documento recorriendo cada tabla y fila.
 */
function _getAllCells() {
  const tablas = DocumentApp.getActiveDocument().getBody().getTables();
  const cells = [];
  tablas.forEach(tabla => {
    for (let i = 0; i < tabla.getNumRows(); i++) {
      const fila = tabla.getRow(i);
      for (let j = 0; j < fila.getNumCells(); j++) {
        cells.push(fila.getCell(j));
      }
    }
  });
  return cells;
}

/**
 * Dado un texto tipo "Etiqueta: valor", devuelve "valor".
 * Si no hay ":", devuelve cadena vacía.
 */
function _afterColon(text) {
  const parts = text.split(':');
  return parts.length > 1 ? parts.slice(1).join(':').trim() : '';
}

/**
 * Formatea fecha de tipo "YYYY-MM-DD" a "DD / MM / YYYY".
 */
function formatearFecha(fechaStr) {
  if (!fechaStr) return "";
  // Si el formato es YYYY-MM-DD lo dividimos manualmente
  var partes = fechaStr.split("-");
  if (partes.length === 3) {
    var yyyy = partes[0];
    var mm = partes[1];
    var dd = partes[2];
    return `${dd} / ${mm} / ${yyyy}`;
  }
  // Si no es ese formato, intentamos con Date pero es menos seguro
  var fecha = new Date(fechaStr);
  var dd = String(fecha.getDate()).padStart(2, '0');
  var mm = String(fecha.getMonth() + 1).padStart(2, '0');
  var yyyy = fecha.getFullYear();
  return `${dd} / ${mm} / ${yyyy}`;
}

/**
 * Formatea fechas tipo "04 / 06 / 2025" a "2025-06-04" para inputs tipo date.
 */
function _formatearFechaParaInput(texto) {
  const match = texto.match(/(\d{1,2})\s*\/\s*(\d{1,2})\s*\/\s*(\d{4})/);
  if (!match) return "";
  const [_, dd, mm, yyyy] = match;
  return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
}

/**
 * Abre el formulario HTML de ingreso de antecedentes del estudiante.
 */
function mostrarFormularioIngreso(){
  const datos = obtenerAntecedentesEstudiante();
  const template = HtmlService.createTemplateFromFile('formularioIngreso.html');
  template.colegios = colegios;
  template.cursos = cursos;
template.escolaridad = escolaridad;
template.parentesco = parentesco;

  template.datos = datos;
  template.comunasMaule = comunasMaule;
 
  const html = template.evaluate().setWidth(800).setHeight(1200);
  DocumentApp.getUi().showModalDialog(html, 'Ficha de Matrícula - Formulario');
}

/**
 * Obtiene los datos actuales del documento y los prepara para el formulario HTML.
 * Devuelve un objeto { campo1, campo2, ... campo82 } para sincronización.
 * Los campos de fecha se formatean a yyyy-mm-dd si es posible.
 */
function obtenerAntecedentesEstudiante() {
  const celdas = _getAllCells();
  const datos = {};
  for (let i = 1; i < celdas.length && i < defaults.length; i++) {
    let texto = celdas[i] ? celdas[i].getText() : "";

     if (i === 81) {
        // Busca la X en la línea de autorización
        // Puede estar como: Sí __X__    No _____ ...  o  Sí _____    No __X__ ...
        let seleccion = "";
        const match = texto.match(/Autorizo uso de imagen:\s*Sí\s*(_{2,3}X_{2,3}|_{5,})\s+No\s*(_{2,3}X_{2,3}|_{5,})/i);
        if (match) {
          // match[1]: parte de Sí, match[2]: parte de No
          if (match[1] && match[1].includes("X")) seleccion = "Sí";
          else if (match[2] && match[2].includes("X")) seleccion = "No";
        }
        datos[`campo81`] = seleccion;
        continue;
      }

    if ([3, 8, 57, 66].includes(i)) { // Fechas esperadas
      datos[`campo${i}`] = _formatearFechaParaInput(texto);
    } else if ([18,19,20,21,22,23].includes(i)) { // Diagnósticos NEE, poner el texto completo
      datos[`campo${i}`] = texto;
    } else if ([25,26,27].includes(i)) { // Salud: mantener texto completo
      datos[`campo${i}`] = _afterColon(texto);
    } else {
      datos[`campo${i}`] = _afterColon(texto);
    }
    

  }
  Logger.log(JSON.stringify(datos));
  return datos;
}

/**
 * Escribe TODOS los campos recibidos en las celdas del documento,
 * siguiendo el orden de la constante defaults.
 * Recibe un objeto data con claves campo1, campo2, ..., campo82 (puede tener menos).
 */
function llenarAntecedentesEstudiante(data) {
  Logger.log("=== [DEBUG] Data recibida en backend ===");
  Logger.log(JSON.stringify(data, null, 2)); // Muestra todo el objeto recibido
  Logger.log("campo80 (otra religión): " + data.campo80);
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const celdas = _getAllCells();

  // Escribir los campos del formulario en las celdas del documento
  for (let i = 1; i < celdas.length && i < defaults.length; i++) {
    let valor = data[`campo${i}`] || "";
    let etiqueta = defaults[i];
    // Si es fecha, formatear
    if ([3, 8, 57, 66].includes(i)) {
      valor = valor ? formatearFecha(valor) : "";
    }
    // Si es checkbox NEE, poner X si viene marcado
    if ([19,20,21,22,23].includes(i)) {
      celdas[i].setText(`${etiqueta.split(':')[0]}: ${(valor && valor === "X") ? "X" : ""}`);
    }
    // Si es campo normal con etiqueta, poner "Etiqueta: valor"
    else if (etiqueta.includes(':')) {
      celdas[i].setText(`${etiqueta.split(':')[0]}: ${valor}`);
    }
    
    // Si es solo título/separador
    else {
      celdas[i].setText(etiqueta);
    }
  // --- Manejo especial para campo 81 (Uso de imagen) ---
  if (i === 81) {
    // Texto informativo fijo (todo menos la línea de autorización)
    let textoInfo = "Uso de imagen \nEl Establecimiento informa que el uso de imágenes de los estudiantes en Redes Sociales y/o actividades escolares públicas y privadas son de uso pedagógico y promocional del Establecimiento. Invitamos a firmar el consentimiento informado sobre esta medida establecida en la Escuela Pedro Aguirre Cerda de Linares.";
    // Valor del select
    let valor = data.campo81 || "";
    // Nombre y rut del apoderado titular
    let nombre = [data.campo31, data.campo29, data.campo30].filter(Boolean).join(" ").replace(/ +/g, " ").trim();
    let rut = data.campo32 || "";

    // Construir la línea de autorización
    let siAut = valor === "Sí" ? "Sí __X__" : "Sí _____";
    let noAut = valor === "No" ? "No __X__" : "No _____";
    let linea = `Autorizo uso de imagen: ${siAut}    ${noAut}         \n${nombre ? nombre + "," : ""} Rut ${rut}${nombre || rut ? "," : ""} Firma del Apoderado________________\n`;

    // Escribir solo el texto limpio, sin duplicados y sin la línea default original
    celdas[i].setText(`${textoInfo}\n${linea}`);
    continue;
  }
  }

  // Opcional: Actualiza encabezado con nombre y año
  const nombres = data.campo6 || "";
  const apPat = data.campo4 || "";
  const apMat = data.campo5 || "";
  const añoActual = new Date().getFullYear();
  const encabezado = `FICHA DE MATRÍCULA ${nombres} ${apPat} ${apMat} ${añoActual}`.trim();
  const primerElemento = body.getChild(0);
  if (primerElemento.getType() === DocumentApp.ElementType.PARAGRAPH) {
    primerElemento.asParagraph().setText(encabezado);
  } else {
    body.insertParagraph(0, encabezado);
  }

  DocumentApp.getUi().alert("Ficha actualizada correctamente con los datos ingresados.");
}

// Resto de funciones utilitarias (limpieza, copiar dirección, etc.) se mantienen igual
// ...

function limpiarFicha() {
  const body = DocumentApp.getActiveDocument().getBody();
  const tabla = body.getTables();
  const first = body.getChild(0);
  const texto = "FICHA DE MATRÍCULA ";
  if (first.getType() === DocumentApp.ElementType.PARAGRAPH) {
    first.asParagraph().setText(texto + anio);
  } else {
    body.insertParagraph(0, texto);
  }
  let idx = 0;
  tabla.forEach(t => {
    for (let i = 0; i < t.getNumRows(); i++) {
      for (let j = 0; j < t.getRow(i).getNumCells(); j++) {
        if (idx < defaults.length) {
          t.getRow(i).getCell(j).setText(defaults[idx++]);
        }
      }
    }
  });
  DocumentApp.getUi().alert("Ficha restaurada con valores predeterminados.");
}

function insertarFechaHoy() {
  const celdas = _getAllCells();
  if (celdas.length <= 3) {
    DocumentApp.getUi().alert("No se encontró la celda de 'Fecha matrícula'.");
    return;
  }
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, '0');
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const anio = hoy.getFullYear();
  const fechaFormateada = `Fecha matrícula: ${dia} / ${mes} / ${anio}`;
  celdas[3].setText(fechaFormateada);
  DocumentApp.getUi().alert("Fecha de matrícula actual insertada.");
}

function actualizarFichaMatricula() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const texto = body.getText();
  const tablas = body.getTables();

  let nombres = "", apellidoPaterno = "", apellidoMaterno = "";

  for (const tabla of tablas) {
    for (let i = 0; i < tabla.getNumRows(); i++) {
      const fila = tabla.getRow(i);
      for (let j = 0; j < fila.getNumCells(); j++) {
        const celdaTexto = fila.getCell(j).getText().trim();
        if (!nombres) {
          const match = celdaTexto.match(/^Nombres:\s*(.+)$/i);
          if (match) nombres = match[1].trim();
        }
        if (!apellidoPaterno) {
          const match = celdaTexto.match(/^Apellido Paterno:\s*(.+)$/i);
          if (match) apellidoPaterno = match[1].trim();
        }
        if (!apellidoMaterno) {
          const match = celdaTexto.match(/^Apellido Materno:\s*(.+)$/i);
          if (match) apellidoMaterno = match[1].trim();
        }
      }
    }
  }

  // Extraer y validar fecha de matrícula del texto del documento
  const fechaMatch = texto.match(/Fecha matrícula:\s*(\d{1,2})\s*[^0-9\s]\s*(\d{1,2})\s*[^0-9\s]\s*(\d{4})/i);
  let año;

  if (fechaMatch && fechaMatch.length === 4) {
    const dia = parseInt(fechaMatch[1], 10);
    const mes = parseInt(fechaMatch[2], 10);
    const anio = parseInt(fechaMatch[3], 10);
    año = (mes < 11 || (mes === 11 && dia < 30)) ? anio : anio + 1;
  } else {
    DocumentApp.getUi().alert("No se pudo detectar la fecha de matrícula. Se usará el año actual +1.");
    año = new Date().getFullYear() + 1;
  }

  // Construir encabezado actualizado
  const encabezado = `FICHA DE MATRÍCULA ${nombres} ${apellidoPaterno} ${apellidoMaterno} ${año}`.trim();
  const primerElemento = body.getChild(0);

  if (primerElemento.getType() === DocumentApp.ElementType.PARAGRAPH) {
    primerElemento.asParagraph().setText(encabezado);
  } else {
    body.insertParagraph(0, encabezado);
  }

  return año;
}

function guardarFichaMatricula() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const texto = body.getText();
  const tablas = body.getTables();

  let nombres = "", apellidoPaterno = "", apellidoMaterno = "";

  for (const tabla of tablas) {
    for (let i = 0; i < tabla.getNumRows(); i++) {
      const fila = tabla.getRow(i);
      for (let j = 0; j < fila.getNumCells(); j++) {
        const contenido = fila.getCell(j).getText().trim();
        if (!nombres) {
          const m = contenido.match(/^Nombres:\s*(.+)$/i);
          if (m) nombres = m[1].trim();
        }
        if (!apellidoPaterno) {
          const m = contenido.match(/^Apellido Paterno:\s*(.+)$/i);
          if (m) apellidoPaterno = m[1].trim();
        }
        if (!apellidoMaterno) {
          const m = contenido.match(/^Apellido Materno:\s*(.+)$/i);
          if (m) apellidoMaterno = m[1].trim();
        }
      }
    }
  }

  const fechaMatch = texto.match(/Fecha matrícula:\s*(\d{1,2})\s*[^0-9\s]\s*(\d{1,2})\s*[^0-9\s]\s*(\d{4})/i);
  let año;

  if (fechaMatch && fechaMatch.length === 4) {
    const dia = parseInt(fechaMatch[1], 10);
    const mes = parseInt(fechaMatch[2], 10);
    const anio = parseInt(fechaMatch[3], 10);
    año = (mes < 11 || (mes === 11 && dia < 30)) ? anio : anio + 1;
  } else {
    DocumentApp.getUi().alert("No se pudo detectar la fecha de matrícula. Se usará el año actual +1.");
    año = new Date().getFullYear() + 1;
  }

  const nombreCompleto = `${nombres} ${apellidoPaterno} ${apellidoMaterno}`.replace(/\s+/g, ' ').trim();
  const nuevoNombre = `Ficha Matrícula - ${nombreCompleto} - ${año}`;
  const archivoOriginal = DriveApp.getFileById(doc.getId());
  const copia = archivoOriginal.makeCopy(nuevoNombre);

  DocumentApp.getUi().alert(`Ficha guardada como: ${nuevoNombre}`);
}

// funciones utilitarias (copiar dirección, limpiar secciones, etc.) según necesidad.
/** ========== UTILITARIAS Y LIMPIEZA (SOLICITADAS) ========== */

// Limpia toda la ficha con valores por defecto
function limpiarFicha() {
  const body = DocumentApp.getActiveDocument().getBody();
  const tabla = body.getTables();
  const first = body.getChild(0);
  const texto = "FICHA DE MATRÍCULA ";
  if (first.getType() === DocumentApp.ElementType.PARAGRAPH) {
    first.asParagraph().setText(texto + anio);
  } else {
    body.insertParagraph(0, texto);
  }
  let idx = 0;
  tabla.forEach(t => {
    for (let i = 0; i < t.getNumRows(); i++) {
      for (let j = 0; j < t.getRow(i).getNumCells(); j++) {
        if (idx < defaults.length) {
          t.getRow(i).getCell(j).setText(defaults[idx++]);
        }
      }
    }
  });
  DocumentApp.getUi().alert("Ficha restaurada con valores predeterminados.");
}

function limpiarRangoCeldasConDefaults(desde, hasta){
  const celdas = _getAllCells();
  for (let i = desde; i <= hasta; i++){
    if(i < defaults.length && i < celdas.length) {
      celdas[i].setText(defaults[i]);
    }
  }
}

// Limpiar secciones específicas
function limpiarEstudiante() { limpiarRangoCeldasConDefaults(1, 15); DocumentApp.getUi().alert("Se limpiaron los antecedentes del estudiante."); }
function limpiarNEE() { limpiarRangoCeldasConDefaults(16, 23); DocumentApp.getUi().alert("Se limpiaron los campos de necesidades educativas especiales."); }
function limpiarSalud() { limpiarRangoCeldasConDefaults(24, 27); DocumentApp.getUi().alert("Se limpiaron los antecedentes de salud."); }
function limpiarTitular() { limpiarRangoCeldasConDefaults(29, 40); DocumentApp.getUi().alert("Se limpiaron los datos del apoderado titular."); }
function limpiarSuplente() { limpiarRangoCeldasConDefaults(42, 53); DocumentApp.getUi().alert("Se limpiaron los datos del apoderado suplente."); }
function limpiarFamilia() { limpiarRangoCeldasConDefaults(55, 72); DocumentApp.getUi().alert("Se limpiaron los antecedentes familiares del estudiante."); }
function limpiarOtros() { limpiarRangoCeldasConDefaults(73, 82); DocumentApp.getUi().alert("Se limpiaron los otros antecedentes."); }

// Limpiar solo dirección de titular/suplente
function limpiarDireccionTitular() {
  const cells = _getAllCells();
  if (cells.length < 34) return;
  cells[33].setText("Dirección: ");
}
function limpiarDireccionSuplente() {
  const cells = _getAllCells();
  if (cells.length < 47) return;
  cells[46].setText("Dirección: ");
}

// Insertar la fecha de hoy en celda de matrícula
function insertarFechaHoy() {
  const celdas = _getAllCells();
  if (celdas.length <= 3) {
    DocumentApp.getUi().alert("No se encontró la celda de 'Fecha matrícula'.");
    return;
  }
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, '0');
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const anio = hoy.getFullYear();
  const fechaFormateada = `Fecha matrícula: ${dia} / ${mes} / ${anio}`;
  celdas[3].setText(fechaFormateada);
  DocumentApp.getUi().alert("Fecha de matrícula actual insertada.");
}

// Copiar dirección alumno a suplente
function mismaSuplente() {
  const cells = _getAllCells();
  if (cells.length < 47) {
    return DocumentApp.getUi().alert("No hay suficientes celdas para operar.");
  }
  const direccion = _afterColon(cells[10].getText());
  const comuna    = _afterColon(cells[11].getText());
  cells[46].setText(`Dirección: ${direccion}`);
  cells[47].setText(`Comuna: ${comuna}`);
  DocumentApp.getUi().alert("Dirección alumno → Dirección Suplente copiada.");
}
// Copiar dirección alumno a titular
function mismaTitular() {
  const cells = _getAllCells();
  if (cells.length < 34) {
    return DocumentApp.getUi().alert("No hay suficientes celdas para operar.");
  }
  const direccion = _afterColon(cells[10].getText());
  const comuna    = _afterColon(cells[11].getText());
  cells[33].setText(`Dirección: ${direccion}`);
  cells[34].setText(`Comuna: ${comuna}`);
  DocumentApp.getUi().alert("Dirección alumno → Dirección Titular copiada.");
}

// Utilitarias: madre es titular (copia datos de la madre a titular)
function madreEsTitular() {
  const cells = _getAllCells();
  if (cells.length < 63) {
    return DocumentApp.getUi().alert("No hay suficientes celdas para operar.");
  }
  // Madre: campos 55-63
  const nombre  = _afterColon(cells[55].getText());
  const rut     = _afterColon(cells[56].getText());
  const direccion = _afterColon(cells[58].getText());
  const comuna    = _afterColon(cells[59].getText());
  const telefono  = _afterColon(cells[60].getText());
  const email     = _afterColon(cells[63].getText());
  const prof      = _afterColon(cells[62].getText());
  const nivel     = _afterColon(cells[61].getText());
  // Titular: campos 29-40
  cells[29].setText(`Apellido paterno: `); // No se puede deducir desde nombre completo
  cells[30].setText(`Apellido materno: `);
  cells[31].setText(`Nombres: ${nombre}`);
  cells[32].setText(`Rut: ${rut}`);
  cells[33].setText(`Dirección: ${direccion}`);
  cells[34].setText(`Comuna: ${comuna}`);
  cells[35].setText(`Teléfono: ${telefono}`);
  cells[36].setText(`Email: ${email}`);
  cells[37].setText(`Profesión/Ocupación: ${prof}`);
  cells[38].setText(`Nivel de escolaridad: ${nivel}`);
  DocumentApp.getUi().alert("Datos de la madre insertados como titular.");
}
// Utilitarias: padre es titular (copia datos del padre a titular)
function padreEsTitular() {
  const cells = _getAllCells();
  if (cells.length < 72) {
    return DocumentApp.getUi().alert("No hay suficientes celdas para operar.");
  }
  // Padre: campos 64-72
  const nombre  = _afterColon(cells[64].getText());
  const rut     = _afterColon(cells[65].getText());
  const direccion = _afterColon(cells[67].getText());
  const comuna    = _afterColon(cells[68].getText());
  const telefono  = _afterColon(cells[69].getText());
  const email     = _afterColon(cells[72].getText());
  const prof      = _afterColon(cells[71].getText());
  const nivel     = _afterColon(cells[70].getText());
  // Titular: campos 29-40
  cells[29].setText(`Apellido paterno: `);
  cells[30].setText(`Apellido materno: `);
  cells[31].setText(`Nombres: ${nombre}`);
  cells[32].setText(`Rut: ${rut}`);
  cells[33].setText(`Dirección: ${direccion}`);
  cells[34].setText(`Comuna: ${comuna}`);
  cells[35].setText(`Teléfono: ${telefono}`);
  cells[36].setText(`Email: ${email}`);
  cells[37].setText(`Profesión/Ocupación: ${prof}`);
  cells[38].setText(`Nivel de escolaridad: ${nivel}`);
  DocumentApp.getUi().alert("Datos del padre insertados como titular.");
}

