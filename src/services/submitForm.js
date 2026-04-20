import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const submitForm = async ({ ...props }) => {
    if (props.role === "smme") {
        let projectType = (props.otherValue) ? props.otherValue : props.projectType;
        console.log(props)
        try {
            await addDoc(collection(db, "submissions"), {
                role: props.role,
                name: props.name || "",
                contact: props.contact || "",
                email: props.email || "",
                projectType: projectType || "",
                budget: "R" + props.budget || "",
                message: props.message || "",
                createdAt: serverTimestamp()
            });

        return {success: true};
    } catch (err) {
        return {success: false, err}
    }

    } else {
        let specilization = (props.otherValue) ? props.otherValue : props.specilization;
        try {
            await addDoc(collection(db, "submissions"), {
                role: props.role,
                name: props.name || "",
                institution: props.institution || "",
                program: props.program || "",
                specilization: specilization || "",
                contact: props.contact || "",
                email: props.email || "",
                message: props.message || "",
                createdAt: serverTimestamp()
            });
            
            return {success: true};
        } catch (err) {
            return {success: false, err}
        }
    }
};