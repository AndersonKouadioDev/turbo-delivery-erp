'use client';

import { Collection } from '@/types/models';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@heroui/react";
import { useState } from 'react';
import { IconDotsVertical } from '@tabler/icons-react';
import TypePlatEdit from './type-plats-edit';

const TypePlatsTools = ({ typePlat }: { typePlat: Collection }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {' '}
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" isIconOnly>
                        <IconDotsVertical />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownSection showDivider title="Actions">
                        <DropdownItem key="edit" onClick={() => setOpen(true)}>
                            Modifier
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
            <TypePlatEdit typePlat={typePlat} open={open} setOpen={setOpen} />
        </>
    );
};

export default TypePlatsTools;
