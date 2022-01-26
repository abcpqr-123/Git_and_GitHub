// Remote: 

// Before we can push anything up to Github, we need to tell Git 
// about our remote repository on Github. We need to setup a "desti9nation"
// to push up to. 

// In Git, we refer to these "destinations" as remotes. Each remote is 
// simply a URL where a hosted repository lives. 





// Viewing Remotes 

// To view any existing remotes for u repository, we can run
// ==> git remote 
// or 
// ==> git remote -v

// This just displays a list of remotes. If u have not added any 
// remotes yet, u wont see anything! 


// git remote -v 

//----------------------------


// Note : for every github repostitory which u cloned from github 
// there will be a name for that remote repository
// Ex: 
// if u ==> cd , into that cloned repository 
// and hit 
// ==> git remote 
// it will show: origin (origin is most comman name, u may see other names also)

// and if u hit 
// ==> git remote -v 
// u will see the name of the repository with url. 

// it will be useful to know aboout the updates, changes in codes, 
// and also useful to push up the commits if u r a collaborator. 

//-------------


// Origin: 

// Origin is a conventional Git remote name, but it is not 
// at all special. It is just a name for a URL 

// when we clone a Github repo the default remote name setup for us is called 
// origin. U can chnage it. Most people leave it.

//----------------------------


// Adding A new Remote:

// A remote is really two things: a URL and a label. 
// To add a bew remote, we need to provide both to Git.Git
// git remote add <name> <url>

// Ex: 
// Git remote add mygithuburl https://github.com/meh/repo.git 

// It means ur telling git now that anytime u use the name "mygithuburl", 
// I'm referring to this perticular Github repo URL 

// Ithis is not commanly used remote name! 

//---------------------------------------

// OTHER COMMADNDS: 

// They are not commanly used, but there are commands to rename 
// and delete remotes if needed 

// Renameing the remote        
// git remote rename <old> <new>

// DELETING THE REMOTE
// git remote remove <name>