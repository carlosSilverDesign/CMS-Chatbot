// WienerBot CMS - Application Logic

// 1. Initial Seed Data
const DEFAULT_DATA = {
  categories: ["cat-1", "cat-2", "cat-3"],
  nodes: {
    "cat-1": {
      id: "cat-1",
      type: "category",
      name: "Pregrado Presencial",
      icon: "🎓",
      initialMessage: "¡Hola! Soy WienerBot. ¿En qué puedo ayudarte hoy?",
      children: ["sub-1", "sub-2", "sub-3", "sub-4", "sub-5"],
      parentId: null
    },
    "sub-1": {
      id: "sub-1",
      type: "subcategory",
      subtype: "FAQ",
      name: "Accesos",
      initialMessage: "Selecciona una pregunta sobre accesos:",
      children: ["q-1", "q-2", "q-3"],
      parentId: "cat-1"
    },
    "q-1": {
      id: "q-1",
      type: "question",
      name: "¿Cómo recupero mis credenciales de WienerNet?",
      answer: "Para recuperar tus credenciales de WienerNet, sigue estos pasos:<br><br>1. Ingresa a <a href=\"https://recuperarcontrasena.uwiener.edu.pe/\" target=\"_blank\">https://recuperarcontrasena.uwiener.edu.pe/</a><br>2. Ingresa tu DNI o código de alumno<br>3. Recibirás un correo con el enlace de recuperación<br><br>Si el problema persiste, escribe a <strong>soporte@uwiener.edu.pe</strong>",
      parentId: "sub-1"
    },
    "q-2": {
      id: "q-2",
      type: "question",
      name: "¿Cómo uso Microsoft Teams para mis clases?",
      answer: "Para usar Microsoft Teams, puedes descargar la aplicación en tu celular o PC. Inicia sesión con tu correo institucional (ej. <strong>codigo@uwiener.edu.pe</strong>) y tu contraseña del Campus Virtual.",
      parentId: "sub-1"
    },
    "q-3": {
      id: "q-3",
      type: "question",
      name: "¿Cómo uso Turnitin?",
      answer: "Turnitin está integrado en el Campus Virtual. Para subir tu trabajo, ingresa a tu curso, busca la tarea que tiene activado el reporte de originalidad de Turnitin y carga tu archivo en formato PDF o Word.",
      parentId: "sub-1"
    },
    "sub-2": {
      id: "sub-2",
      type: "subcategory",
      subtype: "FAQ",
      name: "Matrícula",
      initialMessage: "Selecciona tu consulta sobre matrícula:",
      children: ["q-4", "q-5"],
      parentId: "cat-1"
    },
    "q-4": {
      id: "q-4",
      type: "question",
      name: "¿Cómo realizo mi matrícula?",
      answer: "La matrícula se realiza en línea a través del Portal del Estudiante en las fechas programadas según tu escuela académica.",
      parentId: "sub-2"
    },
    "q-5": {
      id: "q-5",
      type: "question",
      name: "¿Qué requisitos necesito para matricularme?",
      answer: "Debes estar al día en tus pagos de pensiones y haber aprobado los prerrequisitos de los cursos correspondientes.",
      parentId: "sub-2"
    },
    "sub-3": {
      id: "sub-3",
      type: "subcategory",
      subtype: "FAQ",
      name: "Pagos",
      initialMessage: "Selecciona una consulta sobre pagos y pensiones:",
      children: ["q-6"],
      parentId: "cat-1"
    },
    "q-6": {
      id: "q-6",
      type: "question",
      name: "¿Dónde puedo consultar mis pensiones?",
      answer: "Puedes consultar tus pensiones en la intranet del alumno, en la sección de Pagos y Finanzas.",
      parentId: "sub-3"
    },
    "sub-4": {
      id: "sub-4",
      type: "subcategory",
      subtype: "FAQ",
      name: "Trámites Académicos",
      initialMessage: "Selecciona un trámite académico:",
      children: [],
      parentId: "cat-1"
    },
    "sub-5": {
      id: "sub-5",
      type: "subcategory",
      subtype: "DIRECTO",
      name: "Canales de pago",
      directAnswer: "Puedes realizar tus pagos a través de los siguientes bancos autorizados:<br>• <strong>BCP</strong> (Banca por internet o agencias)<br>• <strong>BBVA</strong> (Banca por internet o agencias)<br>• <strong>Interbank</strong> (Banca por internet o cajeros)<br>• <strong>Caja de la Universidad</strong> (solo tarjetas de crédito/débito)",
      children: [],
      parentId: "cat-1"
    },
    "cat-2": {
      id: "cat-2",
      type: "category",
      name: "Modalidad a Distancia",
      icon: "💻",
      initialMessage: "Hola, bienvenido al soporte de Modalidad a Distancia. ¿Qué consulta tienes?",
      children: ["sub-6", "sub-7"],
      parentId: null
    },
    "sub-6": {
      id: "sub-6",
      type: "subcategory",
      subtype: "FAQ",
      name: "Campus Virtual",
      initialMessage: "Selecciona una consulta sobre el Campus Virtual a Distancia:",
      children: ["q-7"],
      parentId: "cat-2"
    },
    "q-7": {
      id: "q-7",
      type: "question",
      name: "¿Cómo accedo al aula virtual de modalidad a distancia?",
      answer: "Ingresa a <a href=\"https://campusvirtual.uwiener.edu.pe\" target=\"_blank\">campusvirtual.uwiener.edu.pe</a> con tu usuario institucional y contraseña.",
      parentId: "sub-6"
    },
    "sub-7": {
      id: "sub-7",
      type: "subcategory",
      subtype: "DIRECTO",
      name: "Modalidad de Estudio",
      directAnswer: "Nuestra modalidad a distancia ofrece clases 100% virtuales con asesoría y acompañamiento constante por parte de los docentes. Las evaluaciones se realizan en la plataforma virtual de forma asíncrona.",
      children: [],
      parentId: "cat-2"
    },
    "cat-3": {
      id: "cat-3",
      type: "category",
      name: "Posgrado",
      icon: "🎓",
      initialMessage: "Bienvenido a la mesa de ayuda de Posgrado. ¿En qué programa estás interesado?",
      children: ["sub-8", "sub-9"],
      parentId: null
    },
    "sub-8": {
      id: "sub-8",
      type: "subcategory",
      subtype: "FAQ",
      name: "Maestrías",
      initialMessage: "Selecciona tu consulta sobre Maestrías:",
      children: ["q-8", "q-9"],
      parentId: "cat-3"
    },
    "q-8": {
      id: "q-8",
      type: "question",
      name: "¿Cómo me inscribo en la maestría?",
      answer: "Debes presentar tu grado de bachiller (registrado en SUNEDU), copia de tu DNI, currículum vitae simple y llenar la ficha de inscripción correspondiente.",
      parentId: "sub-8"
    },
    "q-9": {
      id: "q-9",
      type: "question",
      name: "¿Cuál es la duración de las maestrías?",
      answer: "Las maestrías tienen una duración promedio de 3 semestres académicos (aproximadamente 18 meses de estudio).",
      parentId: "sub-8"
    },
    "sub-9": {
      id: "sub-9",
      type: "subcategory",
      subtype: "DIRECTO",
      name: "Trámites de Grado",
      directAnswer: "Para iniciar los trámites de obtención de grado de Maestro, debes haber aprobado todos los créditos del plan de estudios de posgrado, acreditar el conocimiento de un idioma extranjero (nivel intermedio), y sustentar y aprobar la tesis.",
      children: [],
      parentId: "cat-3"
    }
  }
};

