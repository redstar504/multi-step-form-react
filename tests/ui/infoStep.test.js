import {afterAll, beforeAll, describe, test} from "vitest";
import {preview} from "vite";
import InfoPage from "../pages/InfoPage.js";
import {chromium, expect} from "../runner.js";

const PORT = 5173;
const FULL_NAME = "Benji Simon";
const EMAIL_ADDRESS = "benji@example.com";
const PHONE_NUMBER = "5554443232";

describe("infoStep", async () => {
    let server;
    let browser;
    let page;

    beforeAll(async () => {
        server = await preview({preview: {port: PORT}});
        browser = await chromium.launch({headless: false});
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
        await new Promise((resolve, reject) => {
            server.httpServer.close(error => error ? reject(error) : resolve());
        });
    });

    test("next step should be enabled after filling info", async () => {
        const infoPage = new InfoPage(page);
        await infoPage.open();
        await expect(await infoPage.isNextStepEnabled()).toBeFalsy();
        await infoPage.fillFullName(FULL_NAME);
        await infoPage.fillEmailAddress(EMAIL_ADDRESS);
        await infoPage.fillPhoneNumber(PHONE_NUMBER);
        await expect(await infoPage.isNextStepEnabled()).toBeTruthy();
    }, 60_000);
});
