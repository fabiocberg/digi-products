import {
    Divider,
    HStack,
    Stack,
    Image,
    Text,
    Icon,
    Button,
} from "@chakra-ui/react";
import { Product } from "../models/product";
import Layout from "../components/Layout";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type CartPageProps = {
    cartItems: Product[];
    removeItem: (item: Product) => void;
};

export default function CartPage({ cartItems, removeItem }: CartPageProps) {
    const navigate = useNavigate();

    const getTotal = () => {
        let total = 0;
        for (const item of cartItems) {
            total += Number(item.price);
        }
        return total;
    };
    return (
        <Layout cartItems={cartItems}>
            {cartItems.length === 0 ? (
                <Stack mt={8}>
                    <Text fontWeight={700} textAlign={"center"}>
                        Seu carrinho esta vazio
                    </Text>
                    <Button
                        colorScheme="blue"
                        maxW="fit-content"
                        alignSelf={"center"}
                        onClick={() => navigate("/")}
                        mt={6}
                    >
                        Ir para página inicial
                    </Button>
                </Stack>
            ) : (
                <Stack mt={4}>
                    {cartItems.map((product: Product, i) => (
                        <Stack key={`product-cart-${i}`} mb={4}>
                            <HStack justifyContent={"space-between"}>
                                <Stack>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        borderRadius="lg"
                                        width="100px"
                                        height="100px"
                                        objectFit={"contain"}
                                    />
                                    <Text>{product.name}</Text>
                                </Stack>
                                <HStack gap={6}>
                                    <Text>
                                        R${" "}
                                        {Number(product.price).toLocaleString(
                                            "pt-BR",
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </Text>
                                    <Icon
                                        as={FaTrashAlt}
                                        boxSize={5}
                                        fill="black"
                                        cursor={"pointer"}
                                        onClick={() => removeItem(product)}
                                    />
                                </HStack>
                            </HStack>
                            <Divider />
                        </Stack>
                    ))}
                    <Text
                        fontWeight={700}
                        fontSize="1.2rem"
                        textAlign={"right"}
                    >
                        Total: R${" "}
                        {getTotal().toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </Text>
                </Stack>
            )}
        </Layout>
    );
}
