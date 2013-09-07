# Canvas.CanvasView

## Description
Gives you a canvas upon which to draw.

The view emits a 'load' event when it is ready.

The canvas view has several methods to immediately draw shapes, such as lines, rectangles, and points, as well as texts. 

Other shapes are drawn by creating a path, adding line segments, curves, or arcs, and then closing the path. Begin a new path using beginPath(). Set the starting point by calling moveTo(x,y). The closePath() method draws the line from the current endpoint to the starting point of the path. See the example for more information.

Call stroke() or fill() to draw the path. Before doing so, you can specify the stroke or fill style. Colors are specified by the usual Titanium naming conventions. Apart from that, you can also set, for instance, the line width for strokes.

You can add a shadow to any shape, or make any shape into a mask by designating it as the clipping region for drawing operations. 

The CanvasView also supports the following matrix transformations: translate, rotate, and  scale.

**Disclaimer**: We have tested this module thoroughly. But there are undoubtedly situations in which the behavior of the canvas differs from what is expected. Usually this isn't caused by a bug in this module, but by the way in which Android draws views. We welcome comments on unexpected behavior. Please shoot us an email ([modules@worldwiselearning.org](mailto:modules@worldwiselearning.org?subject=Android%20Canvas%20Module)) and attach your code.

## Properties
This view has all of the same properties as the core [Ti.UI.View][].

## Events
This view has all of the same events as the core [Ti.UI.View][].

### load
Fired when the canvas is ready to draw upon.

[Ti.UI.View]: http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.View-object

## Shapes
### Methods
#### drawArc(float x1, float y1, float x2, float y2, float startAngle, float endAngle)
Draws an arc in the designated area (rectangle). The arc starts at the startAngle and takes endAngle degrees. Both startAngle and endAngle are specified in degrees.

#### drawCircle(float x, float y, float radius)
The radius is specified in degrees.

#### drawLine(float startX, float startY, float stopX, float stopY)

#### drawPoint(float x, float y)

#### drawRect(float x, float y, float width, float height)

#### drawRoundRect(float x, float y, float width, float height, float rx, float ry)
The arguments rx and ry specify the radiuses of the corners.

## Colors, Styles, and Shadows

### Properties

#### antiAlias[boolean]

#### dither[boolean]

#### fillStyle[string]
The color used to fill the drawing.

#### shadowBlur[float]
The blur level for shadows.

#### shadowColor[string]
The color to use for shadows.
 
#### shadowOffsetX
The horizontal distance of the shadow from the shape.

#### shadowOffsetY
The vertical distance of the shadow from the shape.

#### strokeStyle[string]
The color used for strokes.

#### strokeWidth[float]
Controls the width of the strokes -- identical to lineWidth.


### Methods

#### clearShadow()
When you set a shadow color or shadow blur, and a shadow offset, all subsequent drawing operations include a shadow of the current color and blur, at the specified offset. The clearShadow method is a convenient way to turn shadows off.

## Line Styles

### Properties

#### lineCap[string]
A string specifying the type of end cap to put on lines to  be drawn using lineTo().

#####values
* "butt"	no end cap
* "round"	round end cap half a line width in radius
* "square"	square end cap half a line width thick

#### lineJoin[string]
The lineJoin property sets or returns the type of corner created, when two lines meet.

**Note**: The "miter" value is affected by the miterLimit property.
##### values
* "miter"
* "round"
* "bevel"

#### lineWidth[float]
The lineWidth property sets or returns the current line width, in pixels. Identical to strokeWidth.

#### miterLimit[float]
The miter length is the distance between the inner corner and the outer corner where two lines meet.


## Rectangles

### Methods

#### clearRect(float x, float y, float width, float height)
Clears a rectangle.

#### fillRect(float x, float y, float width, float height)
Fills a specified rectangle in the current fill color.

#### strokeRect(float x, float y, float width, float height)
Draws the outlines of a rectangle in the current stroke color.

## Paths

### Methods

#### arc(float x1, float y1, float x2, float y2, float startAngle, float endAngle)
Draws an arc in the designated area (rectangle). The arc starts at the startAngle and takes endAngle degrees. Both startAngle and endAngle are in degrees. The arc is drawn clockwise unless you provide a negative value for the endAngle.

#### arcTo(float x1, float y1, float x2, float y2, float startAngle, float endAngle)
Draws an arc in the designated area (rectangle). The arc starts at the startAngle and takes endAngle degrees. Both startAngle and endAngle are in degrees. The arc is connected to the other points in the path. The arc is drawn clockwise unless you provide a negative value for the endAngle.

#### begin()
Start queuing up operations (like filling a rectangle, drawing aline, etc). Removes all paths.

#### beginPath()
Starts a new path.

#### bezierCurveTo(float cp1x, float cp1y, float cp2x, float cp2y, float x, float y)
Adds a Bezier curve from the current point on the path to the specified end point, using the two specified control points.

#### clip()
Constrains the clipping region of the canvas to the current path.
Once a region is clipped, all future drawing will be limited to the clipped region (no access to other regions on the canvas). You can however save the current canvas region using the save() method before using the clip() method, and restore it (with the restore() method) any time in the future.

#### closePath()
Creates a line from the endpoint of the current path to the beginning point of the current subpath, creating a closed shape.

#### fill()
Fills the current path using the current fill color.

#### lineTo(float x, float y)
Adds a line segment to the current path, from the current endpoint to the specified new endpoint.

#### moveTo(float x, float y)
Moves the current endpoint of the current path without adding a line segment to the path, creating a new subpath.

#### quadraticCurveTo(float cpx, float cpy, float x, float y)
Adds a Bezier curve with a single control point to the current path.

#### stroke()
Draws the outline of the current path using the current stroke style and line width.


## Transformations

### Methods

#### rotate(float degrees)
The rotate() method rotates the canvas.

#### scale(float width, float height)
Scales the canvas bigger or smaller.

* width: Scales the width of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
* height: Scales the height of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)


#### translate(float x, float y)
The translate() method remaps the (0,0) position on the canvas.


## Text

### Properties

#### strikeThruText[boolean]

#### textAlign[string]
A string that specifies whether text is left-justified,	right-justified, or centered.
###### values
* center
* left
* right 

#### textScaleX[float]

#### textSize[float]

#### textSkewX[float]

#### textStyle
##### values
* normal
* italic
* bold
* bolditalic

#### typeface[string]
At this moment, custom fonts aren't supported. Built-in fonts are:

* normal
* sans
* serif
* monospace

#### underlineText[boolean]

### Methods

#### drawText(string text, float x, float y)
Draws a line of text in outline at the specified x,y.

#### fillText(string text, float x, float y)

#### strokeText(string text, float x, float )
Identical to drawText.

#### drawTextOnPath(text, hOffset, vOffset)
Draws text on the current path.

#### fillTextOnPath(text, hOffset, vOffset)

## Image Drawing
### Methods
#### drawImage(Object image, float x, float y, float width, float height)
Draws the specified image with its upper-left corner at the specified point on the canvas. The image is scaled to thebuilt specified width and height.


## Compositing

### Properties
#### alpha[float]
The current alpha or transparency value of the drawing: a number between 0.0 (fully transparent) and 1.0 (no transparancy). Identical to globalAlpha.

#### globalAlpha[float]
The current alpha or transparency value of the drawing: a number between 0.0 (fully transparent) and 1.0 (no transparancy). Identical to alpha.

## Other
### Methods
#### clear()
Clears the canvas.

#### CanvasView getContext()
Returns the canvas view.

#### restore()
Returns previously saved canvas state and attributes.

#### save()
Saves the state of the current canvas.
