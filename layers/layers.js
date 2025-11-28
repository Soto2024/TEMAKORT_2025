var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Frededeomrder_1 = new ol.format.GeoJSON();
var features_Frededeomrder_1 = format_Frededeomrder_1.readFeatures(json_Frededeomrder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_1.addFeatures(features_Frededeomrder_1);
var lyr_Frededeomrder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_1, 
                style: style_Frededeomrder_1,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_1_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_1_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_1_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_1_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_1_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_1_5.png" /> <br />' });
var format_Hvidovre_lokalplan_forslag_2 = new ol.format.GeoJSON();
var features_Hvidovre_lokalplan_forslag_2 = format_Hvidovre_lokalplan_forslag_2.readFeatures(json_Hvidovre_lokalplan_forslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovre_lokalplan_forslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovre_lokalplan_forslag_2.addFeatures(features_Hvidovre_lokalplan_forslag_2);
var lyr_Hvidovre_lokalplan_forslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovre_lokalplan_forslag_2, 
                style: style_Hvidovre_lokalplan_forslag_2,
                popuplayertitle: 'Hvidovre_lokalplan_forslag',
                interactive: true,
    title: 'Hvidovre_lokalplan_forslag<br />\
    <img src="styles/legend/Hvidovre_lokalplan_forslag_2_0.png" /> 153<br />\
    <img src="styles/legend/Hvidovre_lokalplan_forslag_2_1.png" /> 155<br />\
    <img src="styles/legend/Hvidovre_lokalplan_forslag_2_2.png" /> 242<br />\
    <img src="styles/legend/Hvidovre_lokalplan_forslag_2_3.png" /> <br />' });
var format_Kommuneplan_3 = new ol.format.GeoJSON();
var features_Kommuneplan_3 = format_Kommuneplan_3.readFeatures(json_Kommuneplan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_3.addFeatures(features_Kommuneplan_3);
var lyr_Kommuneplan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_3, 
                style: style_Kommuneplan_3,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_3.png" /> Kommuneplan'
            });
