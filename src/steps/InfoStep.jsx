export default function InfoStep() {
    return (
        <section className="card" id="personalInfoCard">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form id="personalInfo">
                <fieldset>
                    <label htmlFor="fullName" className="error">
                        Name
                        <strong>This field is required</strong>
                    </label>
                    <input name="fullName" id="fullName" className="textInput" placeholder="e.g. Stephen King"/><br/>
                    <label htmlFor="emailAddress">
                        Email Address
                    </label>
                    <input type="email" name="emailAddress" id="emailAddress" className="textInput"
                           placeholder="e.g. stephenking@lorem.com"/>
                    <label htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" className="textInput"
                           placeholder="e.g. 255-755-6585"/>
                </fieldset>
            </form>
        </section>
    );
}