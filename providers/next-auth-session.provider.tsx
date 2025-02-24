'use client';

import { SessionProvider } from 'next-auth/react';
import { I18nProvider } from '@react-aria/i18n';

const NextAuthSessionProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <SessionProvider>
            <I18nProvider locale={"fr-FR"}>{children}</I18nProvider>
        </SessionProvider>
    );
};

export default NextAuthSessionProvider;
