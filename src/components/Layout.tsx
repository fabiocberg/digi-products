import { Container, Stack } from "@chakra-ui/react";
import Header from "./Header";
import { useEffect, useState } from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    const [initted, setInitted] = useState(false);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        if (!initted) {
            setInitted(true);
            const ci = localStorage.getItem("cart-items");
            if (ci && !isNaN(Number(ci))) {
                setCartItems(Number(ci));
            }
        }
    }, [initted]);

    return (
        <Stack w="100vw">
            <Header cartItems={cartItems} />
            <Container maxW="container.lg">{children}</Container>
        </Stack>
    );
}
