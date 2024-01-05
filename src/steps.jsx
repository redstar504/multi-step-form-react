import InfoStep from "./steps/InfoStep.jsx";
import SelectPlanStep from "./steps/SelectPlanStep.jsx";
import AddonsStep from "./steps/AddonsStep.jsx";
import SummaryStep from "./steps/SummaryStep.jsx";

export default [
    {
        name: "Your Info",
        component: InfoStep,
        options: {
            prevStep: false,
        }
    },
    {
        name: "Select Plan",
        component: SelectPlanStep
    },
    {
        name: "Add-ons",
        component: AddonsStep
    },
    {
        name: "Summary",
        component: SummaryStep,
        options: {
            nextStepLabel: "Confirm",
        }
    }
];