<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Desarrollo moral Kohlberg'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Lawrence Kohlberg fue un psicólogo estadounidense que, en sus estudios, tuvo como referente los momentos o etapas que previamente había propuesto Jean Piaget. En su explicación, planteaba que la evolución del razonamiento moral de los niños, también tiene etapas con cualidades particulares y que dicho razonamiento es “motor del desarrollo mental” para toda la vida.
      
          p(data-aos="fade-left").mb-4 Tanto Kohlberg como Piaget, desarrollaron la idea de que los procesos de pensamiento se centran en lo concreto o lo que pueden percibir del entorno físico. Al respecto, Kohlberg amplía la idea de que ese relacionamiento moral comienza con las personas más cercanas, con las que se tiene contacto normalmente, pero que se va haciendo mayor, cuando se vinculan a otras personas, incluso las que no se conocen. 
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Por ejemplo, un niño pequeño puede desear que sus padres estén bien junto a él, sin problemas de salud o enfermedad. Así mismo, cuando se complejiza ese razonamiento, puede extenderse a otros parientes, a otros niños, vecinos, maestros, e incluso si está expuesto a noticias o a otras fuentes de información, puede desear “el bien” a otras personas que no conoce. A esto se le denomina “el círculo ético”, que cada vez se va haciendo más extenso e inclusivo, con una expansión gradual y cambios cualitativos en el desarrollo moral de una persona.
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] El círculo ético


      p.mb-4 El concepto de círculo ético está relacionado con dos ideas principales: 

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Círculo de seguridad en el contexto familiar" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Círculo de seguridad en el contexto familiar
              p En el contexto familiar, un círculo de seguridad se refiere a un entorno donde todos los miembros se sienten apoyados y protegidos, promueve valores como la honestidad, la confianza y la integridad, creando un ambiente donde las acciones éticas son valoradas y practicadas. Vivir éticamente en este círculo, significa actuar de manera que beneficie a todos los miembros del círculo y que el bienestar de un integrante es el bienestar de todos.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Círculo moral en el ámbito filosófico" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Círculo moral en el ámbito filosófico
              p El círculo moral es un concepto filosófico que da cuenta de la frontera imaginaria que define la confianza sobre las personas y entidades que son dignos de consideración moral y aquellos que no. Este círculo se expande a lo largo de la historia de cada persona para incluir a más entidades, como todos los seres humanos, y en algunos casos, animales y otros seres sintientes. La expansión del círculo moral implica que más entidades reciben consideración moral.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-2.png', alt='')


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Niveles y estadíos del desarrollo moral de Kohlberg



      p.mb-4 Para explicar esos cambios cualitativos de la moral, Kohlberg propone los 3 niveles del desarrollo moral, que de manera abreviada se presentan a continuación:


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info.png', alt='', style="max-width: 1090px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="2.5%" y="57%" numero="+")
                  h5 1. Nivel preconvencional
                  p Primeras formas de juicios morales, orientada a las normas sociales, la obediencia y evasión del castigo.
                  p Dura cerca de 9 años.

                .bg-color-white.box-shadow.p-3(x="86.2%" y="20%" numero="+")
                  h5 2. Nivel de consciencia moral o convencional
                  p Desarrolla las convenciones sociales y los juicios sobre lo bueno, lo malo y lo establecido en las normas sociales. 
                  p Está asociado a la adolescencia y adultez.
      
                .bg-color-white.box-shadow.p-3(x="97.5%" y="57%" numero="+")
                  h5 3. Nivel posconvencional
                  p Se desarrollan principios morales propios, apoyados por posturas colectivas y libertades individuales.
                  p Nociones claves como la justicia, los derechos humanos, lo legal y la moral, se articulan en el pensamiento de este nivel.

      
      p.mb-4 Para explicarlo en detalle, Kohlberg detalla los tres niveles de razonamiento moral en seis estadíos (BARRA, 1987), que detallan las cualidades de los individuos, según el desarrollo moral:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Nivel preoperacional")
              p Cuenta con dos estadíos; el primero de ellos se denomina orientación al castigo y la obediencia, en donde su actuación, su comunicación y sus análisis, están condicionados al comportamiento ideal para evitar el castigo por parte de los mayores (padres, cuidadores, mentores, maestros). En ese sentido, los niños en este nivel, solo reconocen las conductas que le evitan regaños, llamados de atención, privación de juguetes y artículos personales o incluso, el daño físico.  
              p El otro estudio de este nivel es la orientación al interés propio, que implica la extensión de interés sobre su círculo social más cercano (padres, amigos, hermanos y otros parientes) desde el afecto; se interesan por su bienestar y buscan satisfacerlos.

      
            .div(titulo="Nivel de consciencia moral o convencional")
              p Cuenta también con dos estadíos. El primero es la orientación hacia el consenso, que es un pensamiento asociado a la forma de obtener recompensa, respeto y consideración de los otros. La garantía para lograrlo es tener una conducta que esté dentro de los patrones establecidos, tanto normativos como sociales. El segundo estadío es la orientación a la autoridad, en donde las leyes, el orden social y las obligaciones, se convierten en una comprensión dentro de las actuaciones. En este estadío, la razón personal está vinculada con el orden social y se convierte en una obligación que su conciencia sea coherente con las obligaciones determinadas por la sociedad.
      
            .div(titulo="Nivel posconvencional")
              p Con sus dos estadíos; el primero llamado orientación hacia el contrato social, en el que se destaca la concepción y relevancia de los valores y derechos humanos para garantizar un contrato social. La convicción, la convivencia y la vida social, toman una relevancia amplia. El segundo estadío es la orientación sobre los derechos universales, que es el nivel más elevado de los principios morales, en el que, desde el ideal, el comportamiento y el pensamiento van en una misma línea de coherencia y de humanidad, trascendiendo las leyes y la norma, por un desarrollo moral que se basa en razonamientos bajo principios morales universales.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://doi.org/10.14393/OBv2n3.a2018-47444" target="_blank" rel="noopener noreferrer") González, D. J. (2019). Una concepción integradora del aprendizaje humano. Obutchénie. Revista De Didática E Psicologia Pedagógica, 2(3), 765-779.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://doi.org/10.55777/rea.v11i21.1088" target="_blank" rel="noopener noreferrer") Silva, A. (2018). Conceptualización de los Modelos de Estilos de Aprendizaje. Revista de Estilos de Aprendizaje, 11,(21). 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=eWoP3OHqzF8" target="_blank" rel="noopener noreferrer") Sprouts Español. (2022). Las 6 Etapas del Desarrollo Moral de Kohlberg [video]. YouTube.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué autor e investigador propone la teoría del desarrollo cognitivo?',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              { id: 'a', texto: 'Lawrence Kohlberg.', esCorrecta: false },
              { id: 'b', texto: 'Jean Piaget.', esCorrecta: true },
              { id: 'c', texto: 'Lev Vygotski.', esCorrecta: false },
              { id: 'd', texto: 'Sigmund Freud.', esCorrecta: false },
            ],
            mensaje_correcto:
              'Jean Piaget fue un biólogo e investigador que propuso la teoría del desarrollo cognitivo humano.',
            mensaje_incorrecto:
              'Jean Piaget fue un biólogo e investigador que propuso la teoría del desarrollo cognitivo humano.',
          },
          {
            id: 2,
            texto: '¿En qué consisten las etapas del desarrollo cognitivo?',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              {
                id: 'a',
                texto:
                  'Son momentos de la vida del niño y la niña, que van de acuerdo con su edad.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Son las etapas en las que los niños pasan a la adolescencia.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Es el momento del desarrollo hormonal en los adolescentes.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Son los estadios de mayor nivel de desarrollo cerebral de niños y niñas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Las etapas del desarrollo cognitivo son momentos de la vida del niño y la niña que van de acuerdo con su edad biológica.',
            mensaje_incorrecto:
              'Las etapas del desarrollo cognitivo son momentos de la vida del niño y la niña que van de acuerdo con su edad biológica.',
          },
          {
            id: 3,
            texto: 'Los factores que inciden en el desarrollo cognitivo son:',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              {
                id: 'a',
                texto:
                  'Interacción de la maduración biológica y las experiencias del entorno.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'El rol del padre y la madre en la crianza.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La geopolítica y la situación económica.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El desarrollo económico y social.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La interacción de la maduración biológica y las experiencias del entorno son los principales factores que inciden en el desarrollo cognitivo humano.',
            mensaje_incorrecto:
              'La interacción de la maduración biológica y las experiencias del entorno son los principales factores que inciden en el desarrollo cognitivo humano.',
          },
          {
            id: 4,
            texto:
              'Esta teoría considera que la cultura es fundamental para el aprendizaje y que el desarrollo cognitivo surge de la interacción con otras personas',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              {
                id: 'a',
                texto: 'El enfoque de construcción sobre el desarrollo moral.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La perspectiva sociocultural.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Teoría de desarrollo cognoscitivo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Teoría evolutiva de las especies.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La perspectiva sociocultural es una teoría que considera que la cultura es fundamental para que el aprendizaje y resalta la importancia de interacción entre las personas en el proceso.',
            mensaje_incorrecto:
              'La perspectiva sociocultural es una teoría que considera que la cultura es fundamental para que el aprendizaje y resalta la importancia de interacción entre las personas en el proceso.',
          },
          {
            id: 5,
            texto:
              'La teoría .................. explica cómo las personas construyen valores y normas de conducta a lo largo de su vida.',
            imagen: '',
            barajarRespuestas: false,
            opciones: [
              {
                id: 'a',
                texto: 'Teoría evolutiva de las especies.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La perspectiva sociocultural.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'El enfoque de construcción sobre el desarrollo moral.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Teoría de desarrollo cognoscitivo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El enfoque de construcción sobre el desarrollo moral explica cómo las personas construyen los valores y normas de conducta en su vida.',
            mensaje_incorrecto:
              'El enfoque de construcción sobre el desarrollo moral explica cómo las personas construyen los valores y normas de conducta en su vida.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
