import { useEffect } from "react";

const Sample = () => {
    useEffect(() => {
        console.log("Sample component mounted");
        return () => {
            console.log("Sample component unmounted");
        }
    }, []);

    return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#ffffff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
        Sample Component
      </h1>
    </main>
    )
}

export default Sample;