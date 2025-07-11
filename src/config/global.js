export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Estudio de las etapas del desarrollo del pensamiento',
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
        titulo: 'Desarrollo cognoscitivo desde Jean Piaget',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Inteligencia operativa e inteligencia figurativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Asimilación y acomodación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características de la teoría de desarrollo cognitivo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              '¿Qué aplicaciones se pueden hacer de la teoría de Piaget, a los contextos actuales de la primera infancia?',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Perspectiva socio cultural Vygostski',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pensamiento y lenguaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Zona de desarrollo próximo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La interacción social ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              '¿Qué aplicaciones se pueden hacer de la teoría de Vygotsky a los contextos actuales de la primera infancia?',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desarrollo moral Kohlberg',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'El círculo ético',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Niveles y estadíos del desarrollo moral de Kohlberg',
            hash: 't_3_2',
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
        'Inhelder, B. & Piaget, J. (1969. 18ª ed 2015). Psicología del Niño. Ediciones Morata, S. L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/116205',
    },
    {
      referencia:
        'FAU, M. E. (2011). Jean Piaget: clásicos resumidos. La Bisagra.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/76826',
    },
    {
      referencia:
        'González, D. et al. (2011). El concepto zona de desarrollo próximo y su manifestación en la educación médica superior cubana. Educación Médica Superior, 25(4).',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S0864-21412011000400013#::text=La%20zona%20de%20desarrollo%20pr%C3%B3ximo.todos%20los%20niveles%20de%20ense%C3%B1anza',
    },
    {
      referencia:
        'Carrera, B. & Mazzarella, C. (2001). Vygotsky: enfoque sociocultural. Educere, 5(13), 41-44.',
      link: 'https://www.redalyc.org/pdf/356/35601309.pdf',
    },
    {
      referencia:
        'Barra Almagía, E. (1987). El desarrollo moral: una introducción a la teoría de Kohlberg. Revista Latinoamericana de Psicología, 19(1), 7-18. Fundación Universitaria Konrad Lorenz.',
      link:
        'https://psiceldesarrollos1.wordpress.com/wp-content/uploads/2019/03/desarrollo-moral-1.pdf',
    },
    {
      referencia:
        'Carbonero, C. (2017). Crecimiento y desarrollo del niño. Wanceulen Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63447',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso mediante el cual se origina o se modifica una actividad respondiendo a una situación, siempre que los cambios no puedan ser atribuidos al crecimiento o al estado temporal del organismo. Es un proceso dinámico que involucra sistemas cognitivos, afectivos y expresivos, y se desarrolla en un contexto social y cultural.',
    },
    {
      termino: 'Círculo ético',
      significado:
        'El concepto de círculo ético puede estar relacionado con dos ideas principales: el círculo de seguridad en el contexto familiar y el círculo moral en el ámbito filosófico.',
    },
    {
      termino: 'Círculo moral',
      significado:
        'Es un concepto filosófico que se refiere a la frontera imaginaria que trazamos entre quienes consideramos dignos de consideración moral y aquellos que no. Este círculo ha ido expandiéndose a lo largo de la historia para incluir a más entidades, como todos los seres humanos y, en algunos casos, animales y otros seres sintientes. La expansión del círculo moral implica que más entidades reciben consideración moral.',
    },
    {
      termino: 'Círculo de seguridad',
      significado:
        'En el contexto familiar, un círculo de seguridad se refiere a un entorno donde todos los miembros se sienten apoyados y protegidos. Este círculo promueve valores como la honestidad, la confianza y la integridad, creando un ambiente donde las acciones éticas son valoradas y practicadas. En este sentido, vivir éticamente significa actuar de manera que beneficie a todos los miembros del círculo, dado que el bienestar de uno, es el bienestar de todos.',
    },
    {
      termino: 'Conciencia moral',
      significado:
        'Es una capacidad fundamental del ser humano que le permite evaluar sus acciones y decisiones en términos de moralidad. Se trata de una "voz interior" que guía hacia lo correcto y lo incorrecto, basándose en principios morales adquiridos a través de la educación, la cultura y la reflexión personal.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'Es un proceso complejo que abarca la evolución de las capacidades mentales del ser humano, desde el nacimiento hasta la adultez. Este proceso incluye la construcción de habilidades como la percepción, la atención, la memoria, el lenguaje, el pensamiento y la resolución de problemas.',
    },
    {
      termino: 'Desarrollo humano',
      significado:
        'Concepto que abarca el crecimiento y mejora de las capacidades de las personas a lo largo de su vida. Este proceso se centra en ampliar las opciones y oportunidades de los individuos, mejorando su calidad de vida y promoviendo la igualdad y la justicia social.',
    },
    {
      termino: 'Desarrollo moral',
      significado:
        'Proceso que abarca el surgimiento, cambio y comprensión de la moralidad, desde la infancia hasta la edad adulta. Este proceso está influenciado por experiencias y comportamientos individuales, al enfrentar cuestiones morales durante diferentes etapas de desarrollo físico y cognitivo.',
    },
    {
      termino: 'Juicios morales',
      significado:
        'Son evaluaciones que las personas realizan sobre conductas o situaciones para determinar si son correctas o incorrectas, desde un punto de vista ético. Estos juicios se basan en los valores y principios morales de una sociedad o cultura y son subjetivos, puesto que pueden variar de una persona a otra, dependiendo de sus creencias y contexto cultural.',
    },
    {
      termino: 'Interacción social',
      significado:
        'Es el proceso fundamental mediante el cual las personas se relacionan entre sí, intercambian información, emociones y comportamientos, y se influyen mutuamente. Este fenómeno es crucial para el desarrollo humano, la formación de relaciones y la construcción de la sociedad.',
    },
    {
      termino: 'Mediación',
      significado:
        'Formas de cooperación esenciales para el aprendizaje, en el sentido de que las ayudas que se reciban pueden conducir la forma en que se logre el conocimiento.',
    },
    {
      termino: 'Primera infancia',
      significado:
        'Es un período crucial en el desarrollo de los niños. Dentro de los aspectos del desarrollo: biológico, psicológico, cultural y social.',
    },
    {
      termino: 'Zona de desarrollo próximo (ZDP)',
      significado:
        'Concepto de la psicología educativa que describe la diferencia entre lo que una persona puede hacer sin ayuda y lo que no puede hacer.',
    },
  ],
}
