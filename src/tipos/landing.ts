/**
 * Tipos para os dados da landing page
 */

export interface Solucao {
  icon: string;
  title: string;
  desc: string;
}

export interface Etapa {
  n: string;
  title: string;
  desc: string;
}

export interface Beneficio {
  icon: string;
  title: string;
  desc: string;
}

export interface PorQueTerSite {
  icon: string;
  title: string;
  text: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Projeto {
  title: string;
  category: string;
}
