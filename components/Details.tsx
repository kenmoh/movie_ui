"use client";
// @ts-ignore
import { useFormState } from "react-dom";
import { addComment } from "@/app/utils/api";
import { Textarea } from "@nextui-org/input";
import {
    Button,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "@nextui-org/react";
import { toast } from "react-toastify";

type IdType = {
    id: string
}

const Details = ({ id }: IdType) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [state, formAction] = useFormState(addComment, null)
    console.log(state)

    const handleClose = async () => {

        try {
            if (state.type === 'error') {
                toast.error(state?.message, { position: 'top-right' })

            } else {
                onClose()
                toast.success(state?.message, { position: 'top-right' })
            }
        } catch (error) {
            // Handle form submission error
            toast.error(state?.message, { position: 'top-right' });

        }

    }

    return (
        <div>
            <Button
                onPress={() => onOpen()}
                className="bg-blue-900 hover:bg-blue-700 py-2 mb-4 px-5 rounded-md"
            >
                Add Review
            </Button>
            <Modal size="md" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => {
                        return (
                            <>
                                <form action={formAction}>
                                    <ModalHeader className="flex flex-col gap-1">
                                        Add Review
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input

                                            size="sm"
                                            placeholder="Enter your name"
                                            variant="bordered"
                                            isRequired
                                            name="movie_id"
                                            value={id}
                                            type="hidden"
                                            className="hidden" />
                                        <Input
                                            autoFocus
                                            size="sm"
                                            placeholder="Enter your name"
                                            variant="bordered"
                                            isRequired
                                            name="author" />
                                        {/* {state?.message && <span className="text-red-400 font-thin text-sm">{state.message}</span>} */}

                                        <Input
                                            size="sm"
                                            placeholder="Enter your rating"
                                            variant="bordered"
                                            isRequired
                                            name="rating"
                                            type="number"
                                            max={5}
                                            min={1}
                                            pattern="1-5" />
                                        <Textarea

                                            placeholder="Enter your comment"
                                            size="sm"
                                            variant="bordered"
                                            isRequired
                                            name="comment" />
                                        {/* {state?.message && <span className="text-red-400 font-thin text-sm">{state.message}</span>} */}

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" type="submit" onPress={handleClose}>
                                            Submit
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </>
                        );
                    }}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Details;