var format_Lokal_plan_4 = new ol.format.GeoJSON();
var features_Lokal_plan_4 = format_Lokal_plan_4.readFeatures(json_Lokal_plan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokal_plan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokal_plan_4.addFeatures(features_Lokal_plan_4);
var lyr_Lokal_plan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokal_plan_4, 
                style: style_Lokal_plan_4,
                popuplayertitle: 'Lokal_plan',
                interactive: true,
    title: 'Lokal_plan<br />\
    <img src="styles/legend/Lokal_plan_4_0.png" /> 001<br />\
    <img src="styles/legend/Lokal_plan_4_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokal_plan_4_2.png" /> 102<br />\
    <img src="styles/legend/Lokal_plan_4_3.png" /> 103<br />\
    <img src="styles/legend/Lokal_plan_4_4.png" /> 104<br />\
    <img src="styles/legend/Lokal_plan_4_5.png" /> 105<br />\
    <img src="styles/legend/Lokal_plan_4_6.png" /> 106<br />\
    <img src="styles/legend/Lokal_plan_4_7.png" /> 108<br />\
    <img src="styles/legend/Lokal_plan_4_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokal_plan_4_9.png" /> 112<br />\
    <img src="styles/legend/Lokal_plan_4_10.png" /> 115<br />\
    <img src="styles/legend/Lokal_plan_4_11.png" /> 116<br />\
    <img src="styles/legend/Lokal_plan_4_12.png" /> 118<br />\
    <img src="styles/legend/Lokal_plan_4_13.png" /> 119<br />\
    <img src="styles/legend/Lokal_plan_4_14.png" /> 120<br />\
    <img src="styles/legend/Lokal_plan_4_15.png" /> 121<br />\
    <img src="styles/legend/Lokal_plan_4_16.png" /> 122<br />\
    <img src="styles/legend/Lokal_plan_4_17.png" /> 124<br />\
    <img src="styles/legend/Lokal_plan_4_18.png" /> 126<br />\
    <img src="styles/legend/Lokal_plan_4_19.png" /> 127<br />\
    <img src="styles/legend/Lokal_plan_4_20.png" /> 128<br />\
    <img src="styles/legend/Lokal_plan_4_21.png" /> 131<br />\
    <img src="styles/legend/Lokal_plan_4_22.png" /> 132<br />\
    <img src="styles/legend/Lokal_plan_4_23.png" /> 133<br />\
    <img src="styles/legend/Lokal_plan_4_24.png" /> 134<br />\
    <img src="styles/legend/Lokal_plan_4_25.png" /> 135<br />\
    <img src="styles/legend/Lokal_plan_4_26.png" /> 137<br />\
    <img src="styles/legend/Lokal_plan_4_27.png" /> 139<br />\
    <img src="styles/legend/Lokal_plan_4_28.png" /> 140<br />\
    <img src="styles/legend/Lokal_plan_4_29.png" /> 141<br />\
    <img src="styles/legend/Lokal_plan_4_30.png" /> 142<br />\
    <img src="styles/legend/Lokal_plan_4_31.png" /> 143<br />\
    <img src="styles/legend/Lokal_plan_4_32.png" /> 144<br />\
    <img src="styles/legend/Lokal_plan_4_33.png" /> 147<br />\
    <img src="styles/legend/Lokal_plan_4_34.png" /> 148<br />\
    <img src="styles/legend/Lokal_plan_4_35.png" /> 149<br />\
    <img src="styles/legend/Lokal_plan_4_36.png" /> 150<br />\
    <img src="styles/legend/Lokal_plan_4_37.png" /> 151<br />\
    <img src="styles/legend/Lokal_plan_4_38.png" /> 152<br />\
    <img src="styles/legend/Lokal_plan_4_39.png" /> 154<br />\
    <img src="styles/legend/Lokal_plan_4_40.png" /> 202<br />\
    <img src="styles/legend/Lokal_plan_4_41.png" /> 203<br />\
    <img src="styles/legend/Lokal_plan_4_42.png" /> 206<br />\
    <img src="styles/legend/Lokal_plan_4_43.png" /> 207<br />\
    <img src="styles/legend/Lokal_plan_4_44.png" /> 208<br />\
    <img src="styles/legend/Lokal_plan_4_45.png" /> 209<br />\
    <img src="styles/legend/Lokal_plan_4_46.png" /> 210<br />\
    <img src="styles/legend/Lokal_plan_4_47.png" /> 211<br />\
    <img src="styles/legend/Lokal_plan_4_48.png" /> 216<br />\
    <img src="styles/legend/Lokal_plan_4_49.png" /> 220<br />\
    <img src="styles/legend/Lokal_plan_4_50.png" /> 221<br />\
    <img src="styles/legend/Lokal_plan_4_51.png" /> 225<br />\
    <img src="styles/legend/Lokal_plan_4_52.png" /> 226<br />\
    <img src="styles/legend/Lokal_plan_4_53.png" /> 228<br />\
    <img src="styles/legend/Lokal_plan_4_54.png" /> 229<br />\
    <img src="styles/legend/Lokal_plan_4_55.png" /> 230<br />\
    <img src="styles/legend/Lokal_plan_4_56.png" /> 231<br />\
    <img src="styles/legend/Lokal_plan_4_57.png" /> 232<br />\
    <img src="styles/legend/Lokal_plan_4_58.png" /> 233<br />\
    <img src="styles/legend/Lokal_plan_4_59.png" /> 234<br />\
    <img src="styles/legend/Lokal_plan_4_60.png" /> 236<br />\
    <img src="styles/legend/Lokal_plan_4_61.png" /> 237<br />\
    <img src="styles/legend/Lokal_plan_4_62.png" /> 238<br />\
    <img src="styles/legend/Lokal_plan_4_63.png" /> 239<br />\
    <img src="styles/legend/Lokal_plan_4_64.png" /> 240<br />\
    <img src="styles/legend/Lokal_plan_4_65.png" /> 241<br />\
    <img src="styles/legend/Lokal_plan_4_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokal_plan_4_67.png" /> 303<br />\
    <img src="styles/legend/Lokal_plan_4_68.png" /> 304<br />\
    <img src="styles/legend/Lokal_plan_4_69.png" /> 305<br />\
    <img src="styles/legend/Lokal_plan_4_70.png" /> 306<br />\
    <img src="styles/legend/Lokal_plan_4_71.png" /> 313<br />\
    <img src="styles/legend/Lokal_plan_4_72.png" /> 314<br />\
    <img src="styles/legend/Lokal_plan_4_73.png" /> 316<br />\
    <img src="styles/legend/Lokal_plan_4_74.png" /> 322<br />\
    <img src="styles/legend/Lokal_plan_4_75.png" /> 323<br />\
    <img src="styles/legend/Lokal_plan_4_76.png" /> 324<br />\
    <img src="styles/legend/Lokal_plan_4_77.png" /> 325<br />\
    <img src="styles/legend/Lokal_plan_4_78.png" /> 326<br />\
    <img src="styles/legend/Lokal_plan_4_79.png" /> 327<br />\
    <img src="styles/legend/Lokal_plan_4_80.png" /> 328<br />\
    <img src="styles/legend/Lokal_plan_4_81.png" /> 329<br />\
    <img src="styles/legend/Lokal_plan_4_82.png" /> 330<br />\
    <img src="styles/legend/Lokal_plan_4_83.png" /> 331<br />\
    <img src="styles/legend/Lokal_plan_4_84.png" /> 332<br />\
    <img src="styles/legend/Lokal_plan_4_85.png" /> 335<br />\
    <img src="styles/legend/Lokal_plan_4_86.png" /> 338<br />\
    <img src="styles/legend/Lokal_plan_4_87.png" /> 339<br />\
    <img src="styles/legend/Lokal_plan_4_88.png" /> 340<br />\
    <img src="styles/legend/Lokal_plan_4_89.png" /> 341<br />\
    <img src="styles/legend/Lokal_plan_4_90.png" /> 342<br />\
    <img src="styles/legend/Lokal_plan_4_91.png" /> 343<br />\
    <img src="styles/legend/Lokal_plan_4_92.png" /> 345<br />\
    <img src="styles/legend/Lokal_plan_4_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokal_plan_4_94.png" /> 404<br />\
    <img src="styles/legend/Lokal_plan_4_95.png" /> 405<br />\
    <img src="styles/legend/Lokal_plan_4_96.png" /> 407<br />\
    <img src="styles/legend/Lokal_plan_4_97.png" /> 408<br />\
    <img src="styles/legend/Lokal_plan_4_98.png" /> 409<br />\
    <img src="styles/legend/Lokal_plan_4_99.png" /> 411<br />\
    <img src="styles/legend/Lokal_plan_4_100.png" /> 412<br />\
    <img src="styles/legend/Lokal_plan_4_101.png" /> 418<br />\
    <img src="styles/legend/Lokal_plan_4_102.png" /> 423<br />\
    <img src="styles/legend/Lokal_plan_4_103.png" /> 429<br />\
    <img src="styles/legend/Lokal_plan_4_104.png" /> 432<br />\
    <img src="styles/legend/Lokal_plan_4_105.png" /> 433<br />\
    <img src="styles/legend/Lokal_plan_4_106.png" /> 440<br />\
    <img src="styles/legend/Lokal_plan_4_107.png" /> 441<br />\
    <img src="styles/legend/Lokal_plan_4_108.png" /> 447<br />\
    <img src="styles/legend/Lokal_plan_4_109.png" /> 448<br />\
    <img src="styles/legend/Lokal_plan_4_110.png" /> 452<br />\
    <img src="styles/legend/Lokal_plan_4_111.png" /> 454<br />\
    <img src="styles/legend/Lokal_plan_4_112.png" /> 455<br />\
    <img src="styles/legend/Lokal_plan_4_113.png" /> 456<br />\
    <img src="styles/legend/Lokal_plan_4_114.png" /> 457<br />\
    <img src="styles/legend/Lokal_plan_4_115.png" /> 458<br />\
    <img src="styles/legend/Lokal_plan_4_116.png" /> 459<br />\
    <img src="styles/legend/Lokal_plan_4_117.png" /> 462<br />\
    <img src="styles/legend/Lokal_plan_4_118.png" /> 463<br />\
    <img src="styles/legend/Lokal_plan_4_119.png" /> 464<br />\
    <img src="styles/legend/Lokal_plan_4_120.png" /> 466<br />\
    <img src="styles/legend/Lokal_plan_4_121.png" /> 467<br />\
    <img src="styles/legend/Lokal_plan_4_122.png" /> 468<br />\
    <img src="styles/legend/Lokal_plan_4_123.png" /> 469<br />\
    <img src="styles/legend/Lokal_plan_4_124.png" /> 470<br />\
    <img src="styles/legend/Lokal_plan_4_125.png" /> 471<br />\
    <img src="styles/legend/Lokal_plan_4_126.png" /> 472<br />\
    <img src="styles/legend/Lokal_plan_4_127.png" /> 473<br />\
    <img src="styles/legend/Lokal_plan_4_128.png" /> 475<br />\
    <img src="styles/legend/Lokal_plan_4_129.png" /> 476<br />\
    <img src="styles/legend/Lokal_plan_4_130.png" /> 504<br />\
    <img src="styles/legend/Lokal_plan_4_131.png" /> 507<br />\
    <img src="styles/legend/Lokal_plan_4_132.png" /> 508<br />\
    <img src="styles/legend/Lokal_plan_4_133.png" /> 510<br />\
    <img src="styles/legend/Lokal_plan_4_134.png" /> 511<br />\
    <img src="styles/legend/Lokal_plan_4_135.png" /> 516<br />\
    <img src="styles/legend/Lokal_plan_4_136.png" /> 518<br />\
    <img src="styles/legend/Lokal_plan_4_137.png" /> 519<br />\
    <img src="styles/legend/Lokal_plan_4_138.png" /> A1<br />\
    <img src="styles/legend/Lokal_plan_4_139.png" /> A10<br />\
    <img src="styles/legend/Lokal_plan_4_140.png" /> A11<br />\
    <img src="styles/legend/Lokal_plan_4_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokal_plan_4_143.png" /> A13<br />\
    <img src="styles/legend/Lokal_plan_4_144.png" /> A14<br />\
    <img src="styles/legend/Lokal_plan_4_145.png" /> A15<br />\
    <img src="styles/legend/Lokal_plan_4_146.png" /> A3<br />\
    <img src="styles/legend/Lokal_plan_4_147.png" /> A5<br />\
    <img src="styles/legend/Lokal_plan_4_148.png" /> A7<br />\
    <img src="styles/legend/Lokal_plan_4_149.png" /> A8<br />\
    <img src="styles/legend/Lokal_plan_4_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_151.png" /> B17<br />\
    <img src="styles/legend/Lokal_plan_4_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokal_plan_4_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Lokal_plan_4_155.png" /> H10<br />\
    <img src="styles/legend/Lokal_plan_4_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_157.png" /> H11<br />\
    <img src="styles/legend/Lokal_plan_4_158.png" /> H12<br />\
    <img src="styles/legend/Lokal_plan_4_159.png" /> H13<br />\
    <img src="styles/legend/Lokal_plan_4_160.png" /> H14<br />\
    <img src="styles/legend/Lokal_plan_4_161.png" /> H15<br />\
    <img src="styles/legend/Lokal_plan_4_162.png" /> H16<br />\
    <img src="styles/legend/Lokal_plan_4_163.png" /> H17<br />\
    <img src="styles/legend/Lokal_plan_4_164.png" /> H18<br />\
    <img src="styles/legend/Lokal_plan_4_165.png" /> H20<br />\
    <img src="styles/legend/Lokal_plan_4_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokal_plan_4_167.png" /> H3<br />\
    <img src="styles/legend/Lokal_plan_4_168.png" /> H4<br />\
    <img src="styles/legend/Lokal_plan_4_169.png" /> H5<br />\
    <img src="styles/legend/Lokal_plan_4_170.png" /> H9<br />\
    <img src="styles/legend/Lokal_plan_4_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokal_plan_4_172.png" /> <br />' });
