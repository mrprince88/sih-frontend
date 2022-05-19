import { Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import DataTable from "../components/DataTable";

const styles = makeStyles((theme) => ({}));

export default function Home({ postData, navigate }) {
  const classes = styles();

  return (
    <div style={{ background: "#f0f2f5" }}>
      <Header navigate={navigate} />
      <DataTable postData={postData} />
    </div>
  );
}
