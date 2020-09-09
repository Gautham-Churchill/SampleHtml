const uploadedTheVideo = (videoStatus) => {
    return new Promise((resolve, reject) => {
        // console.log("Checking status");
        if(videoStatus) {
            resolve({
                name: "Mummy",
                timing: 120
            });
        } else {
            reject({
              name: 'Waiting',
              message: 'Not Uploaded'
            })
        }
    }); 
}

const displayVideoStatusAndTime = (response) => {
    if(response !== undefined) {
        return "Movie Name: " + response.name + " Duration: " + response.timing + "mins";
    }
}

// Using then and catch for a Promise 
// uploadedTheVideo(false).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error.name + ' - ' + error.message);
// });

// Using async and await for a Promise
const checkVideoStatus = async () => {
    try {
        let response = await uploadedTheVideo(true);
        console.log("Uploaded");
        let displayDetails = await displayVideoStatusAndTime(response);
        console.log(displayDetails);
    } catch(error) {
        console.log(error.name + ' - ' + error.message);
    }
}
checkVideoStatus();