var format_Strandbeskyttelse_5 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_5 = format_Strandbeskyttelse_5.readFeatures(json_Strandbeskyttelse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_5.addFeatures(features_Strandbeskyttelse_5);
var lyr_Strandbeskyttelse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_5, 
                style: style_Strandbeskyttelse_5,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_5.png" /> Strandbeskyttelse'
            });
var format_Genbrugsplads_6 = new ol.format.GeoJSON();
var features_Genbrugsplads_6 = format_Genbrugsplads_6.readFeatures(json_Genbrugsplads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genbrugsplads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genbrugsplads_6.addFeatures(features_Genbrugsplads_6);
var lyr_Genbrugsplads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genbrugsplads_6, 
                style: style_Genbrugsplads_6,
                popuplayertitle: 'Genbrugsplads',
                interactive: true,
                title: '<img src="styles/legend/Genbrugsplads_6.png" /> Genbrugsplads'
            });
var format_Kirker_7 = new ol.format.GeoJSON();
var features_Kirker_7 = format_Kirker_7.readFeatures(json_Kirker_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_7.addFeatures(features_Kirker_7);
var lyr_Kirker_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_7, 
                style: style_Kirker_7,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_7.png" /> Kirker'
            });
var format_Legeplads_8 = new ol.format.GeoJSON();
var features_Legeplads_8 = format_Legeplads_8.readFeatures(json_Legeplads_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_8.addFeatures(features_Legeplads_8);
var lyr_Legeplads_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_8, 
                style: style_Legeplads_8,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_8.png" /> Legeplads'
            });
