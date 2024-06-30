import * as yup from "yup";

export const formValidationSchema = yup.object({
    title: yup
        .string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters long"),
    description: yup.string().required("Description is required"),
    status: yup
        .string()
        .oneOf(["not-completed", "pending", "completed"], "Invalid status"),
});
