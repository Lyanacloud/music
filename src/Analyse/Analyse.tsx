import {Button, Flex, Grid, Paper, Title} from "@mantine/core";
import {Link} from "react-router";
import {useMemo} from "react";
import type {EChartsOption} from "echarts";
import ReactECharts from 'echarts-for-react';
import {useArtistStore} from "../store.ts";
import styles from "./Analyse.module.css";
import {motion} from "motion/react";

function Analysis() {
    const artists = useArtistStore((state)=>state.artists);
    const monthData = useMemo(()=>{
        if(!artists) return {names: [], values: [], songs: []}
        return {
            names: artists.map((artist)=>artist.name),
            values: artists.map((artist)=>artist.info.monthly_listeners_current),
            songs: artists.map((artist)=>artist.info.tracks_count_estimate),
            pieData: artists.map((artist) => ({
                value: artist.info.tracks_count_estimate,
                name: artist.name
            }))
        }
    },[artists]);
    const monthGraph = useMemo<EChartsOption>(
        () => ({
            title: {
                text: 'Количество прослушиваний',
                subtext: 'за этот месяц',
                left: 'center',
                textStyle:{
                    color: "#0a259c"
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} раз'
            },
            grid: {
                bottom: '5%',
                containLabel: true,
            },
            xAxis: { data: monthData.names },
            yAxis: {type: 'value'},
            series: [{
                type: 'bar',
                data: monthData.values,
                barWidth: '70%',
            }],
        }),
        [monthData]
    )
    const songGraph = useMemo<EChartsOption>(
        () => ({
            title: {
                text: 'Количество песен испонителей',
                left: 'center',
                textStyle:{
                    color: "#0a259c"
                },
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                data: monthData.pieData
            }],
        }),
        [monthData]
    )
    return (
        <motion.div
            initial = {{opacity: 0, y: 10, transition: { duration: 0.3 }}}
            animate={{opacity: 1, y: 0, transition: { duration: 0.3 }}}
            exit={{opacity: 0, y: -10, transition: { duration: 0.3 }}}
        >
            <Flex
                mih={60}
                gap="xl"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
            >
                <Paper shadow="sm" p="xl" className={styles.mainPaper}>
                    <Title order={1} className={styles.title}>Общие показатели</Title>
                    <Link to="/">
                        <Button variant="light" color="indigo" size="lg" radius="lg">
                            Главная страница
                        </Button>
                    </Link>
                </Paper>
                <Grid className={styles.grid}>
                    <Grid.Col span={12}>
                        <Paper className={styles.graph} shadow="sm" p="xl">
                            <ReactECharts option={monthGraph} className={styles.bar} />
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Paper className={styles.graph} shadow="sm" p="xl">
                            <ReactECharts option={songGraph} className={styles.pie} />
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Flex>
        </motion.div>
    )
}

export default Analysis
