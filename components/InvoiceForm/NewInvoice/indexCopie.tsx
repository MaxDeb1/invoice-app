import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import NewInvoiceMenuBtns from '../../Buttons/NewInvoiceMenuBtns';
import BillFrom from '../BillFrom';
import BillTo from '../BillTo';
import ItemList from '../ItemList';
import styles from '../invoiceForm.module.scss';
import InvoicesData from '../../../pages/index'


/* type Props = typeof InvoicesData & ShowModalProps; */

const NewInvoice = ({showModal, closeModal, data}) => {
    const [disable, setDisable] = useState(false);
    const formRef = useRef();

    const [closing, setClosing] = useState(false)

    useEffect(() => {
        const modal = document.getElementById('modal');

        modal!.addEventListener("animationend", () => {
            setClosing(false)
            scrollTo({top: 0});
        });
    }, [])

    const addNewInvoice = async (params) => {
        setDisable(true);
        const {
            addClientAddress_city,
            addClientAddress_country,
            addClientAddress_postCode,
            addClientAddress_street,
            addClientEmail,
            addClientName,
            addCreatedAt,
            addDescription,
            addPaymentDue,
            addPaymentTerms,
            addSenderAddress_city,
            addSenderAddress_country,
            addSenderAddress_postCode,
            addSenderAddress_street,
            addStatus,
            addTotal,
        } = formRef.current;
        const clientCity = addClientAddress_city.value;
        const clientCountry = addClientAddress_country.value;
        const clientPostCode = addClientAddress_postCode.value;
        const clientStreet = addClientAddress_street.value;
        const clientEmail = addClientEmail.value;
        const clientName = addClientName.value;
        const createAt = addCreatedAt.value;
        const description = addDescription.value;
        const paymentDue = addPaymentDue.value;
        const paymentTerms = addPaymentTerms.value;
        const senderCity = addSenderAddress_city.value;
        const senderCountry = addSenderAddress_country.value;
        const senderPostCode = addSenderAddress_postCode.value;
        const senderStreet = addSenderAddress_street.value;
        const status = addStatus.value;
        const total = addTotal.value;
        await fetch("/api/addInvoice", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                clientCity,
                clientCountry,
                clientPostCode,
                clientStreet,
                clientEmail,
                clientName,
                createAt,
                description,
                paymentDue,
                paymentTerms,
                senderCity,
                senderCountry,
                senderPostCode,
                senderStreet,
                status,
                total,
            }
        });
        setDisable(false);
        window.location.reload();
    }

/*           await fetch('/api/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
          await Router.push('/drafts');
        } catch (error) {
          console.error(error);
        } */

    return (
        <dialog className={styles.modal} id="modal" closing={closing ? 'closing' : false} open={ showModal ? true : false}>
            <form
             ref={formRef}
             id="new-invoice-form"
             className={styles.newInvoiceForm}
             /* action="/send-data-here"  */
             onSubmit={addNewInvoice}
             method="dialog"
            >
                <h1>New Invoice</h1>
                <BillFrom data={data}/>
                <BillTo />
                <ItemList />
                <NewInvoiceMenuBtns
                    setShowModal={closeModal}
                    setClosing={setClosing }
                    disable={disable}
                    /* onClick={() => addNewInvoice()} */
                />
            </form>
        </dialog>
    );
};

export default NewInvoice;