"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { validateStartJourney } from "@/app/actions/journey/action";
import { toast } from 'react-hot-toast';
import { useEffect, useState } from "react";
import JourneyFailModal from "../successModal/JourneyFailModal";


function Submit() {

    const { pending } = useFormStatus();

    return (
        <button type="submit" className={pending ? "btn global-white-btn managedDisabled" : "btn global-white-btn"}> {
            pending ?
                <><i className="fa fa-circle-notch rotating-spinner"></i></>
                :
                `START`
        }
        </button>
    )
}

const ValidateJourney = () => {

    const { push, refresh } = useRouter();

    const [isError, setIsError] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleForm = async () => {
        try {
            const response = await validateStartJourney();

            if (response.status === 201) {
                push('/dashboard/journey/submitJourney');
                setIsPressed(true);
                return;
            } else if (response.status === 101) {
                toast.error("Please complete your pending product!")
                push('/dashboard/history');
                setIsPressed(true);
                return;
            } else {
                setIsError(true);
                setIsPressed(false);
                return toast.error(response.message);
            }

        } catch (error) {
            setIsError(true);
            setIsPressed(false);
            console.log(error)
        }
    }

    useEffect(() => {
        refresh();
    }, []);
    return (
        <>
            {
                isError
                    ?
                    <JourneyFailModal setIsModal={setIsError} />
                    :
                    <></>
            }
            <form action={handleForm} translate="no">
                {
                    isPressed
                        ?
                        <div className="isPressedValidation">
                            <p>Processing Please Wait <i className="fa fa-circle-notch rotating-spinner"></i></p>
                        </div>
                        :
                        <Submit />
                }
            </form>
        </>
    )
}

export default ValidateJourney