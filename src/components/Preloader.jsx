    import { useState, useEffect } from "react";

    const Preloader = () => {
        const [loading, setLoading] = useState(true);
        const [fadeOut, setFadeOut] = useState(false);

        useEffect(() => {
            const totalDuration = 3000;
            const fadeOutTimer = setTimeout(() => {
                setFadeOut(true);
            }, totalDuration - 500);
            const hideTimer = setTimeout(() => {
                setLoading(false);
            }, totalDuration);
            return () => {
                clearTimeout(fadeOutTimer);
                clearTimeout(hideTimer);
            };
        }, []);
        return (
            loading && (
                <div 
                    className={`fixed inset-0 w-screen h-screen flex items-center justify-center 
                                bg-zinc-950 z-[9999] transition-opacity duration-500 ease-out 
                                ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
                >
                    <div className="flex flex-col items-center">
                    
                        <h1 
                            className="text-7xl font-extrabold text-white animate-pulse" 
                            style={{ animationDuration: '1.5s' }}
                        >
                            <span className="text-violet-500">Dic</span>ha.
                        </h1>
                        <div className="mt-6">
                            <svg className="animate-spin h-5 w-5 text-violet-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                        <p className="text-zinc-500 text-sm mt-4">Memuat Profil...</p>
                    </div>
                </div>
            )
        );
    };

    export default Preloader;