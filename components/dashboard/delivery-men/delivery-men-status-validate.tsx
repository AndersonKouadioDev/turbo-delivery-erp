'use client';

import IconX from '@/components/icon/icon-x';
import { DeliveryMan, LivreurStatutVM } from '@/types/models';
import { Transition, Dialog, TransitionChild, DialogPanel } from '@headlessui/react';
import { Button } from '@heroui/react';
import React, { Fragment } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { validateDeliveryMan } from '@/src/actions/delivery-men.actions';

const DeliveryMenStatusValidate = ({
  deliveryMan,
  open,
  setOpen,
  validateBy = 'no-body',
}: {
  deliveryMan: LivreurStatutVM;
  open: boolean;
  setOpen: (open: boolean) => void;
  validateBy: 'auth' | 'ops' | 'no-body';
}) => {
  const { pending } = useFormStatus();
  const router = useRouter();
  const handleSubmit = async () => {
    const result = await validateDeliveryMan(deliveryMan.livreurId ?? '', validateBy);
    if (result.status === 'success') {
      toast.success(result.message || 'Bravo ! vous avez réussi');
      router.refresh();
    } else {
      toast.error(result.message || "Erreur lors de l'envoi de l'email");
    }
    setOpen(false);
    return result;
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" open={open} onClose={() => setOpen(false)} className="relative z-50">
        <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-[black]/60" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                <button type="button" onClick={() => setOpen(false)} className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 ltr:right-4 rtl:left-4 dark:hover:text-gray-600">
                  <IconX />
                </button>
                <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c] text-primary">
                  {validateBy == 'auth' ? 'Valider' : 'Activer'} le livreur
                </div>
                <div className="grid gap-4 p-5">
                  <p className="text-gray-500 dark:text-gray-400">{validateBy == 'auth' ? 'Voulez-vous valider le livreur ?' : 'Voulez-vous activer le livreur ?'}</p>
                  <div className="mt-8 flex items-center justify-end">
                    <button type="button" className="btn btn-outline-danger" onClick={() => setOpen(false)}>
                      Annuler
                    </button>
                    <Button aria-disabled={pending} className="btn btn-primary ltr:ml-4 rtl:mr-4" color="primary" disabled={pending} isLoading={pending} onClick={handleSubmit}>
                      {validateBy == 'auth' ? 'Valider' : 'Activer'}
                    </Button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeliveryMenStatusValidate;
