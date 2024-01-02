import "../styles/addons.css";

export default function AddonsStep() {
    return (
        <section className="card">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience. </p>
            <ul id="planAddons">
                <li>
                    <input type="checkbox" id="onlineServiceOffer" checked/>
                    <label htmlFor="onlineServiceOffer">
                        <i className="addonControl"></i>
                        <span className="offer">
                        Online service
                        <small>Access to multiplayer games</small>
                    </span>
                        <small className="fee">+$1/mo</small>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="largerStorageOffer"/>
                    <label htmlFor="largerStorageOffer">
                        <i className="addonControl"></i>
                        <span className="offer">
                        Larger Storage
                        <small>Extra 1TB of cloud storage</small>
                    </span>
                        <small className="fee">+$2/mo</small>
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="customProfileOffer"/>
                    <label htmlFor="customProfileOffer">
                        <i className="addonControl"></i>
                        <span className="offer">
                        Customizable profile
                        <small>Custom theme on your profile</small>
                    </span>
                        <small className="fee">+$2/mo</small>
                    </label>
                </li>
            </ul>
        </section>
    );
}