const proxyquire = require("proxyquire");
const { stub } = require("sinon");
const { expect, assert, AssertionError } = require("chai");

const { upload } = require("./upload");

describe("upload", () => {
    it("Should reject file 1 with string 'Rejected'.", async () => {
        try {
            const promise1 = await upload({
                id: 1,
                path: "image/test1.png",
            });
        } catch (error) {
            expect(error).to.equal("Rejected");
        }
    });

    it("Should return file 2 with string 'www.s3.com/2'.", async () => {
        try {
            const promise2 = await upload({
                id: 2,
                path: "image/test2.png",
            });

            expect(promise2).to.equal("www.s3.com/2");
        } catch (error) {
            expect(error).to.equal("Rejected");
        }
    });
});
