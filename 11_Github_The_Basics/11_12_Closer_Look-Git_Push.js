// create a new repo called push-me 

// copy the link of that repo 

// make sure that u r in such a local repo where git is not 
// initialized

// and run the command ,

// ==> git init 

// ==> touch candy.txt 
// git add and commit the file 

// now add the remote which u copied when u created the repo 

// ==> git remote add origin <url>

// now if u run the command ==> git push origin master , it pushes 
// up ur master branch, up to github. 
// But its improtent to understand that this will create a master branch 
// on Github THE VERY FIRST TIME! 

// There is no branch on GitHub at the moment and there is a branch called 
// Master Locally, 
// So its going to created a branch called master, and then u have ur local 
// master branch, and they are connected. 
// and it will also be indicated in the git bash BY: master -> master 

// but there is a stintion between the branch which u have locally and to 
// the brach which u have on github 


// MANY TIMES WE PUSH MASTER branch of our LOCAL setup to the MASTER BRACH OF 
// GITHUB 

// BUT ITS NOT NESSESORY ALWAYS. 


// ==> git push origin master  

// now candy file will be added to master branch. 


// now if u made changes in the master brach again, 

// ==> touch flowers.txt 

// add and commit the file 

// now if u run the command agiain 

// ==> git push origin master  

// IT WILL NOT CREATE A SEAPERATE MASTER BRANCH AGAIN, BUT IT WILL 
// PUSH IT THE MASTER BRANCH WHICH ALREADY EXISTED. 


// U CAN PUSH TWO DIFFERENT BRANCHES: 

// Note: 
// While we often want to push a local branch p to a remote branch 
// of the same name, we dot have to, 

// To push ur local branch dog, up to a remote branch of different name 
// (say cat) u have to run the command

// ==> git push <remote> <local-branch>:<remote-branch>
// Ex: 
// ==> git push origin cat:dog 


// Ex: 
// Imagine that now u r on the master branch, 

// ==> git switch -c cats (create a cats brach)

// ==> touh cats.txt 

// ==> git add . 

// ==> git commit -m "creat cats file"

// Now u r on the cats branch in ur local machine, and u want to push the 
// code to the master branch in ur github repo 
// so instead of typing ==> git push origin , 
// u will run the command: 

// ==> git push origin cats:master 
     
// u can see (cats -> master) after nunning the above command 

// now the cats file will be pushed to the master branch. 