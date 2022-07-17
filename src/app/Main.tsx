import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryParamProvider } from "use-query-params";
import Configure from "./Configure";
import HeatMap from "./HeatMap";

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Main() {
  return (
    <QueryParamProvider>
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Configure />
          <HeatMap />
          {/* <DataTable /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </QueryParamProvider>
  );
}
