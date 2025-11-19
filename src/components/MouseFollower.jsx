import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Smooth spring animation for the cursor
    const springConfig = { stiffness: 500, damping: 28 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    // Slightly delayed spring for the spotlight/trailer
    const trailerConfig = { stiffness: 150, damping: 15 };
    const trailerX = useSpring(0, trailerConfig);
    const trailerY = useSpring(0, trailerConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });
            cursorX.set(clientX);
            cursorY.set(clientY);
            trailerX.set(clientX);
            trailerY.set(clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, trailerX, trailerY]);

    return (
        <>
            {/* Spotlight Effect */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"
                style={{
                    x: trailerX,
                    y: trailerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
