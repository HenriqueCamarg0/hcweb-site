/**
 * Dados dos artigos do blog HC Web Sites
 * Conteúdo educativo e informativo para pequenas empresas
 */

import type { Artigo } from "@/types/blog";

// Importar todos os artigos
import { siteProfissional } from "./blog/artigos/site-profissional";
import { institucionalVsLanding } from "./blog/artigos/institucional-vs-landing";
import { seteErrosSite } from "./blog/artigos/7-erros-site";
import { siteResponsivo } from "./blog/artigos/site-responsivo";
import { advocacia } from "./blog/artigos/advocacia";
import { floricultura } from "./blog/artigos/floricultura";
import { odontologia } from "./blog/artigos/odontologia";
import { petshop } from "./blog/artigos/petshop";
import { pizzaria } from "./blog/artigos/pizzaria";
import { restaurante } from "./blog/artigos/restaurante";
import { identidadeVisual } from "./blog/artigos/identidade-visual";
import { venderMaisInternet } from "./blog/artigos/vender-mais-internet";
import { marketingDigital } from "./blog/artigos/marketing-digital";
import { tecnologia2026 } from "./blog/artigos/tecnologia-2026";

/**
 * Array com todos os artigos do blog
 * Mantido na ordem original para preservar a ordenação por data
 */
export const artigos: Artigo[] = [
  siteProfissional,
  institucionalVsLanding,
  seteErrosSite,
  siteResponsivo,
  advocacia,
  floricultura,
  odontologia,
  petshop,
  pizzaria,
  restaurante,
  identidadeVisual,
  venderMaisInternet,
  marketingDigital,
  tecnologia2026,
];
