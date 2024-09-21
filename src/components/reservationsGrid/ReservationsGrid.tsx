'use client';

import { Certification, DataModal, Reservation, User } from "@/interfaces";
import { CardReservationUI } from "../ui/card/CardReservationUI";
import { ModalAnswer } from "../ui/modal/ModalAnswer";
import { ModalOption } from "../ui/modal/ModalOption";
import { useState } from "react";
import { deleteReservation, putReservation } from "@/api";

interface Props {
    reservations: Reservation[];
    users: User[];
    certifications: Certification[];
    setLoadReservationData: Function;
    loadReservationData: boolean;
}



export const ReservationsGrid = ({
    reservations,
    loadReservationData,
    setLoadReservationData,
    users,
    certifications
}: Props) => {

    const [isModalOptionOpen, setModalOptionOpen] = useState(false);
    const [textOptionModal, setTextOptionModal] = useState('Está seguro de eliinar la reservación?');
    const [reservationIdSelected, setReservationIdSelected] = useState('');

    const toggleModalOption = (id: any) => {
        setReservationIdSelected(id);
        setModalOptionOpen(!isModalOptionOpen);
    };

    // modal Answer
    const [isRedirect, setIsRedirect] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);
    const [dataModal, setDataModal] = useState<DataModal>({
        title: 'Título del Modal',
        text: 'Este es el contenido del modal.'
    });

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };


    const actionDelete = async () => {
        try {
            const res = await deleteReservation(reservationIdSelected);
            // console.log(res)
            const msgModal: DataModal = {
                title: 'Eliminar reservación',
                text: res.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
            setLoadReservationData(!loadReservationData);

        } catch (error: any) {
            // console.log(error)
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Eliminar reservación',
                text: error.response.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
        }
    }


    const actionApproved = async (id: string) => {
        try {
            const res = await putReservation(id, { approved: true });
            // console.log(res)
            const msgModal: DataModal = {
                title: 'Aceptar reservación',
                text: 'Reservación aceptada'
            }
            setDataModal(msgModal)
            toggleModal();

            setLoadReservationData(!loadReservationData);

        } catch (error: any) {
            setIsError(true);
            const msgModal: DataModal = {
                title: 'Aceptar reservación',
                text: error.response.data.msg
            }
            setDataModal(msgModal)
            toggleModal();
        }
    }



    return (
        <>
            {/* Modal option*/}
            < ModalOption
                isOpen={isModalOptionOpen}
                onClose={toggleModalOption}
                text={textOptionModal}
                action={actionDelete}
            />

            {/* Modal */}
            <ModalAnswer
                isOpen={isModalOpen}
                onClose={toggleModal}
                isError={isError}
                dataModal={dataModal}
                redirect={setIsRedirect}
            />


            <div className="cards">
                {reservations.length === 0 ? (
                    <p className="text-center p-4 text-white">
                        No hay reservaciones disponibles
                    </p>
                ) : (
                    reservations.map(({ uid, approved, certificationId, userId }) => {
                        const certificationName = certifications.find((certification) => certification.uid === certificationId)?.name;
                        const userEmail = users.find((user) => user.uid === userId)?.email;
                        return (
                            <CardReservationUI
                                key={uid}
                                aproved={approved}
                                certificationName={certificationName || ''}
                                userEmail={userEmail || ''}
                                certificationUid={certificationId}
                                actionApproved={() => actionApproved(uid)}
                                actionDelete={() => toggleModalOption(uid || '')}
                            />
                        )
                    })
                )}
            </div>
        </>
    )
}
