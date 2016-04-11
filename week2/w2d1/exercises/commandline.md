# Command Line Exercise

The command line will become a very important tool in your developer toolbox. In addition to moving around on the file system it will also be used for saving versions of your code (with git) and using other developer tools.

Check out the [Bash Command Line Cheatsheet](../../../resources/bash.md) for help!

If you haven't already, please watch the tutorial for your computer: [Linux/Mac](https://www.youtube.com/watch?v=AfM11G2NYxg) or [Windows](https://www.youtube.com/watch?v=zBXe-IaNJps).

To practice with the command line, we're going to navigate and manipulate files on your computer.

1. Open Terminal (Mac) or Cygwin (Windows), we will refer to this as your command prompt from here on out.

2. When you first open your command prompt, you **should** be in your `home` directory but let's check.

3. We can check what directory we are in by typing `pwd` and hitting enter.  This stands for "print working directory" and you should see something like this: `/Users/yourusername`.

4. Now we can check what other files and folders are in this directory. Go ahead and enter `ls` and press enter. This will give you a list of all the folders and files in your current working directory.

5. Let's go ahead and create a new directory for storing our class projects. Type `mkdir projects` and hit enter. You can now type `ls` to see that there is now a folder called `projects` in your working directory.

6. Let's move into our newly created projects directory. Type `cd projects` to enter your new directory. Type `ls` and you should see an empty list as our new directory is empty. Type `pwd` and hit enter and you will see your new working directory is something similar to `/Users/yourusername/projects`.

7. Let's say that someone wants us to create the next big app: "Uber for Pizza". Let's create a new folder for our new project. Type `mkdir uberpizza` and hit enter. Let's `cd uberpizza` to enter that directory.

8. Let's go ahead and create three new folders for our project. Type `mkdir css images js` and this will create all three folders at once. Type `ls` and hit enter and you should now see your new folders.

9. You can use `touch index.html` to create a new and empty file with the name `index.html`. Type `ls` again and we should see our three folders and index.html.

10. Now let's check out a command that has been added to our command prompt thanks to the Atom editor we are using. You can enter `atom index.html` to open that file in Atom. The current working directory will show up in the Atom sidebar. You can also use `atom .` to open Atom in the current working directory.

11. TIP: If you are in the directory `/Users/yourusername/projects`, you can also use `atom uberpizza` to open our amazing Uber for Pizza project in Atom.

12. Let's practice creating and deleting new files. You can create another file using `touch deleteme.html`. Now `ls` to verify that it is there. Let's delete that file with `rm deleteme.html`.

13. Let's create a new folder called `temporary` with the command `mkdir temporary`. Type `ls` and hit enter to verify that it is there. Now we've created an empty folder so we can delete it with `rmdir temporary`. If we enter `ls`, you'll see it has been deleted.

14. Let's create a new folder called `deleteme` with the command `mkdir deleteme`. Enter `ls` to verify that it is there. Now let's change our working directory to enter that folder. `cd deleteme`. If we enter `ls`, we'll see this new directory is empty. Let's create a new file with `touch important.html`. Now our folder is not empty.

15. Let's `cd` up one directory with `cd ..`. Enter `pwd` to check what path you are in. You shoud be back in `/Users/username/projects/uberpizza`. Try to `rmdir deleteme`. You will see that you can't delete it because we put `important.html` into the `deleteme` folder and it is no longer empty.

16. To delete this folder requires a bit of force. We can add options to the `rm` command that will allow us to delete it. `rm` was already used to delete a file but we can also use it to delete many files and directories at once. Keep in mind, if you do this, you will not be able to get the files back. `rm -rf deleteme` will delete the files in the folder and the folder itself once its empty. This will delete as many files and folders that exist in the directory, no matter how many levels deep they go. The `-rf` are two options we pass in that stand for `recursive` and `force`.

17. Now we can use a shortcut to return back to our `home` directory. You can enter `cd ~` to go back to `/Users/yourusername`. Enter `pwd` to confirm that we are back in our home directory.
