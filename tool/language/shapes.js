/*
* The Actor, Role, and Agent shapes are structured as follows:
	.element: the circle that represents the actor when collapsed
	text: the text inside the circle, usually representing the name of the actor
	.boundary: the container for the elements that go inside the actor

	Additionally, Agent and Role also contain a path that distinguishes then from the generic Actor element

	A rectangular boundary is used instead of the original circular boundary, to maximize the space available for drawing
*/


/*
joint.shapes.istar.Actor = joint.dia.Element.extend({
    markup: '<g><rect class="boundary" /><circle class="element actorSymbol" /><path /><text class="content"/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Container',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit
            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Actor',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(242,242,242)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4',
                'stroke-width': 2,
                width: 200
            },
        }
    }, joint.dia.Element.prototype.defaults)
});

*/


/*


joint.shapes.istar.Role = joint.dia.Element.extend({
    markup: '<g><rect class="boundary" /><circle class="element actorSymbol" /><path class="actorDecorator"/><text class="content"/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Container',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit
            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Role',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(242,242,242)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4',
                'stroke-width': 2,
                width: 200
            },
            path: {
                d: 'm -11 45 q 30 15 62 0',
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1.5
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.istar.Agent = joint.dia.Element.extend({
    markup: '<g><rect class="boundary"/><circle class="element actorSymbol"/><path class="actorDecorator"/><text class="content"/></g>',
    defaults: joint.util.deepSupplement({
        type: 'Container',
        size: {width: 200, height: 120},
        attrs: {
            '.element': {
                cx: 40,
                cy: 40,
                fill: 'rgb(205,254,205)',
                r: 40,
                stroke: 'black',
                'stroke-width': 2,
                transform: 'translate(-20, -20)'  //displaces the circle a little bit

            },
            text: {
                fill: '#000000',
                'font-family': 'Arial, helvetica, sans-serif',
                'font-size': 12,
                ref: 'circle',//makes the position of the text relative to the circle
                'ref-x': 0.5,
                'ref-y': 0.5,
                text: 'Agent',
                'text-anchor': 'middle',
                'y-alignment': 'middle'
            },
            '.boundary': {
                fill: 'rgb(242,242,242)',
                height: 120,
                rx: 100,
                ry: 40,
                stroke: 'black',
                'stroke-dasharray': '10,5,4,4', //'10,5'
                'stroke-width': 2,
                width: 200
            },
            path: {
                d: 'm -11 -5 62 0',
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1.5
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

*/

/**
joint.shapes.istar.Goal = joint.shapes.basic.Rect.extend({
    markup: '<g class="scalable"><rect class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Goal',
        size: {width: 90, height: 35},
        attrs: {
            rect: {
                fill: 'rgb(205,254,205)',
                height: 30,
                rx: 20,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', // prevents stroke distortion when the element is resized 
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'Goal'
            }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});
*/

/*
joint.shapes.istar.SoftGoal = joint.shapes.basic.Rect.extend({
    markup: '<g class="scalable"><rect class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'SoftGoal',
        size: {width: 90, height: 35},
        attrs: {
            'path': {
				d: 'm 60.637955,-4.0358 c 17.5174,2.2042 29.9953,-10.69554 41.892705,-4.7858 22.34142,10.8714 11.2203,43.7743 -2.25,47.7322 -8.276505,2.9084 -13.960205,5.1934 -46.142805,-2.1786 -6.7454,-2.2317 -28.2652,6.0799 -35.4643,4.7143 C 9.072156,39.4809 6.491756,33.7693 3.744956,28.482 c -6.3069,-15.1266 -2.5738,-28.0439 7.981099,-34.7856 10.5549,-6.74179 27.9316,-7.30796 48.9119,2.2678 z',
                fill: 'rgb(255,255,255)',
                height: 30,
                rx: 20,
                stroke: 'black',
                'stroke-width': 1,
                'vector-effect': 'non-scaling-stroke', // prevents stroke distortion when the element is resized 
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'SoftGoal'
            }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});
*/



