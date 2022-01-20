// git switch - Another way of switching from one branch to another 

// Historically we used git checkout <branch name> to switch branches. 
// This still works 

// The checkout command does a million additional things, so the decission 
// was made to add a standalone switch commadnd which is much simpler 

// older docs still contain and use checkout rather then switch. Both now 
// work. 


// ==> git checkout <branch-name> 

// NOTE: 

// git create and switch shortcut --> to create a new brach and switch 
// to that branch in a single command 

//  ==> git switch -c <brach-name> 
//      Ex: 
//      git switch -c Surya 

//      SWitched to new branch 'Surya'

//------------------------------------------------

//  U CAN ALSO USE GIT CHECKOUT IN THE SAME WAY: 

// NOTE: ==> git checkout -b <brach-name> 

// git create and checkout shortcut --> to create a new brach and checkout 
// to that branch in a single command 

//  ==> git checkout -b <brach-name> 
//      Ex: 
//      git checkout -b Surya 

//      SWitched to new branch 'Surya'


//------------------------------------------------


// IF U WANT THEN U CAN ALSO CREATE AS MANY FILES AS U WANT IN A PERTICULAR 
// BRANCH, 
// GIT WILL ENSURE THAT IT THOSE FILES EXIST IN THE PERTICULAR BRANCH IN WHICH
// U HAVE CREATED THEM AND NOT IN ANY OTHER BRANCHES. 

