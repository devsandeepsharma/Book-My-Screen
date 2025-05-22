import { useState } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Modal from "../ui/Modal";
import Button from "../ui/Button";

import { uiActions } from "../../store/uiSlice";
import { TicketService } from "../../services/Database";
import sendEmail from "../../services/Email";

const BookTicket = ({ showDetails }) => {
    
    const dispatch = useDispatch();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const bookingSchema = Yup.object({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const closeModal = () => {
        dispatch(uiActions.closeModal());
    }
    
    const handleSubmit = async (values, actions) => {
        setError("");
        const ticketData = {
            ...values,
            movieName: showDetails.movieName,
            date: showDetails.date,
            time: showDetails.time
        }
        try {
            await TicketService.create(ticketData);
            await sendEmail({
                email: values.email, 
                userName: values.name, 
                movieName: showDetails.movieName, 
                showtime: `${showDetails.date} at ${showDetails.time}`
            });
            setSuccess(true);
        } catch (error) {
            console.log(error)
            setError("Failed to book ticket. Please try again.");
        } finally {
            actions.setSubmitting(false);
        }
    }

    return (
        <Modal>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Book Ticket
            </h1>
            <p className="text-sm text-gray-700 mt-2 mb-4">
                Movie: <strong>{showDetails?.movieName}</strong><br />
                Showtime: <strong>{showDetails?.date} at {showDetails?.time}</strong>
            </p>
            <Formik
                initialValues={{
                    name: "",
                    email: ""
                }}
                validationSchema={bookingSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-3 mt-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-900">Name</label>
                            <Field 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                name="name" 
                                type="text" 
                                placeholder="Enter your name"
                            />
                            <p className="text-xs font-medium text-red-600">
                                <ErrorMessage name="name" />
                                {error && error}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-900">Email</label>
                            <Field 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email"
                            />
                            <p className="text-xs font-medium text-red-600">
                                <ErrorMessage name="email" />
                                {error && error}
                            </p>
                        </div>
                        {
                            success && (
                                <p className="text-green-600 font-medium text-sm mb-2">
                                    Ticket booked successfully! Check your email for the ticket.
                                </p>)
                        }
                        <div className="flex gap-3 ml-auto">
                            <Button type="button" variant="outline" onClick={closeModal}>Close</Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {
                                    isSubmitting ? "Booking..." : "Book Now"
                                }
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}

export default BookTicket;