// it can be done in two simple steps: 

// * switch to the branch
// * Merge some ohter branch in

// ==> git switch <master>
// ==> git merge  <the name of the branch u want to merge with master> 

//     imagine that there is master branch 

//     then u created a new branch called newbrach 

//     u made changes in the newbrach and u want to merge it the master 

//     to do that: 
//     switch to the master branch 
//     ==> git switch master 

//     merge the newbranch 
//     ==>  git merge newbrach

// now if u hit git log from the master branch then u will see the commits 
// from the newbranch also 

// so this way u can merge successfully

// This merge method is only useful only when there are no confilicts. this type 
// of merge is called as fiast forward merge 