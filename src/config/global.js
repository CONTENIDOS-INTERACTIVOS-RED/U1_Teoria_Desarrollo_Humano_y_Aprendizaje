export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Estudio de la relación con el medio',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría del aprendizaje social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fases del aprendizaje social observacional o vicario',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La teoría del apego de John Bowlby',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Liberadores sociales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La monotropía y la afectación del apego en el desarrollo ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desarrollo del vínculo del apego',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Categorías de apego - Mary Ainsworth',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Alteraciones por apego desorganizado',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'König, K. (2021). Los tres primeros años del niño: adquisición del andar erguido aprendizaje del habla despertar del pensar. Editorial Antroposófica. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/196980?page=64.',
    },
    {
      referencia:
        'Torres, A. (2025). Aprendizaje observacional: definición, fases y usos. Portal Psicología y Mente.  ',
      link: 'https://psicologiaymente.com/psicologia/aprendizaje-observacional',
    },
    {
      referencia:
        'Holmes, J. (2009). Teoría del apego y psicoterapia: en busca de la base segura. Editorial Desclée de Brouwer.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47885',
    },
    {
      referencia:
        'Serrano, P. (2019). La integración sensorial en el desarrollo y aprendizaje infantil. Narcea Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/113159?page=82. ',
    },
    {
      referencia:
        'Pellón Suárez de Puga, R. (2015). Psicología del aprendizaje. UNED - Universidad Nacional de Educación a Distancia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48751',
    },
    {
      referencia:
        'Comeche Moreno, M. I. & Vallejo Pareja, M. Á. (2015). Manual de terapia de conducta en la infancia (2a ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56777',
    },
    {
      referencia:
        'Ardila, R. (s.f.). El mundo de la psicología. Los orígenes del conductismo, Watson y el manifiesto conductista de 1913. Revista latinoamericana de Psicología.  ',
      link: 'http://www.scielo.org.co/pdf/rlps/v45n2/v45n2a14.pdf',
    },
    {
      referencia:
        'Pérez Rodríguez, P. (2006). Revisión de las teorías del aprendizaje más sobresalientes del siglo XX. Red Tiempo de Educar.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/23728',
    },
    {
      referencia:
        'Lizaso Elgarresta, I., Acha Morcillo, J. & Arruabarrena, L. R. (2018). Desarrollo biológico y cognitivo en el ciclo vital. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123058',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje adquirido',
      significado:
        'Se refiere al conocimiento, habilidades, competencias, actitudes o valores que una persona incorpora a través de la experiencia, el estudio, la instrucción, la observación o la práctica.',
    },
    {
      termino: 'Aprendizaje vicario',
      significado:
        'También conocido como aprendizaje observacional, modelado o aprendizaje social, es un proceso en el que los individuos aprenden al observar las acciones y experiencias de los demás.',
    },
    {
      termino: 'Apego',
      significado:
        'Es un vínculo afectivo intenso y duradero, que se desarrolla entre dos individuos, singularmente entre un niño y sus padres o cuidadores.',
    },
    {
      termino: 'Atención',
      significado:
        'Es un proceso conductual y cognitivo de concentración selectiva en un aspecto discreto de la información, ya sea considerada subjetiva u objetiva, mientras que se ignoran otros aspectos perceptibles.',
    },
    {
      termino: 'Imitación',
      significado:
        'Hace referencia a la acción que se realiza, intentando copiar otra o tomándola como ejemplo.',
    },
    {
      termino: 'Mediación',
      significado:
        'Proceso intencionado que incluye métodos, técnicas, y actividades que se utilizan en el contexto educativo, para promover el aprendizaje, fomentando la construcción de conocimientos y el desarrollo de habilidades.',
    },
    {
      termino: 'Memoria',
      significado:
        'Es la capacidad de almacenar, codificar y recuperar información. Es una función cerebral que nos permite aprender y adaptarnos a nuestro entorno.',
    },
    {
      termino: 'Modelo de funcionamiento interno',
      significado:
        'Estructura cognitiva que vincula las representaciones mentales que hace el niño en sus primeras etapas y que le permiten comprender el entorno, su Yo y la relación con los demás.',
    },
    {
      termino: 'Monotropía',
      significado:
        'El apego en el bebé se ancla sobre una única figura o figura principal, a modo de vínculo primario y más relevante, por encima de otros parientes o cuidadores.',
    },
    {
      termino: 'Motivación',
      significado:
        'Conjunto de factores, tanto internos (necesidades, deseos, expectativas) como externos (recompensas, reconocimiento), que incitan a una persona a realizar una acción y a persistir en ella, hasta alcanzar un objetivo.',
    },
    {
      termino: 'Privación materna',
      significado:
        'Se refiere a la separación o pérdida de la madre y la generación de problemas en el desarrollo del apego y, a futuro, dificultades asociadas con lo cognitivo, social y emocional.',
    },
  ],
}
