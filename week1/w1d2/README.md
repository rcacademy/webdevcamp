# Week 1 Day 2: Intermediate HTML & Intro to CSS

## Intermediate HTML

#### Divs & Spans

```html

<div></div>

<span></span>
```

## Introduction to CSS

CSS stands for **Cascading Style Sheets** and we can use CSS to add very powerful styling to our HTML documents.

### Getting started with CSS

```HTML
<html>
	<head>
		<title>Our first CSS</title>
		<style>
			p { color: red; }
		</style>
	</head>
	<body>
		<p>The CSS defined above sets the color of paragraphs to red.</p>
	</body>
</html>
```
### CSS Selectors, Properties & Values

Styles in a CSS file are defined by two parts: the selector and the properties you'd like the apply. The selector is what element or elements we'd like to style. It's important to remember that you can define a selector that will match more than 1 element. For example, using just `p` as a selector means that we will apply properties to all `<p>` tags in our document.

The properties we want to apply to the selector are defined within the parentheses. You can define as many properties as you want, each of them ending with a semicolon `;`. The following CSS indicates that all paragraph tags should be red and in the `arial` typeface. If arial is not found on the viewer's computer, it will then look for helvetica and finally the default [sans-serif](https://en.wikipedia.org/wiki/Sans-serif) font.

You can view all available CSS properties in [HTML Dog's CSS Reference](http://htmldog.com/references/css/properties/).

```css
p {
	color: red;
	font-family: arial, helvetica, sans-serif;
}
```

### Using inline styles
You can also use CSS inline but it is not recommended. It is being shown here so you know that it is possible. In the case of inline styling, it will only affect the element it is added to. So in this example, only one of the paragraphs will be red.

```HTML
<html>
	<head>
		<title>Our first CSS</title>
	</head>
	<body>
		<p style = "color: red">This paragraph will be red.</p>
		<p>This paragraph will NOT be red.</p>
	</body>
</html>
```

This is not a recommended practice because it mixes CSS styling with HTML markup and if you end up wanting to use this style in more than one place, you will also have to change it in more than one place if you wanted to change the color in the future.

### Creating a stylesheet

Using a stylesheet is the final and most recommended way for adding styles to an HTML document. The stylesheet is a file with the extension of `.css` that will be included in your `.html` file. In this case, we will create `style.css` and include it in our `index.html` file.

**style.css**

```css
p {
	color: red;
	font-family: arial, helvetica, sans-serif;
}

```

**index.html**

```HTML
<html>
	<head>
		<title>Our first CSS</title>
		<!-- The following line will include the style.css file we've created -->
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<p style = "color: red">This paragraph will be red.</p>
		<p>This paragraph will NOT be red.</p>
	</body>
</html>
```

* Selectors
* Properties
* Specificity & Cascading
* Intro to Chrome Inspector
* Advanced Selectors
* Selectors Assignment
* Fonts & Colors
* Introduction to the Box model

## Exercise: Create a tic tac toe board
A good idea for this would be to use a table with the same width & height and you will need to selectively turn on the borders of each table item to display a proper tic tac toe board. This board will not be playable yet but we can add that once we get to the javascript portion of the course.
