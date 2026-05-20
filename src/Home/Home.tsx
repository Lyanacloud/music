import {Flex, Paper, Title, Scroller, Group, Card, Button, Image} from "@mantine/core";
import {Link} from "react-router";
import {useArtistStore} from "../store.ts";
import styles from "./Home.module.css";
import {motion} from "motion/react"

export function Home() {
    const artists = useArtistStore((state)=>state.artists);
    return (
        <motion.div
            initial = {{opacity: 0, y: 10, transition: { duration: 0.3 }}}
            animate={{opacity: 1, y: 0, transition: { duration: 0.3 }}}
            exit={{opacity: 0, y: -10, transition: { duration: 0.3 }}}
        >
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
            >
                <Paper shadow="sm" p="xl" className={styles.mainPaper}>
                    <Title order={1} className={styles.title}>Музыканты</Title>
                    <Link to="/analyticPage">
                        <Button variant="light" color="violet" size="lg" radius="lg">
                            Общие показатели
                        </Button>
                    </Link>
                </Paper>
                <Scroller w="90%">
                    <Group gap="xl" wrap="nowrap">
                        {
                            artists.map((artist, index) => {
                                return (
                                    <Link to={`/${artist.id}`} key={index} style={{ textDecoration: "none" }}>
                                        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                            <Card shadow="sm" className={styles.card}>
                                                <Image
                                                    radius="md"
                                                    src={artist.image}
                                                    h="25em"
                                                    w="20em"
                                                />
                                                <Title order={3} className={styles.cardTitle}>{artist.name}</Title>
                                            </Card>
                                        </motion.div>
                                    </Link>

                                )
                            })
                        }
                    </Group>
                </Scroller>
            </Flex>
        </motion.div>
    )
}

export default Home;