const DEFAULT_HISTORY = [
  {
    timestamp: "2026-05-26 15:45:12",
    user: "EB",
    action: "Creado",
    type: "Categoría",
    name: "Pregrado Presencial",
    details: "Inicialización del sistema con la categoría raíz."
  },
  {
    timestamp: "2026-05-26 15:50:24",
    user: "EB",
    action: "Creado",
    type: "Subcategoría",
    name: "Accesos",
    details: "Se agregó subcategoría FAQ para control de accesos."
  },
  {
    timestamp: "2026-05-26 16:00:15",
    user: "EB",
    action: "Modificado",
    type: "Pregunta",
    name: "¿Cómo recupero mis credenciales de WienerNet?",
    details: "Se actualizó la respuesta sugerida con enlace a recuperación de contraseña."
  }
];

// 2. Application State
let state = {
  categories: [],
  nodes: {},
  expandedNodes: new Set(["cat-1", "sub-1"]), // Pre-expand pregrado presencial and accesos
  selectedNodeId: null, // Start with no selection for Home Screen
  currentTab: "edit", // 'edit' | 'preview' | 'history'
  searchQuery: "",
  history: []
};

// Load state from localStorage or initialize with seed data
function loadState() {
  const localData = localStorage.getItem("wienerbot_cms_data");
  const localHistory = localStorage.getItem("wienerbot_cms_history");

  if (localData) {
    const parsed = JSON.parse(localData);
    state.categories = parsed.categories;
    state.nodes = parsed.nodes;
  } else {
    state.categories = [...DEFAULT_DATA.categories];
    state.nodes = JSON.parse(JSON.stringify(DEFAULT_DATA.nodes));
    saveDataToLocalStorage();
  }

  if (localHistory) {
    state.history = JSON.parse(localHistory);
  } else {
    state.history = [...DEFAULT_HISTORY];
    saveHistoryToLocalStorage();
  }

  // Pre-expand items if present
  if (state.selectedNodeId && state.nodes[state.selectedNodeId]) {
    expandParentNodes(state.selectedNodeId);
  }
}

function saveDataToLocalStorage() {
  localStorage.setItem("wienerbot_cms_data", JSON.stringify({
    categories: state.categories,
    nodes: state.nodes
  }));
}

function saveHistoryToLocalStorage() {
  localStorage.setItem("wienerbot_cms_history", JSON.stringify(state.history));
}