joint.shapes.istar.SoftGoal = joint.shapes.basic.Path.extend({
    markup: '<g class="scalable"><path class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'SoftGoal',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
				
                // É NECESSÁRIO TROCAR AS PROPRIEDADES DO "d" PARA QUE A CARGA NO WORKSPACE SEJA DA NOVA FIGURA  -> ESTÁ HARD CODED :(
				d: 'm 60.637955,-4.0358 c 17.5174,2.2042 29.9953,-10.69554 41.892705,-4.7858 22.34142,10.8714 11.2203,43.7743 -2.25,47.7322 -8.276505,2.9084 -13.960205,5.1934 -46.142805,-2.1786 -6.7454,-2.2317 -28.2652,6.0799 -35.4643,4.7143 C 9.072156,39.4809 6.491756,33.7693 3.744956,28.482 c -6.3069,-15.1266 -2.5738,-28.0439 7.981099,-34.7856 10.5549,-6.74179 27.9316,-7.30796 48.9119,2.2678 z',
                
				fill: 'rgb(255,255,255)',
                resetOffset: true,
                stroke: 'black',
                'stroke-width': 1,
                'vector-effect': 'non-scaling-stroke' 
            },
						
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                text: 'SoftGoal',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)

});






//* ESSES TRECHOS ABAIXO SAO PARA CRIAR A FIGURA INICAL  -- DEVE SER ALTERADA DEPOIS PARA O NOVO MODELO, CASO SEJA RETIRADA A FIGURA INICIAL FICA COM ERROS DE CARREGAMENTO DE IMAGEM


/*
joint.shapes.istar.Resource = joint.shapes.basic.Rect.extend({
    markup: '<g class="scalable"><rect class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Resource',
        size: {width: 90, height: 35},
        attrs: {
            rect: {
                fill: 'rgb(205,254,205)',
                height: 30,
                rx: 0,
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', 
                width: 130
            },
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                text: 'Resource'
            }
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});
*/


/*

joint.shapes.istar.Task = joint.shapes.basic.Polygon.extend({
    markup: '<g class="scalable"><polygon class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Task',
        size: {width: 95, height: 36},
        attrs: {
            'polygon': {
                fill: 'rgb(205,254,205)',
                height: 36,
                points: '0,18 15,0 115,0 130,18 115,36 15,36',
                stroke: 'black',
                'stroke-width': 2,
                'vector-effect': 'non-scaling-stroke', 
                width: 130
            },
            text: {
                text: 'Task',
                'font-size': 12,
                'font-weight': 'bold',
                'ref-dy': '-50%',
            }
        }
    }, joint.shapes.basic.Polygon.prototype.defaults)
});
*/



joint.shapes.istar.Operationalization = joint.shapes.basic.Path.extend({
    markup: '<g class="scalable"><path class="element"/></g><text class="content"/>',
    defaults: joint.util.deepSupplement({
        type: 'Operationalization',
        size: {width: 90, height: 55},
        attrs: {
            'path': {
				
                // É NECESSÁRIO TROCAR AS PROPRIEDADES DO "d" PARA QUE A CARGA NO WORKSPACE SEJA DA NOVA FIGURA  -> ESTÁ HARD CODED :(
				d: 'm 60.637955,-4.0358 c 17.5174,2.2042 29.9953,-10.69554 41.892705,-4.7858 22.34142,10.8714 11.2203,43.7743 -2.25,47.7322 -8.276505,2.9084 -13.960205,5.1934 -46.142805,-2.1786 -6.7454,-2.2317 -28.2652,6.0799 -35.4643,4.7143 C 9.072156,39.4809 6.491756,33.7693 3.744956,28.482 c -6.3069,-15.1266 -2.5738,-28.0439 7.981099,-34.7856 10.5549,-6.74179 27.9316,-7.30796 48.9119,2.2678 z',
                
				fill: 'rgb(255,255,255)',
                resetOffset: true,
                stroke: 'black',
                'stroke-width': 3.5,
                'vector-effect': 'non-scaling-stroke' 
            },
						
            text: {
                'font-size': 12,
                'font-weight': 'bold',
                'ref-y': '-65%',
                text: 'Operationalization',
                'y-alignment': 'middle'
            },
        }
    }, joint.shapes.basic.Path.prototype.defaults)
});








joint.shapes.istar.ParticipatesInLink = joint.dia.Link.define('ParticipatesInLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                x: -40,
                y: 4,
                // textPath: {   /* used if we want the text to follow along the line */
                //     selector: 'line',
                //     startOffset: '50%'
                // },
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                x: -40,
                y: 4,
                // textPath: {  /* used if we want the text to follow along the line */
                //     selector: 'line',
                //     startOffset: '50%'
                // },
            }
        },
        source: {selector: '.actorSymbol'},
        target: {selector: '.actorSymbol'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            },
            {
                selector: 'label-background',
                tagName: 'text'
            },
            {
                selector: 'label',
                tagName: 'text'
            }
        ]
    }
);