var format_Lgehus_9 = new ol.format.GeoJSON();
var features_Lgehus_9 = format_Lgehus_9.readFeatures(json_Lgehus_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehus_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehus_9.addFeatures(features_Lgehus_9);
var lyr_Lgehus_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehus_9, 
                style: style_Lgehus_9,
                popuplayertitle: 'Lægehus',
                interactive: true,
                title: '<img src="styles/legend/Lgehus_9.png" /> Lægehus'
            });
var format_Parker_10 = new ol.format.GeoJSON();
var features_Parker_10 = format_Parker_10.readFeatures(json_Parker_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_10.addFeatures(features_Parker_10);
var lyr_Parker_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_10, 
                style: style_Parker_10,
                popuplayertitle: 'Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_10.png" /> Parker'
            });
var format_Plejehjem_11 = new ol.format.GeoJSON();
var features_Plejehjem_11 = format_Plejehjem_11.readFeatures(json_Plejehjem_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plejehjem_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plejehjem_11.addFeatures(features_Plejehjem_11);
var lyr_Plejehjem_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plejehjem_11, 
                style: style_Plejehjem_11,
                popuplayertitle: 'Plejehjem',
                interactive: true,
                title: '<img src="styles/legend/Plejehjem_11.png" /> Plejehjem'
            });
