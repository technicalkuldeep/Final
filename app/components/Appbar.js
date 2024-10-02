"use client";

import {useSession } from "next-auth/react";

export function Appbar() {
    const { data: session } = useSession(); // Correctly retrieve session data

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', padding: '10px', color: '#fff' }}>
            <div><h2>
                    Project X
                </h2>
                </div>
            <div>
                
            </div>
        </div>
    );
}
