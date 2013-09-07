/*
 * Example app Android Canvas module
 * (c) WorldWise Learning 2013. MIT License.
 */


/* Open a single window */
var win = Ti.UI.createWindow({
	backgroundColor:'green'
});
win.open();


/* Import Canvas module */
var Canvas = require('com.wwl.canvas');

var label = Ti.UI.createLabel({
    font: {
        fontSize: 28
    },
    color: 'black',
    zIndex: 2000,
    left: 50,
    top: 50,
    text: 'This text appear in front of the canvas'
});
win.add(label);


/* Create a canvas */
var canvas = Canvas.createCanvasView({
	backgroundColor: "transparent",
	right: 20,
	bottom: 80,
	top: 20,
	left: 20,
	zIndex: 1
});
win.add(canvas);


var shapes = [

    {
        name: 'triangles',

        fn: function() {

            /* Filled triangle */
            canvas.beginPath();
            canvas.fillStyle = 'red';
            canvas.moveTo(25,25);
            canvas.lineTo(105,25);
            canvas.lineTo(25,105);
            canvas.fill();

            /* Stroked triangle */
            canvas.beginPath();
            canvas.moveTo(125,125);
            canvas.lineTo(125,45);
            canvas.lineTo(45,125);
            canvas.closePath();
            canvas.stroke();
        }
    },

    {
        name: 'filled rect',
        fn: function() {
            canvas.beginPath();
            canvas.fillStyle = 'yellow';
            canvas.fillRect(10,200, 75, 75);
        }
    },

    {
        name: 'circle',
        fn: function() {
            canvas.beginPath();
            canvas.lineWidth = 5;
            canvas.strokeStyle = 'red';
            canvas.drawCircle(150, 150, 50);
        }
    },

    {
        name: 'line, point, round rect',
        fn: function(){
            canvas.beginPath();
            canvas.lineWidth = 7;
            canvas.strokeStyle = 'blue';
            canvas.drawLine(0,0,400,400);
            canvas.drawPoint(50,150);
            canvas.strokeStyle = 'black';
            canvas.drawRoundRect(240, 200, 300, 300, 10, 10);
        }
    },

    {
        name: 'semicircle',
        fn: function() {
            canvas.beginPath();
            canvas.arc(288, 75, 360, 125, 90, 180);
            canvas.closePath();
            canvas.lineWidth = 5;
            canvas.fillStyle = 'red';
            canvas.fill();
            canvas.strokeStyle = '#550000';
            canvas.stroke();
        }
    },

    {
        name: 'rounded corners with arcTo',
        fn: function() {
            canvas.beginPath(); 
            canvas.moveTo(20,20);                    // Create a starting point
            canvas.lineTo(100,20);                   // Create a horizontal line
            canvas.arcTo(120, 20, 200, 70, 0, 90);   // Create an arc
            canvas.lineTo(200,120);                  // Continue with vertical line
            canvas.stroke();                         // Draw it
        }
    },

    {
        name: 'rectangle on path',
        fn: function() {
            canvas.beginPath();
            canvas.addRect(188, 50, 200, 100);
            canvas.fillStyle = 'yellow';
            canvas.fill();
            canvas.lineWidth = 7;
            canvas.strokeStyle = 'black';
            canvas.stroke();
        }
    },

    {
        name: 'another example: filled and cloud',
        fn: function() {
            canvas.beginPath();
            canvas.fillStyle = 'red';
            canvas.moveTo(10,30);
            canvas.bezierCurveTo(50,90,159,-30,200,30);
            canvas.lineTo(200,90);
            canvas.lineTo(10,90);
            canvas.closePath();
            canvas.fill();
            canvas.lineWidth = 4;
            canvas.strokeStyle = 'black';
            canvas.stroke();

            /* cloud */
            canvas.beginPath();
            canvas.moveTo(170, 80);
            canvas.bezierCurveTo(130, 100, 130, 150, 230, 150);
            canvas.bezierCurveTo(250, 180, 320, 180, 340, 150);
            canvas.bezierCurveTo(420, 150, 420, 120, 390, 100);
            canvas.bezierCurveTo(430, 40, 370, 30, 340, 50);
            canvas.bezierCurveTo(320, 5, 250, 20, 250, 50);
            canvas.bezierCurveTo(200, 5, 150, 20, 170, 80);
            canvas.closePath();
            canvas.lineWidth = 5;
            canvas.fillStyle = '#8ED6FF';
            canvas.fill();
            canvas.strokeStyle = 'blue';
            canvas.stroke();
        }
    },

    {
        name: 'face',
        fn: function() {
            canvas.beginPath();
            canvas.lineWidth = 4;
            canvas.strokeStyle = 'black';
            canvas.arc(75, 75, 175, 175, 0, 360);
            canvas.arc(100, 120, 145, 165, 90, 180);
            canvas.arc(100, 100, 115, 115, 0, 360);
            canvas.arc(140, 100, 155, 115, 0, 360);
            canvas.stroke();
        }
    },

    {
        name:'lineJoin',
        fn: function() {
            var lineJoin = ['round', 'bevel', 'miter'];
            canvas.lineWidth = 10;
            canvas.strokeStyle = 'black';
            canvas.clearShadow();

            for (var i=0; i<lineJoin.length; i++) {
                canvas.beginPath();
                canvas.lineJoin = lineJoin[i];
                canvas.moveTo(-5,5+i*40);
                canvas.lineTo(35,45+i*40);
                canvas.lineTo(75,5+i*40);
                canvas.lineTo(115,45+i*40);
                canvas.lineTo(155,5+i*40);
                canvas.stroke();
            }
        }
    },
    
    {
        name: 'lineCap',
        fn: function() {
            var lineCap = ['butt', 'round', 'square'];
            canvas.lineWidth = 15;

            /* Draw lines */
            canvas.strokeStyle = 'black';
            for (var i=0; i<lineCap.length; i++){
                canvas.beginPath();
                canvas.lineCap = lineCap[i];
                canvas.moveTo(25+i*50,10);
                canvas.lineTo(25+i*50,140);
                canvas.stroke();
            }
        }
    },
    
    {
        name: 'miterLimit',
        fn: function() {
            canvas.beginPath();
            canvas.lineWidth=10;
            canvas.lineJoin="miter";
            canvas.miterLimit=5;
            canvas.moveTo(20,20);
            canvas.lineTo(50,27);
            canvas.lineTo(20,34);
            canvas.stroke();
        }
    },
    
    {
        name: 'bezier curve',
        fn: function() {
            canvas.beginPath();
            canvas.moveTo(75,40);
            canvas.bezierCurveTo(75,37,70,25,50,25);
            canvas.bezierCurveTo(20,25,20,62.5,20,62.5);
            canvas.bezierCurveTo(20,80,40,102,75,120);
            canvas.bezierCurveTo(110,102,130,80,130,62.5);
            canvas.bezierCurveTo(130,62.5,130,25,100,25);
            canvas.bezierCurveTo(85,25,75,37,75,40);
            canvas.lineWidth = 5;
            canvas.strokeStyle = 'blue';
            canvas.fill();
        }
    },
    
    {
        name: 'quadratic curve',
        fn: function() {
            canvas.beginPath();
            canvas.moveTo(75,25);
            canvas.quadraticCurveTo(25,25,25,62.5);
            canvas.quadraticCurveTo(25,100,50,100);
            canvas.quadraticCurveTo(50,120,30,125);
            canvas.quadraticCurveTo(60,120,65,100);
            canvas.quadraticCurveTo(125,100,125,62.5);
            canvas.quadraticCurveTo(125,25,75,25);
            canvas.lineWidth = 5;
            canvas.strokeStyle = 'blue';
            canvas.stroke();
        }
    },
    
    {
        name: 'bezier and quadratic',
        fn: function() {
            canvas.beginPath();
            canvas.moveTo(100, 20);
            canvas.lineTo(200, 160);
            canvas.quadraticCurveTo(230, 200, 250, 120);
            canvas.bezierCurveTo(290, -40, 300, 200, 400, 150);
            canvas.lineTo(500, 90);
            canvas.lineWidth = 5;
            canvas.strokeStyle = 'blue';
            canvas.stroke();
        }
    },

    {
        name: 'globalalpha',
        fn: function() {
            
            /* Draw background */
            canvas.beginPath();
            canvas.fillStyle = '#FD0';
            canvas.fillRect(0,0,75,75);
            canvas.fillStyle = '#6C0';
            canvas.fillRect(75,0,75,75);
            canvas.fillStyle = '#09F';
            canvas.fillRect(0,75,75,75);
            canvas.fillStyle = '#F30';
            canvas.fillRect(75,75,150,150);
            canvas.fillStyle = '#FFF';

            /* Set transparency value */
            canvas.globalAlpha = 0.2;

            /* Draw semi transparent circles */
            for (i=0; i < 7; i++) {
                canvas.beginPath();
                canvas.arc(75, 75, 85 + (20 * i), 85 + (20 * i), 0, 360);
                canvas.fill();
            }
        }
    },

    {
        name: 'shadow',
        fn: function() {
            canvas.beginPath();
            canvas.addRect(188, 40, 200, 100);
            canvas.fillStyle = 'red';
            canvas.shadowColor = '#999';
            canvas.shadowBlur = 20;
            canvas.shadowOffsetX = 15;
            canvas.shadowOffsetY = 15;
            canvas.fill();
        }
    },

    {
        name: 'clipping',
        fn: function() {
            
            /* Save canvas state */
            canvas.save();
            
            /* Draw rect the first time */
            canvas.fillStyle = 'red';
            canvas.fillRect(0, 0, 400, 200);
            
            /* Create triangle path */
            canvas.beginPath();
            canvas.moveTo(200, 50);
            canvas.lineTo(250, 150);
            canvas.lineTo(150, 150);
            canvas.closePath();
            canvas.clip();

            /* Fill rect in again with yellow */
            canvas.fillStyle = 'yellow';
            canvas.fillRect(0, 0, 400, 100);

            /* Restore canvas state */
            canvas.restore();
        }
    },

    {
        name: 'draw image',
        fn: function() {
            var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'flower.jpg');
            canvas.drawImage(f.nativePath, 50, 50, 200, 200);
        }
    },

    {
        name: 'text',
        fn: function() {
            canvas.textSize = 40;
            canvas.textAlign = 'left';
            canvas.lineWidth = 1;
            canvas.textStyle = "italic";
            canvas.underlineText = true;
            canvas.typeface = "sans-serif-light";
            canvas.strokeStyle = 'blue';
            canvas.drawText('Hello World!', 75, 125);
        }
    },

    {
        name: 'draw text on path',
        fn: function() {
            canvas.beginPath();
            canvas.arc(88, 75, 470, 150, 90, 180);
            canvas.textSize = 40;
            canvas.textAlign = 'left';
            canvas.lineWidth = 1;
            canvas.strokeStyle = 'purple';
            canvas.drawTextOnPath('Text on a path!', 10, 1);
        }
    },

    {
        name: 'fill text on path',
        fn: function() {
            canvas.beginPath();
            canvas.arc(188, 175, 470, 275, 270, -180);
            canvas.textSize = 40;
            canvas.textAlign = 'left';
            canvas.lineWidth = 1;
            canvas.strokeStyle = 'purple';
            canvas.fillTextOnPath('Text on a path!', 25, 1);
        }
    },

    {
        name: 'rotate',
        fn: function() {
            canvas.rotate(60);
            canvas.fillStyle = 'black';
            canvas.fillRect(50,20,100,50);            
        }
    },

    {
        name: 'scale',
        fn: function() {
            canvas.strokeStyle = 'black';
            canvas.strokeRect(5,5,25,15);
            canvas.scale(2,2);
            canvas.strokeRect(5,5,25,15);            
        }
    },

    {
        name: 'translate',
        fn: function() {
            canvas.fillStyle = 'black';
            canvas.fillRect(10,10,100,50);
            canvas.translate(70,70);
            canvas.fillRect(10,10,100,50);
        }
    },

    {
        name: 'hide',
        fn: function() {
            canvas.hide();
        }
    },

    {
        name: 'show',
        fn: function() {
            canvas.show();
        }
    }
];


