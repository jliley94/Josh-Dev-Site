/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "typeface-b612";
import "typeface-open-sans";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCode,
  faIcons,
  faDatabase,
  faDollarSign,
  faChevronCircleLeft,
  faChevronCircleRight,
  faFileCode,
  faObjectUngroup,
  faTerminal,
  faFolderOpen,
  faCloud,
  faFileAlt,
  faWindowMaximize,
  faCodeBranch,
  faProjectDiagram,
  faCircle as fasCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  faEnvelope,
  faCode,
  faDatabase,
  faDollarSign,
  faIcons,
  faChevronCircleLeft,
  faChevronCircleRight,
  faFileCode,
  faObjectUngroup,
  faTerminal,
  faFolderOpen,
  faCloud,
  faFileAlt,
  faWindowMaximize,
  faCodeBranch,
  faProjectDiagram,
  fasCircle,
  farCircle,
);
