
# Bash Command Line Cheatsheet
| Command | Description |
|---------|-------------|
| `pwd`     | Print the current working directory |
| `ls`      | Show the files and folders in the current working directory |
| `cd <folder>` | Change the directory to the target folder |
| `cd ..` | Change the directory by moving up a level to the parent directory |
| `mv <current_file> <destination or new_name>`     | Moves a file or renames a file. This one is a little more involved. If you provide an existing filename and a folder destination, the file will be moved to that destination. If you provide an exisitng filename and a new filename, the file will be renamed. You can also indicate a new destination and filename to move and rename the file at the same time. |
| `cp <current_file> <new_file>` | Creates a copy of the `<current_file>` with the `<new_file>` name. You can also define a folder and new filename to move the copy to a different destination. |
| `rm <filename>` | Remove (delete) the file - can't be undone! |
| `mkdir <foldername>` | Create a new directory in your current working directory |
| `rmdir <foldername>` | Deletes a directory but only if that directory is empty |
| `rm -rf <foldername>` | Deletes a folder even if it is NOT empty. WARNING! This will recursively delete all the folders and files contained in the folder/directory and cannot be undone. |
