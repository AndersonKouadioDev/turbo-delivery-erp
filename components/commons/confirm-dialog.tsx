import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogFooter
} from "@/components/ui/alert-dialog";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";


interface Props {
    isOpen?: boolean,
    message?: string,
    handleConfirm?: () => void,
    handleCancel: () => void,
    setIsOpen?: (isOpen: boolean) => void,

}

export const ConfirmDialog = (props: Props) => (
    // <AlertDialog open={props.isOpen} onOpenChange={() => props.setIsOpen && props.setIsOpen(!props.isOpen)}>
    //     <AlertDialogContent className="w-[">
    //         <AlertDialogHeader>
    //             <AlertDialogTitle>Confirmation ?</AlertDialogTitle>
    //             <AlertDialogDescription>
    // {
    //     props.message ? props.message : "Etes-vous sûr de vouloir faire cette action ?"
    // }
    //             </AlertDialogDescription>
    //         </AlertDialogHeader>
    //         <AlertDialogFooter>
    //             <AlertDialogCancel onClick={props.handleCancel}>Non</AlertDialogCancel>
    //             <AlertDialogAction onClick={props.handleConfirm}>Oui</AlertDialogAction>
    //         </AlertDialogFooter>
    //     </AlertDialogContent>
    // </AlertDialog>
    <Modal isOpen={props.isOpen} size={"sm"} onClose={() => props.setIsOpen && props.setIsOpen(!props.isOpen)}>
        <ModalContent>
            <>
                <ModalHeader className="text-sm">Confirmation ?</ModalHeader>
                <ModalBody>
                    {
                        props.message ? props.message : "Etes-vous sûr de vouloir faire cette action ?"
                    }
                </ModalBody>
                <ModalFooter>
                    <Button size='sm' onPress={props.handleCancel}>Non</Button>
                    <Button color="danger" size='sm' onPress={props.handleConfirm}>Oui</Button>
                </ModalFooter>
            </>
        </ModalContent>
    </Modal>
)