# Week 1 Day 1

###  Developer Culture & Resources 

#### Readings
1. [Teach Yourself Programming in 10 Years](http://norvig.com/21-days.html)
2. Tool map (Frontend, backend, languages, etc)
3. Frontend vs. backend
4. Buzzword Bingo

**[Programmers are herd animals](https://www.youtube.com/watch?v=lrf6xuFq1Ms)** by FunFunFunction (mpj)


# In Class

## Setting up your front-end development environment

#### Code editor
You will need to use a code editor to get started. We're going to be using [Atom](https://atom.io) right now but there are many options out there.
  
1. Download Atom.
2. For Mac users, unzip the download and move the Atom icon into your `Applications` folder.
  
####  



## Exercises

### Introduction to HTML
HTML stands for **hypertext markup language**. It was originally created by academics to add formatting to their published papers in the early days of the web. We still use HTML to this day but a lot has changed since the first academic paper was published with what we could call HTML 1.0.

Thankfully we are now on `HTML 5.0`. You don't need to refer to it as such but 5.0 is the most recent version at the time of this writing. It is not up to us as web developers to add support for the versions of HTML, instead the popular web browsers have to make sure they support the latest standards. These include browsers such as Chrome, Safari, Edge and previously, Internet Explorer (more on that later).

#### HTML Boilerplate

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
