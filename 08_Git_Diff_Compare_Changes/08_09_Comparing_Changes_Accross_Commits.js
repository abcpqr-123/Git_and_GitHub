
// Comparing Commits: 
// To compare two commits, provide git diff with the commit hashes 
// of the commits in question.

// ==> git diff commit1..commit2
// Ex: ==> git diff 47sjd78..847jk8 

            // or 

// u can also add a space between to hashes insted of two DOMStringList(..)

// Ex: ==> git diff 47sjd78 847jk8 



// so imagine that u wnat see the dffierence between commit1 and commmit2 

// hit: ==> git log --oneline 

// u will be able to see the list of all commits 
// copy the commit hash of any two commits 

// Ex: imagine that they are 47sjd78 and 847jk8

// and hit the command 

// ==> git diff 47sjd78..847jk8 in the git bash.