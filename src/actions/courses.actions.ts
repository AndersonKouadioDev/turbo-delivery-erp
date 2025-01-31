'use server';

import { apiClientBackend } from '@/lib/api-client-backend';
import { ActionResult } from '@/types';
import { CourseExterne, PaginatedResponse } from '@/types/models';
import { processFormData } from '@/utils/formdata-zod.utilities';
import { courseExterneSchema } from '../schemas/courses.schema';

// Configuration
const BASE_URL = '/api/erp/course-externe';

const courseEndpoints = {
    updateCourseExterne: { endpoint: BASE_URL, method: 'PUT' },
    terminerCourseExterne: {
        endpoint: `${BASE_URL}/terminer`,
        method: 'PUT',
    }, //renommer
    annulerCourseExterne: { endpoint: `${BASE_URL}/annuler`, method: 'PUT' }, //retirer
    getPaginationCourseExterneEnAttente: {
        endpoint: `${BASE_URL}/en-attente/pagination`,
        method: 'GET',
    },
    getPaginationCourseExterneAutreStatus: {
        endpoint: `${BASE_URL}/autre-statut/pagination`,
        method: 'GET',
    },
    getCourseExterne: {
        endpoint: (idCourse: string) => `${BASE_URL}/${idCourse}`,
        method: 'GET',
    },
};

export async function assignCourseExterne(courseId: string, livreurId: string, frais: number): Promise<ActionResult<any>> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.updateCourseExterne.endpoint,
            method: courseEndpoints.updateCourseExterne.method,
            data: {
                courseId,
                livreurId,
                frais,
            },
        });

        if (!response.status.toString().startsWith("20")) {
            return {
                status: 'error',
                message: "Erreur lors de l'assignation de la course",
            };
        }
        return {
            status: 'success',
            message: 'Course assignée avec succès',
        };
    } catch (error) {
        return {
            status: 'error',
            message: "Erreur lors de l'assignation de la course",
        };
    }
}

export async function getPaginationCourseExterneEnAttente(page: number = 0, size: number = 10): Promise<PaginatedResponse<CourseExterne> | null> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.getPaginationCourseExterneEnAttente.endpoint,
            method: courseEndpoints.getPaginationCourseExterneEnAttente.method,
            params: {
                page: page.toString(),
                size: size.toString(),
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginate course externe:', error);
        return null;
    }
}
export async function getPaginationCourseExterneAutreStatus(page: number = 0, size: number = 10): Promise<PaginatedResponse<CourseExterne> | null> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.getPaginationCourseExterneAutreStatus.endpoint,
            method: courseEndpoints.getPaginationCourseExterneAutreStatus.method,
            params: {
                page: page.toString(),
                size: size.toString(),
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginate course externe:', error);
        return null;
    }
}
export async function getCourseExterne(idCourse: string): Promise<CourseExterne | null> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.getCourseExterne.endpoint(idCourse),
            method: courseEndpoints.getCourseExterne.method,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching course externe:', error);
        return null;
    }
}

export async function terminerCourseExterne(courseId: string): Promise<ActionResult<CourseExterne>> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.terminerCourseExterne.endpoint,
            method: courseEndpoints.terminerCourseExterne.method,
            data: {
                courseId,
            },
        });
        console.log({ response: response });
        return {
            status: 'success',
            message: 'Course Terminée',
            data: response.data,
        };
    } catch (error: any) {
        console.log({ error });
        return {
            status: 'error',
            message: 'Erreur lors du traitement',
        };
    }
}

export async function cancelCourseExterne(courseId: string, restaurantId: string): Promise<ActionResult<CourseExterne>> {
    try {
        const response = await apiClientBackend.request({
            endpoint: courseEndpoints.annulerCourseExterne.endpoint,
            method: courseEndpoints.annulerCourseExterne.method,
            data: {
                restaurantId,
                courseId,
            },
        });
        console.log(response);
        return {
            status: 'success',
            message: 'Course Annulée',
            data: response.data,
        };
    } catch (error) {
        return {
            status: 'error',
            message: 'Erreur lors du traitement',
        };
    }
}
