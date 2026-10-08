import type { Case } from './types';

export const cases: Case[] = [
  {
    id: '001',
    title: 'La última exposición',
    difficulty: 'easy',
    teaser: 'Asesinato en una galería de arte.',

    victim: 'c04',

    location: 'Galería de arte, NY',

    story:
      'A las 22:30, durante la inauguración de su última exposición, la fotógrafa Nadia Kernes encontrada sin vida en la sala de descanso de la galería.\n\nNadia llevaba meses preparando una colección dedicada a la belleza de lo cotidiano. Fotografías de personas anónimas, pequeños gestos y momentos que normalmente pasan desapercibidos. Su intención era encontrar historias en personas que ni siquiera sabían que estaban siendo observadas.\n\nLa galería está situada en el centro de la ciudad. La zona pública consta de una amplia sala de exposición y unos baños. Al fondo hay una puerta que da acceso a la zona privada, donde se encuentran el despacho de Delia, la sala de descanso de Nadia, un pequeño almacén y el cuarto donde Karim guarda sus herramientas.\n\nPara acceder a esta zona desde la sala de exposición hace falta una tarjeta identificativa. Solo Delia, Nadia y Karim tienen una.\n\nExiste además una puerta trasera que comunica directamente la zona privada con la calle. Karim la utiliza habitualmente para sacar la basura y acceder al exterior durante sus descansos. La puerta debería permanecer cerrada, aunque el pestillo lleva tiempo dando problemas. Al abrirla produce un chirrido bastante característico.\n\nLa inauguración comienza a las 20:00 y la galería empieza a llenarse alrededor de las 20:30.\n\nA las 21:00, Nadia mantiene una fuerte discusión con Delia Costa, propietaria de la galería. Nadia le reprocha haber mantenido expuestas varias fotografías que había pedido retirar a última hora. Delia se niega a hacerlo: la galería atraviesa una situación económica delicada y necesita que la exposición sea un éxito.\n\nUna de las fotografías es especialmente problemática.\n\nEn primer plano aparece Kenji Sato, un hombre al que Nadia había fotografiado meses atrás en una cafetería. Al fondo aparecen una mujer y un hombre en actitud cariñosa.\n\nLa mujer es Nora Salvatierra, amiga de infancia de Nadia.\n\nKenji llega a la inauguración a las 21:37 acompañado de unos amigos y descubre por primera vez que aparece en una de las fotografías.\n\nA las 21:50 llegan Nora y su marido, Enrique Salvatierra.\n\nEnrique reconoce a Nora en la fotografía y, tras una discusión con ella, abandona la galería visiblemente enfadado. Nora sale detrás de él.\n\nNadia continúa atendiendo a los invitados.\n\nPoco antes de las 22:00, Nadia comunica a algunas personas que necesita descansar unos minutos y se dirige hacia la zona privada de la galería.\n\nA las 22:00 aproximadamente es vista con vida por última vez.\n\nLa policía sitúa la muerte entre las 22:00 y las 22:25.\n\nDurante ese intervalo, Karim se encuentra trabajando en distintas zonas de la galería.\n\nA las 22:25, Nora vuelve a entrar por la entrada principal. Está nerviosa y dice que ha regresado para hablar con Nadia.\n\nCinco minutos después, Karim se dirige hacia la zona privada para reponer las bebidas de la inauguración.\n\nAllí encuentra a Delia junto al cuerpo sin vida de Nadia.\n\nLa policía determina que tres personas presentes esa noche tenían motivos para ocultar información.',

    suspects: [
      {
        characterId: 'c23',
        statement:
          'Después de discutir con Nadia me fui a mi despacho. Necesitaba estar sola.\n\nLa exposición tenía que funcionar. Si retirábamos más fotografías, podía ser un desastre para la galería.\n\nNo salí de mi despacho hasta que decidí hablar con Nadia.\n\nCuando la encontré, pensé que simplemente se había desmayado.',
      },
      {
        characterId: 'c07',
        statement:
          'No conocía personalmente a Nadia. Nunca había hablado con ella.\n\nLa fotografía me incomodó bastante. No entendía por qué había decidido fotografiarme.\n\nDespués de verla intenté encontrar a Nadia para pedirle que la retirase.\n\nNo llegué a entrar en la zona privada.',
      },
      {
        characterId: 'c27',
        statement:
          'Enrique y yo salimos de la galería juntos después de ver la fotografía.\n\nDespués de discutir con él necesitaba despejarme, así que estuve un rato fuera.\n\nVolví a las 22:25 para hablar con Nadia, pero ya no llegué a verla.\n\nNo sabía que Nadia se había retirado a la sala de descanso.',
      },
    ],

    witnesses: [
      {
        characterId: 'c12',
        statement:
          'La discusión entre Nadia y Delia se escuchó desde buena parte de la sala.\n\nDurante la noche tuve que salir varias veces por la puerta trasera. Reconozco perfectamente el chirrido que hace.\n\nEscuché esa puerta abrirse dos veces durante el intervalo en el que Nadia pudo haber muerto.\n\nCuando encontré a Delia junto al cuerpo, estaba muy alterada.',
      },
    ],

    information: [
      {
        title: 'Acceso a la zona privada',
        description:
          'Para acceder a la zona privada desde la sala de exposición hace falta una tarjeta identificativa. Solo Delia, Nadia y Karim tienen una.',
      },
      {
        title: 'Puerta trasera',
        description:
          'Existe una puerta trasera que comunica directamente la zona privada con la calle. Karim la utiliza habitualmente para sacar la basura y acceder al exterior durante sus descansos. La puerta debería permanecer cerrada, aunque el pestillo lleva tiempo dando problemas. Al abrirla produce un chirrido bastante característico.',
      },
      {
        title: 'Horario de la inauguración',
        description:
          'La inauguración comienza a las 20:00 y la galería empieza a llenarse alrededor de las 20:30.',
      },
      {
        title: 'Discusión entre Nadia y Delia',
        description:
          'A las 21:00, Nadia mantiene una fuerte discusión con Delia Costa, propietaria de la galería. Nadia le reprocha haber mantenido expuestas varias fotografías que había pedido retirar a última hora. Delia se niega a hacerlo porque la galería atraviesa una situación económica delicada y necesita que la exposición sea un éxito.',
      },
      {
        title: 'La fotografía',
        description:
          'En primer plano aparece Kenji Sato, un hombre al que Nadia había fotografiado meses atrás en una cafetería. Al fondo aparecen una mujer y un hombre en actitud cariñosa. La mujer es Nora Salvatierra, amiga de infancia de Nadia.',
      },
      {
        title: 'Llegada de Kenji',
        description:
          'Kenji llega a la inauguración a las 21:37 acompañado de unos amigos y descubre por primera vez que aparece en una de las fotografías.',
      },
      {
        title: 'Llegada de Nora y Enrique',
        description:
          'A las 21:50 llegan Nora y su marido, Enrique Salvatierra. Enrique reconoce a Nora en la fotografía y, tras una discusión con ella, abandona la galería visiblemente enfadado. Nora sale detrás de él.',
      },
      {
        title: 'Última vez que se vio con vida a Nadia',
        description:
          'Poco antes de las 22:00, Nadia comunica a algunas personas que necesita descansar unos minutos y se dirige hacia la zona privada de la galería. A las 22:00 aproximadamente es vista con vida por última vez.',
      },
      {
        title: 'Intervalo de la muerte',
        description: 'La policía sitúa la muerte entre las 22:00 y las 22:25.',
      },
      {
        title: 'Movimientos de Karim',
        description:
          'Durante el intervalo en el que Nadia pudo haber muerto, Karim se encuentra trabajando en distintas zonas de la galería.',
      },
      {
        title: 'Regreso de Nora',
        description:
          'A las 22:25, Nora vuelve a entrar por la entrada principal. Está nerviosa y dice que ha regresado para hablar con Nadia.',
      },
      {
        title: 'Descubrimiento del cuerpo',
        description:
          'Cinco minutos después, Karim se dirige hacia la zona privada para reponer las bebidas de la inauguración. Allí encuentra a Delia junto al cuerpo sin vida de Nadia.',
      },
      {
        title: 'Personas con motivos para ocultar información',
        description:
          'La policía determina que tres personas presentes esa noche tenían motivos para ocultar información.',
      },
    ],

    solution: {
      culprit: 'c27',
      explanation:
        'Nora no había acudido a la galería con intención de matar a Nadia. Lo que comenzó como un enfrentamiento por la fotografía terminó en un ataque impulsivo cuando la discusión entre ambas se descontroló.\n\n\
          La fotografía había puesto al descubierto la infidelidad de Nora y había provocado una fuerte discusión con su marido, Enrique. Para Nora, Nadia era responsable de haber destruido la vida que conocía.\n\n\
          Después de salir de la galería tras discutir con Enrique, Nora regresó buscando a Nadia. La vio dirigirse hacia la zona privada y, como conocía la existencia de la puerta trasera, entró por allí para enfrentarse a ella sin que los demás invitados la vieran.\n\n\
          Durante la discusión, Nora perdió el control y acabó con la vida de Nadia.\n\n\
          Después huyó por la misma puerta y, unos minutos más tarde, volvió a entrar por la entrada principal para hacer creer que acababa de regresar.\n\n\
          Ahí está la clave de su declaración.\n\n\
          Nora afirma que volvió a las 22:25 y que entonces vio a Delia en su despacho, pero Karim confirma que la zona privada no puede verse desde la entrada principal. Además, Nora asegura que no sabía que Nadia estaba en la sala de descanso.\n\n\
          Sin embargo, para poder saber dónde estaba Nadia y encontrarse con ella durante esos minutos, Nora tuvo que haber accedido previamente a la zona privada.\n\n\
          Las dos aperturas de la puerta trasera que escuchó Karim encajan con lo ocurrido: Nora entró por ella antes de la muerte y salió después de matar a Nadia.\n\n\
          Delia tenía un motivo para estar enfadada con Nadia y ocultaba sus problemas económicos, pero su mentira no explica la muerte.\n\n\
          Kenji también ocultaba algo: su nerviosismo y su comportamiento extraño tenían relación con la fotografía y con circunstancias personales, pero no tuvo acceso a la zona privada ni encaja en la cronología.\n\n\
          Nora, en cambio, necesitaba ocultar que había estado allí.\n\n\
          No fue la discusión lo que delató a Nora. Fue su intento de fingir que nunca había estado en la zona donde Nadia murió.',
    },
  },

  {
    id: '002',
    title: 'El precio de la libertad',
    difficulty: 'medium',
    teaser: 'Todos tenían motivos, sólo uno la oportunidad.',

    victim: 'c03',

    location: 'Residencia Valcárcel, España',

    story:
      'Héctor Valcárcel ha aparecido muerto esta mañana en su despacho.\n\nLa noche anterior había reunido en su casa a cuatro personas muy cercanas a él: su hija, su sobrino, su esposa y su abogado.\n\nLos cuatro tenían motivos para odiarlo.\n\nLos cuatro tenían razones para desear su muerte.\n\nY los cuatro estuvieron presentes durante la última cena.\n\nTu objetivo es descubrir quién lo mató, no quién tenía motivos.\n\nTodos los tenían.',

    suspects: [
      {
        characterId: 'c01',
        statement:
          'No fui yo.\n\nSé perfectamente cómo debe de parecer esto. Mi padre anuncia un nuevo testamento, amenaza con dejarme sin nada y al día siguiente aparece muerto. Si quieren construir un caso contra mí, tienen material de sobra.\n\nPero hay algo que no saben. Ayer, antes de la cena, mi padre me llamó a su despacho. No quería hablar de mi divorcio. Quería hablar de Diego.\n\nMe preguntó si sabía que llevaba meses viéndose con Tomás a escondidas. Algo que, según él, demostraba que mi primo ya no era de fiar. Le dije que no. Entonces me dijo algo que no he podido quitarme de la cabeza: ‘Tu primo cree que va a recibir lo que le prometí. Qué ingenuo’.\n\nAsí que sí, tenía motivos para quererlo muerto. Pero no fui yo.\n\nY si alguien tenía razones para temer que mi padre cambiara de opinión aquella noche, era Diego.',
      },
      {
        characterId: 'c17',
        statement:
          'Mi tío llevaba años prometiéndome cosas que después utilizaba para retenerme en una vida que detesto. Pero ayer entendí que quizá nunca pensó cumplir ninguna de ellas.\n\nCuando anunció el nuevo testamento, me miró como si ya hubiera tomado una decisión.\n\nDespués de cenar fui a buscarlo. Quería preguntarle qué significaba aquello de la traición. No llegué a hacerlo. Tomás me encontró en el pasillo y me pidió que lo dejara estar.\n\nÉl estaba mucho más alterado que yo.\n\nHay alguien de quien sí deberían hablar: Beatriz.\n\nA quien vi discutir con mi tío antes de que empezásemos a cenar fue a Beatriz. Mi tío la amenazó con dejarla sin nada si no paraba. Beatriz le respondió que después de todo lo que había hecho por él no podía tratarla así.\n\nNo sé qué había hecho.\n\nPero sí sé que, si alguien estaba desesperado por saber qué había escrito mi tío en ese nuevo testamento, era ella.',
      },
      {
        characterId: 'c08',
        statement:
          'Pueden pensar lo que quieran de mí. Sí, me casé con Héctor por dinero. Sí, esperaba recibir una parte importante cuando muriera. Y sí, después de ocho años de aguantarlo, he imaginado más de una vez cómo sería mi vida si un día dejara de estar ahí.\n\nPero ayer ocurrió algo que me hizo pensar que quizá iba a dejarme sin nada.\n\nHéctor sabía lo de mi amante.\n\nNo sólo lo sabía. Lo utilizó para amenazarme. Me dijo que, si intentaba marcharme, se aseguraría de que todo el mundo supiera quién era yo y de que no recibiera ni un céntimo.\n\nDespués de esa discusión fui al despacho porque quería convencerlo de que cambiara de opinión.\n\nAllí estaba Tomás.\n\nNo escuché toda la conversación, pero sí oí a Héctor decir: ‘No voy a firmar nada hasta que sepa dónde está cada euro’.\n\nVi salir a Tomás un rato después. Me pareció extraño que estuviera tan nervioso.\n\nY ahora que sé que alguien llevaba años desviando dinero de Héctor, empiezo a preguntarme si quizá no era el testamento lo que más le preocupaba a Tomás.',
      },
      {
        characterId: 'c09',
        statement:
          'Llevo quince años gestionando el patrimonio de Héctor. Si hay una transferencia, un contrato o una sociedad, probablemente mi firma aparezca en algún sitio. Eso no significa que yo haya robado nada.\n\nHéctor era un hombre obsesionado con el control; cruel y despiadado cuando alguien no hacía lo que él quería. Invertía mucho dinero para controlar a su familia.\n\nRecientemente, Héctor había solicitado a su investigador privado que siguiera a su hija. Yo lo sé porque algunas de las facturas pasaron por mi despacho. Llevaba semanas haciéndolo.\n\nAl parecer, Laura estaba preparando su salida. No sólo quería divorciarse. Quería desaparecer con su amante y llevarse a su hijo.\n\nHéctor estaba decidido a impedirlo.\n\nAsí que sí, Laura tenía motivos.',
      },
    ],

    information: [
      {
        title: 'La última cena',
        description:
          'La noche de su muerte, Héctor reunió a los cuatro sospechosos para cenar. Durante la cena anunció que había descubierto que uno de los presentes lo había traicionado. No dijo quién. Antes de terminar la cena, se dirigió a Tomás, su abogado y gestor financiero: «Tomás, mañana se pondrán en contacto contigo los de la auditoría. Quiero dejar el patrimonio perfectamente ordenado antes de firmar el nuevo testamento. Después de tantos años, conviene asegurarse de que no haya nada pendiente». Poco después, Héctor se retiró a su despacho. A la mañana siguiente apareció muerto.',
      },
      {
        title: 'El nuevo testamento',
        description:
          'El nuevo testamento todavía no había sido firmado. La versión anterior continúa vigente.',
      },
      {
        title: 'La auditoría',
        description:
          'La firma contratada por Héctor es independiente y realizará una revisión completa de su patrimonio antes de la firma del nuevo testamento. La revisión incluye sociedades, cuentas bancarias, inversiones, propiedades y movimientos patrimoniales de los últimos ejercicios.',
      },
      {
        title: 'La traición',
        description:
          'Héctor había descubierto que una de las personas presentes lo había traicionado e iba a tener consecuencias.',
      },
      {
        title: 'Las cuentas',
        description:
          'Durante una primera revisión de la documentación financiera aparecen pequeñas cantidades de dinero cuyo destino no resulta evidente. Los movimientos se repiten durante varios años. Todo apunta a que alguien había estado desviando dinero de Héctor.',
      },
      {
        title: 'Los secretos',
        description:
          'La investigación ha descubierto que Laura mantenía una relación con otro hombre, Diego mantenía una relación sentimental con Tomás, Beatriz tenía un amante y Héctor conocía algunos de estos secretos.',
      },
      {
        title: 'Laura Valcárcel',
        description:
          'Laura está casada y tiene un hijo. Lleva años queriendo divorciarse. Su padre, quien saca beneficio económico de su matrimonio, la amenaza con arruinarle la vida y alejarla de su hijo. Laura mantiene una relación con otro hombre y quiere escapar de la vida que su padre ha construido para ella.',
      },
      {
        title: 'Diego Valcárcel',
        description:
          'Diego quedó bajo la tutela de Héctor después de la muerte de su madre. Su tío nunca le ha permitido decidir sobre su propia vida: sus amistades, sus estudios y sus hobbies. Trabaja en una de las empresas de Héctor bajo la promesa de que algún día heredará parte de ella.',
      },
      {
        title: 'Beatriz Valcárcel',
        description:
          'Beatriz tiene 39 años y lleva ocho años casada con Héctor. Nunca ha ocultado que el dinero fue una parte importante de la razón por la que se casó con él. Héctor tampoco deja que lo olvide; la humilla y amenaza constantemente con dejarla sin nada. No está dispuesta a abandonar ocho años de infierno sin recibir nada a cambio.',
      },
      {
        title: 'Tomás Ferrer',
        description:
          'Tomás lleva quince años trabajando para Héctor. Es su abogado y se encarga de gestionar buena parte de su patrimonio. Conoce sus cuentas, sus sociedades, sus propiedades y sus inversiones. Héctor confía plenamente en él.',
      },
    ],

    solution: {
      culprit: 'c09',
      explanation:
        'Tomás llevaba años desviando pequeñas cantidades de dinero de Héctor. La auditoría externa anunciada durante la cena suponía una amenaza directa: una revisión independiente del patrimonio podía descubrir el fraude.\n\nEl nuevo testamento era importante para todos los demás sospechosos. Pero para Tomás, lo verdaderamente peligroso era que Héctor siguiera vivo el tiempo suficiente para que revisaran sus cuentas.\n\nTomás necesitaba impedir que esa revisión ocurriera.\n\nEsa noche, en el enfrentamiento después de la cena, Tomás descubrió que Héctor ya sabía que le había estado robando. Pensaba que se había aliado con Diego y de ahí su supuesta traición.\n\nPensaba desheredar a Diego y reunir las pruebas necesarias con la auditoría para destruir a Tomás pero no tuvo oportunidad.\n\nDiego, pese a odiar a Héctor y haber fantaseado con su muerte, era inocente de lo que se le acusaba; desconocía los planes de Tomás.\n\nLaura quería liberarse de su padre pero no de ese modo, ella planificaba huir.\n\nBeatriz quería escapar de su matrimonio con la seguridad económica que esperaba recibir pero tenía tanto miedo a Héctor que solo se hubiese atrevido a soñarlo.\n\nTodos querían que Héctor desapareciera pero sólo uno tenía la sangre fría.\n\nSólo Tomás sabía exactamente lo que ocurriría si no lo hacía.',
    },
  },
];
