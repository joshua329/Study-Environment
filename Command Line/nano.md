# Nano

## `env` variable
The `env` command stands for the 'environment', and returns a list of the environment variables for the current user. 

## PATH Environment Variable
The `PATH` environment variable stores a list of directories separated by a colon.

## HOME Environment Variable
the `HOME` variable is an environment variable that displays the path of the home directory `~`

```
echo $HOME
```


## PS1 Environment Variable
the environment variable `PS1` defines the makeup and style of the command prompt. 
```
export PS1=">> "
```

## Environment Variables
*Environment Variables* are varitables that can be used across commands and programs and hold information about the environent.

```
export USER="John Doe"
```

The following line sets the variable `USER` to a name 'Jane Doe'. `export` makes the variable to be available to all child sessions initiated from the session you are in.

To retrieve the value of `USER` we must use `$USER`

## Alias

The `alias` command allows us to create keyboard shortcuts, or aliases for commonly used commands.

Here `alias pd=pwd` creates the alias `pd` for the `pwd` command, whihc is then saved in the bash profile. The alias is available each time we open a new terminal session, and the output of `pd` will be the same as the `pwd` command.

```
source ~/.bash_profile
```
This file will make the alias `pd` available in the current session.

## Bash Profile
A bash profile is a file used to store environment settings for your terminal, and it's accessible by the name **~/.bash_profile**

When a session starts in nano, it loads the contents of the bash profile before executing the commands.
1. The `~` represents the user’s home directory.
2. The `.` indicates a hidden file.
3. The name `~/.bash_profile` is important, since this is how the command line recognizes the bash profile.