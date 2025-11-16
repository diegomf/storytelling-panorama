var config = {
    style: 'mapbox://styles/diegomuino/cmhhltadc002x01s503gu9ddu',
    accessToken: 'pk.eyJ1IjoiZGllZ29tdWlubyIsImEiOiJjbWhobGo3Z2UwN2lmMmpxdzY5aXU1d25lIn0.DSJBdjVvWXsE3M8iRxFzGQ',
    showMarkers: false,
    markerColor: '#bb9d2f',
    inset: true,
    insetOptions: {
        markerColor: '#bb9d2f'
    },
    insetPosition: 'bottom-right',
    theme: 'red',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    youtubeAutoplay: true,
    logo: './assets/logo-panorama.png',
    title: 'Orquesta Panorama: De Galicia al éxito nacional',
    subtitle: 'Un recorrido interactivo por la historia de la orquesta más reconocida de España',
    footer: 'Fuente de datos: <a href="https://www.orquestasdegalicia.es" target="_blank">Orquestas de Galicia</a>.<br>Creado por Diego Muiño usando la plantilla de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    location: {
        desktop: {
            center: [-7.93, 42.85],
            zoom: 7,
            pitch: 0,
            bearing: 0
        },
        mobile: {
            center: [-7.93, 42.85],
            zoom: 6,
            pitch: 0,
            bearing: 0
        }
    },
    chapters: [
        {
            id: 'fundacion',
            alignment: 'left',
            hidden: false,
            title: 'Fundación (1988 - Caldas de Reis, Pontevedra)',
            image: {
                src: './assets/orquesta-panorama-1991.jpg',
                credits: 'Cartel de Panorama en el año 1991. Fuente: Página "Orquestas 1900" de Facebook'
            },
            description: 'La Orquesta Panorama nació el 25 de diciembre de 1988 actuando en O Rosal (Pontevedra). En esa época comenzó con ocho integrantes masculinos, con una furgoneta Mercedes 406 y con un equipo de sonido de 500 vatios.',
            location: {
                desktop: {
                    center: [-8.837098, 41.937099],
                    zoom: 10,
                    pitch: 20,
                    bearing: 0
                },
                mobile: {
                    center: [-8.837098, 41.937099],
                    zoom: 9,
                    pitch: 20,
                    bearing: 0
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: '',
            onChapterExitCallback: '',
            onChapterEnter: [
				{
                    layer: 'o-rosal-aqu5dc',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'o-rosal-aqu5dc',
                    opacity: 0
                }
            ]
        },
        {
            id: 'consolidacion',
            alignment: 'right',
            hidden: false,
            title: 'Consolidación en Galicia (1990–2007)',
            image: {
                src: './assets/orquesta-panorama-2006.jpg',
                credits: 'Actuación de la Orquesta Panorama en el año 2006. Autor: Roxelio García'
            },
            description: 'Durante los años 90, en una Galicia con una gran tradición de orquestas y verbenas, Panorama se consolidó como una de las formaciones más punteras y demandadas. En la década de los 2000, la profesionalización de su espectáculo —con escenarios móviles, luces y efectos visuales— marcó un antes y un después en las verbenas gallegas.',
            location: {
                desktop: {
                    center: [-7.0, 42.7],
                    zoom: 7,
                    pitch: 20,
                    bearing: 0,
                    // flyTo additional controls-
                    // These options control the flight curve, making it move
                    // slowly and zoom out almost completely before starting
                    // to pan.
                    //speed: 2, // make the flying slow
                    //curve: 1, // change the speed at which it zooms out
                },
                mobile: {
                    center: [-8.0, 42.7],
                    zoom: 6.5,
                    pitch: 20,
                    bearing: 0,
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: '',
            onChapterExitCallback: '',
            onChapterEnter: [
                {
                    layer: 'consolidacion-galicia-06qyru',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'consolidacion-galicia-06qyru',
                    opacity: 0
                }
            ]
        },
        {
            id: 'galas-cancer',
            alignment: 'left',
            hidden: false,
            title: 'Primera Gala contra el Cáncer (2008 - Ordes, A Coruña)',
            description: 'En 2008, coincidiendo con su 20 aniversario, Panorama dio un paso más allá de la música. Nacían las Galas contra el Cáncer, eventos solidarios que desde desde 2008 hasta 2016 cada año en diferentes localizaciones reunieron a decenas de miles de personas y en las que participaron artistas de primer nivel como Luis Fonsi, David Bisbal, Mónica Naranjo, Carlos Baute, Isabel Pantoja o David Bustamante, entre muchos otros.',
            video: {
                codYoutube: 'sFW1J51MGbQ',
                title: 'Vídeo promocional Gala contra el Cáncer'
            },
            location: {
                desktop: {
                    center: [-8.50, 42.75],
                    zoom: 7,
                    pitch: 20,
                    bearing: 0,
                    speed: 2
                },
                mobile: {
                    center: [-7, 42.75],
                    zoom: 6,
                    pitch: 20,
                    bearing: 0,
                    speed: 2
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: '',
            onChapterExitCallback: '',
            onChapterEnter: [
				{
                    layer: 'galas-contra-el-cancer-7662tq',
                    opacity: 1
                }
			],
            onChapterExit: [
				{
                    layer: 'galas-contra-el-cancer-7662tq',
                    opacity: 0
                }
			]
        },
        {
            id: 'proyeccion-nacional',
            alignment: 'right',
            hidden: false,
            title: 'Proyección mediática nacional (2012–2013)',
            description: 'El salto llegó con fuerza. Panorama apareció en telediarios y programas de televisión de ámbito nacional, alcanzando su punto culminante con las Galas de Fin de Año de Telecinco de 2012 y 2013. En la de 2013, su actuación se emitió en el minuto de oro de audiencia televisiva en España, un hito histórico para una orquesta gallega.',
            video: {
                codYoutube: 'dXuwwRbRnTo',
                title: 'Orquesta Panorama en la Gala de Fin de Año 2012 de Telecinco'
            },
            location: {
                desktop: {
                    center: [-6.0, 40.0],
                    zoom: 5,
                    pitch: 20,
                    bearing: 0
                },
                mobile: {
                    center: [-4, 40.0],
                    zoom: 4,
                    pitch: 20,
                    bearing: 0
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: '',
            onChapterExitCallback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'expansion-nacional',
            alignment: 'left',
            hidden: false,
            title: 'Expansión a nivel nacional (2014–Actualidad)',
            description: 'Tras su éxito mediático, Panorama expandió su gira por toda España. Desde Galicia hasta Andalucía, pasando por Asturias, Castilla y León, Madrid o Valencia, su espectáculo se convirtió en un fenómeno de masas. La orquesta redefinió el concepto de verbena, transformándola en un gran espectáculo audiovisual itinerante.',
            iframe: {
                src: 'https://flo.uri.sh/visualisation/25974376/embed',
                title: 'Top de provincias con más actuaciones por año',
                weidth: '100%',
                heigh: '400px',
                class: 'flourish-embed-iframe',
                style: 'display: none;',
                frameborder: 0,
                scrolling: 'no',
                sandbox: 'allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            },
            location: {
                desktop: {
                    center: [-6.0, 40.0],
                    zoom: 5,
                    pitch: 20,
                    bearing: 0
                },
                mobile: {
                    center: [-4.0, 40.0],
                    zoom: 4,
                    pitch: 20,
                    bearing: 0
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: 'startHeatmapYearsLoop',
		    onChapterExitCallback: 'stopHeatmapYearsLoop',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'panorama-hoy',
            alignment: 'fully',
            hidden: false,
            title: 'Panorama Hoy: Innovación y Espectáculo',
            image: {
                src: './assets/orquesta-panorama-actualidad.jpg',
                credits: 'Orquesta Panorama en la actualidad. Fuente: www.orquestapanorama.es'
            },
            description: 'Hoy, la Orquesta Panorama representa la fusión perfecta entre tecnología, música y emoción. Cada año renueva su espectáculo con nuevas escenografías, performances, repertorios y recursos visuales. Actualmente, cuenta con 23 artistas en escena y siete tráileres destinados al transporte del escenario, la iluminación y los instrumentos, lo que refleja la magnitud de su puesta en escena. Más que una orquesta, es un símbolo cultural de Galicia y un referente de los espectáculos en toda España.',
            location: {
                desktop: {
                    center: [-6.0, 40.0],
                    zoom: 5,
                    pitch: 20,
                    bearing: 0
                },
                mobile: {
                    center: [-4.0, 40.0],
                    zoom: 4,
                    pitch: 20,
                    bearing: 0
                }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnterCallback: '',
            onChapterExitCallback: '',
            onChapterEnter: [
				{
                    layer: 'todas-actuaciones-5rjr30',
                    opacity: 1
                }
			],
            onChapterExit: [
				{
                    layer: 'todas-actuaciones-5rjr30',
                    opacity: 0
                }
			]
        }
    ]
};