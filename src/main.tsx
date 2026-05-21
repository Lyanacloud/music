import { BrowserRouter } from "react-router";
import App from "./App";
import {createRoot} from "react-dom/client";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

const root = document.getElementById("root")!;

createRoot(root).render(
    <BrowserRouter>
        <MantineProvider defaultColorScheme="auto">
            <App />
        </MantineProvider>
    </BrowserRouter>
);