const uploadFile = async () => {
    const files = [
        {
            id: 1,
            path: "image/test1.png",
        },
        {
            id: 2,
            path: "image/test2.png",
        },
    ];

    //Upload each file in parallel, set the url as a property
    //If 1 fails to upload, we dont want to stop them all

    //Code goes here

    const promises = await files.map((item) => {
        return upload(item)
            .then((url) => {
                item.url = url;
            })
            .catch((err) => {
                item.err = err;
            });
    });

    await Promise.all(promises).catch((err) => {
        return err;
    });

    return files;
};

//Return the url after uploading
function upload(file) {
    return new Promise((resolve, reject) => setTimeout(file.id % 2 ? reject("Rejected") : resolve("www.s3.com/" + file.id), 3000));
}

module.exports = {
    upload,
    uploadFile,
};