function logChange(action, type, name, details) {
  const now = new Date();
  const formatTime = (t) => String(t).padStart(2, "0");
  const timestamp = `${now.getFullYear()}-${formatTime(now.getMonth() + 1)}-${formatTime(now.getDate())} ${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;
  
  state.history.unshift({
    timestamp,
    user: "EB",
    action,
    type,
    name,
    details
  });
  saveHistoryToLocalStorage();
}

// 3. Tree Traversal Helpers
function expandParentNodes(nodeId) {
  let current = state.nodes[nodeId];
  while (current && current.parentId) {
    state.expandedNodes.add(current.parentId);
    current = state.nodes[current.parentId];
  }
}

// Check if node matches search query or has a matching descendant
function matchesSearch(nodeId, query) {
  if (!query) return true;
  
  const node = state.nodes[nodeId];
  if (!node) return false;

  const nameMatches = node.name.toLowerCase().includes(query.toLowerCase());
  if (nameMatches) return true;

  if (node.children && node.children.length > 0) {
    return node.children.some(childId => matchesSearch(childId, query));
  }

  return false;
}

// 4. Recursive Sidebar Tree Renderer
function renderTree(nodeId, depth = 0) {
  const node = state.nodes[nodeId];
  if (!node) return "";

  // If search query exists, filter out non-matching trees
  if (state.searchQuery && !matchesSearch(nodeId, state.searchQuery)) {
    return "";
  }

  const isExpanded = state.expandedNodes.has(nodeId);
  const isSelected = state.selectedNodeId === nodeId;
  const hasChildren = node.children && node.children.length > 0;

  // Icons based on type
  let icon = "📁";
  if (node.type === "category") {
    icon = node.icon || "🎓";
  } else if (node.type === "question") {
    icon = "📄";
  }

  let html = "";
  
  // Indentation class/style
  const indentStyle = `style="padding-left: ${depth * 14 + 12}px;"`;

  // Badges
  let badgeHtml = "";
  if (node.type === "subcategory") {
    const subtypeClass = node.subtype === "FAQ" ? "badge-faq" : "badge-directo";
    badgeHtml = `<span class="tree-badge ${subtypeClass}">${node.subtype}</span>`;
  }

  // Row element
  const selectedClass = isSelected ? "tree-row-selected" : "";
  const folderClass = node.type !== "question" ? "tree-folder-row" : "tree-question-row";
  
  html += `
    <div class="tree-row ${selectedClass} ${folderClass}" data-id="${nodeId}" ${indentStyle}>
      ${node.type !== "question" ? `
        <span class="tree-caret ${isExpanded ? "caret-expanded" : ""}">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      ` : `<span class="tree-caret-spacer"></span>`}
      <span class="tree-icon">${icon}</span>
      <span class="tree-name" title="${node.name}">${escapeHtml(node.name)}</span>
      ${badgeHtml}
    </div>
  `;

  // Render children and creation inline buttons if expanded
  if (node.type !== "question" && (isExpanded || state.searchQuery)) {
    html += `<div class="tree-children-container" data-parent-id="${nodeId}">`;
    
    // Render actual children
    if (node.children && node.children.length > 0) {
      node.children.forEach(childId => {
        html += renderTree(childId, depth + 1);
      });
    }

    // Inline action buttons
    // Indent for inline buttons inside this container
    const actionIndentStyle = `style="padding-left: ${(depth + 1) * 14 + 28}px;"`;
    
    if (node.type === "category") {
      html += `
        <div class="tree-action-btn add-subcategory-btn" data-parent-id="${nodeId}" ${actionIndentStyle}>
          <span>+ Añadir subcategoría</span>
        </div>
      `;
    } else if (node.type === "subcategory") {
      html += `
        <div class="tree-action-btn add-question-btn" data-parent-id="${nodeId}" ${actionIndentStyle}>
          <span>+ Añadir pregunta</span>
        </div>
        <div class="tree-action-btn add-subcategory-btn" data-parent-id="${nodeId}" ${actionIndentStyle}>
          <span>+ Añadir subcategoría</span>
        </div>
      `;
    }

    html += `</div>`;
  }

  return html;
}

function updateSidebarTree() {
  const treeContainer = document.getElementById("tree-list-content");
  if (!treeContainer) return;

  let html = "";
  state.categories.forEach(catId => {
    html += renderTree(catId, 0);
  });

  if (!html && state.searchQuery) {
    html = `<div class="tree-empty-search">No se encontraron resultados para "${escapeHtml(state.searchQuery)}"</div>`;
  }

  treeContainer.innerHTML = html;
  attachTreeEvents();
}

function attachTreeEvents() {
  // Click on rows to select or toggle expand
  const rows = document.querySelectorAll(".tree-row");
  rows.forEach(row => {
    row.addEventListener("click", (e) => {
      const id = row.getAttribute("data-id");
      const node = state.nodes[id];
      
      // If clicked caret or folder itself, we might toggle expansion
      const isCaret = e.target.closest(".tree-caret");
      
      if (isCaret && node.type !== "question") {
        e.stopPropagation();
        toggleNodeExpansion(id);
      } else {
        selectNode(id);
      }
    });
  });

  // Inline creation buttons
  document.querySelectorAll(".add-subcategory-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentId = btn.getAttribute("data-parent-id");
      openCreateSubcategoryModal(parentId);
    });
  });

  document.querySelectorAll(".add-question-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentId = btn.getAttribute("data-parent-id");
      openCreateQuestionModal(parentId);
    });
  });
}

function toggleNodeExpansion(nodeId) {
  if (state.expandedNodes.has(nodeId)) {
    state.expandedNodes.delete(nodeId);
  } else {
    state.expandedNodes.add(nodeId);
  }
  updateSidebarTree();
}

function selectNode(nodeId) {
  state.selectedNodeId = nodeId;
  
  // Make sure parents are expanded so it's visible in tree
  expandParentNodes(nodeId);
  
  updateSidebarTree();
  loadSelectedNodeContent();
}

// 5. Breadcrumbs Generator
function generateBreadcrumbs(nodeId) {
  const path = [];
  let current = state.nodes[nodeId];
  
  while (current) {
    path.unshift(current);
    current = current.parentId ? state.nodes[current.parentId] : null;
  }

  const breadcrumbsContainer = document.getElementById("editor-breadcrumbs");
  if (!breadcrumbsContainer) return;

  let html = "";
  path.forEach((node, index) => {
    const icon = node.type === "category" ? (node.icon || "🎓") : (node.type === "subcategory" ? "📂" : "📄");
    const label = `${icon} ${node.name}`;
    
    if (index === path.length - 1) {
      // Last item, add active type label
      const typeLabel = node.type === "category" ? "Categoría" : (node.type === "subcategory" ? "Subcategoría" : "Pregunta");
      html += `<span class="breadcrumb-item breadcrumb-active" data-id="${node.id}">${escapeHtml(node.name)}</span>`;
      html += ` <span class="breadcrumb-separator">›</span> `;
      html += `<span class="breadcrumb-type">${typeLabel}</span>`;
    } else {
      html += `<span class="breadcrumb-item breadcrumb-link" data-id="${node.id}">${escapeHtml(node.name)}</span>`;
      html += ` <span class="breadcrumb-separator">›</span> `;
    }
  });

  breadcrumbsContainer.innerHTML = html;

  // Add click handlers to breadcrumbs for quick navigation
  breadcrumbsContainer.querySelectorAll(".breadcrumb-link").forEach(link => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("data-id");
      selectNode(id);
    });
  });
}

// 6. Form Loading and Saving (CRUD - Update/Read)
function loadSelectedNodeContent() {
  const node = state.nodes[state.selectedNodeId];
  const editorArea = document.getElementById("editor-fields-area");
  
  if (!node) {
    // Generate Stats for Home Screen
    let categoriesCount = state.categories.length;
    let subcategoriesCount = 0;
    let questionsCount = 0;
    
    Object.values(state.nodes).forEach(n => {
      if (n.type === "subcategory") subcategoriesCount++;
      if (n.type === "question") questionsCount++;
    });

    editorArea.innerHTML = `
      <div class="home-dashboard-container">
        <div class="home-hero-section">
          <div class="home-logo-large">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
          <h1 class="home-title">WienerBot CMS</h1>
          <p class="home-subtitle">Mesa de Trabajo & Base de Conocimiento</p>
          <p class="home-description">
            Bienvenido al gestor oficial de contenidos del chatbot institucional. 
            Desde aquí puedes administrar el árbol de navegación en múltiples niveles de identación, 
            configurar respuestas en texto enriquecido y visualizar cambios en tiempo real.
          </p>
        </div>

        <div class="home-stats-grid">
          <div class="home-stat-card">
            <div class="stat-icon-wrapper icon-cat">🎓</div>
            <div class="stat-number">${categoriesCount}</div>
            <div class="stat-label">Categorías</div>
          </div>
          <div class="home-stat-card">
            <div class="stat-icon-wrapper icon-sub">📂</div>
            <div class="stat-number">${subcategoriesCount}</div>
            <div class="stat-label">Subcategorías</div>
          </div>
          <div class="home-stat-card">
            <div class="stat-icon-wrapper icon-q">📄</div>
            <div class="stat-number">${questionsCount}</div>
            <div class="stat-label">Preguntas</div>
          </div>
        </div>

        <div class="home-actions-section">
          <p class="home-action-instruction">
            Selecciona una categoría o pregunta del menú lateral izquierdo para editar su contenido. 
            O crea una categoría raíz haciendo clic en el siguiente botón:
          </p>
          <button type="button" class="btn-create-home" id="btn-create-cat-home">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Crear Nueva Categoría
          </button>
        </div>
      </div>
    `;
    
    document.getElementById("editor-breadcrumbs").innerHTML = `
      <span class="breadcrumb-item breadcrumb-active">Inicio</span>
    `;

    document.getElementById("btn-create-cat-home").addEventListener("click", openCreateCategoryModal);
    return;
  }

  generateBreadcrumbs(node.id);
  
  // Clear any existing active tab states in the view if switching
  if (state.currentTab === "preview") {
    loadPreviewTab();
  } else if (state.currentTab === "history") {
    loadHistoryTab();
  } else {
    loadEditTab(node);
  }
}

function loadEditTab(node) {
  const editorArea = document.getElementById("editor-fields-area");
  let html = "";

  if (node.type === "category") {
    html = `
      <div class="edit-form-container">
        <div class="form-title-row">
          <h2 class="form-section-title">Categoría</h2>
          <span class="db-table-badge">NC_PE_ODA_CATEGORIES</span>
        </div>

        <div class="form-field">
          <label class="form-label">Nombre <span class="required-star">*</span></label>
          <div class="input-with-icon">
            <span class="input-icon-prefix">${node.icon || "🎓"}</span>
            <input type="text" id="edit-cat-name" class="form-input" value="${escapeHtml(node.name)}">
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Mensaje inicial</label>
          <div class="form-label-desc">El chatbot muestra este texto al inicio de la conversación</div>
          <textarea id="edit-cat-msg" class="form-textarea">${escapeHtml(node.initialMessage || "")}</textarea>
        </div>

        <div class="form-info-pill">
          ${node.children.length} subcategorías en esta categoría
        </div>

        <div class="form-actions-row">
          <button type="button" class="btn-delete-action" id="btn-delete-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Eliminar
          </button>
          <button type="button" class="btn-save-action" id="btn-save-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Guardar
          </button>
        </div>
      </div>
    `;
  } else if (node.type === "subcategory") {
    const isFaq = node.subtype === "FAQ";
    html = `
      <div class="edit-form-container">
        <div class="form-title-row">
          <h2 class="form-section-title">Subcategoría</h2>
          <span class="db-table-badge">NC_PE_ODA_CATEGORIES</span>
        </div>

        <div class="form-field">
          <label class="form-label">Nombre <span class="required-star">*</span></label>
          <div class="input-with-icon">
            <span class="input-icon-prefix">📂</span>
            <input type="text" id="edit-sub-name" class="form-input" value="${escapeHtml(node.name)}">
          </div>
        </div>

        <div class="form-field">
          <label class="form-label">Tipo de subcategoría</label>
          <div class="type-selectors-group">
            <label class="type-radio-label ${isFaq ? "active" : ""}">
              <input type="radio" name="edit-sub-type" value="FAQ" ${isFaq ? "checked" : ""}>
              <span class="radio-custom-badge badge-faq">FAQ</span>
              <span class="radio-desc">Contiene preguntas frecuentes individuales</span>
            </label>
            <label class="type-radio-label ${!isFaq ? "active" : ""}">
              <input type="radio" name="edit-sub-type" value="DIRECTO" ${!isFaq ? "checked" : ""}>
              <span class="radio-custom-badge badge-directo">DIRECTO</span>
              <span class="radio-desc">Responde directamente sin desplegar preguntas</span>
            </label>
          </div>
        </div>

        <div id="sub-faq-fields" style="display: ${isFaq ? "block" : "none"};">
          <div class="form-field">
            <label class="form-label">Mensaje inicial</label>
            <div class="form-label-desc">El chatbot muestra este texto antes de listar las preguntas</div>
            <textarea id="edit-sub-msg" class="form-textarea">${escapeHtml(node.initialMessage || "")}</textarea>
          </div>
          <div class="form-info-pill">
            ${node.children.length} preguntas en esta subcategoría
          </div>
        </div>

        <div id="sub-direct-fields" style="display: ${!isFaq ? "block" : "none"};">
          <div class="form-field">
            <div class="form-title-row">
              <label class="form-label">Respuesta directa <span class="required-star">*</span></label>
              <span class="db-table-badge">NC_PE_ODA_SUGGESTED_ANSWERS</span>
            </div>
            <div class="wysiwyg-editor-container">
              <div class="wysiwyg-toolbar">
                <button type="button" class="wysiwyg-btn" data-command="bold" title="Negrita"><b>B</b></button>
                <button type="button" class="wysiwyg-btn" data-command="italic" title="Cursiva"><i>I</i></button>
                <button type="button" class="wysiwyg-btn" data-command="insertUnorderedList" title="Lista Viñetas">• ☰</button>
                <button type="button" class="wysiwyg-btn" data-command="insertOrderedList" title="Lista Numerada">1. ☰</button>
                <button type="button" class="wysiwyg-btn" data-command="createLink" title="Insertar Enlace">🔗</button>
                <button type="button" class="wysiwyg-btn" data-command="insertHorizontalRule" title="Línea Horizontal">―</button>
              </div>
              <div class="wysiwyg-editor" id="edit-sub-direct-answer" contenteditable="true">${node.directAnswer || ""}</div>
            </div>
            <div class="wysiwyg-note">
              Soporta texto enriquecido: **negritas**, *cursivas*, listas, enlaces. El chatbot renderizará el formato.
            </div>
          </div>
        </div>

        <div class="form-actions-row">
          <button type="button" class="btn-delete-action" id="btn-delete-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Eliminar
          </button>
          <button type="button" class="btn-save-action" id="btn-save-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Guardar
          </button>
        </div>
      </div>
    `;
  } else if (node.type === "question") {
    // Get other questions in this subcategory
    let otherQuestionsHtml = "";
    const parentNode = node.parentId ? state.nodes[node.parentId] : null;
    if (parentNode && parentNode.children && parentNode.children.length > 0) {
      const brothers = parentNode.children.filter(childId => childId !== node.id && state.nodes[childId] && state.nodes[childId].type === "question");
      if (brothers.length > 0) {
        otherQuestionsHtml += `
          <div class="other-questions-list-section">
            <div class="other-questions-title">Otras preguntas en esta subcategoría</div>
            <ul class="other-questions-ul">
              ${brothers.map(broId => `
                <li class="other-question-li" data-id="${broId}">• ${escapeHtml(state.nodes[broId].name)}</li>
              `).join("")}
            </ul>
          </div>
        `;
      }
    }

    html = `
      <div class="edit-form-container">
        <div class="form-title-row">
          <h2 class="form-section-title">Pregunta</h2>
          <span class="db-table-badge">NC_PE_ODA_QUESTIONS</span>
        </div>

        <div class="form-field">
          <label class="form-label">Texto de la pregunta <span class="required-star">*</span></label>
          <input type="text" id="edit-q-name" class="form-input" value="${escapeHtml(node.name)}">
          <div class="wysiwyg-note">
            Sé claro y específico — el chatbot usa este texto para reconocer la intención del usuario.
          </div>
        </div>

        <div class="form-field">
          <div class="form-title-row">
            <label class="form-label">Respuesta sugerida</label>
            <span class="db-table-badge">NC_PE_ODA_SUGGESTED_ANSWERS</span>
          </div>
          <div class="wysiwyg-editor-container">
            <div class="wysiwyg-toolbar">
              <button type="button" class="wysiwyg-btn" data-command="bold" title="Negrita"><b>B</b></button>
              <button type="button" class="wysiwyg-btn" data-command="italic" title="Cursiva"><i>I</i></button>
              <button type="button" class="wysiwyg-btn" data-command="insertUnorderedList" title="Lista Viñetas">• ☰</button>
              <button type="button" class="wysiwyg-btn" data-command="insertOrderedList" title="Lista Numerada">1. ☰</button>
              <button type="button" class="wysiwyg-btn" data-command="createLink" title="Insertar Enlace">🔗</button>
              <button type="button" class="wysiwyg-btn" data-command="insertHorizontalRule" title="Línea Horizontal">―</button>
            </div>
            <div class="wysiwyg-editor" id="edit-q-answer" contenteditable="true">${node.answer || ""}</div>
          </div>
          <div class="wysiwyg-note">
            Soporta texto enriquecido: **negritas**, *cursivas*, listas, enlaces. El chatbot renderizará el formato.
          </div>
        </div>

        ${otherQuestionsHtml}

        <div class="form-actions-row">
          <button type="button" class="btn-delete-action" id="btn-delete-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Eliminar
          </button>
          <button type="button" class="btn-save-action" id="btn-save-node">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Guardar
          </button>
        </div>
      </div>
    `;
  }

  editorArea.innerHTML = html;

  // Attach button events
  document.getElementById("btn-save-node").addEventListener("click", () => saveSelectedNode(node));
  document.getElementById("btn-delete-node").addEventListener("click", () => openDeleteConfirmModal(node.id));

  // Subcategory type radios toggle fields
  if (node.type === "subcategory") {
    const faqRadio = document.querySelector('input[name="edit-sub-type"][value="FAQ"]');
    const directRadio = document.querySelector('input[name="edit-sub-type"][value="DIRECTO"]');
    
    const updateSubtypeFields = () => {
      const isFaq = faqRadio.checked;
      document.getElementById("sub-faq-fields").style.display = isFaq ? "block" : "none";
      document.getElementById("sub-direct-fields").style.display = isFaq ? "none" : "block";
      
      // Update styling class on radio labels
      faqRadio.closest(".type-radio-label").classList.toggle("active", isFaq);
      directRadio.closest(".type-radio-label").classList.toggle("active", !isFaq);
    };

    faqRadio.addEventListener("change", updateSubtypeFields);
    directRadio.addEventListener("change", updateSubtypeFields);
  }

  // WYSIWYG commands
  const wysiwygBtns = document.querySelectorAll(".wysiwyg-btn");
  wysiwygBtns.forEach(btn => {
    btn.addEventListener("mousedown", (e) => {
      e.preventDefault(); // Don't steal focus from contenteditable
      const command = btn.getAttribute("data-command");
      
      if (command === "createLink") {
        const url = prompt("Ingresa la URL del enlace (ej: https://uwiener.edu.pe):");
        if (url) {
          document.execCommand(command, false, url);
        }
      } else {
        document.execCommand(command, false, null);
      }
    });
  });

  // Jump to other brother questions
  document.querySelectorAll(".other-question-li").forEach(li => {
    li.addEventListener("click", () => {
      const qId = li.getAttribute("data-id");
      selectNode(qId);
    });
  });
}

function saveSelectedNode(node) {
  let hasChanges = false;
  let logDetails = "";

  if (node.type === "category") {
    const newName = document.getElementById("edit-cat-name").value.trim();
    const newMsg = document.getElementById("edit-cat-msg").value.trim();

    if (!newName) {
      showToast("El nombre de la categoría es requerido.", "error");
      return;
    }

    if (node.name !== newName || node.initialMessage !== newMsg) {
      logDetails = `Modificó nombre de "${node.name}" a "${newName}" y mensaje inicial.`;
      node.name = newName;
      node.initialMessage = newMsg;
      hasChanges = true;
    }

  } else if (node.type === "subcategory") {
    const newName = document.getElementById("edit-sub-name").value.trim();
    const newSubtype = document.querySelector('input[name="edit-sub-type"]:checked').value;
    
    if (!newName) {
      showToast("El nombre de la subcategoría es requerido.", "error");
      return;
    }

    let isFaq = newSubtype === "FAQ";
    let newMsg = isFaq ? document.getElementById("edit-sub-msg").value.trim() : "";
    let newDirectAnswer = isFaq ? "" : document.getElementById("edit-sub-direct-answer").innerHTML;

    if (!isFaq && (!newDirectAnswer || newDirectAnswer === "<br>" || newDirectAnswer.trim() === "")) {
      showToast("La respuesta directa es requerida para tipo DIRECTO.", "error");
      return;
    }

    if (node.name !== newName || node.subtype !== newSubtype || 
        (isFaq && node.initialMessage !== newMsg) || 
        (!isFaq && node.directAnswer !== newDirectAnswer)) {
      
      logDetails = `Modificó subcategoría "${node.name}": Tipo ${newSubtype}.`;
      node.name = newName;
      node.subtype = newSubtype;
      if (isFaq) {
        node.initialMessage = newMsg;
        node.directAnswer = "";
      } else {
        node.directAnswer = newDirectAnswer;
        node.initialMessage = "";
      }
      hasChanges = true;
    }

  } else if (node.type === "question") {
    const newName = document.getElementById("edit-q-name").value.trim();
    const newAnswer = document.getElementById("edit-q-answer").innerHTML;

    if (!newName) {
      showToast("El texto de la pregunta es requerido.", "error");
      return;
    }

    if (node.name !== newName || node.answer !== newAnswer) {
      logDetails = `Modificó pregunta "${node.name}".`;
      node.name = newName;
      node.answer = newAnswer;
      hasChanges = true;
    }
  }

  if (hasChanges) {
    saveDataToLocalStorage();
    logChange("Modificado", node.type === "category" ? "Categoría" : (node.type === "subcategory" ? "Subcategoría" : "Pregunta"), node.name, logDetails);
    showToast("Cambios guardados con éxito.");
    
    // Refresh Sidebar tree and Breadcrumbs
    updateSidebarTree();
    generateBreadcrumbs(node.id);
    
    // If we're on question, refresh the form to reload "Other questions" just in case name changed
    if (node.type === "question") {
      loadEditTab(node);
    }
  } else {
    showToast("No se detectaron cambios para guardar.", "info");
  }
}

// 7. Cascading Delete Calculator & Modal
function calculateDeleteCascade(nodeId) {
  let subcategoriesCount = 0;
  let questionsCount = 0;
  let answersCount = 0;

  function traverse(id) {
    const node = state.nodes[id];
    if (!node) return;

    if (node.type === "subcategory") {
      subcategoriesCount++;
      if (node.subtype === "DIRECTO") {
        answersCount++; // Direct answer counts as a response record
      }
    } else if (node.type === "question") {
      questionsCount++;
      answersCount++; // Each question has 1 answer
    }

    if (node.children && node.children.length > 0) {
      node.children.forEach(childId => traverse(childId));
    }
  }

  // Traverse children first (don't count the node itself in the recursive counters unless it matches, but the modal lists the children specifically)
  const mainNode = state.nodes[nodeId];
  if (mainNode) {
    if (mainNode.children && mainNode.children.length > 0) {
      mainNode.children.forEach(childId => traverse(childId));
    }
    // Also count the main node's own responses
    if (mainNode.type === "question") {
      answersCount++;
    } else if (mainNode.type === "subcategory" && mainNode.subtype === "DIRECTO") {
      answersCount++;
    }
  }

  const total = subcategoriesCount + questionsCount + answersCount;

  return {
    subcategories: subcategoriesCount,
    questions: questionsCount,
    answers: answersCount,
    total: total
  };
}

function openDeleteConfirmModal(nodeId) {
  const node = state.nodes[nodeId];
  if (!node) return;

  const summary = calculateDeleteCascade(nodeId);
  const modal = document.getElementById("delete-modal");
  
  // Format dialog strings
  document.getElementById("delete-target-title").innerHTML = `¿Eliminar &ldquo;${escapeHtml(node.name)}&rdquo;?`;
  
  let listHtml = "";
  if (node.type === "category") {
    listHtml = `
      <div class="delete-cascade-row">
        <span>Subcategorías</span>
        <span class="delete-count-val">${summary.subcategories}</span>
      </div>
      <div class="delete-cascade-row">
        <span>Preguntas</span>
        <span class="delete-count-val">${summary.questions}</span>
      </div>
      <div class="delete-cascade-row">
        <span>Respuestas</span>
        <span class="delete-count-val">${summary.answers}</span>
      </div>
    `;
  } else if (node.type === "subcategory") {
    listHtml = `
      ${summary.subcategories > 0 ? `
        <div class="delete-cascade-row">
          <span>Subcategorías hijas</span>
          <span class="delete-count-val">${summary.subcategories}</span>
        </div>
      ` : ""}
      <div class="delete-cascade-row">
        <span>Preguntas</span>
        <span class="delete-count-val">${summary.questions}</span>
      </div>
      <div class="delete-cascade-row">
        <span>Respuestas</span>
        <span class="delete-count-val">${summary.answers}</span>
      </div>
    `;
  } else {
    listHtml = `
      <div class="delete-cascade-row">
        <span>Respuestas</span>
        <span class="delete-count-val">1</span>
      </div>
    `;
  }

  document.getElementById("delete-cascade-list").innerHTML = listHtml;
  document.getElementById("delete-total-value").textContent = node.type === "question" ? "1" : summary.total;
  
  // Setup confirm button handler (using a clone to purge previous listeners)
  const confirmBtn = document.getElementById("delete-confirm-btn");
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
  
  newConfirmBtn.addEventListener("click", () => {
    executeDeleteNode(nodeId);
    modal.close();
  });

  modal.showModal();
}

function executeDeleteNode(nodeId) {
  const node = state.nodes[nodeId];
  if (!node) return;

  const nodeName = node.name;
  const nodeType = node.type === "category" ? "Categoría" : (node.type === "subcategory" ? "Subcategoría" : "Pregunta");
  
  // Helper to recursively remove nodes from the map
  function removeRecursive(id) {
    const n = state.nodes[id];
    if (!n) return;
    if (n.children && n.children.length > 0) {
      n.children.forEach(childId => removeRecursive(childId));
    }
    delete state.nodes[id];
    state.expandedNodes.delete(id);
  }

  // Remove child references from parent
  if (node.parentId) {
    const parent = state.nodes[node.parentId];
    if (parent && parent.children) {
      parent.children = parent.children.filter(childId => childId !== nodeId);
    }
  } else {
    // Root level category
    state.categories = state.categories.filter(catId => catId !== nodeId);
  }

  // Recursively delete node and children from state
  removeRecursive(nodeId);
  saveDataToLocalStorage();

  logChange("Eliminado", nodeType, nodeName, `Eliminó la ${nodeType.toLowerCase()} "${nodeName}" en cascada.`);
  showToast(`"${nodeName}" eliminado con éxito.`, "info");

  // Select another node (e.g. first remaining category)
  if (state.categories.length > 0) {
    selectNode(state.categories[0]);
  } else {
    state.selectedNodeId = null;
    loadSelectedNodeContent();
    updateSidebarTree();
  }
}

// 8. Custom Dialogs for Node Creation (CRUD - Create)
let activeParentId = null; // Stores parent ID for subcategory/question creation

function openCreateCategoryModal() {
  const modal = document.getElementById("create-category-modal");
  document.getElementById("new-cat-name").value = "";
  document.getElementById("new-cat-msg").value = "";
  modal.showModal();
}

function openCreateSubcategoryModal(parentId) {
  activeParentId = parentId;
  const modal = document.getElementById("create-subcategory-modal");
  document.getElementById("new-sub-name").value = "";
  document.getElementById("new-sub-type").value = "FAQ";
  modal.showModal();
}

function openCreateQuestionModal(parentId) {
  activeParentId = parentId;
  const modal = document.getElementById("create-question-modal");
  document.getElementById("new-q-name").value = "";
  document.getElementById("new-q-answer").value = "";
  modal.showModal();
}

function initCreationModals() {
  // Category creation
  document.getElementById("create-cat-save").addEventListener("click", () => {
    const name = document.getElementById("new-cat-name").value.trim();
    const msg = document.getElementById("new-cat-msg").value.trim();

    if (!name) {
      showToast("El nombre de la categoría es requerido.", "error");
      return;
    }

    const id = "cat-" + Date.now();
    state.nodes[id] = {
      id: id,
      type: "category",
      name: name,
      icon: "🎓",
      initialMessage: msg || "¡Hola! ¿En qué puedo ayudarte?",
      children: [],
      parentId: null
    };
    state.categories.push(id);
    state.expandedNodes.add(id);

    saveDataToLocalStorage();
    logChange("Creado", "Categoría", name, `Creó la categoría raíz "${name}".`);
    showToast(`Categoría "${name}" creada con éxito.`);
    
    document.getElementById("create-category-modal").close();
    selectNode(id);
  });

  // Subcategory creation
  document.getElementById("create-sub-save").addEventListener("click", () => {
    const name = document.getElementById("new-sub-name").value.trim();
    const subtype = document.getElementById("new-sub-type").value;

    if (!name) {
      showToast("El nombre de la subcategoría es requerido.", "error");
      return;
    }

    const parentId = activeParentId;
    if (!parentId || !state.nodes[parentId]) {
      showToast("Error: No se pudo identificar la categoría superior.", "error");
      return;
    }

    const id = "sub-" + Date.now();
    state.nodes[id] = {
      id: id,
      type: "subcategory",
      subtype: subtype,
      name: name,
      initialMessage: subtype === "FAQ" ? "Selecciona una pregunta de la lista:" : "",
      directAnswer: subtype === "DIRECTO" ? "Escribe la respuesta directa aquí..." : "",
      children: [],
      parentId: parentId
    };

    // Add to parent
    state.nodes[parentId].children.push(id);
    state.expandedNodes.add(parentId);
    state.expandedNodes.add(id);

    saveDataToLocalStorage();
    logChange("Creado", "Subcategoría", name, `Creó la subcategoría "${name}" de tipo ${subtype} bajo "${state.nodes[parentId].name}".`);
    showToast(`Subcategoría "${name}" creada con éxito.`);

    document.getElementById("create-subcategory-modal").close();
    selectNode(id);
  });

  // Question creation
  document.getElementById("create-q-save").addEventListener("click", () => {
    const name = document.getElementById("new-q-name").value.trim();
    const answer = document.getElementById("new-q-answer").value.trim();

    if (!name) {
      showToast("El texto de la pregunta es requerido.", "error");
      return;
    }

    const parentId = activeParentId;
    if (!parentId || !state.nodes[parentId]) {
      showToast("Error: No se pudo identificar la subcategoría superior.", "error");
      return;
    }

    const id = "q-" + Date.now();
    state.nodes[id] = {
      id: id,
      type: "question",
      name: name,
      answer: answer || "Respuesta sugerida aquí...",
      parentId: parentId
    };

    // Add to parent
    state.nodes[parentId].children.push(id);
    state.expandedNodes.add(parentId);

    saveDataToLocalStorage();
    logChange("Creado", "Pregunta", name, `Creó la pregunta "${name}" bajo "${state.nodes[parentId].name}".`);
    showToast(`Pregunta creada con éxito.`);

    document.getElementById("create-question-modal").close();
    selectNode(id);
  });

  // Close buttons for all dialogs
  document.querySelectorAll("dialog .btn-modal-cancel").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const dialog = e.target.closest("dialog");
      if (dialog) dialog.close();
    });
  });
}

// 9. Interactive Chatbot Preview Simulator
let chatSession = {
  history: [], // array of { sender: 'bot' | 'user', text: string, options: Array }
  currentNodeId: null
};

function startPreviewSession() {
  const selectedNode = state.nodes[state.selectedNodeId];
  chatSession.history = [];
  
  if (!selectedNode) {
    chatSession.history.push({
      sender: "bot",
      text: "Bienvenido a WienerBot. Por favor, selecciona una categoría en el árbol de contenido para previsualizar."
    });
    renderChatMessages();
    return;
  }

  // Trigger initial welcome
  navigateToPreviewNode(selectedNode.id, false);
}

function navigateToPreviewNode(nodeId, addUserBubble = true) {
  const node = state.nodes[nodeId];
  if (!node) return;

  if (addUserBubble) {
    chatSession.history.push({
      sender: "user",
      text: node.name
    });
  }

  if (node.type === "category") {
    // Show Category message + child subcategories as options
    const options = node.children
      .map(childId => state.nodes[childId])
      .filter(Boolean)
      .map(child => ({ id: child.id, label: child.name }));

    chatSession.history.push({
      sender: "bot",
      text: node.initialMessage || "Por favor, selecciona una de las siguientes opciones:",
      options: options
    });
  } else if (node.type === "subcategory") {
    if (node.subtype === "DIRECTO") {
      // Show direct response directly, no questions list
      chatSession.history.push({
        sender: "bot",
        text: node.directAnswer || "No se ha configurado una respuesta directa para esta sección.",
        options: []
      });
    } else {
      // FAQ subtype: list questions as options
      const options = node.children
        .map(childId => state.nodes[childId])
        .filter(Boolean)
        .map(child => ({ id: child.id, label: child.name }));

      chatSession.history.push({
        sender: "bot",
        text: node.initialMessage || "Elige una de las preguntas frecuentes:",
        options: options
      });
    }
  } else if (node.type === "question") {
    // Show answer directly
    chatSession.history.push({
      sender: "bot",
      text: node.answer || "No se ha configurado una respuesta sugerida.",
      options: []
    });
  }

  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById("chat-preview-messages");
  if (!container) return;

  let html = "";
  chatSession.history.forEach((msg, idx) => {
    const isBot = msg.sender === "bot";
    const bubbleClass = isBot ? "chat-msg-bot" : "chat-msg-user";
    
    html += `
      <div class="chat-message-row ${isBot ? "chat-row-bot" : "chat-row-user"}">
        ${isBot ? `
          <div class="chat-avatar">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
        ` : ""}
        <div class="chat-bubble ${bubbleClass}">
          <div class="chat-bubble-text">${msg.text}</div>
          
          ${msg.options && msg.options.length > 0 ? `
            <div class="chat-options-container">
              ${msg.options.map(opt => `
                <button type="button" class="chat-option-btn" data-target-id="${opt.id}">${escapeHtml(opt.label)}</button>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  
  // Scroll to bottom
  container.scrollTop = container.scrollHeight;

  // Option buttons event listeners
  container.querySelectorAll(".chat-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target-id");
      navigateToPreviewNode(targetId, true);
    });
  });
}