var format_Sygehus_12 = new ol.format.GeoJSON();
var features_Sygehus_12 = format_Sygehus_12.readFeatures(json_Sygehus_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sygehus_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sygehus_12.addFeatures(features_Sygehus_12);
var lyr_Sygehus_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sygehus_12, 
                style: style_Sygehus_12,
                popuplayertitle: 'Sygehus',
                interactive: true,
                title: '<img src="styles/legend/Sygehus_12.png" /> Sygehus'
            });
var format_Togstationer_13 = new ol.format.GeoJSON();
var features_Togstationer_13 = format_Togstationer_13.readFeatures(json_Togstationer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_13.addFeatures(features_Togstationer_13);
var lyr_Togstationer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_13, 
                style: style_Togstationer_13,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_13.png" /> Togstationer'
            });
var format_UddanleseSteder_14 = new ol.format.GeoJSON();
var features_UddanleseSteder_14 = format_UddanleseSteder_14.readFeatures(json_UddanleseSteder_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UddanleseSteder_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UddanleseSteder_14.addFeatures(features_UddanleseSteder_14);
var lyr_UddanleseSteder_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UddanleseSteder_14, 
                style: style_UddanleseSteder_14,
                popuplayertitle: 'Uddanlese Steder',
                interactive: true,
                title: '<img src="styles/legend/UddanleseSteder_14.png" /> Uddanlese Steder'
            });
