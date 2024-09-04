import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimationProps {
    children: ReactNode,
    initial?: object,
    animate?: object,
    transition?: object,
    className?: string
}

const Animation = ({ children, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 0.5 }, className }: AnimationProps) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={initial}
                transition={transition}
                animate={animate}
                className={`p-4 ${className}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animation