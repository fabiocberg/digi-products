import { Container, Stack } from "@chakra-ui/react";
import Header from "./Header";
import { Product } from "../models/product";

type LayoutProps = {
    children: React.ReactNode;
    cartItems: Product[];
};

export default function Layout({ children, cartItems }: LayoutProps) {
    return (
        <Stack w="100vw" mb={8}>
            <Header cartItems={cartItems.length} />
            <Container maxW="container.lg">{children}</Container>
        </Stack>
    );
}
