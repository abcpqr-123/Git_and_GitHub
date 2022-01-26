// The -u option 

// The -u option allows us to set the upstream of the branch we're 
// pushing. U can think of this as a link connecting our local branch 
// to a branch  on github 

// Running 

// ==> git push -u origin master 

// sets the upstream of the local master branch so that it tracks the 
// master branch so that it tracks the master branch on the origin repo. 


// Ex: 
// Imagine that u r on the master branch 

// git switch -c dogs 


// and now hit run the commad 

// ==> git push origin dogs

//  this will create a new branch in the github repo 

//  and now if u add a file called dogs.txt 

//  add that file and commit the change 

//  NORMALLY U HAVE TO DO: ==> git push origin dogs 

//  but u  CANNOT SAY ==> git push 

//  //---

//  but instead of ==> git push origin dogs  if u do 

//  ==> git push -u origin dogs , 

//  now git will take ur local dogs branch and push it up to the 
//  remote github Dogs branch, it uses the same name, amnd -u 
//  will make sure that git remembers that - Set the upstream for the dogs 
//  to origin dogs 


//  now if u make change, by adding moredogs.txt file or somithing like that 
//  and add that file and commit the changes, 

//  and if u just run the command 
//  ==> git push , 

//  and nothing else, 
//  but also it will pushes the file to the dogs branch in ur github repo. 





