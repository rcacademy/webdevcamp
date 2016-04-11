# Relative & Absolute Paths

### Absolute Paths
An absolute path has the full path defined. For a website this might look something like `http://yourwebsite.com/images/background.png`.

On your computer, you can also create paths that are absolutely defined from the root directory which is defined by `/`. An example project of `uberpizza` might have an absolute path of `/Users/yourusername/projects/uberpizza`. The same background png inside of this project might be defined with `/Users/yourusername/projects/uberpizza/images/background.png`.

Absolute paths can be useful but if you use them in your projects you will have to keep this in mind if you ever move the project on your system or restructure your project's directories. If you rename your `projects` folder to `myprojects`, all absolute paths using the old name will break potentially causing your images and stylesheets to not be included.


### Relative Paths
Relative paths are generally used more often and can be used to reference files or directories _relative to_ the file that is referencing those files. For example, if you have the following file structure:

>  projectfolder/
  │  
  ├── index.html  
  │  
  ├── css/  
  │   └── yourstyle.css  
  ├── js/  
  │  
  ├── images/  
  │   ├── avatar.jpg  
  │   └── background.png  

If you are using an `<img>` tag in `index.html` and want to include `avatar.jpg`, you would need to navigate into `images/` and select `avatar.jpg`. In this case, `images/` and `index.html` are siblings in the same directory.

```html
<img src = "images/avatar.jpg">
```

If you were wanting to define a background-image in `yourstyle.css`, you would have to navigate _up_ a directory, then navigate into `images/` and select `background.png`. In this case, we have to create a path to the background image that is _relative_ to the location of the stylesheet. You can navigate up a directory using `../`. If you were to do this twice, you'd move up two folders. In this example, we only need to go up one directory.

```css
body {
  background-image: url(../images/background.png);
}
```
