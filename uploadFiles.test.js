const { expect } = require("chai");

const { uploadFile } = require("./upload");

describe("uploadFile", () => {
    it("Should return an array with a length of 2.", async () => {
        const promises1 = await uploadFile();
        expect(promises1).to.be.an("array");
        expect(promises1).to.have.length(2);
    });

    it("Should return an Array that includes file 1 with err property.", async () => {
        const promises2 = await uploadFile();
        expect(promises2).to.deep.include({ id: 1, path: "image/test1.png", err: "Rejected" });
    });

    it("Should return an Array that includes file 2 with url property.", async () => {
        const promises3 = await uploadFile();
        expect(promises3).to.deep.include({ id: 2, path: "image/test2.png", url: "www.s3.com/2" });
    });
});
