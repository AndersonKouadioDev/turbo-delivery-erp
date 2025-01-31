import { socket } from '@/socket';
import { LivreurDisponible } from '@/types/models';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useRealTime({ data, setData }: { data: LivreurDisponible[]; setData: Dispatch<SetStateAction<LivreurDisponible[]>> }) {
    const [isConnected, setIsConnected] = useState<boolean>(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value: any) {
            const newDeliver = JSON.parse(value) as LivreurDisponible;
            const isExist = data.find((d) => d.livreurId == newDeliver.livreurId);

            if (isExist) {
                const others = data.filter((d) => d.livreurId !== isExist.livreurId);
                setData([...others, newDeliver]);
            }
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        socket.on('/trafic/livreur/', onFooEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvent);
        };
    }, []);

    return {
        isConnected,
    };
}
