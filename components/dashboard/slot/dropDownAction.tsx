'use client'

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button,
    cn,
  } from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
  


  export default function App({id,url}:{id:string,url:string}) {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  
    return (
      <Dropdown>
        <DropdownTrigger>
            <span className="cursor-pointer">••• </span>
            
          {/* <Button >...</Button> */}
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
          <DropdownSection showDivider title="Actions">
            <DropdownItem
              key="profile"
              href={`/${url}/${id}`}
              description="Create a new file"
              startContent={<IconUser className={iconClasses} />}
            >
             Voir profile
            </DropdownItem>
            <DropdownItem
              key="carte"
              href={`/turboys-assignes/${id}`}
              description="position sur la carte du livreur"
              startContent={<IconUser className={iconClasses} />}
            >
              Voir la position sur la carte
            </DropdownItem>
            <DropdownItem
              key="performance"
              href={`/turboys-assignes/${id}`}
              description="Allows you to edit the file"
              startContent={<IconUser className={iconClasses} />}
            >
             Afficher ses performances
            </DropdownItem>
          </DropdownSection>
          <DropdownSection >
          <DropdownItem
              key="edit"
              href={`/turboys-assignes/${id}`}
              description="Allows you to edit the file"
              startContent={<IconUser className={iconClasses} />}
            >
             Modifier ses identifications
            </DropdownItem>
          <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              description="Permanently delete the file"
              startContent={<IconUser className={cn(iconClasses, "text-danger")} />}
            >
              Delete file
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    );
  }
  