function restartChatPreview() {
  chatSession.history = [];
  
  // If we want to start from the root, list all main categories
  const options = state.categories
    .map(catId => state.nodes[catId])
    .filter(Boolean)
    .map(cat => ({ id: cat.id, label: cat.name }));

  chatSession.history.push({
    sender: "bot",
    text: "¡Hola! Soy WienerBot, el asistente virtual. ¿Sobre qué modalidad o sección deseas consultar?",
    options: options
  });

  renderChatMessages();
}

function loadPreviewTab() {
  const editorArea = document.getElementById("editor-fields-area");
  
  editorArea.innerHTML = `
    <div class="preview-tab-wrapper">
      <div class="preview-header-flex">
        <h2 class="form-section-title">Vista previa en WienerBot</h2>
        <button type="button" class="btn-restart-chat" id="btn-restart-chat">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
          </svg>
          Reiniciar Chat
        </button>
      </div>

      <div class="chatbot-window-container">
        <div class="chatbot-header">
          <div class="chatbot-logo-circle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
          <div class="chatbot-header-text">
            <div class="chatbot-name">WienerBot</div>
            <div class="chatbot-status-row">
              <span class="chatbot-status-dot"></span>
              En línea
            </div>
          </div>
        </div>

        <div class="chatbot-messages-area" id="chat-preview-messages">
          <!-- Chat messages dynamically rendered here -->
        </div>

        <div class="chatbot-input-bar">
          <input type="text" class="chatbot-text-input" placeholder="Escribe un mensaje aquí..." disabled>
          <button type="button" class="chatbot-send-btn" disabled>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("btn-restart-chat").addEventListener("click", restartChatPreview);
  startPreviewSession();
}

// 10. Change History Log tab
function loadHistoryTab() {
  const editorArea = document.getElementById("editor-fields-area");
  
  let rowsHtml = "";
  if (state.history.length === 0) {
    rowsHtml = `<tr><td colspan="5" class="table-empty-row">No hay cambios registrados en el historial.</td></tr>`;
  } else {
    state.history.forEach(log => {
      let actionClass = "";
      if (log.action === "Creado") actionClass = "history-action-created";
      else if (log.action === "Modificado") actionClass = "history-action-modified";
      else if (log.action === "Eliminado") actionClass = "history-action-deleted";

      rowsHtml += `
        <tr class="history-table-row">
          <td class="history-td-time">${log.timestamp}</td>
          <td class="history-td-user">
            <span class="history-user-avatar" title="Usuario Administrativo">${log.user}</span>
          </td>
          <td class="history-td-action">
            <span class="history-action-badge ${actionClass}">${log.action}</span>
          </td>
          <td class="history-td-type">${escapeHtml(log.type)}</td>
          <td class="history-td-details">
            <strong>${escapeHtml(log.name)}</strong>
            <div class="history-details-desc">${escapeHtml(log.details)}</div>
          </td>
        </tr>
      `;
    });
  }

  editorArea.innerHTML = `
    <div class="history-tab-wrapper">
      <div class="form-title-row">
        <h2 class="form-section-title">Historial de cambios</h2>
        <span class="db-table-badge">SYS_CMS_AUDIT_LOG</span>
      </div>

      <div class="history-table-container">
        <table class="history-table">
          <thead>
            <tr>
              <th style="width: 160px;">Fecha y hora</th>
              <th style="width: 80px; text-align: center;">Usuario</th>
              <th style="width: 110px;">Acción</th>
              <th style="width: 120px;">Tipo de objeto</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 11. Tabs Navigation Handlers
function initTabs() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      
      // Update tab active state in UI
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      state.currentTab = target;
      loadSelectedNodeContent();
    });
  });
}

// 12. Search Input Handler
function initSearch() {
  const searchInput = document.getElementById("header-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    updateSidebarTree();
  });
}

// 13. Toast Notification helper
function showToast(message, type = "success") {
  // Remove existing toast if any
  const existing = document.getElementById("app-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "app-toast";
  toast.className = `app-toast toast-${type}`;
  
  let icon = "";
  if (type === "success") {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-text">${escapeHtml(message)}</span>
  `;

  document.body.appendChild(toast);

  // Trigger animation reflow
  setTimeout(() => toast.classList.add("visible"), 10);

  // Remove toast after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 14. HTML Escape Utility
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 15. App Initialization on DOM Load
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  updateSidebarTree();
  loadSelectedNodeContent();
  initTabs();
  initSearch();
  initCreationModals();

  // Root Creation button triggers
  document.getElementById("btn-add-root-category").addEventListener("click", openCreateCategoryModal);
  document.getElementById("btn-add-root-category-sidebar-header").addEventListener("click", openCreateCategoryModal);
});