var format_Badestrand_15 = new ol.format.GeoJSON();
var features_Badestrand_15 = format_Badestrand_15.readFeatures(json_Badestrand_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Badestrand_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Badestrand_15.addFeatures(features_Badestrand_15);
var lyr_Badestrand_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Badestrand_15, 
                style: style_Badestrand_15,
                popuplayertitle: 'Badestrand ',
                interactive: true,
                title: '<img src="styles/legend/Badestrand_15.png" /> Badestrand '
            });
var format_Brnehaver_16 = new ol.format.GeoJSON();
var features_Brnehaver_16 = format_Brnehaver_16.readFeatures(json_Brnehaver_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_16.addFeatures(features_Brnehaver_16);
var lyr_Brnehaver_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_16, 
                style: style_Brnehaver_16,
                popuplayertitle: ' Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_16.png" />  Børnehaver'
            });
var format_Fodboldbaner_17 = new ol.format.GeoJSON();
var features_Fodboldbaner_17 = format_Fodboldbaner_17.readFeatures(json_Fodboldbaner_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_17.addFeatures(features_Fodboldbaner_17);
var lyr_Fodboldbaner_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_17, 
                style: style_Fodboldbaner_17,
                popuplayertitle: 'Fodboldbaner ',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_17.png" /> Fodboldbaner '
            });
var format_Folkeskoler_18 = new ol.format.GeoJSON();
var features_Folkeskoler_18 = format_Folkeskoler_18.readFeatures(json_Folkeskoler_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_18.addFeatures(features_Folkeskoler_18);
var lyr_Folkeskoler_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_18, 
                style: style_Folkeskoler_18,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_18.png" /> Folkeskoler'
            });
var format_Elbilladestandere_19 = new ol.format.GeoJSON();
var features_Elbilladestandere_19 = format_Elbilladestandere_19.readFeatures(json_Elbilladestandere_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elbilladestandere_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elbilladestandere_19.addFeatures(features_Elbilladestandere_19);
var lyr_Elbilladestandere_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elbilladestandere_19, 
                style: style_Elbilladestandere_19,
                popuplayertitle: 'El-bil ladestandere',
                interactive: true,
                title: '<img src="styles/legend/Elbilladestandere_19.png" /> El-bil ladestandere'
            });
var format_Havn_20 = new ol.format.GeoJSON();
var features_Havn_20 = format_Havn_20.readFeatures(json_Havn_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havn_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havn_20.addFeatures(features_Havn_20);
var lyr_Havn_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havn_20, 
                style: style_Havn_20,
                popuplayertitle: 'Havn',
                interactive: true,
                title: '<img src="styles/legend/Havn_20.png" /> Havn'
            });
var format_HvidovreApotek_21 = new ol.format.GeoJSON();
var features_HvidovreApotek_21 = format_HvidovreApotek_21.readFeatures(json_HvidovreApotek_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreApotek_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreApotek_21.addFeatures(features_HvidovreApotek_21);
var lyr_HvidovreApotek_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreApotek_21, 
                style: style_HvidovreApotek_21,
                popuplayertitle: 'Hvidovre Apotek ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreApotek_21.png" /> Hvidovre Apotek '
            });
var format_Hvidovrekommune_22 = new ol.format.GeoJSON();
var features_Hvidovrekommune_22 = format_Hvidovrekommune_22.readFeatures(json_Hvidovrekommune_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommune_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommune_22.addFeatures(features_Hvidovrekommune_22);
var lyr_Hvidovrekommune_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommune_22, 
                style: style_Hvidovrekommune_22,
                popuplayertitle: 'Hvidovre kommune ',
                interactive: false,
                title: '<img src="styles/legend/Hvidovrekommune_22.png" /> Hvidovre kommune '
            });
