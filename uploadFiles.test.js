const proxyquire = require("proxyquire");
const { stub } = require("sinon");
const { expect, assert, AssertionError } = require("chai");

const { uploadFile } = require("./upload");

describe("uploadFile", async () => {
    const promises = await uploadFile();

    it("Should return an array.", () => {
        expect(promises).to.be.an("array");
    });

    it("Should return an array of promise", () => {
        expect(promises).to.deep.include({ id: 1, path: "image/test1.png", err: "Rejected" });
        expect(promises).to.deep.include({ id: 2, path: "image/test2.png", url: "www.s3.com/2" });
    });
});
