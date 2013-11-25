var sources= {
                local: {
                    ptype: "gxp_wmssource", // puse este para que no cachee, es importante para las capas q se editan
                    url: "http://www.sstuv.gba.gob.ar/geoserver/ows",
                    title: "SSTUV"          
                },
                osm: {
                    ptype: "gxp_osmsource"
                },
                google: {
                    ptype: "gxp_googlesource"
                },
                mapquest: {
                    ptype: "gxp_mapquestsource"
                },
                bing: {
                    ptype: "gxp_bingsource"
                },
                mapbox: {
                    ptype: "gxp_mapboxsource"
                },
                ol: {
                    ptype: "gxp_olsource"
                },
                geointa:{
                    ptype: "gxp_wmssource",
                    url: "http://geointa.inta.gov.ar/geoserver/wms",
                    version: "1.1.1",
                    title: "GeoINTA"
                },
                arba:{  
                    ptype: "gxp_wmssource",
                    url: "http://cartoservices.arba.gov.ar/geoserver/wms",
                    version: "1.1.1",
                    title: "ARBA"
                },
                mosp:{  
                    ptype: "gxp_wmssource",
                    url: "http://www.mosp.gba.gov.ar/wms_hidraulica/cgi-bin/mapserv.exe?map=/ms4w/apps/m/wms.map",
                    version: "1.1.1",
                    title: "Min. Obras y Salud P&uacute;blica"
                },
                urbasig_NUEVO:{
                    ptype: "gxp_wmssource",
                    url: "http://sig.gobierno.gba.gov.ar:8080/geoserver/urbasig/wms",
                    version: "1.1.1",
                    title: "urBAsig Interno"
                },
                urbasig:{
                    ptype: "gxp_wmssource",
                    url: "http://www.mosp.gba.gov.ar/webmapping/cgi-bin/urbasig", //"http://200.85.153.133/cgi-bin/urbasig?",
                    version: "1.1.1",
                    title: "urBAsig P&uacute;blico"
                },
                csw: {
                    url: "http://www.sstuv.gba.gob.ar/geoserver/csw",
                    ptype: "gxp_cataloguesource",
                    yx: {'urn:x-ogc:def:crs:EPSG:6.11:4326': true}
                }
                
            }