var format_HvidovreRdhus_23 = new ol.format.GeoJSON();
var features_HvidovreRdhus_23 = format_HvidovreRdhus_23.readFeatures(json_HvidovreRdhus_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreRdhus_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreRdhus_23.addFeatures(features_HvidovreRdhus_23);
var lyr_HvidovreRdhus_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreRdhus_23, 
                style: style_HvidovreRdhus_23,
                popuplayertitle: 'Hvidovre Rådhus ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreRdhus_23.png" /> Hvidovre Rådhus '
            });
var format_Kirkegrde_24 = new ol.format.GeoJSON();
var features_Kirkegrde_24 = format_Kirkegrde_24.readFeatures(json_Kirkegrde_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirkegrde_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirkegrde_24.addFeatures(features_Kirkegrde_24);
var lyr_Kirkegrde_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirkegrde_24, 
                style: style_Kirkegrde_24,
                popuplayertitle: 'Kirkegårde',
                interactive: false,
                title: '<img src="styles/legend/Kirkegrde_24.png" /> Kirkegårde'
            });
var format_Resturanter_25 = new ol.format.GeoJSON();
var features_Resturanter_25 = format_Resturanter_25.readFeatures(json_Resturanter_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resturanter_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resturanter_25.addFeatures(features_Resturanter_25);
var lyr_Resturanter_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resturanter_25, 
                style: style_Resturanter_25,
                popuplayertitle: 'Resturanter ',
                interactive: true,
                title: '<img src="styles/legend/Resturanter_25.png" /> Resturanter '
            });
var format_Supermarkeder_26 = new ol.format.GeoJSON();
var features_Supermarkeder_26 = format_Supermarkeder_26.readFeatures(json_Supermarkeder_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_26.addFeatures(features_Supermarkeder_26);
var lyr_Supermarkeder_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_26, 
                style: style_Supermarkeder_26,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_26.png" /> Supermarkeder'
            });
var format_Svmmehaler_27 = new ol.format.GeoJSON();
var features_Svmmehaler_27 = format_Svmmehaler_27.readFeatures(json_Svmmehaler_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehaler_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehaler_27.addFeatures(features_Svmmehaler_27);
var lyr_Svmmehaler_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehaler_27, 
                style: style_Svmmehaler_27,
                popuplayertitle: 'Svømmehaler',
                interactive: true,
                title: '<img src="styles/legend/Svmmehaler_27.png" /> Svømmehaler'
            });
