import {
    Box,
    Container,
    HStack,
    Heading,
    Icon,
    Stack,
    Text,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
    cartItems: number;
};

export default function Header({ cartItems }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <Stack bg="blue.500">
            <Container maxW="container.lg">
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                >
                    <Heading
                        fontSize="xx-large"
                        mt={0}
                        color="white"
                        cursor={"pointer"}
                        onClick={() => navigate("/")}
                    >
                        Produtos
                    </Heading>
                    <Box
                        position="relative"
                        cursor={"pointer"}
                        onClick={() => navigate("/carrinho")}
                    >
                        <Icon as={TiShoppingCart} boxSize={5} fill="white" />
                        {cartItems && cartItems > 0 ? (
                            <Text
                                position="absolute"
                                bg="red"
                                color="white"
                                fontSize="small"
                                w={6}
                                h={6}
                                borderRadius="full"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                top={2}
                                right={3}
                            >
                                {cartItems}
                            </Text>
                        ) : null}
                    </Box>
                </HStack>
            </Container>
        </Stack>
    );
}
