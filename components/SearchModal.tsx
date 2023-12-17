import { ModalFooter, Modal, ModalContent, ModalBody, Button } from '@nextui-org/react'
import React from 'react'

const SearchModal = () => {

    return (
        <>
            {/* <div className="flex flex-wrap gap-3">

                <Button onPress={() => { }}>Open</Button>

            </div> */}
            <Modal
            // size='2xl'
            // isOpen={isOpen}
            // onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>

                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>

                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchModal