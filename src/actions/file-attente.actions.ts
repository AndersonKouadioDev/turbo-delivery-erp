import { apiClientBackend } from "@/lib/api-client-backend";
import { FilleAttenteHistoriqueVM } from "@/types/file-attente.model";


const BASE_URL = '/api/erp/file-attente/historique';

const fileAttenteEndpoints = {
    fetchFilleAttente: { endpoint: BASE_URL, method: 'GET' },
};

export async function fetchFilleAttente(): Promise<FilleAttenteHistoriqueVM[]> {
    return (await apiClientBackend.request({
        endpoint: fileAttenteEndpoints.fetchFilleAttente.endpoint,
        method: fileAttenteEndpoints.fetchFilleAttente.method,
    })).data;
}