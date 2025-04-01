'use client'

import { useState } from "react";
import { PaginatedResponse } from "@/types";
import { Livreur } from "@/types/creneau-bird";
import { Restaurant } from "@/types/creneau-turbo";
import { LivreurPerformance } from "@/types/creneau-performance";

interface props{
    initialData: PaginatedResponse<LivreurPerformance> | null;
}

export default function useContentCtx({initialData}:props){

        const [data, setData] = useState(initialData);
            

    return {
        data
    }
}