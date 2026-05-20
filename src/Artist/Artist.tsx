import {Flex, Image, Grid, Group, Text, Card, Badge, Divider, Title, Paper, CloseButton} from '@mantine/core';
import {useArtistStore} from "../store.ts";
import {Link, useParams} from "react-router";
import {useMemo} from "react";
import type {EChartsOption} from "echarts";
import ReactECharts from 'echarts-for-react';
import styles from "./Artist.module.css"
import {motion} from "motion/react"

function Artist() {
    const params = useParams();
    const findArtist = useArtistStore((state)=>state.findArtist);
    const artist = findArtist(Number(params.id));
    const graphData = useMemo(()=> {
        if (!artist || !artist.graph_data) {
            return {values: [], months: [], events: []};
        }
        return {
            values: artist.graph_data.data_points.map((item)=>item.value),
            months: artist.graph_data.data_points.map((item)=>item.month),
            events: artist.graph_data.data_points.map((item)=>item.event)
        }
    }, [artist]);
    const option = useMemo<EChartsOption>(
        () => ({
            title: {
                text: 'Количество прослушиваний',
                subtext: 'за последние полгода',
                left: 'center',
                textStyle:{
                    color: "#52238d"
                },
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}: {c} раз'
            },
            xAxis: { data: graphData.months },
            yAxis: {type: 'value'},
            series: [{
                type: 'line',
                data: graphData.values,
                smooth: true,
                areaStyle: {
                    color: "#d8b1ea"
                },
                lineStyle: {
                    color: "#52238d"
                },
                itemStyle: {
                    color: "#5223dd"
                },
            }],
        }),
        [graphData]
    )
    return (
        <motion.div
            initial = {{opacity: 0, y: 10, transition: { duration: 0.3 }}}
            animate={{opacity: 1, y: 0, transition: { duration: 0.3 }}}
            exit={{opacity: 0, y: -10, transition: { duration: 0.3 }}}
        >
            <Flex
                mih={50}
                gap="lg"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap">
                <Link to="/" className={styles.closeButton}>
                    <CloseButton size="xl" variant="transparent" />
                </Link>
                <Image
                    radius="md"
                    src={artist.image}
                    className={styles.image}
                />
                <Title order={1} className={styles.title}>{artist.name}</Title>
                <Divider my="xs" />
                <Text size="lg" w="80%" style={{textAlign: "center"}}>{artist.info.brief_info}</Text>
                <Divider my="md" />
                <Grid
                    align="center"
                    justify="space-around"
                >
                    <Grid.Col  span={4}><Text size="xl">Количество альбомов</Text></Grid.Col>
                    <Grid.Col  span={2}><Text size="xl" c="violet">{artist.info.albums_count_estimate}</Text></Grid.Col>
                    <Grid.Col  span={4}><Text size="xl">Количество треков</Text></Grid.Col>
                    <Grid.Col  span={2}><Text size="xl" c="violet">{artist.info.tracks_count_estimate}</Text></Grid.Col>
                </Grid>
                <Divider my="md" />
                <Group gap="xl">
                    {
                        artist.genres.map((genre, index)=>{
                            return (<Badge variant="outline" color="grape" size="xl" key={index}>{genre}</Badge>)
                        })
                }
                </Group>
                <Divider my="xl" />
                <Title order={2} c="#52238d">Самые известные песни</Title>
                <Grid>
                    {
                        artist.info.top_tracks.map((track, index)=>{
                            return (
                                <Grid.Col span={6} key={index}>
                                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                        <Paper shadow="sm" p="xl" h="20svh" component={Group}>
                                            <Text size="lg">{track}</Text>
                                        </Paper>
                                    </motion.div>
                                </Grid.Col>
                            )
                        })
                    }

                </Grid>
                <Divider my="md" />
                <Card shadow="sm">
                    <ReactECharts option={option} className={styles.grid}/>
                </Card>
            </Flex>
        </motion.div>
    )
}

export default Artist
