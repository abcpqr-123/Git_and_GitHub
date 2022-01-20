
// Creating Branches: 
// Use ==> git branch <branch-name> 
// to make a new branch based upon the current HEAD 


// This just creates the branch, It does not switch u to the 
// branch(the head stays the same)


// VVV_IMP Note: u have to just type  ==> git branch   
// to see the list of all branch 

// Creating Branches: 
// Create NEW branch:   ==> git branch Beranch_Name    
   
// Imagine that u r working on the master branch 

// and u hit the commad 
// ==> git branch bugfix 

// this will create a new branch called bugfix. 

// but now 
// u have a new branch, u have not witched to it. U r still on the 
// master branch. 


// for Ex: 
// If u r on the master brach and hit ==> git log 
// git log
// commit bda9014011385a (HEAD -> master, oldies)

// Here new brach has got created but, HEAD is till pointing to the 
// master branch 




//--------------------------------------------------------------------





// // Switch :   ==> git switch Branch_Name 


// Switching Branches: 

// Once u have created a new branch, use git switch <brach-name> 
// to switch to it 


// Now, if u hit the command  ==> git switch oldies 
// and then if u hit ==> git log 
// git log
// commit 0fc5b79d7c (HEAD -> oldies, master)

// HEAD will be pointing to oldies

//   ------        -------          ---------

// Now if u make new commits to the oldies, 
// by editing the file in the text editor 

// after git add 
// and git commit -m, (now we are on the oldies branch)

// if u hit 
// git log, 


// git log: 
// commit 45479d19aed18cc6d3bbf555 (HEAD -> oldies)

// commit 85a35c4d2e0850340fc5b79d7c (master)

//     Add two ABBA songs

// commit 4cc275bdb7e1d0a28e36cd8390

//     add plylist header


// HEAD IS REFERING TO oldies 

// but we see that master has left behind 
// If u want u can switch to the master branch. 

// but when u switch to the master brach, u will not see the changes 
// u made in the text editor will not appear. 
// beacuse u made those changes in the oldies branch. 


// NOTE: 

// git create and switch shortcut --> to create a new brach and switch 
// to that branch in a single command 

//  ==> git switch -c <brach-name> 
//      Ex: 
//      git switch -c Surya 

//      SWitched to new branch 'Surya'





// IF U WANT THEN U CAN ALSO CREATE AS MANY FILES AS U WANT IN A PERTICULAR 
// BRANCH, 
// GIT WILL ENSURE THAT IT THOSE FILES EXIST IN THE PERTICULAR BRANCH IN WHICH
// U HAVE CREATED THEM AND NOT IN ANY OTHER BRANCHES. 
