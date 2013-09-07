# Canvas Module

## Description
The canvas module allows you to easily draw arbitrary content. The canvas view is a normal Titanium view with all its properties.

Once you have created a canvas view, it emits a 'load' event when the canvas is ready to draw upon.

Paths are drawn when you call the fill or stroke method. Other shapes are drawn immediately.

**Disclaimer**: We have tested this module thoroughly. But there are undoubtedly situations in which the behavior of the canvas differs from what is expected. Usually this isn't caused by a bug in this module, but by the way in which Android draws views. We welcome comments on unexpected behavior. Please shoot us an email ([modules@worldwiselearning.org](mailto:modules@worldwiselearning.org?subject=Android%20Canvas%20Module)) and attach your code.

## Accessing the canvas Module

To access this module from JavaScript, you use the following line of code:

	var canvas = require("com.wwl.canvas");

The canvas variable is a reference to the Module object.

## Methods

### createCanvasView({...})
Creates and returns a [Canvas.CanvasView][] object.

## Usage
See example.

## Module History
View the [change log](changelog.html) for this module.

## Feedback and Support
Please direct all questions, feedback, and concerns to [modules@worldwiselearning.org](mailto:modules@worldwiselearning.org?subject=Android%20Canvas%20Module).

## License
Copyright(c) 2013 by WorldWise Learning. MIT License. Please see the LICENSE file included in the distribution for further details.

[Canvas.CanvasView]:canvasview.html