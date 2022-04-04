
// Option 1: 
// Existing Repo:

// If u already have an existing repo locally that u want to get 
// on Github... 
// * Create a new repo on Github 
// * Connect ur local repo (add a remote)
// * Push up ur changes to github 






// Complete explination: 

// Create a git repository. 


// in the git bash, come to a folder, which u want,

// check ==> git status 
// and see weather git was intialized or not. 

// once its clear that its not a git repository, 

// ==> git init 

// now git will be intialized 

// now create files if u  want by commands: 

// ==> touch file1.txt file2.txt

// add and commit the files 
// ==> git add . 
// ==> git commit -m "added empty files"

// now to push copy the URL of the git repository 

// ==> git remote add origin <past the URL>

// ==> git push origin master 

// so this will push the all files and fiolders to master. 


// // push the code form the local branch to master branch, 
// // which does not have master branch locally --> more detais 11_11 OR #101 

// Imagine that now u r on the master branch, 

// ==> git switch -c cats 

// ==> touh cats.txt 

// ==> git add . 

// ==> git commit -m "creat cats file"

// Now u r on the cats branch in ur local machine, and u want to push the 
// code to the master branch in ur github repo 
// so instead of typing ==> git push origin , 
// u will run the command: 

// ==> git push origin cats:master 

// now the cats file will be pushed to the master branch. 





//----------------------------------------------------------


// Option 2: 
// Start From Scratch 

// If u have not begun work on ur local repo, u can...
// * Create a brand ne4w repo on github 
// * Clone it down tgo ur machine 
// * Do some work locally 
// * Push up ur changes to Github 



// create a new repo 

// cd in to the repo where u want to clone, 

// copy the url of the git hub project 

// and hit 

// ==> git clone (url u copied)

// now git will create a new direcotry inside ur current directory 

// check for that directory by runnig the command 

// ==> ls 

// cd into init 

// if u hit git status u will know that its a git repo 

// it will also have pre-configured remote called origin 

// u can always check for that by 

// ==> git remote -v 

// nw u can create files 
// ==> touch dogs.txt 

// edit the file using text editor 

// add and commit the file. 

// after addintg all the file now u can push it to Github 

// ==> git push origin master

// if u now go and refresh the github repo u will find the file u 
// added to the github. in this case u will see dog.txt file. 
