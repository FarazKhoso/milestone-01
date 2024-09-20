// PROFILE SECTION

const profileinput = document.getElementById("profilePicture") as HTMLInputElement
if(profileinput){
    
    const profilePictureFile = profileinput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    const resumeOutput = `
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class= "profilePicture">` : "" }

    `
    
}
