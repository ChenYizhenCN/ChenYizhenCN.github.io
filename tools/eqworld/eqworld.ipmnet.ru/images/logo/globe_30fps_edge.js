/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'GroupGlobeLeft',
                            type: 'group',
                            rect: ['-14px', '-14px', '200', '200', 'auto', 'auto'],
                            transform: [[],[],[],['0.86','0.86']],
                            c: [
                            {
                                id: 'Sphera3',
                                symbolName: 'Sphera',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'globe1part2',
                                type: 'image',
                                rect: ['3px', '3px', '195px', '195px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"globe1part.svg",'0px','0px']
                            },
                            {
                                id: 'Reflections4',
                                symbolName: 'Reflections',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'GroupGlobeRight',
                            type: 'group',
                            rect: ['244px', '-14px', '200', '200', 'auto', 'auto'],
                            transform: [[],[],[],['0.86','0.86']],
                            c: [
                            {
                                id: 'Sphera4',
                                symbolName: 'Sphera',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'globe2part3',
                                type: 'image',
                                rect: ['2px', '2px', '195px', '195px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"globe2part.svg",'0px','0px']
                            },
                            {
                                id: 'Reflections5',
                                symbolName: 'Reflections',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'globe',
                            symbolName: 'globe',
                            type: 'rect',
                            rect: ['115px', '8px', '200', '200', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'integral7',
                            type: 'image',
                            rect: ['23px', '30px', '387px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"integral7.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '430px', '207px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1039",
                            "left",
                            3974,
                            0,
                            "linear",
                            "${globe}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid1040",
                            "left",
                            3974,
                            0,
                            "linear",
                            "${GroupGlobeRight}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid1041",
                            "left",
                            3974,
                            0,
                            "linear",
                            "${GroupGlobeLeft}",
                            '-14px',
                            '-14px'
                        ]
                    ]
                }
            },
            "continents": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1, 0, '1600px', '4800px', 'auto', 'auto'],
                            id: '_2_globe_180fr',
                            type: 'image',
                            clip: 'rect(0px 200px 200px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/2_globe_180fr.svgz', '0px', '0px']
                        }
                    ],
                    style: {
                        '${sphere}': {
                            rect: [null, -1, 0, 0]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 200, 200]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid845",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid846",
                            "background-position",
                            33,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [0,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid847",
                            "background-position",
                            67,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [0,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid848",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [0,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid849",
                            "background-position",
                            133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [0,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid850",
                            "background-position",
                            167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [0,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid851",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [0,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid852",
                            "background-position",
                            233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [0,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid853",
                            "background-position",
                            267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [0,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid854",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [0,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid855",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [0,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid856",
                            "background-position",
                            367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [0,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid857",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [0,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid858",
                            "background-position",
                            433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [0,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid859",
                            "background-position",
                            467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [0,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid860",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [0,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid861",
                            "background-position",
                            533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [0,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid862",
                            "background-position",
                            567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [0,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid863",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [0,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid864",
                            "background-position",
                            633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [0,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid865",
                            "background-position",
                            667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [0,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid866",
                            "background-position",
                            700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [0,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid867",
                            "background-position",
                            733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [0,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid868",
                            "background-position",
                            767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [0,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid870",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid871",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-200,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid872",
                            "background-position",
                            867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-200,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid873",
                            "background-position",
                            900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-200,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid874",
                            "background-position",
                            933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-200,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid875",
                            "background-position",
                            967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-200,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid876",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-200,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid877",
                            "background-position",
                            1033,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-200,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid878",
                            "background-position",
                            1067,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-200,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid879",
                            "background-position",
                            1100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-200,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid880",
                            "background-position",
                            1133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-200,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid881",
                            "background-position",
                            1167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-200,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid882",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-200,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid883",
                            "background-position",
                            1233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-200,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid884",
                            "background-position",
                            1267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-200,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid885",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-200,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid886",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-200,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid887",
                            "background-position",
                            1367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-200,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid888",
                            "background-position",
                            1400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-200,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid889",
                            "background-position",
                            1433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-200,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid890",
                            "background-position",
                            1467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-200,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid891",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-200,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid892",
                            "background-position",
                            1533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-200,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid893",
                            "background-position",
                            1567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-200,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid894",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid895",
                            "background-position",
                            1633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-400,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid896",
                            "background-position",
                            1667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-400,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid897",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-400,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid898",
                            "background-position",
                            1733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-400,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid899",
                            "background-position",
                            1767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-400,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid900",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-400,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid901",
                            "background-position",
                            1833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-400,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid902",
                            "background-position",
                            1867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-400,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid903",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-400,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid904",
                            "background-position",
                            1933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-400,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid905",
                            "background-position",
                            1967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-400,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid906",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-400,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid907",
                            "background-position",
                            2033,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-400,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid908",
                            "background-position",
                            2067,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-400,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid909",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-400,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid910",
                            "background-position",
                            2133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-400,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid911",
                            "background-position",
                            2167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-400,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid912",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-400,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid913",
                            "background-position",
                            2233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-400,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid914",
                            "background-position",
                            2267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-400,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid915",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-400,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid916",
                            "background-position",
                            2333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-400,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid917",
                            "background-position",
                            2367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-400,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid918",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-600,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid919",
                            "background-position",
                            2433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-600,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid920",
                            "background-position",
                            2467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-600,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid921",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-600,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid922",
                            "background-position",
                            2533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-600,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid923",
                            "background-position",
                            2567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-600,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid924",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-600,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid925",
                            "background-position",
                            2633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-600,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid926",
                            "background-position",
                            2667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-600,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid927",
                            "background-position",
                            2700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-600,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid928",
                            "background-position",
                            2733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-600,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid929",
                            "background-position",
                            2767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-600,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid930",
                            "background-position",
                            2800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-600,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid931",
                            "background-position",
                            2833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-600,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid932",
                            "background-position",
                            2867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-600,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid933",
                            "background-position",
                            2900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-600,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid934",
                            "background-position",
                            2933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-600,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid935",
                            "background-position",
                            2967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-600,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid936",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-600,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid937",
                            "background-position",
                            3033,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-600,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid938",
                            "background-position",
                            3067,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-600,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid939",
                            "background-position",
                            3100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-600,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid940",
                            "background-position",
                            3133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-600,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid941",
                            "background-position",
                            3167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-600,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid942",
                            "background-position",
                            3200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-800,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid943",
                            "background-position",
                            3233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-800,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid944",
                            "background-position",
                            3267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-800,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid945",
                            "background-position",
                            3300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-800,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid946",
                            "background-position",
                            3333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-800,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid947",
                            "background-position",
                            3367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-800,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid948",
                            "background-position",
                            3400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-800,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid949",
                            "background-position",
                            3433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-800,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid950",
                            "background-position",
                            3467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-800,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid951",
                            "background-position",
                            3500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-800,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid952",
                            "background-position",
                            3533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-800,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid953",
                            "background-position",
                            3567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-800,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid954",
                            "background-position",
                            3600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-800,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid955",
                            "background-position",
                            3633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-800,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid956",
                            "background-position",
                            3667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-800,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid957",
                            "background-position",
                            3700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-800,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid958",
                            "background-position",
                            3733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-800,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid959",
                            "background-position",
                            3767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-800,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid960",
                            "background-position",
                            3800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-800,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid961",
                            "background-position",
                            3833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-800,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid962",
                            "background-position",
                            3867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-800,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid963",
                            "background-position",
                            3900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-800,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid964",
                            "background-position",
                            3933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-800,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid965",
                            "background-position",
                            3967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-800,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid966",
                            "background-position",
                            4000,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-1000,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid967",
                            "background-position",
                            4033,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-1000,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid968",
                            "background-position",
                            4067,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-1000,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid969",
                            "background-position",
                            4100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-1000,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid970",
                            "background-position",
                            4133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-1000,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid971",
                            "background-position",
                            4167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-1000,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid972",
                            "background-position",
                            4200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-1000,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid973",
                            "background-position",
                            4233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-1000,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid974",
                            "background-position",
                            4267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-1000,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid975",
                            "background-position",
                            4300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-1000,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid976",
                            "background-position",
                            4333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-1000,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid977",
                            "background-position",
                            4367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-1000,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid978",
                            "background-position",
                            4400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-1000,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid979",
                            "background-position",
                            4433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-1000,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid980",
                            "background-position",
                            4467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-1000,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid981",
                            "background-position",
                            4500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-1000,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid982",
                            "background-position",
                            4533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-1000,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid983",
                            "background-position",
                            4567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-1000,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid984",
                            "background-position",
                            4600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-1000,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid985",
                            "background-position",
                            4633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-1000,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid986",
                            "background-position",
                            4667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-1000,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid987",
                            "background-position",
                            4700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-1000,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid988",
                            "background-position",
                            4733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-1000,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid989",
                            "background-position",
                            4767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-1000,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid990",
                            "background-position",
                            4800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-1200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid991",
                            "background-position",
                            4833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-1200,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid992",
                            "background-position",
                            4867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-1200,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid993",
                            "background-position",
                            4900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-1200,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid994",
                            "background-position",
                            4933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-1200,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid995",
                            "background-position",
                            4967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-1200,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid996",
                            "background-position",
                            5000,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-1200,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid997",
                            "background-position",
                            5033,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-1200,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid998",
                            "background-position",
                            5067,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-1200,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid999",
                            "background-position",
                            5100,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-1200,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1000",
                            "background-position",
                            5133,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-1200,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1001",
                            "background-position",
                            5167,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-1200,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1002",
                            "background-position",
                            5200,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2200],
                            [-1200,-2400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1003",
                            "background-position",
                            5233,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2400],
                            [-1200,-2600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1004",
                            "background-position",
                            5267,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2600],
                            [-1200,-2800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1005",
                            "background-position",
                            5300,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2800],
                            [-1200,-3000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1006",
                            "background-position",
                            5333,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3000],
                            [-1200,-3200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1007",
                            "background-position",
                            5367,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3200],
                            [-1200,-3400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1008",
                            "background-position",
                            5400,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3400],
                            [-1200,-3600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1009",
                            "background-position",
                            5433,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3600],
                            [-1200,-3800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1010",
                            "background-position",
                            5467,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-3800],
                            [-1200,-4000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1011",
                            "background-position",
                            5500,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4000],
                            [-1200,-4200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1012",
                            "background-position",
                            5533,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4200],
                            [-1200,-4400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1013",
                            "background-position",
                            5567,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4400],
                            [-1200,-4600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1014",
                            "background-position",
                            5600,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-4600],
                            [-1400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1015",
                            "background-position",
                            5633,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,0],
                            [-1400,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1016",
                            "background-position",
                            5667,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-200],
                            [-1400,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1017",
                            "background-position",
                            5700,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-400],
                            [-1400,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1018",
                            "background-position",
                            5733,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-600],
                            [-1400,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1019",
                            "background-position",
                            5767,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-800],
                            [-1400,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1020",
                            "background-position",
                            5800,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1000],
                            [-1400,-1200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1021",
                            "background-position",
                            5833,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1200],
                            [-1400,-1400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1022",
                            "background-position",
                            5867,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1400],
                            [-1400,-1600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1023",
                            "background-position",
                            5900,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1600],
                            [-1400,-1800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1024",
                            "background-position",
                            5933,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-1800],
                            [-1400,-2000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1025",
                            "background-position",
                            5967,
                            0,
                            "linear",
                            "${_2_globe_180fr}",
                            [0,-2000],
                            [-1400,-2200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "globe": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                            id: 'sphere',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/sphere.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '200', '200', 'auto', 'auto'],
                            type: 'rect',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'block',
                            symbolName: 'continents',
                            id: 'continents',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0]
                        },
                        {
                            type: 'image',
                            id: 'reflections',
                            opacity: '1',
                            rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'block',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/reflections.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '200', '200']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid310",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sphere}",
                            'block',
                            'block'
                        ],
                        [
                            "eid312",
                            "display",
                            0,
                            0,
                            "linear",
                            "${reflections}",
                            'block',
                            'block'
                        ],
                        [
                            "eid842",
                            "display",
                            0,
                            0,
                            "linear",
                            "${continents}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Sphera": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            id: 'sphere',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sphere.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Reflections": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            id: 'reflections',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/reflections.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("globe_30fps_edgeActions.js");
})("EDGE-10260560");
