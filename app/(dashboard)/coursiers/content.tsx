"use client"

import { CardHeader } from "@/components/commons/card-header";
import { SearchField } from "@/components/commons/form/search-field";
import { PageWrapper } from "@/components/commons/page-wrapper";
import { Tab, Tabs } from "@nextui-org/react";
import { useCoursiersController } from "./controller";
import { TousTurboys } from "./partials/tous-turboys/tous-turboys";
import { TurboysAssignes } from "./partials/turboys-assigne/turboys-assigne";
import { TurboysBird } from "./partials/turboys-bird/turboys-bird";
import { DemandeAssignation } from "./partials/demande-assignations/demande-assigntation";

export function CouriserContent() {
    const ctrl = useCoursiersController();

    return (
        <PageWrapper>
            <CardHeader title="Coursiers" />
            <SearchField searchKey={ctrl.searchKey} onChange={ctrl.onChange} />
            <Tabs items={ctrl.items || []} className="w-full m-2 flex justify-between">
                {(item) => (
                    <Tab key={item.restaurantId} title={<span className="ml-10 mr-10">{item.restaurant} {item.decompte ? item.decompte : ""}</span>} className="p-0">
                        {
                            item.isAllUsers ?
                                <TousTurboys searchKey={ctrl.searchKey} />
                                :
                                item.isTurboysAssigned ?
                                    <TurboysAssignes searchKey={ctrl.searchKey} />
                                    :
                                    item.isTurboysBird ?
                                        <TurboysBird searchKey={ctrl.searchKey} />
                                        :
                                        item.isDemandeAssignations ?
                                            <DemandeAssignation searchKey={ctrl.searchKey} />
                                            :
                                            <></>
                        }
                    </Tab>
                )}
            </Tabs>
        </PageWrapper>
    )
}