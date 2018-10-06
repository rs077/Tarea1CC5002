$("#form").alpaca({
  "schema": {
    "type": "object",
    "properties": {
      "region": {
        "title": "Seleccione Region",
        "default": "Región Metropolitana de Santiago",
        "type": "string",
        "enum": ["Región de Tarapacá", "Región de Antofagasta", "Región de Atacama", "Región de Coquimbo", "Región de Valparaíso", "Región del Libertador Gral. Bernardo O'Higgins", "Región del Maule", "Región del Biobío", "Región de la Araucanía", "Región de Los Lagos", "Región Aisén del Gral. Carlos Ibáñez del Campo", "Región de Magallanes y de la Antártica Chilena", "Región Metropolitana de Santiago", "Región de Los Ríos", "Región de Arica y Parinacota"],
        "required": true
      },
      "i": {
        "title": "Región de Tarapacá",
        "type": "string",
        "default": "IQUIQUE",
        "enum": ["ALTO HOSPICIO", "CAMINA", "COLCHANE", "HUARA", "IQUIQUE", "PICA", "POZO ALMONTE"],
        "dependencies": "region"
      },
      "ii": {
        "title": "Región de Antofagasta",
        "type": "string",
        "default": "ANTOFAGASTA",
        "enum": ["ANTOFAGASTA", "CALAMA", "MARIA ELENA", "MEJILLONES", "OLLAGUE", "SAN PEDRO DE ATACAMA", "SIERRA GORDA", "TALTAL", "TOCOPILLA"],
        "dependencies": "region"
      },
      "iii": {
        "title": "Región de Atacama",
        "type": "string",
        "default": "COPIAPO",
        "enum": ["ALTO DEL CARMEN", "CALDERA", "CHANARAL", "COPIAPO", "DIEGO DE ALMAGRO", "EL SALVADOR", "FREIRINA", "HUASCO", "TIERRA AMARILLA", "VALLENAR"],
        "dependencies": "region"
      },
      "iv": {
        "title": "Región de Coquimbo",
        "type": "string",
        "default": "COQUIMBO",
        "enum": ["A HIGUERA", "ANDACOLLO", "CANELA", "COMBARBALA", "COQUIMBO", "ILLAPEL", "LA SERENA", "LOS VILOS", "MONTE PATRIA", "OVALLE", "PAIHUANO", "PUNITAQUI", "RIO HURTADO", "SALAMANCA", "VICUNA"],
        "dependencies": "region"
      },
      "v": {
        "title": "Región de Valparaíso",
        "type": "string",
        "default": "VALPARAISO",
        "enum": ["ALGARROBO", "CABILDO", "CALLE LARGA", "CARTAGENA", "CASABLANCA", "CATEMU", "CONCON", "EL QUISCO", "EL TABO", "HIJUELAS", "JUAN FERNANDEZ", "LA CALERA", "LA CRUZ", "LA LIGUA", "LIMACHE", "LLAY LLAY", "LOS ANDES", "MARIA PINTO", "MELIPILLA", "NOGALES", "OLMUE", "PANQUEHUE", "PAPUDO", "PETORCA", "PUCHUNCAVI", "PUTAENDO", "QUILLOTA", "QUILPUE", "QUINTERO", "RINCONADA", "SAN ANTONIO", "SAN ESTEBAN", "SAN FELIPE", "SAN RAFAEL", "SANTA MARIA", "SANTO DOMINGO", "VALPARAISO", "VILLA ALEMANA", "VINA DEL MAR", "ZAPALLAR"],
        "dependencies": "region"
      },
      "vi": {
        "title": "Región del Libertador Gral. Bernardo O'Higgins",
        "type": "string",
        "default": "RANCAGUA",
        "enum": ["CHEPICA", "CHIMBARONGO", "CODEGUA", "COINCO", "COLTAUCO", "DONIHUE", "GRANEROS", "LA ESTRELLA", "LAS CABRAS", "LITUECHE", "LOLOL", "MACHALI", "MALLOA", "MARCHIGUE", "MARCHIHUE", "MOSTAZAL", "NANCAGUA", "NAVIDAD", "OLIVAR", "PALMILLA", "PAREDONES", "PERALILLO", "PEUMO", "PICHIDEGUA", "PICHILEMU", "PLACILLA", "PUMANQUE", "QUINTA DE TILCOCO", "RANCAGUA", "RENGO", "REQUINOA", "SAN FERNANDO", "SAN FRANCISCO DE MOSTAZAL", "SAN VICENTE", "SANTA CRUZ"],
        "dependencies": "region"
      },
      "vii": {
        "title": "Región del Maule",
        "type": "string",
        "default": "TALCA",
        "enum": ["CAUQUENES", "CHANCO", "COLBUN", "CONSTITUCION", "CUREPTO", "CURICO", "EMPEDRADO", "HUALANE", "LICANTEN", "LINARES", "LONGAVI", "MAULE", "MOLINA", "PARRAL", "PELARCO", "PELLUHUE", "PENCAHUE", "RAUCO", "RETIRO", "RIO CLARO", "ROMERAL", "SAGRADA FAMILIA", "SAN CLEMENTE", "SAN JAVIER", "TALCA", "TENO", "VICHUQUEN", "VILLA ALEGRE", "YERBAS BUENAS"],
        "dependencies": "region"
      },
      "viii": {
        "title": "Región del Biobío",
        "default": "CONCEPCION",
        "type": "string",
        "enum": ["ALTO BIO BIO", "ANTUCO", "ARAUCO", "BULNES", "CABRERO", "Chiguayante", "CHILLAN", "COBQUECURA", "COELEMU", "COIHUECO", "CONCEPCION", "CORONEL", "CURANILAHUE", "EL CARMEN", "FLORIDA", "HUALQUI", "LAJA", "LEBU", "LOS ALAMOS", "LOS ANGELES", "LOTA", "MULCHEN", "NACIMIENTO", "NEGRETE", "NINHUE", "NIQUEN", "PEMUCO", "PENCO", "PINTO", "PORTEZUELO", "QUILACO", "QUILLECO", "QUILLON", "QUIRIHUE", "RANQUIL", "SAN CARLOS", "SAN FABIAN", "San Gregorio de NiquÃ©n", "SAN IGNACIO", "SAN NICOLAS", "SAN PATRICIO", "SAN PEDRO DE LA PAZ", "SAN ROSENDO", "SANTA BARBARA", "SANTA JUANA", "TALCAHUANO", "TOME", "TREGUACO", "TREHUACO", "TUCAPEL", "YUMBEL", "YUNGAY"],
        "dependencies": "region"
      },
      "ix": {
        "title": "Región de la Araucanía",
        "type": "string",
        "default": "TEMUCO",
        "enum": ["ANGOL", "CANETE", "CARAHUE", "COLLIPULLI", "CONTULMO", "CUNCO", "CURACAUTIN", "CURARREHUE", "ERCILLA", "FREIRE", "GALVARINO", "GORBEA", "LAUTARO", "LONCOCHE", "LONQUIMAY", "LOS SAUCES", "LUMACO", "MELIPEUCO", "NUEVA IMPERIAL", "PADRE LAS CASAS", "PANGUIPULLI", "PERQUENCO", "PITRUFQUEN", "PUCON", "PUERTO SAAVEDRA", "PUREN", "RENAICO", "SAAVEDRA", "TEMUCO", "TEODORO SCHMIDT", "TIRUA", "TOLTEN", "TRAIGUEN", "VICTORIA", "VILCUN", "VILLARRICA"],
        "dependencies": "region"
      },
      "x": {
        "title": "Región de Los Lagos",
        "type": "string",
        "default": "PUERTO MONTT",
        "enum": ["ANCUD", "CALBUCO", "CASTRO", "CHONCHI", "COCHAMO", "CURACAO DE VELEZ", "DALCAHUE", "FRESIA", "FRUTILLAR", "HUALAIHUE", "LLANQUIHUE", "LOS MUERMOS", "MAULLIN", "OSORNO", "PUERTO MONTT", "PUERTO OCTAY", "PUERTO VARAS", "PUQUELDON", "PURRANQUE", "PUYEHUE", "QUEILEN", "QUELLON", "QUEMCHI", "QUINCHAO", "RIO NEGRO", "SAN JUAN DE LA COSTA", "SAN PABLO"],
        "dependencies": "region"
      },
      "xi": {
        "title": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "type": "string",
        "default": "COYHAIQUE",
        "enum": ["AYSEN", "CHILE CHICO", "CISNES", "COCHRANE", "COYHAIQUE", "GUAITECAS", "LAGO VERDE", "OHIGGINS", "PUERTO AISEN", "PUERTO CISNES", "RIO IBANEZ", "TORTEL"],
        "dependencies": "region"
      },
      "xii": {
        "title": "Región de Magallanes y de la Antártica Chilena",
        "type": "string",
        "default": "PUNTA ARENAS",
        "enum": ["LAGUNA BLANCA", "NAVARINO", "PORVENIR", "PRIMAVERA", "PUERTO NATALES", "PUERTO NATALES", "PUNTA ARENAS", "SAN GREGORIO", "TIMAUKEL", "TORRES DEL PAINE"],
        "dependencies": "region"
      },

      "xiv": {
        "title": "Región de Los Ríos",
        "type": "string",
        "default": "VALDIVIA",
        "enum": ["CORRAL", "FUTRONO", "LA UNION", "LAGO RANCO", "LANCO", "LOS LAGOS", "MAFIL", "MARIQUINA", "PAILLACO", "RIO BUENO", "VALDIVIA"],
        "dependencies": "region"
      },
      "xv": {
        "title": "Arica y Parinacota",
        "type": "string",
        "default": "ARICA",
        "enum": ["ARICA", "CAMARONES", "GENERAL LAGOS", "PUTRE"],
        "dependencies": "region"
      },

      "rm": {
        "title": "Region Metropolitana",
        "type": "string",
        "default": "SANTIAGO CENTRO",
        "enum": ["BUIN", "CALERA DE TANGO", "CERRILLOS", "CERRO NAVIA", "COLINA", "CONCHALI", "EL BOSQUE", "EL MONTE", "ESTACION CENTRAL", "HUECHURABA", "INDEPENDENCIA", "ISLA DE MAIPO", "LA CISTERNA", "LA FLORIDA", "LA GRANJA", "LA PINTANA", "LA REINA", "LAMPA", "LAS CONDES", "LO BARNECHEA", "LO ESPEJO", "LO PRADO", "MACUL", "MAIPU", "NUNOA", "PADRE HURTADO", "PAINE", "PEDRO AGUIRRE CERDA", "PENAFLOR", "PENALOLEN", "PIRQUE", "PROVIDENCIA", "PUDAHUEL", "PUENTE ALTO", "QUILICURA", "QUINTA NORMAL", "RECOLETA", "RENCA", "SAN BERNARDO", "SAN JOAQUIN", "SAN JOSE DE MAIPO", "SAN MIGUEL", "SAN RAMON", "SANTIAGO CENTRO", "TALAGANTE", "TILTIL", "VITACURA"],
        "dependencies": "region"
      }
    }
  },
  "options": {
    "fields": {
      "i": {
        "dependencies": {
          "region": "Región de Tarapacá"
        }
      },
      "ii": {
        "dependencies": {
          "region": "Región de Antofagasta"
        }
      },
      "iii": {
        "dependencies": {
          "region": "Región de Atacama"
        }
      },
      "iv": {
        "dependencies": {
          "region": "Región de Coquimbo"
        }
      },
      "v": {
        "dependencies": {
          "region": "Región de Valparaíso"
        }
      },
      "vi": {
        "dependencies": {
          "region": "Región del Libertador Gral. Bernardo O'Higgins"
        }
      },
      "vii": {
        "dependencies": {
          "region": "Región del Maule"
        }
      },
      "viii": {
        "dependencies": {
          "region": "Región del Biobío"
        }
      },
      "ix": {
        "dependencies": {
          "region": "Región de la Araucanía"
        }
      },
      "x": {
        "dependencies": {
          "region": "Región de Los Lagos"
        }
      },
      "xi": {
        "dependencies": {
          "region": "Región Aisén del Gral. Carlos Ibáñez del Campo"
        }
      },
      "xii": {
        "dependencies": {
          "region": "Región de Magallanes y de la Antártica Chilena"
        }
      },

      "xiv": {
        "dependencies": {
          "region": "Región de Los Ríos"
        }
      },
      "xv": {
        "dependencies": {
          "region": "Región de Arica y Parinacota"
        }
      },
      "rm": {
        "dependencies": {
          "region": "Región Metropolitana de Santiago"
        }
      }
    }
  }
});