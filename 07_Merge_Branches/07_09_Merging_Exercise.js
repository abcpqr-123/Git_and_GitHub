// FAST FORWARD MERGE 

// mkdir Merging-Exericse 
// cd Merging-Exercise 

// git status 
// git init 
 
// touch greetings.txt 
// git add greetings.txt 
// git commit -m "add greetings.txt"

// git swith -c spanish 
       // edit the file
// git commit -a -m "add spanish greeting"

// git switch master 
// git merge spanish 

// FAST FORWARD MERGE COMPLETE 




//---------------------------------------------------






// MERGE COMMITS (NO CONFLICTS)



// mkdir Merging-Exericse 
// cd Merging-Exercise 

// git status 
// git init 
 
// touch greetings.txt 
// git add greetings.txt 
// git commit -m "add greetings.txt"

// git swith -c spanish 
      // edit the file 
// git commit -a -m "add spanish greeting"

// git switch master 
// git merge spanish 

//---       ------       ------ 

// git switch -c french 
//     edit the file 
// git status 
// git commit -a -m "add french greeting"


// git switch master 
//    create a farewells.txt file and add information in it 
// git commit -a -m "add farewells.txt"

// git merge french 
//      file will be onpend in the default text editor 
//      if u want then edit else leave it as it is and close the file 
//      (u must have to close the file)

// MERGING WILL GET COMPLETED, to verify it: 

// git log 





//---------------------------------------------------------





// CONFLICTS


// mkdir Merging-Exericse 
// cd Merging-Exercise 

// git status 
// git init 
 
// touch greetings.txt 
// git add greetings.txt 
// git commit -m "add greetings.txt"

// git swith -c spanish 
      // edit the file 
// git commit -a -m "add spanish greeting"

// git switch master 
// git merge spanish 

// git switch -c french 
//     edit the file 
// git status 
// git commit -a -m "add french greeting"


// git switch master 
//    create a farewells.txt file and add information in it 
// git commit -a -m "add farewels.txt"

// git merge french 
//      file will be onpend in the default text editor 
//      if u want then edit else leave it as it is and close the file 
//      (u must have to close the file)

// MERGING WILL GET COMPLETED, to verify it: 

// git log 

//---       ------       ------ 

// git switch -c japaese 
//       edit the greetings file 
// git status
// git commit -a -m "added japaese greeting file"


// git switch master 
//      edit the greetings file 
// git commit -a -m "add hello"

// git merge japaese

// CONFLICT WILL ARAISE 

//     The file will appear in the default text editor 
//     edit that file in the way u want  
//     and close the file 

// HERE THE ABOVE STEPS ARE NOT ENOUGH TO MERGE THE BRANCHES 
// if u type ==> git status, 
// u will get: 
// YOU HAVE UNMERGED PATHS 

// to fix that:
// if u type ==> git log , 
// u cannot see the merge commits yet. so now: 

// // git add greetings.txt 
// // git commit -m "resolve conflicts"

// now if u hit ==> git log , 
// u can see the merge commit message. 