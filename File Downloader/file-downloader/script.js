const fileInput = document.getElementById("input");
const downloadButton = document.getElementById("btn");

const download = () => {
  downloadButton.innerText = "Downloading...";
  setTimeout(getFile, 500);
};

//fetch file function
const getFile = async () => {
  try {
    //getting file
    let result = await fetch(fileInput.value);
    //setting result as blob
    let file = await result.blob();
    //creating temporary url of passed object
    let tempUrl = URL.createObjectURL(file);
    //creating dynamic anchor tag
    let anchorTag = document.createElement("a");
    let date = new Date();
    //creating current date and current time as file name
    let fileName = date.getDate() + date.getTime();

    //set temp url to anchor tag href attribute
    anchorTag.href = tempUrl;
    //set file name to downloaded file
    anchorTag.download = fileName;
    //adding anchor tag to body
    document.body.appendChild(anchorTag);
    //click and remove anchor tag
    anchorTag.click();
    anchorTag.remove();
    //removing temp url form document
    URL.revokeObjectURL(tempUrl);
    downloadButton.innerText = "Download File";
  } catch (error) {
    alert("Something went wrong!");
    console.log(error);
    downloadButton.innerText = "Download File";
  }
};
