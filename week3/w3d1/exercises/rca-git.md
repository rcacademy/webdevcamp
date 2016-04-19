# Git Command Exercise

Using git effectively also requires you to have a good sense of the command line, especially being aware of what directory you are currently in. This exercise will help you improve both.

Check out the [Bash Command Line Cheatsheet](../../../resources/bash.md) and the [Git Command Cheatsheet](../../../resources/git-cheatsheet.pdf) for help!

### Let's do this!

To practice with the command line, we're going to navigate and manipulate files on your computer.

1. Open Terminal (Mac) or Git Shell (Windows), we will refer to this as your command prompt from here on out.

2. When you first open your command prompt, you **should** be in your `home` directory but let's check.

3. We can check what directory we are in by typing `pwd` and hitting enter.  This stands for "print working directory" and you should see something like this: `/Users/yourusername` for Mac and `/c/home/yourusername` for Windows.

4. Let's go into our main `projects` folder and create a new directory called **uberfortacos** and change directories into our new directory.

  `mkdir uberfortacos`  
  `cd uberfortacos`

  `!!! important !!!` If you were using Cygwin before, we can create a new projects folder in our home directory which is easier to find than the Cygwin home directory. This would ideally be something like `/c/home/yourusername/projects` for Windows folks.


5. Now let's start off our brand new project by tracking the files we will create with git.   

  `git init`

6. Let's create a new file called **tacos.html** and open it in Atom.

  `atom tacos.html`

7. Let's add our HTML boilerplate to this file and save it.

8. Create a **taco.css** stylesheet and link it in **tacos.html**.

9. Now in our command prompt, let's see what the status of our file tracking is with git.

  `git status`

  You will see we should have two files that are not yet being tracked.

10. Let's track all the current files in this folder.

  `git add .`

11. And check our status again.

  `git status`

  Now we should see that we have 2 files being tracked but we have yet to commit any changes.

12. Let's make our first commit for our exciting taco delivery startup! This will let you create your own message that will be viewable by yourself and your team in the future along with whatever changes took place in this commit. The `-m` flag stands for message and we pass it a message in quotations.

  `git commit -m "Added tacos.html and tacos.css - free the tacos"`

13. Now we can check our status again and we will see that there is nothing new to commit.

  `git status`

14. We can see all changes to our project by checking the git log.

  `git log`

15. Now let's make a change to our HTML's title tag. Set the title tag to equal "Free the Tacos!"

  `<title>Free the Tacos!</title>`

16. If we check our version control status again, it should have detected that we made a change to **tacos.html**.

17. We can use the diff command to see what the difference is.

  `git diff tacos.html`

  And we will now see what we've removed and what we've added in tacos.html.

18. Let's save our new title changes in a new commit. This commit has a flag of `-a` which allows us to add all the pending changes to this commit.

  `git commit -a -m "Updated the title tag with our mission statement"`

19. If we check the status one more time, we'll see the following message: "nothing to commit, working directory clean" - a great sign!

20. Let's check our log again to see both of our commit messages. Both of these were written by you but as you work with git in a team, you will eventually see other collaborators and team member's changes in the log.

  `git log`

21. Now the team at Uber for Tacos has a problem they would like to have solved. Half of the team believes the website's background color should be red. The other half belives it should be blue. Let's go ahead and setup a css style for the `body` element to have a `background-color: 'blue'` and commit your change with a message.

  ```css
  body {
    background-color: blue;
  }
  ```


22. Check your `git status`, we should be back to "nothing to commit, working directory clean" and if you open tacos.html, you should see a blue page.

23. Let's make a new version of the website for the folks who think we should use red but let's do it without losing our blue version. To do this, we can create a **branch**.

  `git branch redversion`

24. Hit enter and now we can run `git branch` to see a list of our branches. You should have `master` and `redversion`. Let's switch to our new `redversion` branch. You can switch branches with `checkout`.

  `git checkout redversion`

25. We are now in a branch (or an alternate universe) for our Uber for Tacos project. We can make changes here to our project without losing the original blue Taco website we have in the master branch. Let's set the CSS background-color in **taco.css** to red.

  ```css
    body {
      background-color: red;
    }
  ```

26. Let's go ahead and save that and commit our newest change.

  `git commit -a -m "Set background-color to experimental red color"`

27. Open the tacos.html file in your browser to see that we in fact have a red page.

28. You should be back to a clean working directory so let's switch branches again and go back to our `master` branch.

  `git checkout master`

29. Open tacos.html in your browser and if it is still red, refresh the page. It should now have a blue background.

30. We're going to call it a day for the Uber for Tacos project but we will look at merging branches and pushing this code to a remote in the next exercise.
