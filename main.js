var _a;
var profileinput = document.getElementById("profilePicture");
if (profileinput) {
    var profilePictureFile = (_a = profileinput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    var resumeOutput = "\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class= \"profilePicture\">") : "", "\n    \n    ");
}
