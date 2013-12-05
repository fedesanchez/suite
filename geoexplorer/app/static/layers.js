var layers=    [{
                    source: "mapquest",
                    title: "MapQuest OpenStreetMap",
                    name: "osm",
                    group: "background"
                },{
                    source: "osm",
                    title: "OpenStreetMap",
                    name: "mapnik",
                    group: "background"
                },{
                    source: "google",
                    title: "Google Físico",
                    name: "TERRAIN",
                    group: "background"
                },{               
                    source: "google",
                    title: "Google Callejero",
                    name: "ROADMAP",
                    group: "background"
                },{   source: "google",
                    title: "Google Satelital",
                    name: "SATELLITE",
                    group: "background"
                },{
                    source: "google",
                    title: "Google Hibrido",
                    name: "HYBRID",
                    group: "background"
                },{
                    source: "ol",
                    group: "background",
                    fixed: true,
                    type: "OpenLayers.Layer",
                    args: [
                        "None", {visibility: false}
                    ]
                },{
                    source:'local',
                    name:'sstuyv:zonas_espacios',
                    group: 'regulacion'
                },{
                    source:'local',
                    name:'sstuyv:tierra pfp',
                    group: 'planfamilia'
                },{
                    source:'local',
                    name:'sstuyv:titulacion inmuebles',
                    group: 'titulacion'
                },{
                    source:'local',
                    name:'sstuyv:conflictos_habitacionales',
                    group: 'habitacional'
                },{
                    source:'local',
                    name:'sstuyv:prosede',
                    group: 'habitacional'
                },{
                    source:'local',
                    name:'sstuyv:informe_urbanistico_dpiut',
                    group: 'urbanismo'
                },

                // reconquista
                {
                    source:'local',
                    name:'sstuyv:reconquista_aip',
                    group:'reconquista',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:reconquista_limite_dominio',
                    group:'reconquista',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:reconquista_barrios',
                    group:'reconquista',
                    visibility:false
                },
                // lineamientos
                {
                    source:'local',
                    name:'sstuyv:alumnos_establecimiento_2007',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:analfabetismo2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:analfabetismo_2001',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:edad_poblacion_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:habitantes_cama_2001',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:habitantes_cama_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:habitantes_vivienda_2001',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:habitantes_vivienda_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:hogares_sin_agua_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:hogares_sin_agua_abs_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:hogares_sin_cloaca_abs_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:hogares_sin_agua_por_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:hogares_vivienda_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:matricula_estatal_2009',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:poblacion_0_14_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:poblacion_15_64_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:poblacion_65_y_mas_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:poblacion_extranjera_2001_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:segmento_edad_mayoritario_2010',
                    group:'lineamientos',
                    visibility:false
                },{
                    source:'local',
                    name:'sstuyv:viviendas_inconvenientes_2010',
                    group:'lineamientos',
                    visibility:false
                },
                // otros    
                {
                    source:'local',
                    name:'villa y asentamientos_UNGS',
                    group: 'otros'
                },{
                    source:'urbasig_NUEVO',
                    name:'zonificacion'
                }   
            ];