var format_Tankstationer_28 = new ol.format.GeoJSON();
var features_Tankstationer_28 = format_Tankstationer_28.readFeatures(json_Tankstationer_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_28.addFeatures(features_Tankstationer_28);
var lyr_Tankstationer_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_28, 
                style: style_Tankstationer_28,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_28.png" /> Tankstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Frededeomrder_1.setVisible(true);lyr_Hvidovre_lokalplan_forslag_2.setVisible(true);lyr_Kommuneplan_3.setVisible(true);lyr_Lokal_plan_4.setVisible(true);lyr_Strandbeskyttelse_5.setVisible(true);lyr_Genbrugsplads_6.setVisible(true);lyr_Kirker_7.setVisible(true);lyr_Legeplads_8.setVisible(true);lyr_Lgehus_9.setVisible(true);lyr_Parker_10.setVisible(true);lyr_Plejehjem_11.setVisible(true);lyr_Sygehus_12.setVisible(true);lyr_Togstationer_13.setVisible(true);lyr_UddanleseSteder_14.setVisible(true);lyr_Badestrand_15.setVisible(true);lyr_Brnehaver_16.setVisible(true);lyr_Fodboldbaner_17.setVisible(true);lyr_Folkeskoler_18.setVisible(true);lyr_Elbilladestandere_19.setVisible(true);lyr_Havn_20.setVisible(true);lyr_HvidovreApotek_21.setVisible(true);lyr_Hvidovrekommune_22.setVisible(true);lyr_HvidovreRdhus_23.setVisible(true);lyr_Kirkegrde_24.setVisible(true);lyr_Resturanter_25.setVisible(true);lyr_Supermarkeder_26.setVisible(true);lyr_Svmmehaler_27.setVisible(true);lyr_Tankstationer_28.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Frededeomrder_1,lyr_Hvidovre_lokalplan_forslag_2,lyr_Kommuneplan_3,lyr_Lokal_plan_4,lyr_Strandbeskyttelse_5,lyr_Genbrugsplads_6,lyr_Kirker_7,lyr_Legeplads_8,lyr_Lgehus_9,lyr_Parker_10,lyr_Plejehjem_11,lyr_Sygehus_12,lyr_Togstationer_13,lyr_UddanleseSteder_14,lyr_Badestrand_15,lyr_Brnehaver_16,lyr_Fodboldbaner_17,lyr_Folkeskoler_18,lyr_Elbilladestandere_19,lyr_Havn_20,lyr_HvidovreApotek_21,lyr_Hvidovrekommune_22,lyr_HvidovreRdhus_23,lyr_Kirkegrde_24,lyr_Resturanter_25,lyr_Supermarkeder_26,lyr_Svmmehaler_27,lyr_Tankstationer_28];
lyr_Frededeomrder_1.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Hvidovre_lokalplan_forslag_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Kommuneplan_3.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Lokal_plan_4.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Strandbeskyttelse_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Genbrugsplads_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lgehus_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Plejehjem_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sygehus_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UddanleseSteder_14.set('fieldAliases', {'fid': 'fid', 'Skolens na': 'Skolens na', 'Uddanelse': 'Uddanelse', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Badestrand_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fodboldbaner_17.set('fieldAliases', {'fid': 'fid', 'fodboldban': 'fodboldban', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_18.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Elbilladestandere_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Havn_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreApotek_21.set('fieldAliases', {'fid': 'fid', 'Apotek nav': 'Apotek nav', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hvidovrekommune_22.set('fieldAliases', {'fid': 'fid', 'Kommune na': 'Kommune na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreRdhus_23.set('fieldAliases', {'fid': 'fid', 'rådhus na': 'rådhus na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirkegrde_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Resturanter_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Supermarkeder_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehaler_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstationer_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Frededeomrder_1.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Hvidovre_lokalplan_forslag_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Kommuneplan_3.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Lokal_plan_4.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Strandbeskyttelse_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Genbrugsplads_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirker_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Lgehus_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Parker_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Plejehjem_11.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Sygehus_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_13.set('fieldImages', {'fid': '', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_UddanleseSteder_14.set('fieldImages', {'fid': '', 'Skolens na': 'TextEdit', 'Uddanelse': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Badestrand_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_16.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Fodboldbaner_17.set('fieldImages', {'fid': '', 'fodboldban': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Folkeskoler_18.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Elbilladestandere_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Havn_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_HvidovreApotek_21.set('fieldImages', {'fid': '', 'Apotek nav': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Hvidovrekommune_22.set('fieldImages', {'fid': '', 'Kommune na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreRdhus_23.set('fieldImages', {'fid': '', 'rådhus na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kirkegrde_24.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Resturanter_25.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Supermarkeder_26.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Svmmehaler_27.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstationer_28.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Frededeomrder_1.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Hvidovre_lokalplan_forslag_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Kommuneplan_3.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Lokal_plan_4.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Strandbeskyttelse_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Genbrugsplads_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Kirker_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Legeplads_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Lgehus_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Parker_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Plejehjem_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Sygehus_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Togstationer_13.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - visible with data', });
lyr_UddanleseSteder_14.set('fieldLabels', {'fid': 'no label', 'Skolens na': 'no label', 'Uddanelse': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Badestrand_15.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Brnehaver_16.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Fodboldbaner_17.set('fieldLabels', {'fid': 'no label', 'fodboldban': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Folkeskoler_18.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Elbilladestandere_19.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Havn_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_HvidovreApotek_21.set('fieldLabels', {'fid': 'no label', 'Apotek nav': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Hvidovrekommune_22.set('fieldLabels', {'fid': 'no label', 'Kommune na': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_HvidovreRdhus_23.set('fieldLabels', {'fid': 'no label', 'rådhus na': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Kirkegrde_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Resturanter_25.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Supermarkeder_26.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Svmmehaler_27.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_28.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});