export default class InfoPage {
    constructor(page) {
        this.page = page;
        this.port = 5173;
    }

    async open() {
        await this.page.goto(`http://localhost:${this.port}`);
    }

    async fillFullName(fullName) {
        await this.page.locator("#fullName").fill(fullName);
    }

    async fillEmailAddress(emailAddress) {
        await this.page.locator("#emailAddress").fill(emailAddress);
    }

    async fillPhoneNumber(phoneNumber) {
        await this.page.locator("#phoneNumber").fill(phoneNumber);
    }

    async isNextStepEnabled() {
        const elem = await this.page.locator("#nextStep");
        return elem.isEnabled();
    }
}