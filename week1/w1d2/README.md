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

### CSS Selectors
CSS selectors are used to target HTML elements so that we can change their appearance, formatting and more.

There are many types of selectors but the first ones we are going to focus on include elements, ids and classes.

To target an html element, you can simply use that element name such as `h1`.

```css

h1 {
	/* properties & values go here */
}

```

To target an id that we've defined in the HTML, we can use that id with an "octothorpe" or "pound sign" before it such as `#profile`.

```css

#profile {
	/* properties & values go here */
}

```

Finally, we can target a class using the class name with a period such as `.photo`.

```css

.photo {
	/* properties & values go here */
}

```

### CSS Properties
CSS properties are used to change the appearance, formatting and structure of HTML elements.

This might consist of changing text color, the height or width of an image, creating a container that takes up the entire width of our page, etc.

You can check out a list of CSS properties at this [CSS Property Reference](http://htmldog.com/references/css/properties/).

The lecture will cover how these properties are used but here are some examples added to the `div` selector.

```css

div {
	width: 100px;
	height: 100px;
	color: red;
	font-family: arial;
	position: absolute;
	margin: 5px;
	padding: 5px
}

```
### Intro to Chrome Inspector & Developer Tools
You can access Chrome Inspector while you are visiting a website by right clicking the page and selecting `Inspect Element`. It is also accessible under `View > Developer > Developer Tools`.

## Exercise: Selector Exercise
Complete the selector & property exercise.  

You will find an the `selectors.html` file in the [/exercises](./exercises) folder.

## Exercise: Fix the Blog Sidebar
We have some HTML & CSS that looks like the beginnings of a blog template. The sidebar is not showing up correctly. Use the Chrome Inspector and remember what we've learned about the box model to make the sidebar show up alongside the two fake articles.

You will find an the `blog.html` file in the [/exercises](./exercises) folder.


## Exercise: Create a Tic Tac Toe board
A good idea for this would be to use a table with the same width & height and you will need to selectively turn on the borders of each table item to display a proper tic tac toe board. This board will not be playable yet but we can add that once we get to the javascript portion of the course.

You will find the `tictacthoe.html` file in the [/exercises](./exercises) folder.