/* The canvas view fires a load event when it is ready to draw upon */ 
canvas.addEventListener('load', function() {

    /* Clear button */
    var clearButton = Ti.UI.createButton({
        left: 20,
        bottom: 20,
        title: 'Clear',
        zIndex: 1000
    });
    win.add(clearButton);

    /* Bind event handler to clear button */
    clearButton.addEventListener('click', function(e) {
        e.cancelBubble = true;
        canvas.clear();
    });


    /* Picker for canvas draws */
    var picker = Ti.UI.createPicker({
        right: 160,
        bottom:20,
        zIndex: 1000
    });

    var rows = [];
    shapes.forEach(function(shape, index) {
        rows.push(Ti.UI.createPickerRow({
            index: index,
            title: shape.name
        }));
    });
    picker.add(rows);
    picker.selectionIndicator = true;
    win.add(picker);
    
    var selectBtn = Ti.UI.createButton({
        right: 20,
        bottom: 20,
        title: 'Perform',
        zIndex: 1000
    });
    
    selectBtn.addEventListener('click', function(e) {
    
        var row = picker.getSelectedRow(0);
        var index = row.index;
        shapes[index].fn();
    });
    
    win.add(selectBtn);
});


/* Animate view and 'take a picture'
 * You can even draw on the canvas during the animation */
canvas.addEventListener('click', function() {

    var matrix = Ti.UI.create2DMatrix()
    matrix = matrix.rotate(180);
    matrix = matrix.scale(2, 2);

    var a = Ti.UI.createAnimation({
        transform : matrix,
        duration : 2000,
        autoreverse : true,
        repeat : 3
    });

    canvas.animate(a);
    
    a.addEventListener('complete', function() {
        var picture = canvas.toImage();
        var image = Ti.UI.createImageView({
            width: 250,
            height: 350,
            bottom: 5,
            right: 5,
            image: picture,
            zIndex: 2
        });
        win.add(image);
    });
});
