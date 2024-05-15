import {
    CardBody,
    HStack,
    Stack,
    Text,
    Image,
    Card,
    Heading,
    Divider,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

import products from "../data/products.json";
import { Product } from "../models/product";

type HomePageProps = {
    cartItems: Product[];
    addItem: (item: Product) => void;
    removeItem: (item: Product) => void;
};

export default function HomePage({
    cartItems,
    addItem,
    removeItem,
}: HomePageProps) {
    const isProductOnCart = (product: Product) => {
        return cartItems.some((i) => i.name === product.name);
    };

    return (
        <Layout cartItems={cartItems}>
            <Stack mt={4}>
                <HStack wrap={"wrap"} gap={6}>
                    {products.map((product: Product, i) => (
                        <Card
                            minW={"300px"}
                            maxW={"300px"}
                            key={`product-card-${i}`}
                            flex={1}
                            flexGrow={1}
                            borderWidth={1}
                            borderStyle={"solid"}
                            borderColor={"gray.200"}
                        >
                            <CardBody>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    borderRadius="lg"
                                />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">{product.name}</Heading>
                                    {product.hero && (
                                        <Text
                                            fontWeight={700}
                                            color={"green.500"}
                                        >
                                            {product.hero}
                                        </Text>
                                    )}
                                    <Text>{product.detail}</Text>
                                    {product.info && (
                                        <Text fontWeight={700}>
                                            {product.info}
                                        </Text>
                                    )}
                                    <Text color="blue.600" fontSize="2xl">
                                        R${" "}
                                        {Number(product.price).toLocaleString(
                                            "pt-BR",
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Stack spacing="2" w={"100%"}>
                                    {isProductOnCart(product) && (
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                            onClick={() => removeItem(product)}
                                        >
                                            Remover
                                        </Button>
                                    )}
                                    <Button
                                        variant="ghost"
                                        colorScheme="blue"
                                        onClick={() => addItem(product)}
                                    >
                                        Adicionar ao carrinho
                                    </Button>
                                </Stack>
                            </CardFooter>
                        </Card>
                    ))}
                </HStack>
            </Stack>
        </Layout>
    );
}