joint.shapes.istar.IsALink = joint.dia.Link.define('IsALink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            label: {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                x: -20,
                y: 4,
            },
            'label-background': {
                atConnectionRatio: 0.5,
                'font-size': 13,
                'font-weight': 400,
                stroke: 'white',
                'stroke-width': '0.35em',
                x: -20,
                y: 4,
            }
        },
        source: {selector: '.actorSymbol'},
        target: {selector: '.actorSymbol'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            },
            {
                selector: 'label-background',
                tagName: 'text'
            },
            {
                selector: 'label',
                tagName: 'text'
            }
        ]
    }
);

joint.shapes.istar.DependencyLink = joint.dia.Link.define('DependencyLink',
{
    attrs: {
        line: {
            connection: true,
            fill: 'none',
            stroke: 'black',
            'stroke-width': 1
        },
        'connection-wrap': {
            connection: true,
            fill: 'none',
            stroke: 'transparent',
            'stroke-linecap': 'round',
            'stroke-width': 20
        },
        label: {
            atConnectionRatio: 0.5,
            d: 'm 0,-10 l 0,20 4,0 c 10,0, 10 -20, 0,-20 l -4,0',
            // d: 'm 0,-10 l 0,20 c 15,2, 15 -22, 0,-20',
            // d: 'm 0,-10 l 0,20 q 15 -10, 0,-20',
            fill: 'white',
            // fill: 'none',
            stroke: 'black',
            'stroke-width': 2,
        }
    },
    source: {selector: 'text'},
    target: {selector: 'text'}
},
{
    markup: [
        {
            className: 'c-connection-wrap',
            selector: 'connection-wrap',
            tagName: 'path'
        },
        {
            selector: 'line',
            tagName: 'path'
        },
        {
            selector: 'label',
            tagName: 'path'
        }]
}
);

joint.shapes.istar.DecompositionLink1 = joint.dia.Link.define('DecompositionLink1',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                'targetMarker': {
                    'd': 'm 10, 12',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);

joint.shapes.istar.And = joint.dia.Link.define('And',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                'targetMarker': {
					'd': 'm 10,-6 l 0, 12 z',
                    //'d': 'm 12,-6 l -12,6 12,6 z',
                     fill: 'black',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);

joint.shapes.istar.Or = joint.dia.Link.define('Or',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l 0, 6 12,6 z',
					fill: 'black',
                    stroke: 'black',
                    type: 'path', //using path instead of circle to correctly position the circle
                }
                // targetMarker: {
                //     r: 4,
                //     fill: 'black',
                //     stroke: 'black',
                //     'type': 'circle',
                //     x: -10,
                //     y: 10
                // }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);



joint.shapes.istar.ContributionLink = joint.dia.Link.define('ContributionLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-width': 1,
                targetMarker: {
                    'd': 'm 10,-6 l -10,6 10,6',
                    fill: 'none',
                    'stroke-width': 1.2,
                    'type': 'path',
                }
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            },
            smooth: true
        },
        labels: [
            {
                position: 0.4,
                attrs: {
                    text: {
                        'font-family': 'sans-serif',
                        'font-size': 12,
                        'font-weight': 'bold'
                    },
                    rect: {
                        fill: 'rgb(242,242,242)',
                    }
                }
            }
        ],
        source: {selector: 'circle'},
        target: {selector: 'circle'}
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);


joint.shapes.istar.QualificationLink = joint.dia.Link.define('QualificationLink',
    {
        attrs: {
            line: {
                connection: true,
                fill: 'none',
                stroke: 'black',
                'stroke-dasharray': '10,5',
                'stroke-width': 1
            },
            'connection-wrap': {
                connection: true,
                fill: 'none',
                stroke: 'transparent',
                'stroke-linecap': 'round',
                'stroke-width': 20
            }
        }
    },
    {
        markup: [
            {
                className: 'c-connection-wrap',
                selector: 'connection-wrap',
                tagName: 'path'
            },
            {
                selector: 'line',
                tagName: 'path'
            }
        ]
    }
);



/*definition of globals to prevent undue JSHint warnings*/
/*globals joint:false */