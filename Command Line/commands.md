# Commands in Bash

This documentation for the commands for Bash is upside down, with the more simple ones at the bottom and the more complex ant the top. 


## `sed` command
The `sed` command stands for 'stream editor', it accepts the standard input and modifies it based on an expression, before displaying it as output data.
It is similar to 'find and replace'.

For example
```
sed 's/snow/rain/' forests.txt 
```

1. `s` stands for 'substitution'
2. `snow` represents the search string, or the text to find
3. `rain` representings the replacement string, or the text to add in place.

So then, `sed` searches the 'forests.txt' file for the word 'snow' and replaces it with 'rain'.

This command in the example will not actually update the file. To do that we need to add an option.
`-i` will mean that the file will be overwritten.


## `grep` command
`grep` stands for global regular expression print. It is used for searching files ffor lines that match a pattern and then returns the results.
```
$ grep America continents.txt 
```
The following command matches "America in continents.txt .

#### options
`-i` enables the command to be case insensitive. So to use on the same command above we can type.
```
$ grep -i America continents.txt
```

`-R` searches all files in a directory and outputs filenames and lines containing matched results. The `-R` stands for recursive.

`-Rl` searches all the files in a directory and outputs only filenames with matched results. `l` stands for files with matched. 


## `uniq` command
The `uniq` stands for unique, and filters out adjacent, duplicate lines in a file. 

```
$ sort deserts.txt | uniq > uniq-deserts.txt 
```


## `sort` command
the `sort` command takes the standard input and orders it alphabetically for the standard output.
```
$ cat glaciers.txt | sort > sorted-glaciers.txt 
```

Here the command takes the output from the `cat` on the file glaciers.txt and sends it to the `sort` command. The output of this is directed to the file `sorted-glaciers.txt`


## | Pipe command
the command `|` takes the standard output of the command on the left and pipes it as standard input to the command on the right. 

For example
```
$ cat volcanoes.txt | wc | cat > islands.txt 
```

The output from the `cat` of the 'volcanoes.txt', that is passed to the `wc` command. The output of the `wc` is then passed through the pipeline to `cat > islands.txt`


#### Backward Redirect
the backward redirect `<`  takes the input from the file on the right hand side and inputs it into the program on the left.

For example 
```
cat < lakes.txt 
```
This will send the input 'lakes.txt' input to cat command, effectively identical to `cat lakes.txt`


#### Double Forward Redirect
So the single redirect that we just used (`>`), is good to overwrite the information that we were writting to files. But we can also append the file instead using a double redirect. 

For example
```
$ cat deserts.txt >> forests.txt
```
Instead the contents of deserts.txt will be appended to the forests.txt file

####  Single Forward Redirect
the `>` command redirects the standard output to a file. We can again check if this works usign the `cat` command.

We can also do this with other commands.
```
$ cat deserts.txt > forests.txt
```
Where the output from the cat command will be written into the forests.txt file.

## Redirect
What is a redirection?
```
$ echo "Hello" > hello.txt
```

## `cat` command
To view the contents of an individual file in our terminal, we can use the `cat` command. 

For example
```
cat action/superman.txt
```
This will list out all the contents of the file.

## `cp` command
the `cp` command copies files or directories. We can also copy the contents of a source file into a destrination file
```
cp source.txt destination.txt
```

to copy a file to a destination directory
```
cp source.txt destination/
```

To copy multiple files into a directory with `cp` we can add more arguments to the `cp` to it, with the last argument being the output location
```
cp file1.txt file2.txt my_directory/ 
```

## Wildcards
We can use special characters like `*` to select groups of files.

For example
```
cp * my_directory/
```

we can also select all the files in a working directory and copy all the file types somewhere else

For example, we can select all the files that start with 's' and have the file extention '.txt' and paste into an imaginary direction '/temp'
```
cp s*.txt temp/
```


## `mv` command
To move a file into a directory, we can use the `mv` with the source file as the first argument and the destrination directory as the second arugment.
```
mv my_file.txt my_directory/
```

We can use this command also to rename the file. We can do the following
```
mv file_origin.txt file_renamed.txt
```

## `rm` command
to delete files and directories, we can use the command `rm`.  We can also add an option modifier that changes how the command behaves.
```
rm -r
```
This will recusively delete all the contents.


#### Combining Options
Like the commands shown above, we can use them all together, in `ls -alt`

`ls -alt` lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.

You can read more about access rights here,
https://www.linuxfoundation.org/blog/classic-sysadmin-understanding-linux-file-permissions/


## `ls` command
`ls -a` Lists all the contents, including hidden files and directories
`ls -l` lists all the contents of a directory in long format, as well as the file permissions
`ls -t` orders files and directories by the time they were last modified