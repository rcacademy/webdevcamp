# Week 1 Day 1: Getting Started & Intro to HTML

### Setting up your front-end development environment

#### Code editor
You will need to use a code editor to get started. We're going to be using [Atom](https://atom.io) right now but there are many options out there.

1. Download Atom.
2. For Mac users, unzip the download and move the Atom icon into your `Applications` folder.

#### Your browser

#### The File System
It is important to become familiar with your computer's file system: how to find files, organize your projects and navigate between files and folders. Most operating system (OS) file systems are structured like a tree.

We will be learning how to navigate this using the `command line` in the near future.

**Example of a tree-based file system**

> * /
  * Applications
  * Users
    * colinloretz
      * Desktop
      * Documents
      * Projects
    * guest
      * Desktop
        * selfie.jpg
      * Documents
      * Pictures


#### Introduction to HTML
HTML stands for **hypertext markup language**. It was originally created by academics to add formatting to their published papers in the early days of the web. We still use HTML to this day but a lot has changed since the first academic paper was published with what we could call HTML 1.0.

Thankfully we are now on `HTML 5.0`. You don't need to refer to it as such but 5.0 is the most recent version at the time of this writing. It is not up to us as web developers to add support for the versions of HTML, instead the popular web browsers have to make sure they support the latest standards. These include browsers such as Chrome, Safari, Edge and previously, Internet Explorer (more on that later).

#### HTML Boilerplate: Tags, Attributes & Elements

The following code is the HTML boilerplate. This will be used in every HTML document you create. It is composed of the `DOCTYPE`, `<html>`, `<head>`, `<title>`, and `<body>` tags. These tags will appear highlighted in your code editor. We'll learn more about tags shortly.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of your page</title>
  </head>
  <body>
    The content of your page
  </body>
</html>
```

You can view all available tags at [HTML Dog's HTML Reference ](http://htmldog.com/references/html/tags/).

#### HTML Comments

As you write HTML, you can add comments in the code for yourself. It is important to note that if you publish a website with comments in the HTML, they are publicly available for others to read so be sure not to include any passwords, other sensitive information or anything you wouldn't want others to see.

Comments start with `<!--` and end with `-->`. You will notice that your code editor is also going to highlight them differently than the rest of your HTML code.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of your page</title>
  </head>
  <body>
    <!-- This is a comment, it can only be seen if you select "View Source" in your browser -->
    The content of your page
  </body>
</html>
````

#### Basic Tags
HTML has a lot of different tags. We will cover the most common ones here but you can also see a full list of them at [W3Schools](http://www.w3schools.com/tags/).

#### Paragraph <p>

The most basic tag is the paragraph `<p>` tag. You guessed it! It lets us create paragraphs in our document. This tag requires that you open it with `<p>` and close it with `</p>` at the end of the paragraph.

```html
<p>A paragraph of text can be displayed between these tags</p>
```

#### Headline Tags
Headline tags include `<h1>`, `<h2>`, `<h3>`, `<h4>` and `<h5>`. These are used for headlines with `h1` being the largest and `h5` being the smallest. Headline tags also require that you end the headline with the corresponding ending tag, as you will see in the example below.

```html
<h1>Largest headline</h1>
<h2>Second largest headline</h2>
<h3>Third largest headline</h3>
<h4>Fourth largest headline</h4>
<h5>Smallest headline</h5>
````

#### Line Break <br>

Adds a line break in the middle of your content. This tag **does not** have an ending tag. It only consists of `<br>`.

```html
<p>We can add a line break in the middle of a paragraphy by adding <br > into it and it will insert a break in the paragraph.</p>
```

#### Emphasis & Formatting
You can use `<strong>` or `<b>` tags to make text bold and `<i>` to make text italicized. There will be better ways to do this later but for now, you can use these to add emphasis to your content.

```html
<p>This is some <b>bold</b> text next to some <i>italicized</i> text inside of a paragraph.</p>
```  

<p>This is some <b>bold</b> text next to some <i>italicized</i> text inside of a paragraph.</p>

#### Adding Images to Your Document

The `<img>` tag allows you to define an image that will show up in your document. **This tag does not have a closing tag**. You will notice that some tags do not close with a tag that contains a `/`. You will have to memorize which ones do not have this ending tag.  This tag supports gif, jpg and png images across all browsers.

```html
<img src = "link_to_image_of_delorean.gif" >
```
<img src = "./delorean.gif" >

#### Links

```html
<p>Check out this <a href = "http://colinloretz.com">new blog</a> I started. This code will make the words "new blog" into a link to http://colinloretz.com.</p>
```

<p>Check out this <a href = "http://colinloretz.com">new blog</a> I started. This code will make the words "new blog" into a link to http://colinloretz.com.</p>

#### Lists
Lists are extremely important in displaying lists of content and will also be extremely important for building more complex websites in the future.

```html
<!-- "Unordered Lists" will display bullets by default -->
<ul>
  <li>List Item 1</li>
  <li>List Item 1</li>
</ul>

<!-- "Ordered Lists" will display the list with numbers by default -->
<ol>
  <li>List Item 1</li>
  <li>List Item 1</li>
</ol>
```


Now that we have a good sense of how HTML works, we can add some more advanced HTML elements to display content and allow users to enter data into forms.


#### Tables
```html
<table>
  <tr> <!-- Row 1 -->
    <td>r1 c1</td> <!-- Row 1 Column 1 -->
    <td>r1 c2</td> <!-- Row 1 Column 2 -->
    <td>r1 c3</td> <!-- Row 1 Column 3 -->
  </tr>
  <tr> <!-- Row 2 -->
    <td>r1 c1</td> <!-- Row 2 Column 1 -->
    <td>r1 c2</td> <!-- Row 2 Column 2 -->
    <td>r1 c3</td> <!-- Row 2 Column 3 -->
  </tr>
</table>
```

```html
<table>
  <tr>
    <th>Header Col 1</th> <!-- Header Row Column 1 -->
    <th>Header Col 2</th> <!-- Header Row Column 2 -->
    <th>Header Col 3</th> <!-- Header Row Column 3 -->
  </tr>
  <tr> <!-- Row 1 -->
    <td>r1 c1</td> <!-- Row 1 Column 1 -->
    <td>r1 c2</td> <!-- Row 1 Column 2 -->
    <td>r1 c3</td> <!-- Row 1 Column 3 -->
  </tr>
  <tr> <!-- Row 2 -->
    <td>r1 c1</td> <!-- Row 2 Column 1 -->
    <td>r1 c2</td> <!-- Row 2 Column 2 -->
    <td>r1 c3</td> <!-- Row 2 Column 3 -->
  </tr>
</table>
```

#### Forms
```html
<form>
  <input type = "text" placeholder = "Your name here" name = "fullname" >
  <input type = "password" name = "password">
  <textarea name = "biography"></textarea>
  <submit text = "Submit" >
</form>
```

#### Advanced Forms: Dropdowns, Checkboxes and Radio Buttons
```html
<form>
  <select>
    <option value = "US">United States</option>
    <option value = "CA">Canada</option>
    <option value = "UK">United Kingdom</option>
  </select>
  <input type = "checkbox"> I agree to the terms
</form>
```

### Table Exercise: Country Tables
Take the provided country data and put it into a table.

### Form Exercise: E-Commerce Checkout
Create a form with labels that allows us to enter our name, email address, shipping notes and shipping address.
